'use client';
import { useState } from 'react';
import MapGL, { Marker, Popup, ViewStateChangeEvent } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ListingCardItem } from '../types/app';
import Image from 'next/image';
import mapMarker from '@/public/mapMarker.png'

const Map = ({ searchResultData }: { searchResultData: ListingCardItem[] }) => {
    const [selectedLocation, setSelectedLocation] = useState<ListingCardItem | null>(null);

    const coordinates = searchResultData.map((listing:ListingCardItem) => ({
        longitude: listing.long,
        latitude: listing.lat,
    }));

    const center = getCenter(coordinates) as {
        longitude: number;
        latitude: number;
    };
    
    const [viewPort,setViewPort] = useState({
        width: '100%',
        height: '100%',
        zoom: 11,
        longitude: center.longitude,
        latitude: center.latitude,
    });

    const MoveHandler = (nextViewport: ViewStateChangeEvent) => {
        setViewPort((prev) => {
            return {
                ...prev,
                longitude: nextViewport.viewState.longitude,
                latitude: nextViewport.viewState.latitude,
            };
        })
    };
    
    return(
        <MapGL {...viewPort} mapStyle='mapbox://styles/mapbox/outdoors-v12' mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN } onMove={MoveHandler}>
            {searchResultData.map((listing) => (
                <div key={listing.long}>
                    <Marker longitude={listing.long} latitude={listing.lat}>
                        <div onClick={() => setSelectedLocation(listing)} className='animate-bounce'>
                            <Image src={mapMarker} alt='map-marker' width={24} height={24}/>
                        </div>
                    </Marker>
                    {selectedLocation?.long === listing.long ? (
                        <Popup className='p-5' closeOnClick={false} onClose={() => setSelectedLocation(null)} longitude={listing.long} latitude={listing.lat}>{listing.title}</Popup>
                        ) : null}
                </div>
            ))}
        </MapGL>
    );
};

export default Map;