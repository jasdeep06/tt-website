"use client"
import MuxPlayer from "./muxPlayer";
// import vid from "../../../../videos/vid.mp4"
import how_vid from "../../../../videos/how_video.mp4"
import { useInView } from "framer-motion";
import { useRef } from "react";
import HowBlock from "./how-block";
import Image from "next/image";
import ResultBlock from "./result-block";

const HowBanner = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className="bg-[#F3F3F3] text-black flex flex-col py-12 px-5" id="how">
            <div
                style={{
                    transform: isInView ? "none" : "translateX(+200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ref={ref}
            >
                <p className="text-2xl md:text-3xl text-center self-center mb-8">AI dubbing indistinguishable from human dubbing!</p>

            </div>
            <div className="flex md:flex-row md:flex-wrap flex-col gap-3">
            <MuxPlayer src={how_vid} />
            <div className="flex flex-col justify-around flex-wrap m-auto">
                <HowBlock text="AI" subtext="Our proprietary best in class AI models"  hex="#5f3edf" angle="0" animate_from='left'/>
                <HowBlock text="Experts" subtext="Our expert localization team" hex="#5f3edf" angle="0" animate_from='bottom'/>
                <HowBlock text="Value" subtext="Superior Quality at quarter price" hex="#5f3edf" angle="0" animate_from='right'/>
            </div>
            </div>
        </div>
    )
}

export default HowBanner;