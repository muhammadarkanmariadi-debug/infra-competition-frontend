import Image from "next/image"
import React from "react"
import { TrackRecordProps } from "./TrackRecord"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const RecordCard: React.FC<{data: TrackRecordProps}> = ({ data }) => {
    return (
        <div
            className="bg-white px-[16.5px] py-[22.5px] rounded-[18px] min-w-full min-h-[407px]"
        >
            <Image
                src={data.img}
                alt={data.title}
                width={339}
                height={182}
                className="rounded-[20px] w-full h-[182px]"
            />
            <div className="">
                <div className="bg-secondary-bg mt-[15px] py-2 rounded-[13px] w-[113px] h-[32px] font-[500] text-[12px] text-primary text-center">
                {data.name}
                </div>
                <h2 className="mt-[10px] font-[600] text-[22px] text-primary">
                {data.title}
                </h2>
                <p className="font-[400] text-[15px] text-black">
                {data.desc}{" "}
                </p>
                {data.type == "International" && (
                <div className="flex justify-between mt-6">
                    
                    <p className="relative font-[600] text-[12px] text-primary text-left">
                    <FontAwesomeIcon icon={faGlobe} />  {data.country}
                    </p>
                    
                    <p className="relative font-[400] text-[#BFBFBF] text-[12px] text-right">
                    {data.eventDate}
                    </p>
                </div>
                )
                }
                {data.type == "Event" && (
                    <p className="relative mt-[10px] font-[400] text-[#BFBFBF] text-[12px] text-right">
                {data.eventDate}
                </p>)}
            </div>
            </div>
    )
}

export default RecordCard