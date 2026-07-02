import React from 'react'
import logo from '../../assets/logo-flower.png'

const Footer = () => {
  return (
    <div className='w-full mt-32 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-25'>

      <div className='flex flex-col lg:flex-row justify-between gap-20'>

        <div className='w-full lg:w-[40%]'>

          <div className='flex items-center gap-4'>

            <img
              src={logo}
              alt='logo'
              className='w-14 h-14 md:w-16 md:h-16'
            />

            <h1 className='text-white text-4xl md:text-5xl font-bold opacity-80'>
              FloraVision.
            </h1>

          </div>

          <p className='text-white text-xl md:text-[22px] leading-10 mt-12 opacity-90'>
            "From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment."
          </p>

          <div className='flex gap-10 md:gap-16 mt-24'>

            <h2 className='text-white text-3xl font-bold cursor-pointer'>
              FB
            </h2>

            <h2 className='text-white text-3xl font-bold cursor-pointer'>
              TW
            </h2>

            <h2 className='text-white text-3xl font-bold cursor-pointer'>
              LI
            </h2>

          </div>

        </div>

        <div className='w-full lg:w-[20%]'>

          <h1 className='text-white text-4xl font-bold mb-14'>
            Quick Link's
          </h1>

          <div className='flex flex-col gap-8 text-white text-2xl'>

            <a href='#' className='underline'>
              Home
            </a>

            <a href='#' className='underline'>
              Type's Of plant's
            </a>

            <a href='#' className='underline'>
              Contact
            </a>

            <a href='#' className='underline'>
              Privacy
            </a>

          </div>

        </div>

                <div className='w-full lg:w-[35%]'>

          <h1 className='text-white text-4xl font-bold mb-14'>
            For Every Update.
          </h1>

          <div className='flex flex-col sm:flex-row border-2 border-white rounded-lg overflow-hidden'>

            <input
              type='email'
              placeholder='Enter Email'
              className='w-full bg-transparent px-6 py-5 text-white text-xl outline-none placeholder:text-gray-300'
            />

            <button className='bg-white text-black text-xl font-bold px-8 py-5 hover:bg-gray-300 duration-300'>
              SUBSCRIBE
            </button>

          </div>

          <p className='text-white text-xl md:text-2xl mt-32'>
            FloraVision © all right reserve
          </p>

        </div>

      </div>

    </div>
  )
}

export default Footer