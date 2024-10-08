import React from 'react'
import MainHeading from '../../shared/MainHeading';
import ExploreCard from './ExploreCard';
import { getExploreData } from '@/app/utils/api';
import { ExploreDataType } from '@/app/types/app';

const Explore = async () => {
    const exploreData: ExploreDataType[] = await getExploreData();
    
    const ExploreCards: JSX.Element[] = exploreData.map((item : ExploreDataType) => (<ExploreCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>))

    return (
        <section className='pt-12'>
            <div className='container'>
                <MainHeading title='Explore Nearby' />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {ExploreCards}
                </div>
            </div>
        </section>
    );
};

export default Explore;
