import { LiveDataType } from '@/app/types/app';
import Image from 'next/image';
import React from 'react'

const LiveCard = ({img, title}: LiveDataType) => {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80 overflow-hidden rounded-lg'>
                <Image src={img} alt='LiveCard-Img' fill />
            </div>
            <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    );
};

export default LiveCard;
