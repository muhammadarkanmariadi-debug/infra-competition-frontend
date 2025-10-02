import Image from "next/image";
import React from "react";
import { CardLeader } from "./card";

export interface LeaderComponent {
  name: string;
  role: string;
  image: string;
}

const Leader: React.FC<{ datas: LeaderComponent[] }> = ({ datas }) => {
  const pembimbing = datas.find((x) => x.role.toLowerCase() === "pembimbing");
  return (
    <section className="py-20 px-6 bg-white text-center" id="leaders">
      <p className="text-sm text-gray-400 mb-2">Our Core Team</p>
      <h2 className="text-4xl font-bold mb-14">Meet Our Leader’s</h2>

      {/* Baris 1: Pembimbing */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md">
            <Image
              src={pembimbing?.image as string}
              alt={pembimbing?.name as string}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-semibold">{pembimbing?.name}</h3>
          <p className="text-sm mt-1 bg-red-100 text-red-600 px-3 py-1 rounded-full">
            {pembimbing?.role}
          </p>
        </div>
      </div>

      {/* Baris 2: Ketua */}
      <div className="flex justify-center gap-20 mb-14 flex-wrap">
        {datas.slice(1, 3).map((leader, index) => (
          <CardLeader key={index} data={leader} />
        ))}
      </div> 

      {/* Baris 3: Divisi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {datas.slice(3).map((leader, index) => (
          <CardLeader key={index} data={leader} />
        ))}
      </div>
    </section>
  );
};

export default Leader;
