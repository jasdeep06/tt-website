"use client";
import LanguageButtons from "./language-buttons";
import Testimonial from "./testimonial";
import VideoPlayer from "./video-player";
import { useState, useRef } from "react";
import Image from "next/image";
import Calculator from "./calculator";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl"; // Make sure to import useTranslations

const YouTubeBanner = () => {
    const t = useTranslations('Youtube'); // Initialize translations
    const [currentLang, setCurrentLang] = useState('Italian');
    const audioRef = useRef(null);
    const videoRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });

    const [isMuted, setIsMuted] = useState(true);
    const audioTracks = {
        'English': "https://translatetracks.s3.amazonaws.com/user-data/8e6168fb-26ab-4489-ba98-91a714d30565/789b4702-5d8c-45a0-9d91-5f2d07c3815e/output_audio.mp3",
        "Spanish": "https://translatetracks.s3.amazonaws.com/user-data/8e6168fb-26ab-4489-ba98-91a714d30565/789b4702-5d8c-45a0-9d91-5f2d07c3815e/output_audio_with_bg.mp3",
        "Italian": "https://translatetracks.s3.amazonaws.com/user-data/8e6168fb-26ab-4489-ba98-91a714d30565/789b4702-5d8c-45a0-9d91-5f2d07c3815e/output_audio_with_bg.mp3",
        "French": "https://translatetracks.s3.amazonaws.com/user-data/8e6168fb-26ab-4489-ba98-91a714d30565/789b4702-5d8c-45a0-9d91-5f2d07c3815e/output_audio_with_bg.mp3"
    };

    const languages = Object.keys(audioTracks);
    
    const toggleMute = () => {
        if (isMuted) {
            switchLanguage(currentLang);
        } else {
            setIsMuted(!isMuted);
        }
    };

    const switchLanguage = (lang) => {
        if (audioRef.current) {
            const currentTime = videoRef.current.currentTime;

            setCurrentLang(lang);
            audioRef.current.src = audioTracks[lang];
            audioRef.current.currentTime = currentTime;
            audioRef.current.play();
            setIsMuted(false);
        }
    };

    return (
        <div className="bg-[#F3F3F3] text-black flex flex-col p-5 overflow-hidden" style={{
            transform: isInView ? "none" : "translateY(150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}
          id="mla"
          >
            <Image src="/yt.png" width={75} height={75} alt="yt-logo" className="self-center" />
            <p className="md:text-4xl text-xl my-2 text-center self-center">{t('youtubeMultiLanguageAudioTrack')}</p>
            <p className="md:text-2xl text-lg my-2 self-center">{t('languageBarrier')}</p>
            <div className="md:flex lg:flex-row flex-col mt-12 gap-3">
                <div>
                <VideoPlayer
                    videoSrc={"https://translatetracks.s3.amazonaws.com/videos/8e6168fb-26ab-4489-ba98-91a714d30565/sample_test.mp4"}
                    audioTracks={audioTracks}
                    videoRef={videoRef}
                    audioRef={audioRef}
                    isMuted={isMuted}
                    currentLang={currentLang}
                    toggleMute={toggleMute}
                />
                </div>
                <div className="flex lg:flex-col flex-col-reverse px-2 justify-between lg:gap-0 gap-10 " style={{
        transform: paraInView ? "none" : "translateX(50px)",
        opacity: paraInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={paraRef}>
                    <Testimonial 
                    text={t('testimonialText')}
                    name={t('testimonialName')}
                    channel={t('testimonialChannel')}
                    imgSrc="/jaki_final.png"
                    hiddenSm={false}/>
                    
                    <LanguageButtons languages={languages} selectedLang={currentLang} switchLanguage={switchLanguage} />
                </div>
            </div>
            <Calculator/>
        </div>
    )
}

export default YouTubeBanner;
