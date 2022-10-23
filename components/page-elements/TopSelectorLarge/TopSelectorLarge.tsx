import { HiMagnifyingGlassCircle } from 'react-icons/hi2'

const TopSelectorLarge = () => {
    return (
        <button className='border border-gray-200 rounded-full shadow-sm hover:shadow-md 
            flex items-center outline-none focus:outline-none p-2'
        >
            <div className='flex items-center'>
                <div className='py-1 px-3 border-r border-gray-200 font-bold text-gray-800'>Anywhere</div>
                <div className='py-1 px-3 border-r border-gray-200 font-bold text-gray-800'>Any week</div>
                <div className='py-1 px-3'>Add guests</div>
                <HiMagnifyingGlassCircle className='block h-8 w-8 text-abnbpink' />
            </div>
        </button>
    )
}

export default TopSelectorLarge