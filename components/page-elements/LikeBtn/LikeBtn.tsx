import { BsHeart, BsHeartFill } from "react-icons/bs"
import { ListingData } from "../ListingsCard/ListingsCard"

type props = {
    data: ListingData;
    onLike: (id:number)=>void;
}

const LikeBtn = ({ data, onLike }: props) => {
    return (
        <button onClick={() => onLike(data.id)} className='focus:outline-none absolute top-4 right-3 z-30'>
            {data.liked ? <BsHeartFill data-testid="liked-icon" className='h-6 w-6 text-abnbpink' /> : <BsHeart className='h-6 w-6 text-white' />}
        </button>
    )
}

export default LikeBtn