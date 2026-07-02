import React from 'react'
import ReviewCard from './ReviewCard'

import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.png'

const CustomerReview = () => {

  const reviewData = [
    {
      id: 1,
      image: user1,
      name: "Shelly Russel",
      review: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
    },
    {
      id: 2,
      image: user2,
      name: "Lula Rolfson",
      review: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
    },
    {
      id: 3,
      image: user3,
      name: "Carol Huels",
      review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
    }
  ]

  return (
    <div className='w-full mt-24 mb-28'>

      <div className='flex justify-center items-center gap-3 mb-20'>

        <h1 className='text-white my-20 text-3xl md:text-5xl font-semibold'>
          Customer Review
        </h1>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center'>

        {
          reviewData.map((item) => (
            <ReviewCard
              key={item.id}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))
        }

      </div>

    </div>
  )
}

export default CustomerReview