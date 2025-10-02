import Image from "next/image"
import React from "react"
import { TrackRecordProps } from "./TrackRecord"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const RecordCard: React.FC<{data: TrackRecordProps}> = ({ data }) => {
    return (
        <div
            className="min-w-[377px] min-h-[407px] bg-white rounded-[18px] px-[16.5px] py-[22.5px]"
        >
            <Image
                src={data.img}
                alt={data.title}
                width={339}
                height={182}
                className="w-[339px] h-[182px] rounded-[20px]"
            />
            <div className="">
                <div className="w-[113px] h-[32px] bg-secondary-bg text-primary rounded-[13px] text-center text-[12px] font-[500] mt-[15px] py-2">
                {data.name}
                </div>
                <h2 className="text-[22px] font-[600] text-primary mt-[10px]">
                {data.title}
                </h2>
                <p className="text-[15px] text-black font-[400] ">
                {data.desc}{" "}
                </p>
                {data.type == "International" && (
                <div className="flex justify-between mt-6">
                    
                    <p className="relative text-left text-[12px] text-primary font-[600]">
                    <FontAwesomeIcon icon={faGlobe} />  {data.country}
                    </p>
                    
                    <p className="relative text-right text-[12px] text-[#BFBFBF] font-[400]">
                    {data.eventDate}
                    </p>
                </div>
                )
                }
                {data.type == "Event" && (
                    <p className="relative text-right text-[12px] mt-[10px] text-[#BFBFBF] font-[400]">
                {data.eventDate}
                </p>)}
            </div>
            </div>
    )
}

export default RecordCard