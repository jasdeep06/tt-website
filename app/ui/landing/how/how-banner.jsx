"use client"
import MuxPlayer from "./muxPlayer";
import vid from "@/videos/vid.mp4";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowBanner = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className="bg-[#F3F3F3] text-black flex flex-col">
            <div
            style={{
                transform: isInView ? "none" : "translateX(+200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
              ref={ref}
            >
                <p className="text-2xl md:text-3xl text-center self-center py-8">AI dubbing indistinguishable from human dubbing!</p>

            </div>
            <MuxPlayer src={vid}/>
        </div>
    )
}

export default HowBanner;