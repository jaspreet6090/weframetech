import React from 'react'
import { Navbar , NavigationBar,Main, Footer } from './components'
import "./globals.css"

const home = () => {
  return (
    <div className='bg-background h-full '>
      <div className="xl:mx-[150px] 3xl:mx-[310px]  ">
        <Navbar />
        
        <NavigationBar />
        <main className='  '>
        <Main />
          <h1 className='text-primary'>main </h1>

        </main>
      </div>
      <Footer />
    </div>
  )
}

export default home
