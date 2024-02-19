"use client"
import { useInView } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoSrc, audioTracks,audioRef,isMuted,videoRef,currentLang,toggleMute }) => {

    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    
    useEffect(() => {
        if (videoRef.current && audioRef.current) {
            videoRef.current.onseeked = () => {
                audioRef.current.currentTime = videoRef.current.currentTime;
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
                muted 
                loop
                onClick={toggleMute}
                className="rounded-3xl lg:w-[640px] w-full"
                playsInline
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <audio 
                ref={audioRef} 
                hidden
                muted={isMuted}
            >
                <source src={audioTracks[currentLang]} type="audio/mp3" />
            </audio>
        </div>
    );
};

export default VideoPlayer;
