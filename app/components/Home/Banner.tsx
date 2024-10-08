import Image from 'next/image';
import React from 'react'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]'>
            <Image className='object-cover object-left' src='https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80' alt='banner-img' fill/>
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
                <button type='button' className='text-red-500 bg-white px-10 max-sm:px-5 py-4 max-sm:py-2 shadow-md rounded-full font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-300'>I am flexible</button>
            </div>
        </div>
    );
};

export default Banner;
