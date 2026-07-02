import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='hidden lg:flex justify-center items-center gap-8 xl:gap-12 font-["indie-flower",cursive] text-white text-lg'>
        <li>Home</li>

        <li>
          <select className='bg-transparent outline-none'>
            <option value='Plants Types'>Plants Types</option>
          </select>
        </li>

        <li>More</li>

        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar