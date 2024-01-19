"use client"
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowBlock = ({text,subtext,hex,angle,animate_from}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let animate_string = ""

    if(animate_from == "left") animate_string = "translateX(-50px)"
    else if(animate_from == "right") animate_string = "translateX(50px)"
    else if(animate_from == "bottom") animate_string = "translateY(50px)"


    const className = `flex flex-row items-center justify-center bg-[#151515] p-2 my-7 md:my-16 md:w-1/4 border-l-8 border-[${hex}] rounded-xl`;
    return (
        <div className={className} style={{
            transform: isInView ? `rotate(${angle + "deg"})` : `${animate_string} rotate(${angle + "deg"})`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}
          >
            <p className="text-5xl md:text-7xl text-center self-center text-white">{text}</p>
            <p className="text-sm md:text-base self-center text-center text-white flex-1 ml-4">{subtext}</p>
        </div>
    )
    
}

export default HowBlock;