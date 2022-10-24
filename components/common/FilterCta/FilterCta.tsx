import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"

const FilterCta = () => {
  return (
    <button className='border border-gray-300 rounded-xl p-3 flex items-center focus:outline-none'>
        <HiOutlineAdjustmentsHorizontal className='h-5 w-5 text-gray-800 mr-2' />
        <p className='text-gray-800'>Filters</p>
    </button>
  )
}

export default FilterCta