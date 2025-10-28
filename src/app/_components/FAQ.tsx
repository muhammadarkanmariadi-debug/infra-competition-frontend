"use client";
import Image from "next/image";
import { FAQCard } from "./card";
import { dataFAQ } from "./const/datas";
import { useEffect, useState } from "react";

export default function Faq() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const changeSlideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dataFAQ.length);
    }, 5000);
    return () => clearInterval(changeSlideInterval);
  }, [currentSlide]);

  return (
    <>
      <div className="relative bg-secondary mt-31 w-full" id="FAQ">
        <div className="-top-[15px] left-0 absolute w-full overflow-hidden leading-none">
          <svg
            width="1440"
            height="60"
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto">
            <path
              d="M0 20 Q720 50 1440 20 L1440 0 Q720 10 0 0 Z"
              fill="url(#gradienName)"
            />
            <defs>
              <linearGradient
                id="gradienName"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#E9E2EA" />
                <stop offset="1" stopColor="#F5F5F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section className="relative bg-[#E55959] px-6 py-16 overflow-hidden">
          {/* Section Title */}
          <h2 className="mb-10 font-bold text-white text-3xl text-center">
            Benefit & FAQ
          </h2>

          {/* Cards Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}>
              {dataFAQ.map((faq, index) => (
                <div key={index} className="flex-shrink-0 px-2 w-full">
                  <FAQCard {...faq} />
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="z-10 relative flex justify-center items-center gap-x-2 mt-8">
            {Array.from({ length: dataFAQ.length }).map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)}>
                <div
                  className={`rounded-full bg-white transition-all duration-300 ${
                    currentSlide === index
                      ? "w-[0.625rem] h-[0.625rem] bg-opacity-100"
                      : "w-2 h-2 bg-opacity-[28%]"
                  }`}></div>
              </button>
            ))}
          </div>

 
        </section>
        <div className="block bg-[#E9E2EA] h-5"></div>
      </div>
    </>
  );
}
