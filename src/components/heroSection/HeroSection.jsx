import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import BuyNowBtn from "../global/BuyNowBtn";

const HeroSection = () => {
  return (
    <div className="w-full lg:w-[802px]">
      <p className="inter font-semibold text-[48px] sm:text-[65px] md:text-[85px] lg:text-[118px] opacity-75 leading-tight">
        Earth's Exhale
      </p>

      <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] mt-5">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
        environment and its essential role in sustaining life.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 my-8">
        <div className="flex items-center gap-5">
          <BuyNowBtn />

          <div className="flex justify-center items-center gap-2">
            <div className="border border-white rounded-full hover:bg-gray-700 p-2">
              <FontAwesomeIcon icon={faPlay} />
            </div>

            <p className="font-[indie-flower,cursive] text-sm sm:text-base">
              Live Demo...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;