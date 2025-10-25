import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleBackClick}
      className='bg-sky-300 hover:bg-sky-600 px-4 py-2 rounded-lg text-white'
    >
      Back to Home
    </button>
  );
};

export default BackButton;
