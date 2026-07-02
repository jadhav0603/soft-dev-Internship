import React from 'react'
import Header from '../components/header/Header'
import bgImage from '../assets/goodluck-background-plant.jpg'
import Layout from '../components/heroSection/HeroLayout'

const Home = () => {
  return (
    <div
      className="w-full max-w-[1728px] min-h-screen lg:min-h-[2592px] mx-auto bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-10 border-4 border-black overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <Layout />
    </div>
  )
}

export default Home