import React from "react";

const Adventure = ({ translations }) => {
  return (
    <section className="text-white px-4 lg:px-28 pb-20 overflow-hidden 2xl:px-40">
      {/* Previous sections remain the same */}
      <div className="flex justify-center pb-40 ">
        <div className="w-[441px] h-[198px] max-md:w-[212px] max-md:h-[100px]">
          <img
            src="/images/adv-head.png"
            className="w-full h-full mt-20"
            alt="Announcement"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  gap-12 max-sm:gap-2 max-sm:items-start" dir="rtl">
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl mb-12 max-md:mb-6 max-md:text-lg max-sm:font-semibold max-sm:text-xl">
            {translations.adventure.title}
          </h1>
          <p className="text-base text-justify max-md:text-base ">
            {translations.adventure.description}
          </p>
          <div className="text-start my-4 w-full">
            <button className="px-16 py-3 border border-gray-300 text-white bg-black rounded-2xl transition duration-300 ">
              {translations.adventure.find_out_more_btn}
            </button>
          </div>
        </div>

        <div className="relative  w-full max-sm:w-[60%] gap-3  " >
          <img
            src="/images/adv-right.png"
            className="min-w-[100px] w-full sm:min-w-[653.99px] max-md:h-full  max-md:rounded-3xl"
            alt="Adventure Image"
          />
          <img
            src="/images/Rectangle_464_(1).png"
            className="absolute -bottom-6 mr-1 w-full z-20 object-contain max-md:hidden"
            alt="Rectangle Overlay"
          />
        </div>
      </div>
      {/* Bottom Images */}
      <div className="flex flex-row justify-between items-end  gap-6 relative max-sm:mt-4 sm:mt-16 lg:-mt-2">
        <div className="flex-1 flex flex-col items-center ">
          <img
            src="/images/camal.png"
            className="w-full  h-auto object-contain max-md:rounded-3xl "
            alt="Samt"
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/images/adv3.png"
            className="w-full  h-auto object-contain max-md:rounded-3xl"
            alt="Arrow"
          />
          <img
            src="/images/Rectangle_464_(1).png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
        <div className="flex-1 flex flex-col items-center rounded-3xl ">
          <img
            src="/images/adv2.png"
            className="w-full h-auto object-contain rounded-3xl  "
            alt="Buggy"
          />
          <img
            src="/images/Rectangle_464_(1).png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
      </div>
    </section>
  );
};

export default Adventure;
