import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex justify-center items-center w-[531px] h-[35px] top-[64px] left-[600px] gap-22 font-["indie-flower",cursive]  text-[#FFFFFF]'
        // style={{ fontFamily: '"Indie Flower", cursive'}}
      >
        <li>Home</li>
        <li>
            <select>
                <option value='Plants Types'> Plants Types</option>
            </select>
        </li>
        <li>More</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
