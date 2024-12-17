import React from "react";

const Heritage = ({ translations }) => {
  return (
    <div className="relative text-justify">
      <img
        src="/images/print.png"
        className="w-full h-[60px] object-cover relative z-50"
        alt="Screenshot"
      />
      <section className="text-white bg-[#544229cb] px-4 md:px-28 2xl:px-40 pt-10 md:pt-20 pb-10 md:pb-16 z-20 relative -mt-7">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-20">
          <div className="w-full lg:w-[55%]">
            <div className="w-full relative order-2 md:order-1 max-md:hidden">
              <img
                src="/images/heritage-1.png"
                className="w-full relative"
                alt="Screenshot"
              />
              <img
                src="/images/heritage-1a.png"
                className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40 max-md:hidden"
              />
            </div>
            <div className="text-end mt-4">
              <button className="w-fit rounded-2xl py-2 md:py-3 px-4 md:px-16 border-2 border-white text-white focus:outline-none text-sm md:text-base hidden md:inline-block">
                {translations.heritage.find_out_more_btn}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[45%] text-[#FFFFFF] flex flex-col justify-end items-start order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl mb-4 md:mb-6 t w-full max-sm:text-xl text-end">
              {translations.heritage.title}
            </h1>
            <p className="mb-6 md:mb-12 max-sm:text-sm">
              {translations.heritage.description1}
            </p>
            <div className=" max-md:flex w-full  max-md:flex-row-reverse  max-md:gap-8 ">
              <div className="w-full relative  max-md:mt-20">
                <img
                  src="/images/heritage-2.png"
                  className="w-full min-h-[160px] relative object-cover rounded-xl"
                  alt="Screenshot"
                />
                <img
                  src="/images/heritage-2a.png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-sm:hidden max-w-40 max-md:hidden"
                />
              </div>
              <div className="w-full relative order-2 md:order-1 md:hidden">
                <img
                  src="/images/heritage-1.png"
                  className="w-full min-h-[160px] relative object-cover rounded-xl"
                  alt="Screenshot"
                />
                <img
                  src="/images/heritage-2a.png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40 max-md:hidden"
                />
                <div className=" flex justify-end px-4 w-full m-4">
                  <button className="w-fit rounded-2xl py-3 md:py-3 px-8 md:px-6 border-2 border-white text-white focus:outline-none text-sm md:text-base block lg:hidden">
                    {translations.heritage.find_out_more_btn}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className=" flex justify-end px-4 w-full m-4">
              <button className="w-fit rounded-2xl py-3 md:py-3 px-8 md:px-6 border-2 border-white text-white focus:outline-none text-sm md:text-base block lg:hidden">
                {translations.heritage.find_out_more_btn}
              </button>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse  items-start gap-6 md:gap-20 mt-12   md:mt-32">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[55%]">
            <div className="relative order-2 md:order-1 max-md:hidden">
              <img
                src="/images/oasis1.png"
                className="w-full relative "
                alt="Screenshot"
              />
              <img
                src="/images/oasis1a.png"
                className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-w-40 max-md:hidden"
              />
            </div>
            <div className=" w-full text-start">
              <button className="w-fit  mt-4 rounded-2xl py-2 md:py-3 px-4 md:px-16 border-2 border-white text-white focus:outline-none text-sm md:text-base  hidden md:inline-block">
                {translations.heritage.find_out_more_btn}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[45%] text-[#FFFFFF] flex flex-col justify-end items-start order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl mb-4 md:mb-6 t w-full max-sm:text-xl">
              {translations.heritage.title2}
            </h1>
            <p className="mb-6 md:mb-12 max-sm:text-sm">
              {translations.heritage.description2}
            </p>
            <div className=" max-md:flex  max-md:flex-row  max-md:gap-8 ">
              <div className="w-full relative  max-md:mt-20">
                <img
                  src="/images/oasis2.png"
                  className="w-full min-h-[160px] relative object-cover rounded-xl"
                  alt="Screenshot"
                />
                <img
                  src="/images/oasis2a.png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none max-sm:hidden max-w-40 max-md:hidden"
                />
              </div>
              <div className="w-full relative order-2 md:order-1 md:hidden">
                <img
                  src="/images/oasis1.png"
                  className="w-full min-h-[160px] relative object-cover rounded-xl"
                  alt="Screenshot"
                />
                <img
                  src="/images/oasis1a.png"
                  className="absolute bottom-0 rounded-xl w-full z-20 object-contain md:max-w-none  max-md:hidden"
                />
                <div className=" w-full mt-4">
                  <button className="w-fit rounded-2xl py-3 mb-5 md:py-3 px-8 md:px-6 border-2 border-white text-white focus:outline-none text-sm md:text-base block lg:hidden">
                    {translations.heritage.find_out_more_btn}
                  </button>
                </div>
              </div>
            </div>
            {/* <div className=" w-full mt-4">
              <button className="w-fit rounded-2xl py-3 mb-5 md:py-3 px-8 md:px-6 border-2 border-white text-white focus:outline-none text-sm md:text-base block lg:hidden">
                {translations.heritage.find_out_more_btn}
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
