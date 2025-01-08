import React from 'react'
import AboutSection from '../components/aboutComponent/AboutSection'
import Header from '../components/header'
import MidSection from '../components/aboutComponent/MidSection'
import EndAbout from '../components/aboutComponent/EndAbout'


function About() {
  return (
    <>
        <Header/>
        <AboutSection/>
        <MidSection/>
        <EndAbout/>
    </>
  )
}

export default About