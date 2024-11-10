import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from "./HeroSection"
import Section from './Section'
import OurServices from './OurServices'
import OurWorks from './OurWorks'
import SocialMediaPosts from './SocialMediaPosts'
import Footer from '../../components/Footer'

const IndexPage = () => {
  return (
    <div>
      <Navbar indexPage={true} />

      <main>
        <HeroSection />
        <Section />
        <OurWorks />
        {/* <SocialMediaPosts /> */}
      </main >
      <Footer />
    </div >
  )
}

export default IndexPage