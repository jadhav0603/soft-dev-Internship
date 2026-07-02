import React from 'react'
import plantImage from '../../assets/aglaonema-plant.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const BestO2Plant = () => {
  return (
    <div className='w-full mt-24 mb-20'>

      <div className='flex justify-center items-center gap-3 mb-20'>

        <h1 className='text-white text-3xl my-20 md:text-5xl font-semibold'>
          Our Best o2
        </h1>

      </div>

      <div className='w-full max-w-[1600px] lg:h-[655px] mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] lg:rounded-[92px] px-6 md:px-10 lg:px-14 py-10'>

        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 relative lg:-top-10'>

          <div className='flex justify-center w-full lg:w-1/2'>

            <img
              src={plantImage}
              alt='best-o2-plant'
              className='w-[460px] sm:w-[540px] md:w-[620px] lg:w-[877px] relative lg:-left-10 sm:-top-10 lg:-top-20'
            />

          </div>

          <div className='w-full lg:w-1/2 text-white'>

            <h2 className='text-[29px] md:text-[38px] font-semibold leading-tight'>
              We Have Small And Best O2 Plants Collection's
            </h2>

            <p className='text-gray-300 text-[20px] md:text-[28px] leading-7 mt-8'>
              Oxygen-producing plants, often referred to as "O2 plants,"
              are those that release oxygen into the atmosphere through
              the process of photosynthesis.
            </p>

            <p className='text-gray-300 text-[20px] md:text-[28px] leading-7 mt-6'>
              Many plants can help filter out pollutants and toxins from
              the air, such as formaldehyde, benzene, and trichloroethylene.
              This makes the air cleaner and healthier to breathe.
            </p>

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10 gap-8'>

              <button className='border border-white rounded-md px-12 py-2 hover:bg-gray-700 w-fit text-[28px] '>
                Explore
              </button>

              <div className='flex items-center gap-5 text-white'>

                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className='cursor-pointer'
                />

                <p className='text-sm lg:text-lg'>
                  01/04
                </p>

                <FontAwesomeIcon
                  icon={faChevronRight}
                  className='cursor-pointer'
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='flex justify-center items-center gap-3 mt-14'>

        <div className='w-6 h-3 rounded-full bg-gray-300'></div>

        <div className='w-3 h-3 rounded-full bg-white'></div>

        <div className='w-3 h-3 rounded-full bg-gray-300'></div>

      </div>

    </div>
  )
}

export default BestO2Plant