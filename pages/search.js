import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import InfoCard from '../Components/InfoCard';
function Search({searchResults}) {
    const router=useRouter()
    const {location,startDate,endDate,noOfGuests}=router.query
    const formattedStartDate=format(new Date(startDate), 'dd MMM yyy');
    const formattedEndDate=format(new Date(endDate), 'dd MMM yyy')
    console.log(searchResults)
  return (
    <div>
    <Header placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate}`} />
    <section>
    <p className='text-xs'>300+ stays for {formattedStartDate} - {formattedEndDate} - {noOfGuests} number of guests </p>

    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
    
    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
        <p className='button'>Cancellation Flexibility</p>
        <p className='button'>Type of Place</p>
        <p className='button'>Price</p>
        <p className='button'>Rooms and Beds</p>
        <p className='button'>More Filters</p>
    </div>
    <div className='flex flex-col'>
    {searchResults.map(({img,location,title,description,star,price,total})=>
        <InfoCard 
        key={title}
        title={title}
        img={img}
        location={location}
        description={description}
        star={star}
        price={price}
        total={total}
        />
    )}
    </div>
    </section>
    <Footer />
  </div>
  );
}

export default Search;

export async function getServerSideProps(){
    const searchResults=await fetch("https://links.papareact.com/isz").then((res)=>res.json());
    console.log('This is from search'+searchResults)
    return {
        props:{
            searchResults,
        }
    };
}
