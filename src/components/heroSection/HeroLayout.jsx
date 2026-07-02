import React from "react";
import HeroSection from "./HeroSection";
import AglaonemaPlant from "./AglaonemaPlant";
import ReviewCard from "./ReviewCard";
import TrendyPlant from "./TrendyPlant";

const Layout = () => {
  return (
    <div className="mt-20 sm:mt-28 md:mt-36 lg:mt-[180px] flex flex-col gap-16 sm:gap-20 lg:gap-15">

      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-15">

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-50 ">
          <HeroSection />
          <ReviewCard />
        </div>

        <AglaonemaPlant />

      </div>

      <TrendyPlant />

    </div>
  );
};

export default Layout;