
import Image from "next/image"
import React from "react"

type RecordCardPosts = {
    data: Posts
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Posts } from "./TrackRecord"

const RecordCard: React.FC<RecordCardPosts> = ({ data }) => {
    
    return (
        <div
            className="bg-white px-[16.5px] py-[22.5px] rounded-[18px] max-w-[339px] min-h-[407px]"
        >
            <Image
                src={`http://localhost:8000/storage/${data.thumbnail}`}
                alt={data.title}
                width={339}
                height={182}
                className="rounded-[20px] w-[339px] h-[182px] object-cover"
            />
            <div className="">
                <div className="bg-secondary-bg mt-[15px] py-2 rounded-[13px] w-[113px] h-[32px] font-[500] text-[12px] text-primary text-center">
                {data.author.name}
                </div>
                <h2 className="mt-[10px] font-[600] text-[22px] text-primary">
                {data.title}
                </h2>
                <p className="font-[400] text-[15px] text-black">
                {data.short_body}{" "}
                </p>
            </div>
            </div>
    )
}

export default RecordCard
