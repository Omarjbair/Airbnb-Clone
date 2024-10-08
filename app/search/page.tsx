import React from 'react'
import Header from '../components/shared/Header/Header';
import Footer from '../components/Home/Footer';
import { format } from 'date-fns';
import { getSearchData } from '../utils/api';
import { ListingCardItem } from '../types/app';
import ListingCard from '../components/Search/ListingCard';
import Map from './Map';

type SearchParams = {
    location: string;
    startDate: string;
    endDate: string;
    numOfGuests: string;
};

const SearchResult = async ({searchParams: { location, startDate, endDate, numOfGuests } }: {searchParams: SearchParams}) => { 
    let formatedStartDate;
    let formatedEndDate;
    if (startDate && endDate) {
        formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
        formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    }
    const range = (startDate!==endDate?`${formatedStartDate} - ${formatedEndDate}`:`${formatedStartDate}`);
    const placeholder = `${location} | ${range} | ${numOfGuests} guests`;

    const filters = [
        'Cancellation Flexibility',
        'Type of Place',
        'Price',
        'Rooms and Beds',
        'More filters',
    ];

    const filtersList = filters.map((filter) => (<button type='button' className='filter-btn' key={filter}>{filter}</button>))
    
    const searchResultData: ListingCardItem[]= await getSearchData();
    return (
        <>
            <Header placeholder={placeholder}/>
            <main>
                <section>
                    <div className='container flex'>
                        <div className='pt-14 pr-4'>
                            <p className='text-xs'>300+ Stays - {range} - for {numOfGuests} guests</p>
                            <h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in {location}</h1>
                            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                                {filtersList}
                            </div>
                            <div>
                                {searchResultData.map((listing) => (
                                    <ListingCard
                                        key={listing.title}
                                        img={listing.img}
                                        title={listing.title}
                                        location={listing.location}
                                        description={listing.description}
                                        price={listing.price}
                                        total={listing.total}
                                        star={listing.star}/>
                                ))}
                            </div>
                        </div>
                        <div className='hidden 2xl:inline-flex xl:min-w-[600px]'>
                            <Map searchResultData={searchResultData} />
                        </div>
                    </div>
                    <div className='hidden 2xl:inline-flex xl:min-w-[600px]'>
                            <Map searchResultData={searchResultData} />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default SearchResult;
