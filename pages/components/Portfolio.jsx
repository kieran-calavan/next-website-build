import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none sm:grid-cols-2 md:grid-cols-5 p-4 gap-8'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image src='https://images.pexels.com/photos/237301/pexels-photo-237301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' responsive width='677' height='451' />
        </div>
        <div className='w-full h-full'>
          <Image src='https://images.pexels.com/photos/3264706/pexels-photo-3264706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' responsive width='215' height='217' style={ { objectFit: "cover" } } />
        </div>
        <div className='w-full h-full'>
          <Image src='https://images.pexels.com/photos/2437293/pexels-photo-2437293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' responsive width='215' height='217' style={ { objectFit: "cover" } } />
        </div>
        <div className='w-full h-full'>
          <Image src='https://images.pexels.com/photos/2858699/pexels-photo-2858699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' responsive width='215' height='217' style={ { objectFit: "cover" } } />
        </div>
        <div className='w-full h-full'>
          <Image src='https://images.pexels.com/photos/2468816/pexels-photo-2468816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/' responsive width='215' height='217' style={ { objectFit: "cover" } } />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;