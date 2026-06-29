import React from 'react'
import AglaonemaPlantImg from '../../assets/aglaonema-plant.png'
import BuyNowBtn from '../global/BuyNowBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const AglaonemaPlant = () => {
  return (
    <div className='border bg-white/5 backdrop-blur-md border-gray-400 w-[512px] h-[644px] top-[194px] left-[1164px] rounded-2xl'>
      <img src={AglaonemaPlantImg} alt="aglaonema-plant" className='w-[459px] relative bottom-20' />
      
      <div className='ml-20'>
        <p className='inter text-[23px]'>Indoor Plant</p>
        
        <h1 className='inter text-[38px] flex-2 justify-between'>Aglaonema Plant 
            <FontAwesomeIcon icon={faChevronRight} />
        </h1>
        <BuyNowBtn />
      </div>

        <div className='flex gap-2 p-9 w-full justify-center'>
            <div className='w-[21px] top-[74px] border-[4px] text-white opacity-75 rounded-sm'></div>
            <div className='w-[6px] top-[87px] left-[1665px] border-[4px] text-white opacity-75 rounded-sm'></div>
            <div className='w-[6px] top-[100px] left-[1665px] border-[4px] text-white opacity-75 rounded-sm'></div>
        </div>

    </div>
  )
}

export default AglaonemaPlant
