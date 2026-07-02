import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Menu from './Menu'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-6 md:py-8'>
      <Logo />
      <Navbar />
      <Menu />
    </div>
  )
}

export default Header