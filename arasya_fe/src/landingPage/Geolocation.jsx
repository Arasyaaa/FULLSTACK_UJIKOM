import React from 'react';
import Navbar from './Navbar';

const GeoLocation = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-screen flex justify-center'>
            <div className='w-full h-full'>
            <iframe
                width="100%"
                height="600"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=villa%20pamulang%20cluster+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
                loading="lazy"
            ></iframe>
            </div>
        </div>
    </div>
  );
};

export default GeoLocation;