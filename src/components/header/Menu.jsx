import React from 'react'
import searchIcon from '../../assets/search-icon.png'
import bagIcon from '../../assets/bag-icon.png'

const Menu = () => {
  return (
    <div className='flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
      <img
        src={searchIcon}
        className='w-5 h-5 sm:w-6 sm:h-6 opacity-75'
        alt='search-icon'
      />

      <img
        src={bagIcon}
        className='w-5 h-5 sm:w-6 sm:h-6 opacity-75'
        alt='bag-icon'
      />

      <div className='flex flex-col gap-2'>
        <div className='w-7 md:w-8 border-[3px] border-white opacity-75 rounded-sm'></div>
        <div className='w-5 md:w-6 border-[3px] border-white opacity-75 rounded-sm'></div>
      </div>
    </div>
  )
}

export default Menu