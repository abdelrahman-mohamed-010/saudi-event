"use client";
import React, { useRef, useEffect } from "react";

const GridSection = ({ items, translations }) => {
  const containerRef = useRef(null);
  const isArabic = translations.type === "ar";

  useEffect(() => {
    // Only apply initial scroll on Arabic small devices
    if (isArabic && window.innerWidth <= 640) {
      const container = containerRef.current;
      if (container) {
        // Scroll to the leftmost position
        container.scrollLeft = container.scrollWidth;
      }
    }
  }, [isArabic]);

  return (
    <div
      ref={containerRef}
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
              className="w-full object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
