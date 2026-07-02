import React from "react";
import userImage from "../../assets/user.png";

function ReviewCard() {
  return (
    <div className="w-full max-w-[420px] bg-white/5 rounded-[25px] sm:rounded-[30px] md:rounded-[40px] p-5 sm:p-6 md:p-8">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <img
          src={userImage}
          alt="user"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-base sm:text-lg font-semibold mt-2">
            Ronnie Hamill
          </h3>

          <div className="text-yellow-400 text-lg sm:text-xl">
            ★★★★⯪
          </div>



          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            I can't express how thrilled I am with my new natural plants! They
            bring such a fresh and vibrant energy to my home
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;