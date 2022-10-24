import { listings } from 'data'
import React from 'react'
import ListingsCard from '../ListingsCard'

const Listings = () => {
  return (
    <div className='py-4 px-6 md:px-8 lg:px-12 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
            listings.map((item)=>(
                <ListingsCard data={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default Listings