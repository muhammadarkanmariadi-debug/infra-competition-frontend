'use client'
import { BsFillRocketFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-up"

type onButtonClick = {
    onButtonClick: () => void;
}

const ScrollTop = () => {
    return (
       <ScrollToTop showUnder={160}>
            <div className="p-3 bg-white rounded-full shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
              <BsFillRocketFill className="text-primary text-3xl" />
            </div>
        </ScrollToTop>
    )
}

export default ScrollTop;