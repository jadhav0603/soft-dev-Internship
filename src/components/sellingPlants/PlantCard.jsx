import React from 'react'
import bagIcon from '../../assets/bag-icon.png'

const PlantCard = ({ image, title, description, price }) => {
  return (
    <div className='relative w-full max-w-[512px] h-[644px] sm:p-6 md:p-8 lg:p-10 bg-white/5 border border-white/10 rounded-[77px] backdrop-blur-md shadow-lg'>

    <div className='relative -top-20'>
      <div className='flex justify-center'>
        <img
          src={image}
          alt={title}
          className='w-[459px] h-[459px] object-contain relative -top-14'
        />
      </div>

      <div className='px-7 relative -top-15'>

        <h2 className='text-white inter text-[38px] font-medium mb-2'>
          {title}
        </h2>

        <p className='text-gray-300 text-[24px] leading-5 h-[116px]'>
          {description}
        </p>

        <div className='flex justify-between items-center'>

          <p className='text-white text-[38px] font-medium'>
            {price}
          </p>

          <button className='w-15 h-15 border border-white/40 rounded-lg flex justify-center items-center hover:bg-white/10'>
            <img
              src={bagIcon}
              alt='bag'
              className='w-7 h-7'
            />
          </button>

        </div>

      </div>
    </div>
    </div>
  )
}

export default PlantCard