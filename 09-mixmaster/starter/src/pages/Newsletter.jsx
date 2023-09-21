import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Form,redirect,useNavigation } from 'react-router-dom';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    toast.error(error?.response?.data?.msg);
  }
  
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
      <Form className='form1' method='POST'>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem',color:'white' }}>
          our newsletter
        </h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label1'>
            name
          </label>
          <input
            type='text'
            className='form-input1'
            name='name'
            id='name'
            // defaultValue='john'
            required
          />
        </div>
        {/* last name */}
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label1'>
            last name
          </label>
          <input
            type='text'
            className='form-input1'
            name='lastName'
            id='lastName'
            // defaultValue='smith'
            required
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label1'>
            email
          </label>
          <input
            type='email'
            className='form-input1'
            name='email'
            id='email'
            // defaultValue='test@test.com'
            required
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'
          style={{ marginTop: '0.5rem' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
      </Form>
    </div>
  )
}

export default Newsletter