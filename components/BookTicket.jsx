import React from "react";

const BookTicket = ({ translations }) => {
  return (
    <div className="relative">
      <img
        src="/images/print.png"
        className="w-full h-[60px] object-cover relative z-50"
        alt="Screenshot"
      />
      <section className="text-white bg-[#544229cb] px-4 md:px-28 2xl:px-40 pt-10 md:pt-20 pb-16 md:pb-16 z-20 relative -mt-7">
        {/* <div>
          <h1 className=" text-2xl mb-6 max-sm:text-lg">
            {" "}
            {translations.tickets.title}
          </h1>
          <div className=" flex gap-4 flex-wrap max-sm:grid grid-cols-3">
            <div>
              <img
                src="/images/women.png"
                className={`w-full h-[200px] cursor-pointer md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
              <div className=" text-xl mt-3 max-sm:text-base">
                {translations.tickets.category.weekly}
              </div>
            </div>
            <div>
              <img
                src="/images/arab.png"
                className={`w-full cursor-pointer h-[200px] md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
              <div className=" text-xl mt-3 max-sm:text-base">
                {translations.tickets.category.family}
              </div>
            </div>{" "}
            <div>
              <img
                src="/images/man.png"
                className={`w-full cursor-pointer h-[200px] md:h-[299px] object-cover rounded-md `}
                alt="Screenshot"
              />
              <div className=" text-xl mt-3 max-sm:text-base">
                {translations.tickets.category.oneday}
              </div>
            </div>
          </div>
        </div> */}
        <div className=" mt-28">
          <h1 className=" text-2xl mb-6 max-sm:text-lg">
            {" "}
            {translations.activities.title}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <img
                src="/images/bt-1.png"
                className="w-[260px]  md:h-[360px] h-[260px] max-md:w-[200px] object-cover rounded-md cursor-pointer"
                alt="Screenshot"
              />
               <p className="mb-[10px] mt-2 mb-6 md:mb-12 max-sm:text-sm">
               {translations.activities.bt_name1}
               </p>
            </div>
            <div>
              <img
                src="/images/bt-2.png"
                className="w-[260px]  md:h-[360px] h-[260px] max-md:w-[200px] object-cover rounded-md cursor-pointer"
                alt="Screenshot"
              />
               <p className="mb-[10px] mt-2 mb-6 md:mb-12 max-sm:text-sm">
               {translations.activities.bt_name2}
            </p>
            </div>
            <div>
              <img
                src="/images/bt-3.png"
                className="w-[260px]  md:h-[360px] h-[260px] max-md:w-[200px] object-cover rounded-md cursor-pointer"
                alt="Screenshot"
              />
               <p className="mb-[10px] mt-2 mb-6 md:mb-12 max-sm:text-sm">
               {translations.activities.bt_name3}
            </p>
            </div>
            <div>
              <img
                src="/images/bt-4.png"
                className="w-[260px] md:h-[360px] h-[260px] max-md:w-[200px] object-cover rounded-md cursor-pointer"
                alt="Screenshot"
              />
               <p className="mb-[10px] mt-2 mb-6 md:mb-12 max-sm:text-sm">
               {translations.activities.bt_name4}
            </p>
            </div>
            <div>
              <img
                src="/images/bt-5.png"
                className="w-[260px] md:h-[360px] h-[260px] max-md:w-[200px] object-cover rounded-md cursor-pointer"
                alt="Screenshot"
              />
                 <p className="mb-[10px] mb-6 mt-2 md:mb-12 max-sm:text-sm">
                 {translations.activities.bt_name5}
                 </p>
            </div>
          </div>
        </div>
      </section>
      <img
        src="/images/print.png"
        className="w-full h-[60px] object-cover relative -top-12 rotate-180  z-50"
        alt="Screenshot"
      />
    </div>
  );
};

export default BookTicket;
