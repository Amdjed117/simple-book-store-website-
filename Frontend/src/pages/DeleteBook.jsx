import React, { useState , useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteBook = () =>{
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(() =>{
      setLoading(false);
      navigate('/');
      enqueueSnackbar('Book deleted successfully!', { variant: 'success' });

    })
    .catch ((err) => {
      setLoading(false);
      console.log(err);
      enqueueSnackbar('Failed to delete book. Please try again.', { variant: 'error' });
    });

  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-2xl font-bold mb-4 mt-2'>Delete Book</h1>
      {loading ? <Spinner /> : null} 
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>   
      <p className=' text-xl text-gray-500'>Are you sure you want to delete this book?</p>
    <div className='flex justify-center'>
    <button onClick={handleDeleteBook}
    className='bg-red-300 p-3 m-8 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 center '>
      yes delete this book
    </button> 
     </div>
  </div>
  </div>

  )
}

export default DeleteBook