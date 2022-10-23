import Navbar from '@/components/page-elements/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Vacation Homes and Condo Rentals - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto w-full text-gray-500 text-sm'>
        <Navbar />
      </div>
      
    </div>
  )
}
