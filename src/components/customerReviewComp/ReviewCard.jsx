import React from 'react'

const ReviewCard = ({ image, name, review }) => {
  return (
    <div className='w-full max-w-[512px] h-[480px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[77px] px-12 py-7 shadow-lg flex items-center'>
        <div>
      <div className='flex items-center gap-4'>

        <img
          src={image}
          alt={name}
          className='w-[88px] h-[88px] rounded-full object-cover'
        />

        <div>

          <h2 className='text-white text-[38px] font-semibold'>
            {name}
          </h2>

          <p className='text-yellow-400 text-[24px] tracking-[3px] mt-1'>
            ★★★★⯪
          </p>

        </div>

      </div>

      <p className='text-gray-300 text-[24px] leading-7 mt-6'>
        {review}
      </p>
    </div>
    </div>
  )
}

export default ReviewCard