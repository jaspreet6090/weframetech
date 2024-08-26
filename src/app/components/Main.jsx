import React from 'react'
import MainNavbar from './MainNavbar'
import CardContainer from './CardContainer'
import Filter from './Filter'
const Main = () => {
  return (
    <div>
    <MainNavbar />
    <section className='flex  justify-between px-7 mt-16 ' >
      <section className='flex-1 mr-[80px]'>
        <Filter />
      </section>
      <section>
        <CardContainer />
      </section>
    </section>
    </div>
  )
}

export default Main
