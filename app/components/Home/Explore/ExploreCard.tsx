import { ExploreDataType } from '@/app/types/app';
import Image from 'next/image';
import React from 'react'

const ExploreCard = ({img,distance,location}: ExploreDataType) => {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 overflow-hidden rounded-lg hover:rounded-none transition transform duration-200 ease-out'>
            <div className='relative w-16 h-16'>
                <Image src={img} alt='ExploreCard-Img' fill />
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    );
};

export default ExploreCard;
