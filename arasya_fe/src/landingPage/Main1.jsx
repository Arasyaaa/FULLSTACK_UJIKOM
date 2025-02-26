import React from 'react';
import logo from '../images/logongopi.png';

const Main1 = ({ setModalAdd, setModalLog }) => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen p-6'>
      {/* Left Section */}
      <div className='md:w-1/2 text-center md:text-left space-y-6'>
        <h1 className='text-amber-900 text-5xl md:text-6xl font-bold drop-shadow-lg'>Kintamani Coffee</h1>
        <h2 className='text-lg md:text-xl text-amber-900 font-medium leading-relaxed'>
          At Kintamani Coffee, our dream is to serve high-quality coffee, made with the freshest local ingredients to customers across Indonesia – and the rest of the world.
        </h2>
        <p className='text-amber-800 text-lg font-semibold'>📍 Lokasi: Jabodetabek dan sekitarnya</p>
        <div className='flex justify-center md:justify-start gap-4'>
          <button 
            className='bg-white px-8 py-2 border-2 border-amber-900 rounded-lg font-semibold text-amber-900 transition duration-300 hover:bg-amber-900 hover:text-white'
            onClick={() => setModalAdd(true)}>
            Daftar
          </button>
          <button 
            className='text-white px-8 py-2 border-2 border-amber-900 rounded-lg font-semibold bg-amber-900 transition duration-300 hover:bg-amber-800'
            onClick={() => setModalLog(true)}>
            Login
          </button>
        </div>
      </div>
      
      {/* Right Section */}
      <div className='md:w-1/2 flex justify-center md:justify-end'>
        <img src={logo} alt='Kintamani Coffee' className='w-72 md:w-96 drop-shadow-xl animate-fadeIn' />
      </div>
    </div>
  );
};

export default Main1;