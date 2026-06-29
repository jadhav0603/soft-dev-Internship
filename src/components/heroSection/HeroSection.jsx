import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import BuyNowBtn from "../global/BuyNowBtn";

const HeroSection = () => {
  return (
    <div>
      <p className="inter font-semibold w-full text-[380%]">Earth's Exhale</p>
      <p>
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
        environment and its essential role in sustaining life.
      </p>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <BuyNowBtn />
          <div className="border border-white rounded-full hover:bg-gray-300 w-fit p-2">
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <p className="font-[indie-flower,cursive]"> Live Demo...</p>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
