import ImgCarousel from '@/components/common/ImgCarousel';
import { AiFillStar } from "react-icons/ai"
import LikeBtn from '../LikeBtn';

export type ListingData = {
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
    data: ListingData,
    onLike: (id:number)=>void;
}

const ListingsCard = ({ data, onLike }: props) => {
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
                <p className='mb-2'>{data.available}</p>
                <p><span className='text-gray-800 font-bold'>${data.cost}</span> night</p>
            </div>
            <LikeBtn data={data} onLike={onLike} />
        </div>
    )
}

export default ListingsCard