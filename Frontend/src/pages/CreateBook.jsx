import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author , setAuthor] = useState('');
  const [publishYear ,setPublishYear] = useState('');
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () =>{
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true);
    axios
    .post('http://localhost:5555/books', data)
    .then(() =>{
      setLoading(false);
      navigate('/');
      enqueueSnackbar('Book created successfully!', { variant: 'success' });
    })
    .catch ((err) => {
      setLoading(false);
      console.log(err);
      enqueueSnackbar('Failed to create book. Please try again.', { variant: 'error' });
    });

  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-2xl font-bold mb-4'>Create Book</h1>
      {loading ? <Spinner /> : null} 
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        
    <div className='flex justify-center'>
    <button onClick={handleSaveBook}
    className='bg-sky-300 p-3 m-8 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 center '>
      Save
    </button> 
     </div>
  </div>
  </div>

  )
}

export default CreateBook

