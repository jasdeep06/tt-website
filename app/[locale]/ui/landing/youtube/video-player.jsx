"use client"
import { useInView } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoSrc, audioTracks,audioRef1,audioRef2,audioRef3,audioRef4,audioRefs,isMuted,videoRef,currentLang,togglePlay }) => {

    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    
    useEffect(() => {
        if (videoRef.current && audioRefs[currentLang].current) {
            videoRef.current.onseeked = () => {
                audioRefs[currentLang].current.currentTime = videoRef.current.currentTime;
            };
        }
    }, []);

    return (
        <div className='lg:w-[640px] w-full' style={{
            transform: paraInView ? "none" : "translateX(-50px)",
            opacity: paraInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={paraRef} >
            <video 
                ref={videoRef} 
                loop
                onClick={togglePlay}
                className="rounded-3xl lg:w-[640px] w-full"
                playsInline
                muted
                preload='metadata'
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <audio 
                ref={audioRef1} 
                hidden
            >
                <source src={audioTracks['English']} type="audio/mp3" />
            </audio>
            <audio 
                ref={audioRef2} 
                hidden
            >
                <source src={audioTracks['Spanish']} type="audio/mp3" />
            </audio>
            <audio 
                ref={audioRef3} 
                hidden
            >
                <source src={audioTracks['Italian']} type="audio/mp3" />
            </audio>
            <audio 
                ref={audioRef4} 
                hidden
            >
                <source src={audioTracks['French']} type="audio/mp3" />
            </audio>
        </div>
    );
};

export default VideoPlayer;
