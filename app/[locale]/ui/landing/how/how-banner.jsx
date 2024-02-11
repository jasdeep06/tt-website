"use client"
import MuxPlayer from "./muxPlayer";
// import vid from "../../../../videos/vid.mp4"
import how_vid from "../../../../../videos/how_video.mp4"
import { useInView } from "framer-motion";
import { useRef } from "react";
import HowBlock from "./how-block";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HowBanner = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const t = useTranslations('How');


    return (
        <div className="bg-[#F3F3F3] text-black flex flex-col py-12 pt-4 px-5 pb-[80px] overflow-hidden" id="how">
            <Image src="/speaker_high.png" width={75} height={75} alt="how-logo" className="self-center mb-8" />
            <div
                style={{
                    transform: isInView ? "none" : "translateX(+200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ref={ref}
            >
                <p className="text-2xl md:text-4xl text-center self-center mb-[80px]  uppercase">{t('AIDubbing')}</p>

            </div>
            <div className="flex md:flex-row md:flex-wrap flex-col gap-3">
            <MuxPlayer src={how_vid} />
            <div className="flex flex-col justify-around flex-wrap m-auto">
                <HowBlock text={t('AI')} subtext={t('AI_Subtext')}  hex="#5f3edf" angle="0" animate_from='left'/>
                <HowBlock text={t('Experts')} subtext={t('Experts_Subtext')} hex="#5f3edf" angle="0" animate_from='bottom'/>
                <HowBlock text={t('Value')} subtext={t('Value_Subtext')} hex="#5f3edf" angle="0" animate_from='right'/>
            </div>
            </div>
        </div>
    )
}

export default HowBanner;