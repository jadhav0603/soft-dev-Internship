import React from 'react'
import searchIcon from '../../assets/search-icon.png'
import bagIcon from '../../assets/bag-icon.png'


const Menu = () => {
  return (
    <div className='flex gap-12'>
      <img src={searchIcon} className='w-[26px] h-[26px] top-[68px] left-[1487px] opacity-75' alt='search-icon' />
      <img src={bagIcon} className='w-[26px] h-[26px] top-[68px] left-[1487px] opacity-75' alt='bag-icon' />
      <div className='flex flex-col gap-2'>
        <div className='w-[31px] top-[74px] border-[4px] text-white opacity-75 rounded-sm'></div>
        <div className='w-[23px] top-[87px] left-[1665px] border-[4px] text-white opacity-75 rounded-sm'></div>
      </div>
    </div>
  )
}

export default Menu
