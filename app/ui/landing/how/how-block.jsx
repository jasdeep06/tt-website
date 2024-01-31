"use client"
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowBlock = ({text,subtext,hex,angle,animate_from,small=false,invert=false}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    let animate_string = ""

    if(animate_from == "left") animate_string = "translateX(-50px)"
    else if(animate_from == "right") animate_string = "translateX(50px)"
    else if(animate_from == "bottom") animate_string = "translateY(50px)"

    const margin = small ? "my-7" : "my-7"
    const bg = !invert ? "#151515" : "#F3F3F3"
    const font_color = !invert ? "text-white" : "text-black"


    const className = `flex flex-row h-fit items-center justify-center bg-[${bg}] p-2 my-7 md:${margin} border-l-8 border-[${hex}] rounded-xl`;
    // const className = `flex flex-row items-center justify-center bg-[#151515] p-2 my-7 md:my-16 md:w-1/4 border-l-8 border-[#5f3edf] rounded-xl`;

    const classNameSmall = `text-5xl md:text-3xl text-center self-center ${font_color}`
    const classNameBig = `text-5xl md:text-7xl text-center self-center ${font_color}`
    const classNameSubText = `text-sm md:text-base self-center text-center flex-1 ml-4 ${font_color}`

    const classNameFont = small ? classNameSmall : classNameBig;

    return (
        <div className={className} style={{
            transform: isInView ? `rotate(${angle + "deg"})` : `${animate_string} rotate(${angle + "deg"})`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}
          >
            <p className={classNameFont}>{text}</p>
            <p className={classNameSubText}>{subtext}</p>
        </div>
    )
    
}

export default HowBlock;