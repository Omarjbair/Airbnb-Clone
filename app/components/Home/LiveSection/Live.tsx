import React from 'react'
import MainHeading from '../../shared/MainHeading';
import { getLiveData } from '@/app/utils/api';
import { LiveDataType } from '@/app/types/app';
import LiveCard from './LiveCard';

const Live = async () => {
    const LiveData: LiveDataType[] = await getLiveData();

    const LiveCards: JSX.Element[] = LiveData.map((item: LiveDataType) => (<LiveCard key={item.img} img={item.img} title={item.title} />))

    return (
        <section className='pt-12'>
            <div className='container'>
                <MainHeading title='Live Anywhere'/>
                <div className='flex space-x-3 h-[400px] overflow-x-scroll overflow-y-hidden no-scrollbar'>
                    {LiveCards}
                    {LiveCards}
                </div>
            </div>
        </section>
    );
};

export default Live;
