import Categories from '@/components/page-elements/Categories'
import Footer from '@/components/page-elements/Footer'
import Listings from '@/components/page-elements/Listings'
import Navbar from '@/components/page-elements/Navbar'
import ShowMapBtn from '@/components/page-elements/ShowMapBtn/ShowMapBtn'
import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Vacation Homes and Condo Rentals - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto w-full text-gray-500 text-sm relative'>
        <Navbar />
        <Categories />
        <Listings />
        <Footer />
        <ShowMapBtn />
      </div>
      
    </div>
  )
}
