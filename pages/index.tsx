import Head from 'next/head'
import Header  from '../Components/Header'
import Banner from '../Components/Banner'
import SmallCard from '../Components/SmallCard'
import MediumCard from '../Components/MediumCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'

export default function Home({exploreData}:any) {
  const [CardsData,setCardsData]=useState([
    {
    "img": "https://links.papareact.com/2io",
    "title": "Outdoor getaways"
    },
    {
    "img": "https://links.papareact.com/q7j",
    "title": "Unique stays"
    },
    {
    "img": "https://links.papareact.com/s03",
    "title": "Entire homes"
    },
    {
    "img": "https://links.papareact.com/8ix",
    "title": "Pet allowed"
    }
    ])
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item:any)=>
          <SmallCard img={item.img} distance={item.distance}
          location={item.location}
          key={item.location}
          />
          )}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live AnyWhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide'>
            {CardsData?.map((items:any)=>
          <MediumCard key={items.title} title={items.title} img={items.img} />
          )}
          </div>
        </section>
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb'
          buttontext='Get Inspired'
          />   
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await fetch('https://links.papareact.com/pyp').
  then(res=>res.json())

  const CardsData=await axios.get('https://links.papareact.com/zp1').then(res=>res.data)
  return {
    props:{
      exploreData,
      CardsData
    }
  }
}
