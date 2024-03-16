import React,{useEffect} from 'react'
import './CSS/Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import SpecialOffer from '../Components/Special Offers/SpecialOffer'
import MenuCategory from '../Components/MenuCategory/MenuCategory'
import Nav from '../Components/Nav/Nav'

function Home() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  })

  return (
    <>
        <Nav/>
        <SpecialOffer/>
        <MenuCategory/>
     
    </>


  )
}

export default Home