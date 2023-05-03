import React from 'react';
import pexels1 from '../../public/assets/pexels1.jpg';
import pexels2 from '../../public/assets/pexels2.jpg';
import pexels3 from '../../public/assets/pexels3.jpg';
import pexels4 from '../../public/assets/pexels4.jpg';
import pexels5 from '../../public/assets/pexels5.jpg';
import pexels6 from '../../public/assets/pexels6.jpg';
import pexels7 from '../../public/assets/pexels7.jpg';
import pexels8 from '../../public/assets/pexels8.jpg';
import InstagramImg from './InstagramImg';



const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>
        Follow on Instagram
      </p>
      <p className='pb-4'>
        @Captur
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4'>
        <InstagramImg socialImg={ pexels1 } />
        <InstagramImg socialImg={ pexels2 } />
        <InstagramImg socialImg={ pexels3 } />
        <InstagramImg socialImg={ pexels4 } />
        <InstagramImg socialImg={ pexels5 } />
        <InstagramImg socialImg={ pexels6 } />
        <InstagramImg socialImg={ pexels7 } />
        <InstagramImg socialImg={ pexels8 } />
      </div>
    </div>
  );
};

export default Instagram;