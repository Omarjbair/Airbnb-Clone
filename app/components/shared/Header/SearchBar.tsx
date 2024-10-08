"use client"

import React, { useMemo, useState } from 'react'
import {SearchIcon, UsersIcon} from '@heroicons/react/solid'
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import Link from 'next/link';

const SearchBar = ({placeholder} : {placeholder?: string}) => {
    const [search,setSearch] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuests, setNumOfGuests] = useState(1);

    const selectionRange = useMemo(() => {
        return {
                startDate,
                endDate,
                key: 'selection',
            }
    },[startDate,endDate])
    
    const handleSelectDate = (ranges: RangeKeyDict) => {
        setStartDate(ranges.selection.startDate as Date);
        setEndDate(ranges.selection.endDate as Date);
    };

    const hrefHandler = {
        pathname: '/search',
        search: `?location=${search}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`
    }

    return (
        <div className='max-sm:place-self-center mt-5 max-md:w-full mb-5'>
            <div className='flex items-center border-2  rounded-full py-2 md:shadow-sm overflow-hidden'>
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder={placeholder || 'Start your search'} className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none' />
                <Link href={hrefHandler} onClick={() => setSearch('')}>
                    <SearchIcon className='hidden max-sm:block lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 mr-2 cursor-pointer md:mx-2' />
                </Link>
            </div>
            {search && 
                <div className='absolute top-[110%] w-[100vw] left-[50%] flex flex-col items-center bg-white col-span-3 mx-auto translate-x-[-50%]'>
                    <div className="max-sm:bg-white max-sm:w-[100vw]">
                        <div className='sm:hidden w-[100vw] z-5 h-[400px] absolute left-[0px] top-0 bg-white'></div>
                        <div className='max-sm:hidden'>
                            <DateRangePicker ranges={[selectionRange]} onChange={handleSelectDate} rangeColors={['#FD5B61']} minDate={new Date()}/>
                        </div>
                        <div className='sm:hidden absolute left-[-225px] bg-white z-10' >
                            <DateRangePicker staticRanges={[]} inputRanges={[]} ranges={[selectionRange]} onChange={handleSelectDate} rangeColors={['#FD5B61']} minDate={new Date()}/>
                        </div>
                        <div className='max-sm:fixed max-sm:w-[100vw] max-sm:bottom-[-470px] max-sm:left-0'>
                            <div className='flex items-center border-b bg-white p-4'>
                                <h2 className='text-2xl flex-grow font-semibold max-sm:text-lg'>Number of Guests</h2>
                                <UsersIcon className='h-5' />
                                <input type='number'className='w-12 pl-2 text-lg outline-none text-red-400' value={numOfGuests} min={1} onChange={(e) => setNumOfGuests(Number(e.target.value))}/>
                            </div>
                            <div className='flex items-center justify-around bg-white py-5'>
                                <button type='button' className=' text-gray-500 w-fit hover:bg-gray-200 rounded-lg px-4 py-2 duration-500' onClick={() => setSearch('')}> Cancel </button>
                                <Link onClick={() => setSearch('')} href={hrefHandler} className='text-red-400 hover:bg-gray-200 rounded-lg px-4 py-2 duration-500'>Search</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchBar
