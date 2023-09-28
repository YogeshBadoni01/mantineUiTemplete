"use client"
import Image from 'next/image'
import styles from './page.module.css'
import About from './Components/Hero'
import  Carousels from './Components/Carousels'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import Cards from './Components/Cards'
import FAQs from './Components/FQAs'


export default function Home() {
  return (
    <>
    <div style={{marginTop:""}}>
      <About/>
      <Carousels/>
      <SectionOne/>
      <SectionTwo/>
      <Cards/>
      <FAQs/>
    </div>

    </>
  )
}
