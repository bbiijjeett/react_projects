import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError
} from './pages';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5,
    },
  }
});


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element: <Landing/>,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail/>,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter/>,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About/>,
        errorElement: <SinglePageError />,
      },
    ]
  },

]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />    
    </QueryClientProvider>
  );
};
export default App;
