"use client"
import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoSrc, audioTracks }) => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [currentLang, setCurrentLang] = useState('English');
    const [isMuted, setIsMuted] = useState(true);

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

    const toggleMute = () => {
        if(isMuted){
            switchLanguage(currentLang);
        }else{
            setIsMuted(!isMuted);
        }
    };

    useEffect(() => {
        if (videoRef.current && audioRef.current) {
            videoRef.current.onseeked = () => {
                audioRef.current.currentTime = videoRef.current.currentTime;
            };
        }
    }, []);

    return (
        <div>
            <video 
                ref={videoRef} 
                muted 
                autoPlay 
                loop
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
            <div>
                <button onClick={toggleMute}>
                    {isMuted ? 'Unmute' : 'Mute'}
                </button>
                {Object.keys(audioTracks).map((lang) => (
                    <button key={lang} onClick={() => switchLanguage(lang)}>
                        {lang}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;
