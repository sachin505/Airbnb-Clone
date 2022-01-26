import Image from 'next/image';
import React from 'react';

function MediumCard({img,title}) {
  return (
      <div className='hover:scale-105 transform transition duration-300 ease-out cursor-pointer'>
        <div className='relative h-80 w-80'>
        <Image src={img} layout='fill' className='rounded-xl'/>
        </div>
        <h2 className='text-2xl mt-3'>{title}</h2>
      </div>
      );
}

export default MediumCard;
