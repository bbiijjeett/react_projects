import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList'
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  }
};  

export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  // const searchTerm = '';
  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // console.log(response);
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
  return { searchTerm };
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  // console.log(drinks);
  // console.log("searchTerm=",searchTerm);
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      <CocktailList drinks={drinks}/>
      <footer>
        <h5 className='footer1'>Made with ❤️ from India</h5>
      </footer>
    </>
  )
}

export default Landing