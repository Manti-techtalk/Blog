import React from 'react'
import Header from '../components/header'
import Hero from '../components/Hero'
import MiniPosts from '../components/MiniPosts'
import BodyFooter from '../components/BodyFooter'
function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <MiniPosts/>
        <BodyFooter/>
    </>
  )
}

export default Home