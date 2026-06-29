import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Menu from './Menu'


const Header = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <Logo />
      <Navbar />
      <Menu />
    </div>
  )
}

export default Header
