import { useState } from 'react'
import { initialListings } from 'data'
import React from 'react'
import ListingsCard from '../ListingsCard'
import { ListingData } from '../ListingsCard/ListingsCard'

const Listings = () => {

    const [listings, setListings] = useState<ListingData[] | null>(initialListings);

    const onLike = (id: number) => {
        if (listings) {
            let usedListings = [...listings]
            if (usedListings)
                for (let i = 0; i < usedListings?.length; i++) {
                    const element = usedListings[i];
                    if(element.id === id){
                        element.liked = element.id === id;
                    }
                    usedListings.splice(i, 1, element)
                    setListings(usedListings);
                }
        }

    }

    return (
        <div className='py-4 px-6 md:px-8 lg:px-12 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                listings?.map((item) => (
                    <ListingsCard onLike={onLike} data={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Listings