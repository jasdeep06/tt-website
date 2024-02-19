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
    const [currentLang, setCurrentLang] = useState('English');
    const audioRef1 = useRef(null);
    const audioRef2 = useRef(null);
    const audioRef3 = useRef(null);
    const audioRef4 = useRef(null);
    const videoRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    const [playing, setPlaying] = useState(false);

    const [isMuted, setIsMuted] = useState(true);
    const audioTracks = {
        'English': "/translated_english.mp3",
        "Spanish": "/translated_spanish.mp3",
        "Italian": "/translated_italian.mp3",
        "French": "/translated_french.mp3",
    };

    const audioRefs = {
        'English': audioRef1,
        "Spanish": audioRef2,
        "Italian": audioRef3,
        "French": audioRef4,
    };

    const languages = Object.keys(audioTracks);
    
    const toggleMute = () => {
        if (isMuted) {
            switchLanguage(currentLang);
        } else {
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current.paused) {
            //play every audio for 1 ms and pause them
            Object.values(audioRefs).forEach((audioRef) => {
                audioRef.current.play();
                audioRef.current.pause();
            });
            videoRef.current.play();
            audioRefs[currentLang].current.play();
            setPlaying(true);
        } else {
            videoRef.current.pause();
            audioRefs[currentLang].current.pause();
            setPlaying(false);
        }
    }

    const switchLanguage = (lang) => {
        if (audioRefs[currentLang].current) {
            //check if video is playing and pause it
            if (!videoRef.current.paused) {
                videoRef.current.pause();
                audioRefs[currentLang].current.pause();
            }
            const currentTime = videoRef.current.currentTime;
            setCurrentLang(lang);
            // audioRef.current.src = audioTracks[lang];
            audioRefs[lang].current.currentTime = currentTime;
            //check if audio has loaded and play it
            audioRefs[lang].current.oncanplay = () => {
                audioRefs[lang].current.play();
                videoRef.current.play();
            };
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
                    videoSrc={"/robot_dog_sample.mp4#t=0.001"}
                    audioTracks={audioTracks}
                    videoRef={videoRef}
                    audioRef1={audioRef1}
                    audioRef2={audioRef2}
                    audioRef3={audioRef3}
                    audioRef4={audioRef4}
                    audioRefs={audioRefs}
                    isMuted={isMuted}
                    currentLang={currentLang}
                    togglePlay={togglePlay}
                />
                </div>
                <div className="flex lg:flex-1 lg:flex-col flex-col-reverse px-2 justify-around lg:gap-0 gap-2" style={{
        transform: paraInView ? "none" : "translateX(50px)",
        opacity: paraInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={paraRef}>
                    {/* <Testimonial 
                    text={t('testimonialText')}
                    name={t('testimonialName')}
                    channel={t('testimonialChannel')}
                    imgSrc="/jaki_final.png"
                    hiddenSm={false}/> */}

                    <p className="self-center text-3xl text-center lg:block hidden">{t('TTinAction')}</p>
                    <p className="self-center text-lg text-center">{t('Instruction')}</p>
                    
                    <LanguageButtons languages={languages} selectedLang={currentLang} switchLanguage={switchLanguage} />
                </div>
            </div>
            <Calculator/>
        </div>
    )
}

export default YouTubeBanner;
