"use client";
import React from "react";

const GridSection = ({ items, translations }) => {
  const isArabic = translations.type === "ar";

  return (
    <div
      className={`grid  max-sm:grid-cols-2  max-lg:grid-cols-3 lg:grid-cols-5  gap-4 md:gap-7 mt-6 md:mt-12 ${
        isArabic ? "dir-rtl" : ""
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {translations.explore.items.map((card) => (
        <div
          key={card.id}
          className="w-full h-full rounded-lg flex-shrink-0 relative cursor-pointer"
        >
          <div className="relative">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
