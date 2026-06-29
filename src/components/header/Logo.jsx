import React from 'react'
import logo from '../../assets/logo-flower.png'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <img src={logo} alt='logo' className='w-[48px] h-[48px] top-[57px] left-[39px]' />
        <p className='w-[169px] h-[34px] top-[64px] left-[95px] opacity-75 inter font-black text-[28px] text-white'>FloraVision</p>
    </div>
  )
}

export default Logo
