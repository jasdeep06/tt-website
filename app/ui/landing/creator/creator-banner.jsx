import Image from "next/image"
import vid from "../../../../videos/vid.mp4"
import MuxPlayer from "./muxPlayer";
import Testimonial from "../youtube/testimonial";
import HowBlock from "../how/how-block";
import Calculator from "./calculator";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CreatorBanner = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <div className="text-white flex flex-col p-5" style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}
          id="translation"
          >
            <Image src="/video_translation_compact.png" width={75} height={75} alt="yt-logo" className="self-center" />
            <p className="md:text-3xl text-xl my-2 text-center self-center">COMPLETE VIDEO TRANSLATION</p>
            <p className="md:text-xl text-lg my-2 self-center text-center">Supercharge your reach with <span className="md:text-3xl font-bold">DUBBING</span> accompanied by <span className="md:text-3xl font-bold">SCREEN TRANSLATION</span> and magical <span className="md:text-3xl font-bold">LIP SYNC</span>!</p>
            <div className="flex lg:flex-row flex-col mt-14 gap-3">
                <MuxPlayer src={vid} />
                <div className="flex flex-col justify-around lg:mt-0 mt-2">
                <Testimonial 
                text="TranslateTracks is a game changer for me. I can now reach a global audience with my content. I can't wait to see what they do next!" 
                name="Elon Musk" channel="Tesla" hiddenSm={false}
                imgSrc={'/francisco.png'}/>
                <div className="xl:flex xl:flex-wrap xl:justify-around hidden">
                <HowBlock text={"DUBBING"} small hex="#5f3edf" angle="3" animate_from='left' invert/>
                <HowBlock text={"SCREEN TRANSLATION"} small hex="#5f3edf" angle="-3" animate_from='down' invert/>
                <HowBlock text={"LIP SYNC"} small hex="#5f3edf" angle="3" animate_from='right' invert/>

                </div>
                </div>
            </div>
            <Calculator/>
        </div>
    )
}

export default CreatorBanner;