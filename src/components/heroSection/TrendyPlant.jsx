import React from 'react'
import TrendyPlantImg from '../../assets/trendy-plant.png'
import aluvera from '../../assets/aluvera.png'
import bagIcon from '../../assets/bag-icon.png'

const TrendyPlant = () => {
  return (
    <div className="w-full bg-transparent py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:mb-12 lg:mb-20">
        Our Trendy plants
      </h1>

      <div className="flex flex-col justify-center gap-16 sm:gap-20 lg:gap-30">

        <div className="w-full max-w-[1619px] h-auto lg:h-[526px] mx-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-[40px] sm:rounded-[60px] lg:rounded-[121px] flex flex-col lg:flex-row items-center justify-between">

          <div className="relative bottom-10 sm:bottom-14 lg:bottom-20 flex justify-center pl-0 sm:pl-4 lg:pl-10">
            <img
              src={TrendyPlantImg}
              alt="trendy-plant"
              className="w-[260px] sm:w-[380px] md:w-[500px] lg:w-[650px] h-auto lg:h-[702px]"
            />
          </div>

          <div className="w-full lg:w-1/2 mt-2 lg:mt-0 text-white px-6 sm:px-8 lg:px-0 pb-8 lg:pb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5">
              For Your Desks Decorations
            </h2>

            <p className="text-gray-300 leading-7 text-base sm:text-lg font-semibold mb-8">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </p>

            <p className="text-3xl sm:text-4xl font-semibold mb-8">
              Rs. 599/-
            </p>

            <div className="flex items-center gap-4">
              <button className="border border-white rounded-lg px-8 sm:px-10 py-3 hover:bg-gray-700 hover:text-black duration-300">
                Explore
              </button>

              <button className="border border-white rounded-lg p-3 hover:bg-gray-700 duration-300">
                <img
                  src={bagIcon}
                  alt="bag-icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1619px] h-auto lg:h-[526px] mx-auto rounded-[40px] sm:rounded-[60px] lg:rounded-[121px] border border-white/20 bg-white/10 backdrop-blur-md flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-12">

          <div className="w-full lg:w-1/2 text-white py-8 lg:py-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
              For Your Desks Decorations
            </h2>

            <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 font-semibold mb-8">
              The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold mb-8">
              Rs. 399/-
            </h3>

            <div className="flex items-center gap-5">
              <button className="border border-white rounded-lg px-8 sm:px-10 py-3 hover:bg-gray-700 hover:text-black duration-300">
                Explore
              </button>

              <button className="w-12 h-12 border border-white rounded-lg flex items-center justify-center hover:bg-gray-700 duration-300">
                <img
                  src={bagIcon}
                  alt="bag-icon"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex relative bottom-6 sm:bottom-8 lg:bottom-10 justify-center lg:justify-end overflow-visible">
            <img
              src={aluvera}
              alt="plant"
              className="w-[280px] sm:w-[420px] md:w-[560px] lg:w-[732px] h-auto lg:h-[732px]"
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default TrendyPlant