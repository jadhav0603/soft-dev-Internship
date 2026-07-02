import React from 'react'
import logo from '../../assets/logo-flower.png'

const Logo = () => {
  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <img
        src={logo}
        alt='logo'
        className='w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12'
      />
      <p className='opacity-75 inter font-black text-xl sm:text-2xl md:text-[28px] text-white'>
        FloraVision
      </p>
    </div>
  )
}

export default Logo