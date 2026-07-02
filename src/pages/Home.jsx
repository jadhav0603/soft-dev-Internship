import React from 'react'
import Header from '../components/header/Header'
import bgImage from '../assets/goodluck-background-plant.jpg'
import Layout from '../components/heroSection/HeroLayout'
import TopSellingPlants from '../components/sellingPlants/TopSellingPlants'
import CustomerReview from '../components/customerReviewComp/CustomerReview'
import BestO2Plant from '../components/sellingPlants/BestO2Plant'

const Home = () => {
  return (
    <div className="w-full max-w-[1728px] min-h-screen lg:min-h-[2592px] mx-auto bg-cover bg-center bg-no-repeat border-4 border-black overflow-x-hidden">
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <Header />
      <Layout />
    </div>
    <TopSellingPlants />
    <CustomerReview />
    <BestO2Plant />
    </div>
  )
}

export default Home