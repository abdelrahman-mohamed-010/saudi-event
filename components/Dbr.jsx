import React from "react";

const Dbr = ({ translations }) => {
  return (
    <div className=" relative">
      <img
        src="/images/print.png"
        className="w-full h-[60px] object-cover absolute -top-24 rotate-180 z-50"
        alt="Screenshot"
      />{" "}
      <section className="text-white px-4 lg:px-28 pb-20 overflow-hidden mt-16 2xl:px-40">
        <div className="flex flex-col lg:flex-row-reverse justify-between  gap-12 ">
          <div className="w-full sm:w-1/2">
            <h1
              dir="rtl"
              className="text-3xl mb-12 max-md:mb-6 max-md:text-lg max-sm:font-semibold max-sm:text-xl"
            >
              {translations.dbr.title}
            </h1>
            <p className="text-base text-justify max-md:text-base ">
              {translations.dbr.description}
            </p>
            <div className=" m-4">
              <button className="px-4 py-2 border border-gray-300 text-white bg-black rounded-2xl  transition duration-300">
                {translations.dbr.find_out_more_btn}
              </button>
            </div>
          </div>

          <div className="relative w-full max-sm:w-[60%] gap-3  ">
            <img
              src="/images/exp.png"
              className="min-w-[100px] w-full sm:min-w-[653.99px] max-md:h-full  max-md:rounded-3xl"
              alt="Adventure Image"
            />
            <img
              src="/images/exp1.png"
              className="absolute -bottom-6 mr-1 w-full z-20 object-contain max-md:hidden"
              alt="Rectangle Overlay"
            />
          </div>
        </div>
        {/* Bottom Images */}
        <div className="flex flex-row justify-between items-end  relative max-sm:-mt-7 sm:mt-16 lg:-mt-12 gap-6">
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/images/exp2.png"
              className="w-full  h-auto object-contain max-md:rounded-3xl"
              alt="Arrow"
            />
            {/* <img
              src="/images/exp2a.png"
              className="absolute -bottom-6 w-full z-20 object-contain"
              alt="Rectangle Overlay"
            /> */}
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/images/exp3.png"
              className="w-full h-auto object-contain max-md:rounded-3xl"
              alt="Buggy"
            />{" "}
            {/* <img
              src="/images/exp3a.png"
              className="absolute -bottom-6 w-full z-20 object-contain"
              alt="Rectangle Overlay"
            /> */}
          </div>{" "}
          <div className="flex-1 flex flex-col items-center ">
            <img
              src="/images/exp4.png"
              className="w-full  h-auto object-contain "
              alt="Samt"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dbr;
