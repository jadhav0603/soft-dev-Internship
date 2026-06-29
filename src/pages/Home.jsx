import React from 'react'
import Header from '../components/header/Header'
import bgImage from '../assets/goodluck-background-plant.jpg'
import Layout from '../components/heroSection/HeroLayout'


const Home = () => {
  return (
      <div className='w-full bg-cover bg-center bg-no-repeat p-9' 
        style={{ backgroundImage: `url(${bgImage})`}}
    >
      <Header />
      <Layout />
    </div>
  )
}

export default Home
