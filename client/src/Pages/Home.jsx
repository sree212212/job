import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Listing from '../components/Listing'
import Appdownload from '../components/Appdownload'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Listing/>
     <Appdownload/>
     <Footer/>
    </div>
  )
}

export default Home
