import Image from "next/image";
import vid from "../../../../../videos/creator_video.mp4";
import MuxPlayer from "./muxPlayer";
import Testimonial from "../youtube/testimonial";
import HowBlock from "../how/how-block";
import Calculator from "./calculator";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl"; // Import useTranslations


const CreatorBanner = () => {
    const t = useTranslations('Creator'); // Assuming 'CreatorBanner' is your namespace for this component's translations
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
            <p className="md:text-3xl text-xl my-2 text-center self-center">{t('completeVideoTranslationTitle')}</p>
            {/* <p className="md:text-xl text-lg my-2 self-center text-center">{t('superchargeYourReach')}</p> */}
            <p className="md:text-xl text-lg my-2 self-center text-center">{t('superchargeYourReach1')} <span className="md:text-3xl font-bold">{t('superchargeYourReach2')} </span>{t('superchargeYourReach3')} <span className="md:text-3xl font-bold">{t('superchargeYourReach4')} </span>{t('superchargeYourReach5')} <span className="md:text-3xl font-bold">{t('superchargeYourReach6')}</span>!</p>
            <div className="flex lg:flex-row flex-col mt-14 gap-3">
                <MuxPlayer src={vid}/>
                <div className="flex flex-col justify-around lg:mt-0 mt-2">
                <Testimonial 
                text={t('testimonialText')}
                name={t('testimonialName')}
                channel={t('testimonialChannel')}
                hiddenSm={false}
                imgSrc={'/francisco_white.png'}/>
                <div className="xl:flex xl:flex-wrap xl:justify-around hidden">
                <HowBlock text={t('dubbing')} small hex="#5f3edf" angle="3" animate_from='left' invert/>
                <HowBlock text={t('screenTranslation')} small hex="#5f3edf" angle="-3" animate_from='down' invert/>
                <HowBlock text={t('lipSync')} small hex="#5f3edf" angle="3" animate_from='right' invert/>
                </div>
                </div>
            </div>
            <Calculator/>
        </div>
    )
}

export default CreatorBanner;
