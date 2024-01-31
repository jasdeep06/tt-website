"use client"
import Video from 'next-video';
import './muxPlayer.css';
import { useInView } from "framer-motion";
import { useRef } from "react";


const MuxPlayer = ({ src }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            // style={{
            //     transform: isInView ? "none" : "translateX(-200px)",
            //     opacity: isInView ? 1 : 0,
            //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            //   }}
            //   ref={ref}
            >
            <Video src={src} className="mux-player-big-creator" />
        </div>

    )
}

export default MuxPlayer;