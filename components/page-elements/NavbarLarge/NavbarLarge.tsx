import PrimaryBtn from '@/components/common/PrimaryBtn'
import TopSelectorLarge from '../TopSelectorLarge'
import { BsGlobe } from "react-icons/bs"
import Link from 'next/link'
import UserToggle from '@/components/common/UserToggle'

const NavbarLarge = () => {
  return (
    <div className='hidden md:flex items-center justify-between py-2 px-6 md:px-8 lg:px-12 border border-b-gray-200 gap-3'>
        <Link href="#"><a><img className='h-16 w-24 block cursor-pointer' src="/images/airbnblogo.png" alt='logo' /></a></Link>
        <TopSelectorLarge />
        <div className='flex items-center gap-2'>
            <PrimaryBtn className='text-gray-800'>Become a Host</PrimaryBtn>
            <PrimaryBtn><BsGlobe className='h-6 w-6 text-gray-800' /></PrimaryBtn>
            <UserToggle />
        </div>
    </div>
  )
}

export default NavbarLarge