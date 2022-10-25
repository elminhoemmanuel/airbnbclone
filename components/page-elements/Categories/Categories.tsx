import FilterCta from '@/components/common/FilterCta'
import CarouselLarge from '../CarouselLarge'
import CarouselSmall from '../CarouselSmall'

const Categories = () => {
  return (
    <div className='py-6 px-6 md:px-8 lg:px-12 grid grid-cols-12 gap-3'>
        <div className='col-span-12 md:col-span-10 lg:col-span-11'>
            <CarouselSmall />
            <CarouselLarge />
        </div>
        <div className='hidden md:block px-2'>
            <FilterCta />
        </div>
    </div>
  )
}

export default Categories
