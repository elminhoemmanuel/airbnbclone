import ImgCarousel from '@/components/common/ImgCarousel';
import React from 'react'
import { AiFillStar } from "react-icons/ai"

type ListingData = {
    id: number;
    title: string;
    rating: number;
    host: string;
    available: string;
    cost: number;
    liked: boolean;
    images: string[]
}

type props = {
    data: ListingData
}

const ListingsCard = ({ data }: props) => {
    return (
        <div className='cursor-pointer relative'>
            <div className='rounded-xl'>
                <ImgCarousel images={data.images} />
            </div>
            <div className='py-5'>
                <div className='flex items-center justify-between'>
                    <p className='text-black font-bold'>{data.title}</p>
                    <div className='flex items-center'>
                        <AiFillStar className='h-5 w-5 text-black' />
                        <p className='text-black font-bold'>{data.rating}</p>
                    </div>
                </div>
                <p>Hosted by {data.host}</p>
                <p className='mb-3'>{data.available}</p>
                <p><span className='text-gray-800 font-bold'>${data.cost}</span> night</p>
            </div>
        </div>
    )
}

export default ListingsCard