import Adventure from "@/components/Adventure";
import BookTicket from "@/components/BookTicket";
import ContactForm from "@/components/ContactForm";
import Dbr from "@/components/Dbr";
import Footer from "@/components/Footer";
import Heritage from "@/components/Heritage";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import ScrollableSection from "@/components/ScrollableSection";
import Slider from "@/components/Slider";
import Sponsers from "@/components/Sponsers";
import React from "react";
import arLocales from "../../../public/locales/ar.json";
import enLocales from "../../../public/locales/en.json";
import Camping from "@/components/Camping";

const Page = async ({ params }) => {
  const lang = (await params).lang;
  const translations = lang === "ar" ? arLocales : enLocales;

  const dummyData = [
    {
      id: 1,
      title: "Card 1",
      imgSrc: "/images/exp-12.png",
      description: "Fresh",
    },
    {
      id: 2,
      title: "Card 2",
      imgSrc: "/images/exp-22.png",
      description: "Bold",
    },
    {
      id: 3,
      title: "Card 3",
      imgSrc: "/images/exp-32.png",
      description: "Bold",
    },
    {
      id: 4,
      title: "Card 4",
      imgSrc: "/images/exp-42.png",
      description: "Bold",
    },
    {
      id: 5,
      title: "Card 5",
      imgSrc: "/images/exp-52.png",
      description: "Bold",
    },
  ];

  return (
    <div className="">
      <Hero lang={lang} />
      <Location translations={translations} />
      <img
        src="/images/zigzag.png"
        className=" w-full h-[60px] object-cover mt-20 "
      />
      <section className="text-white md:px-24 px-4 pt-20 2xl:px-40  relative">
        <h1 className="text-[28px] max-sm:text-lg">
          {translations.explore.explore}
        </h1>
        <ScrollableSection items={dummyData} translations={translations} />
      </section>
      <Adventure translations={translations} />
      <Heritage translations={translations} />
      <Dbr translations={translations} />
      <Camping translations={translations} />
      {/* <Slider items={dummyData} /> */}
      <BookTicket translations={translations} />
      <ContactForm translations={translations} />
      <Sponsers />
      <Footer translations={translations} />
    </div>
  );
};

export default Page;
