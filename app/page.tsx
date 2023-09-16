// import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
// import { fuels, yearsOfProduction } from '@/constants';
// import { HomeProps } from '@/types';
// import { fetchCars } from '@/utils'
// import Image from 'next/image'

// export default async function Home({searchParams}: HomeProps) {


//   const allCars = await fetchCars({
//     manufacturer: searchParams?.manufacturer || '',
//     year: searchParams?.year || 2022,
//     fuel: searchParams?.fuel || '',
//     limit: searchParams?.limit || 10,
//     model: searchParams?.model || '',
//   })
  

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

//   console.log('Search Params', searchParams)


//   return (
//     <main className="overflow-hidden">
//       <Hero/>
//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className="text-4xl font-extrabold">
//             Car Catalogue
//           </h1>
//           <p>Explore the cars you might like</p>


//         </div>
//         <div className="home__filters">
//           <SearchBar/>
//           <div className="home__filter-container">
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction}/>
//           </div>
//         </div>
//           {!isDataEmpty ? (
//             <section>
//               <div className="home__cars-wrapper">
//                 {allCars?.map((car) => (
//                   <CarCard  car={car}/>
//                 ))}
//               </div>
//               <ShowMore
//               pageNumber={(searchParams.limit || 10)/10}
//               isNext = {(searchParams.limit || 10) < allCars?.length}
//               />
//             </section>
            
//           ) : (
//             <div className='home__error-container'>
//               <h2 className='text-black text-xl font-bold'>
//                 No Cars Found 
//               </h2>
//               <p>
//                 {allCars?.message}
//               </p>

//             </div>
//           )}
//       </div>

//     </main>
//   )
// }





















// import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
// import { fuels, yearsOfProduction } from '@/constants';
// import { FilterProps, HomeProps } from '@/types';
// import { fetchCars } from '@/utils'
// import { GetServerSidePropsContext } from 'next';
// import Image from 'next/image'

// export default function Home({allCars, searchParams}: HomeProps) {


  

  

  
//   const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;


//   if(searchParams===null){
//     return (
//       <main className="overflow-hidden">
//         <Hero/>
//         <div className='mt-12 padding-x padding-y max-width' id='discover'>
//           <div className='home__text-container'>
//             <h1 className="text-4xl font-extrabold">
//               Car Catalogue
//             </h1>
//             <p>Explore the cars you might like</p>
//           </div>
//           <div className="home__filters">
//             <SearchBar/>
//             <div className="home__filter-container">
//               <CustomFilter title='fuel' options={fuels} />
//               <CustomFilter title='year' options={yearsOfProduction}/>
//             </div>
//           </div>
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>
//               No Search Made
//             </h2>
//             <p>
//               Please use the search bar above to find cars.
//             </p>
//           </div>
//         </div>
//       </main>
//     );
//   }


//   return (
//     <main className="overflow-hidden">
//       <Hero/>
//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className="text-4xl font-extrabold">
//             Car Cataloguessss
            
//           </h1>
//           <p>Explore the cars you might like</p>


//         </div>
//         <div className="home__filters">
//           <SearchBar/>
//           <div className="home__filter-container">
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction}/>
//           </div>
//         </div>
//           {!isDataEmpty ? (
//             <section>
//               <div className="home__cars-wrapper">
//                 {allCars?.map((car) => (
//                   <CarCard  car={car}/>
//                 ))}
//               </div>
//               <ShowMore
//               pageNumber={(searchParams.limit || 10)/10}
//               isNext = {(searchParams.limit || 10) < allCars?.length}
//               />
//             </section>
            
//           ) : (
//             <div className='home__error-container'>
//               <h2 className='text-black text-xl font-bold'>
//                 No Cars Found 
//               </h2>
//               <p>
//                 Sorry. No Cars
//               </p>

//             </div>
//           )}
//       </div>

//     </main>
//   )
// }


// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log("GetServerSideProps function running")
//   const searchParams: FilterProps = {
//     manufacturer: context.query.manufacturer as string || '',
//     year: parseInt(context.query.year as string) || 2022,
//     fuel: context.query.fuel as string || '',
//     limit: parseInt(context.query.limit as string) || 10,
//     model: context.query.model as string || '',
//   };

//   console.log(searchParams)
  
//   const allCars = await fetchCars(searchParams);
//   console.log(allCars)

//   return {
//     props: {
//       allCars,
//       searchParams,
//     },
//   };
// }






"use client"

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { FilterProps, HomeProps } from '@/types';
import { fetchCars } from '@/utils'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {


  


  const searchParams = useSearchParams();

  const [cars, setCars] = useState([]);
  const [params, setParams] = useState({
    manufacturer: searchParams.get('manufacturer') || '',
    year: parseInt(searchParams.get('year') || '2022'),
    fuel: searchParams.get('fuel') || '',
    limit: parseInt(searchParams.get('limit') || '10'),
    model: searchParams.get('model') || ''
  });



  useEffect(() => {
    async function fetchData() {
      const fetchedCars = await fetchCars(params);
      setCars(fetchedCars);
    }

    fetchData();
  }, [params]);

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  

  

  
  


  if(searchParams===null){
    return (
      <main className="overflow-hidden">
        <Hero/>
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className='home__text-container'>
            <h1 className="text-4xl font-extrabold">
              Car Catalogue
            </h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar/>
            <div className="home__filter-container">
              <CustomFilter title='fuel' options={fuels} />
              <CustomFilter title='year' options={yearsOfProduction}/>
            </div>
          </div>
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              No Search Made
            </h2>
            <p>
              Please use the search bar above to find cars.
            </p>
          </div>
        </div>
      </main>
    );
  }


  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className="text-4xl font-extrabold">
            Car Cataloguessss
            
          </h1>
          <p>Explore the cars you might like</p>


        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction}/>
          </div>
        </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {cars?.map((car) => (
                  <CarCard  car={car}/>
                ))}
              </div>
              <ShowMore
              pageNumber={(params.limit || 10)/10}
              isNext = {(params.limit || 10) < cars?.length}
              />
            </section>
            
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>
                No Cars Found 
              </h2>
              <p>
                Sorry. No Cars
              </p>

            </div>
          )}
      </div>

    </main>
  )
}


// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log("GetServerSideProps function running")
//   const searchParams: FilterProps = {
//     manufacturer: context.query.manufacturer as string || '',
//     year: parseInt(context.query.year as string) || 2022,
//     fuel: context.query.fuel as string || '',
//     limit: parseInt(context.query.limit as string) || 10,
//     model: context.query.model as string || '',
//   };

//   console.log(searchParams)
  
//   const allCars = await fetchCars(searchParams);
//   console.log(allCars)

//   return {
//     props: {
//       allCars,
//       searchParams,
//     },
//   };
// }