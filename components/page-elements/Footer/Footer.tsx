import Link from "next/link"
import { BsGlobe } from "react-icons/bs"
import { HiOutlineChevronUp } from "react-icons/hi"

const Footer = () => {
    return (
        <div className="fixed bottom-0 py-5 px-6 md:px-8 lg:px-12 border-t border-gray-300 w-full bg-white z-40">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <p className="mr-3">© 2022 Airbnb, Inc.</p>
                    <p>
                        <span className="whitespace-nowrap"><Link href="#"><a className="hover:underline">Privacy</a></Link></span>&nbsp;&#183;&nbsp;
                        <span className="whitespace-nowrap"><Link href="#"><a className="hover:underline">Terms</a></Link></span> &nbsp;&#183;&nbsp;
                        <span className="whitespace-nowrap"><Link href="#"><a className="hover:underline">Sitemap</a></Link></span>
                    </p>
                </div>
                <div className="hidden md:flex items-center">
                    <button className="flex items-center hover:underline mr-5">
                        <p><BsGlobe className='h-5 w-5 text-gray-800 mr-2' /></p>
                        <p><Link href="#"><a className="hover:underline text-gray-800 font-bold">English (US)</a></Link></p>
                    </button>

                    <button className="hover:underline mr-5">
                        <p><Link href="#"><a className="hover:underline text-gray-800 font-bold">$ USD</a></Link></p>
                    </button>

                    <button className="flex items-center hover:underline">
                        <p><Link href="#"><a className="hover:underline text-gray-800 font-bold mr-2">Support & resources</a></Link></p>
                        <p><HiOutlineChevronUp className='h-5 w-5 text-gray-800 mr-2' /></p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer