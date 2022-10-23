import { BiSearch } from "react-icons/bi"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"

const NavbarSmall = () => {
    return (
        <div className='md:hidden px-6 py-3 w-full'>
            <button className="flex w-full items-center justify-between border border-gray-200 shadow-md rounded-full py-2 px-3">
                <div className="flex items-center">
                    <BiSearch className="block w-6 h-6 mr-4 text-gray-800" />
                    <div className="text-left">
                        <p className="text-gray-800 font-bold">Where to?</p>
                        <p>Anywhere <span>&#183;</span> Any week <span>&#183;</span> Add guests</p>
                    </div>
                </div>
                <div className="flex items-center justify-center p-2 border border-gray-400 rounded-full">
                    <HiOutlineAdjustmentsHorizontal className="block w-5 h-5 text-gray-800" />
                </div>
            </button>
        </div>
    )
}

export default NavbarSmall