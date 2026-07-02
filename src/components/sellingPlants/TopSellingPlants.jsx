import React from 'react'
import PlantCard from './PlantCard'

import aglaonema from '../../assets/aglaonema-plant.png'
import plantain from '../../assets/trendy-plant.png'
import cactus from '../../assets/cactus.png'
import swiss from '../../assets/swiss-cheese.png'
import sansevieria from '../../assets/sansevieria.png'
import agave from '../../assets/agave.png'

const TopSellingPlants = () => {

  const plants = [
    {
      id: 1,
      image: aglaonema,
      title: "Aglaonema plant",
      description:
        "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: "Rs. 300/-"
    },
    {
      id: 2,
      image: plantain,
      title: "Plantain Lilies",
      description:
        "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: "Rs. 380/-"
    },
    {
      id: 3,
      image: cactus,
      title: "Cactus",
      description:
        "It is known for their ability to thrive in arid environments",
      price: "Rs. 259/-"
    },
    {
      id: 4,
      image: swiss,
      title: "Swiss cheese Plant",
      description:
        "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: "Rs. 400/-"
    },
    {
      id: 5,
      image: sansevieria,
      title: "Sansevieria plant",
      description:
        "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: "Rs. 450/-"
    },
    {
      id: 6,
      image: agave,
      title: "Agave plant",
      description:
        "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
      price: "Rs. 359/-"
    }
  ]

  return (
    <div className='w-full mt-28 mb-20'>

      <h1 className='text-center text-white text-5xl font-semibold mb-40 lg:mb-20 '>
        Our Top Selling Plants
      </h1>

      <div className='flex flex-wrap justify-center gap-x-10 gap-y-28 justify-items-center'>

        {
          plants.map((item) => (
            <PlantCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        }

      </div>

    </div>
  )
}

export default TopSellingPlants