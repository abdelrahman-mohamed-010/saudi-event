"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const ScrollableSection = ({ items, translations }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isArabic = translations.type === "ar";

  useEffect(() => {
    const checkScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        // For Arabic, we need to check scrolling differently due to RTL layout
        if (isArabic) {
          // In RTL, scrollLeft is 0 when at the rightmost position
          const maxScroll =
            scrollElement.scrollWidth - scrollElement.clientWidth;
          setCanScrollLeft(scrollElement.scrollLeft < maxScroll - 1);
          setCanScrollRight(scrollElement.scrollLeft > 1);
        } else {
          // LTR scrolling remains the same
          setCanScrollLeft(scrollElement.scrollLeft > 1);
          setCanScrollRight(
            scrollElement.scrollWidth >
              scrollElement.scrollLeft + scrollElement.clientWidth + 1
          );
        }
      }
    };

    checkScroll();
    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", checkScroll);
    return () => scrollElement?.removeEventListener("scroll", checkScroll);
  }, [isArabic]);

  const scroll = (direction) => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollAmount = 300;

      // Adjust scroll direction based on language
      const actualDirection = isArabic
        ? direction === "left"
          ? "right"
          : "left"
        : direction;

      const scrollOptions = {
        left: actualDirection === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      };

      scrollElement.scrollBy(scrollOptions);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={`flex overflow-auto hidescroll gap-4 md:gap-7 mt-6 md:mt-12 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {translations.explore.items.map((card) => (
          <div
            key={card.id}
            className="w-auto md:h-[200px] rounded-lg flex-shrink-0 relative cursor-pointer"
          >
            <div className="relative">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-ato h-[200px] object-cover rounded-md"
              />
              {/* <div className="absolute inset-0 flex items-end justify-center pb-7 max-md:pb-4">
                <span className="text-orange-400 font-semibold px-2 py-1 rounded text-sm text-center">
                  {card.description}
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Chevrons for Non-Arabic (LTR) */}
      {!isArabic && (
        <>
          {canScrollRight && (
            <ChevronRight
              onClick={() => scroll("right")}
              className="hidden md:block absolute -right-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
            />
          )}
          {canScrollLeft && (
            <ChevronLeft
              onClick={() => scroll("left")}
              className="hidden md:block absolute -left-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
            />
          )}
        </>
      )}

      {/* Navigation Chevrons for Arabic (RTL) */}
      {isArabic && (
        <>
          {canScrollLeft && (
            <ChevronLeft
              onClick={() => scroll("right")}
              className="hidden md:block absolute -left-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
            />
          )}
          {canScrollRight && (
            <ChevronRight
              onClick={() => scroll("left")}
              className="hidden md:block absolute -right-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
            />
          )}
        </>
      )}
    </div>
  );
};

export default ScrollableSection;
