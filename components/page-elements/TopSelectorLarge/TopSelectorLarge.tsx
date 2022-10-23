import { HiMagnifyingGlassCircle } from 'react-icons/hi2'

const TopSelectorLarge = () => {
    return (
        <button className='border border-gray-200 rounded-full shadow-sm hover:shadow-md 
            flex items-center outline-none focus:outline-none p-2'
        >
            <div className='flex items-center'>
                <div className='py-1 px-3 border-r border-gray-200 font-bold text-gray-800 text-xs lg:text-sm'>Anywhere</div>
                <div className='py-1 px-3 border-r border-gray-200 font-bold text-gray-800 text-xs lg:text-sm'>Any week</div>
                <div className='py-1 px-3 text-xs lg:text-sm'>Add guests</div>
                <HiMagnifyingGlassCircle className='block h-8 w-8 text-abnbpink' />
            </div>
        </button>
    )
}

export default TopSelectorLarge