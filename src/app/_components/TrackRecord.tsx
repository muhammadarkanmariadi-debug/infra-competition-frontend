"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import RecordCard from "./RecordCard";

export interface TrackRecordProps {
  name: string;
  desc: string;
  img: string;
  eventDate: string;
  title: string;
  type: string;
  country? : string;
}

const TrackRecord: React.FC<{ datas: TrackRecordProps[] }> = ({ datas }) => {
  const [current, setCurrent] = useState(0);
  const [currentInternational, setCurrentInternational] = useState(0);
  const internationalLength = datas.filter((d) => d.type === 'International').length;
  const length = datas.filter((d) => d.type === 'Event').length;
  const visibleCard = 2;
  const maxIndex = length - visibleCard;
  const maxInternationalIndex = internationalLength - visibleCard;
  const cardWidth = 377;
  const gap = 43;
  useEffect(() => {
    const timerInter = setInterval(() => {
      setCurrentInternational((prev) => (prev === maxInternationalIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timerInter);
  }, [internationalLength]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [length]);
  return (
    <div className="relative bg-secondary mt-31 w-full" id="track">
      <div className="-top-[15px] left-0 absolute w-full overflow-hidden leading-none">
        <svg
          width="1440"
          height="60"
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
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
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9E2EA" />
              <stop offset="1" stopColor="#F5F5F5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pt-[60px] pb-[30px] text-center">
        <h4 className="font-[500] text-[15px] text-white/61">
          Prestasi Siswa
        </h4>
        <h1 className="font-[700] text-[45px] text-white">Track Record</h1>
      </div>
      <div className="flex max-sm:flex-col items-center mt-[30px] pb-[30px] w-full">
        <div className="min-xl:hidden max-sm:block w-full text-center">
          <h4 className="font-[500] text-[15px] text-white/61">
            Event & Achievements
          </h4>
          <h1 className="font-[700] text-[45px] text-white">Our Event</h1>
        </div>
        <div className="xl:relative xl:px-0 rounded-[18px] min-xl:w-[60%] overflow-x-hidden shrink-0">
          <div
            className="flex flex-row-reverse gap-[43px] transition-transform duration-300"
            style={{
              transform: `translateX(${current * (cardWidth + gap)}px)`,
            }}
          >
            {datas.filter((d) => d.type === 'Event').map((data, index) => (
              <RecordCard key={index} data={data} />
            ))}
            {datas.filter((d) => d.type === 'Event').slice(0).map((data, index) => (
              <RecordCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="right-0 absolute bg-[radial-gradient(ellipse_39.33%_39.33%_at_49.95%_56.31%,_rgba(255,_255,_255,_0.20)_12%,_rgba(255,_255,_255,_0)_100%)] mt-[-90px] w-150 h-127 rotate-[2.17deg]"></div>
        <div className="max-sm:hidden min-xl:block mt-[-150px] w-[40%] text-center">
          <h4 className="font-[500] text-[15px] text-white/61">
            Event & Achievements
          </h4>
          <h1 className="font-[700] text-[45px] text-white">Our Event</h1>
        </div>
      </div>
      <div className="flex max-sm:flex-col items-center mt-[70px] pb-[30px] w-full">
        <Image
          src="/assets/image/meca-international.png"
          alt="Arrow Down"
          width={490}
          height={390}
          className="max-sm:hidden left-0 z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] mt-[-58px]"
        />
        <Image
          src="/assets/image/icon-piala.png"
          alt="Arrow Down"
          width={110}
          height={110}
          className="max-sm:hidden left-[360px] z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] mt-[-420px]"
        />
        <Image
          src="/assets/image/icon-global.png"
          alt="Arrow Down"
          width={87}
          height={87}
          className="max-sm:hidden left-[401px] z-[1] min-xl:absolute drop-shadow-[0_3px_90px_rgba(255,255,255,0.73)] mt-[88.5px]"
        />
        <div className="max-sm:hidden left-[364px] z-[222] min-xl:absolute mt-[-90px]">
          <div className="bg-[#ffffff] px-[28px] py-[15px] border-[1px] border-[E04E4E] rounded-[12px_12px_0px_12px] w-[245px] h-[54px] font-[600] text-[15px] text-secondary-text text-center">
            Metic Go Internasional?
          </div>
        </div>
        <div className="min-w-[50%]"></div>
        <div className="min-xl:hidden max-sm:block w-full text-center">
          <h4 className="font-[500] text-[15px] text-white/61">
            Event & Achievements
          </h4>
          <h1 className="font-[700] text-[45px] text-white">Metic Go International!</h1>
        </div>
        <div className="relative gap-[43px] max-sm:px-3.5 max-sm:py-7 rounded-[18px] w-[50%] max-sm:w-full overflow-x-hidden shrink-0">
          <div
            className="flex gap-[43px] transition-transform duration-300"
            style={{
              transform: `translateX(-${currentInternational * (cardWidth + gap)}px)`,
            }}
          >
            {datas.filter((d) => d.type === 'International').map((data, index) => (
                <RecordCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="block bg-[#E9E2EA] h-5"></div>
    </div>
  );
};
export default TrackRecord;
