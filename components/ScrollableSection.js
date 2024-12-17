// "use client";
// import React from "react";

// const GridSection = ({ items, translations }) => {
//   const isArabic = translations.type === "ar";

//   return (
//     <div
//       className={`grid  max-sm:grid-cols-2  max-lg:grid-cols-3 lg:grid-cols-5  gap-4 md:gap-7 mt-6 md:mt-12 ${
//         isArabic ? "dir-rtl" : ""
//       }`}
//       dir={isArabic ? "rtl" : "ltr"}
//     >
//       {translations.explore.items.map((card) => (
//         <div
//           key={card.id}
//           className="w-full h-full rounded-lg flex-shrink-0 relative cursor-pointer"
//         >
//           <div className="relative">
//             <img
//               src={card.imgSrc}
//               alt={card.title}
//               className="w-full h-[200px] object-cover rounded-md"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GridSection;

"use client";
import React from "react";

const GridSection = ({ items, translations }) => {
  const isArabic = translations.type === "ar";

  return (
    <div
      className={`
        grid max-sm:flex max-sm:overflow-x-auto max-sm:space-x-2 
        max-lg:grid-cols-3 lg:grid-cols-5 
        gap-2 md:gap-4 mt-4 md:mt-8 
        max-sm:pb-2 hidescroll
        ${isArabic ? "dir-rtl" : ""}`}
      dir={isArabic ? "ltr" : "ltr"}
    >
      {translations.explore.items.map((card) => (
        <div
          key={card.id}
          className="
            w-full 
            
            rounded-lg 
            flex-shrink-0 
            relative 
            cursor-pointer 
            max-sm:min-w-[130px] 
            max-sm:w-[130px]
            max-sm:first:ml-2 
            max-sm:last:mr-2"
        >
          <div className="relative">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-full  object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
