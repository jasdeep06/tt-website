"use client";
import Image from "next/image";
import HowBlock from "../how/how-block";
import { useRef } from "react";
import { useInView } from "framer-motion";




const ProcessBanner = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });

    return (
    //     <div>
    //         <p className="text-center md:text-3xl py-8">The process to go multilingual!</p>
    //         <div className="flex flex-col">
    //         <p  className="self-center">You give us your asset files.</p>
    //         <div className="flex">
    //         <HowBlock text="99%" subtext={"of the work is done by our team!"} hex="#5f3edf" angle="3" animate_from='left'/>
    //         {/* <p className="h-fit">Hi</p> */}
    //         {/* <div className="flex flex-col"> */}
    //             <Image src="/process.png" alt="process" width={500} height={500} className="basis-1/3"/>
    //         {/* </div> */}
    //         </div>
    //         </div>
    //   </div>
    <div className="grid grid-cols-[1fr_2fr_1fr] pb-8" style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={ref}
      id="process"
      >
    <Image src="/globe-64.png" alt="globe" width={75} height={75} className="col-start-2 self-center justify-self-center py-4" />
    <p className="col-start-2 justify-self-center md:text-3xl py-8">The process to go multilingual!</p>
    <p className="col-start-2 justify-self-center md:text-lg">You give us your asset files.</p>
    <div className="col-start-1 self-center">
    <HowBlock text="99%" subtext={"of the work is done by our team!"} hex="#5f3edf" angle="3" animate_from='left' invert/>
    </div>
    <Image src="/process.png" alt="process" width={500} height={500} className="col-start-2 w-full"/>
    <p className="col-start-2 justify-self-center  md:text-lg w-3/5 text-center">You get flawless dubs and access to platform to make tweaks to your liking.</p>
    <div className="col-start-3 row-start-4 self-center" style={{
        transform: paraInView ? "none" : "translateX(50px)",
        opacity: paraInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={paraRef}>
        <p className="py-2">This is the description of feature 1</p>
        <p className="py-2">This is the description of feature 2</p>
        <p className="py-2">This is the description of feature 3</p>
    </div>
</div>
    )
}

export default ProcessBanner;