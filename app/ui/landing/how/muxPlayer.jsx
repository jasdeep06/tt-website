"use client"
import Video from 'next-video';
import './muxPlayer.css';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// const cardVariants = {
//     offscreen: {
//         y: 300
//     },
//     onscreen: {
//         y: 0,
//         transition: {
//             type: "tween",
//             ease: "easeIn",
//             duration: 0.8,
//         }
//     }
// };

const MuxPlayer = ({ src }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        // <Video src={src} className="mux-player" style={{aspectRatio:9/16,"--bottom-controls":"none","--seek-backward-button": "none","--seek-forward-button": "none",width:"300px",height:`${(16/9)*300}px`}}/>
        <div
            // initial="offscreen"
            // animate="onscreen"
            // viewport={{ once: true, amount: 0.8 }}
            // variants={cardVariants}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
              ref={ref}
            >
            <Video src={src} className="mux-player-big" />
        </div>

    )
}

export default MuxPlayer;