import React from 'react'
import MainNavbar from './MainNavbar'
import CardContainer from './CardContainer'
import Filter from './Filter'
const Main = () => {
  return (
    <div className=''>
    <MainNavbar />
    <section className='flex flex-col sm:flex-row   justify-between px-7 mt-16 mb-10  w-full ' >
      <section className='w-full sm:w-[350px]  mr-[80px]'>
        <Filter />
      </section>
      <section className='w-full'>
        <CardContainer />
      </section>
    </section>
    </div>
  )
}

export default Main
