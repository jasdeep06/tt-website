"use client";
import Image from "next/image";
import HowBlock from "../how/how-block";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";
import StyledButton from "../../shared/styledButton";




const ProcessBanner = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const paraRef = useRef(null);
  const paraInView = useInView(paraRef, { once: true });

  return (
    <React.Fragment>
      <div className="hidden lg:grid xl:grid-cols-[1fr_1.5fr_1fr] lg:grid-cols-[1fr_1fr_1fr]  pb-8  xl:text-2xl text-xl gap-3 xl:text-nowrap" style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
        ref={ref}
        id="process"
      >
        <Image src="/globe-64.png" alt="globe" width={75} height={75} className="col-start-2 self-center justify-self-center py-4" />
        <p className="col-start-2 justify-self-center md:text-4xl mb-14  text-nowrap uppercase">The process to go multilingual!</p>
        <div className="col-start-2 justify-self-center">
          <div className="flex justify-end gap-2 text-2xl">
            <Image src="/2.png" alt="1" width={20} height={20} className="size-fit" />
            <div className="flex flex-col">
              <p>You give us your</p>
              <p className="text-[#a9df51] xl:text-3xl text-2xl self-center">project files</p>
            </div>
          </div>
        </div>
        <div className="col-start-1 self-center">
          {/* <HowBlock text="99%" subtext={"of the work is done by our team!"} hex="#5f3edf" angle="3" animate_from='left' invert/> */}
          <div className="flex justify-end gap-2">
            <Image src="/1.png" alt="1" width={20} height={20} className="size-fit" />
            <div className="flex flex-col">
              <p>You create</p>
              <p className="text-[#a9df51] xl:text-3xl text-2xl">Original content</p>
              <p>in your language</p>
            </div>
          </div>
        </div>
        <Image src="/process.png" alt="process" width={400} height={400} className="col-start-2 w-full" />
        {/* <p className="col-start-2 justify-self-center  md:text-lg w-3/5 text-center">You get flawless dubs and access to platform to make tweaks to your liking.</p> */}
        <div className="col-start-2 self-center justify-self-center ml-5">
          <div className="flex justify-end gap-2">
            <Image src="/4.png" alt="1" width={20} height={20} className="size-fit inline-block" />
            <div className="flex flex-col">
              <p>You get perfect <span className="xl:text-3xl text-2xl text-[#a9df51]">subtitles and dubs</span> along with</p>
              <p className="self-center"><span className="xl:text-3xl text-2xl text-[#a9df51] font-bold">Platform access</span> to customize</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 row-start-4 self-center justify-self-start">
          <div className="flex justify-end gap-2">
            <Image src="/3.png" alt="1" width={20} height={20} className="size-fit inline-block" />
            <div className="flex flex-col">
              <p>Expert vetted</p>
              <p className="text-[#a9df51] xl:text-3xl text-2xl">Transcription, Translation</p>
              <p>and <span className="xl:text-3xl text-2xl text-[#a9df51]">AI Dubs</span> for your videos</p>
            </div>
          </div>
        </div>

      </div>

      <div className="lg:hidden ">
      <Image src="/globe-64.png" alt="globe" width={75} height={75} className="m-auto py-4" />
      <p className="mb-14 text-center uppercase text-2xl">The process to go multilingual!</p>
        <div className="flex flex-col gap-3 text-lg mb-5 px-5">
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center  ">
            <Image src="/1.png" alt="1" width={20} height={20} style={{width:"20",height:"20"}} className="size-fit"/>
            {/* <p>You create original content in your language</p> */}
            <p>You create <span className="text-[#a9df51] text-2xl">Original content </span>in your language</p>
          </div>
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center ">
            <Image src="/2.png" alt="1" width={20} height={20} style={{width:"20",height:"20"}} className="size-fit"/>
            <p>You give us your<span className="text-[#a9df51] text-2xl self-center"> project files</span></p>
          </div>
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center ">
            <Image src="/3.png" alt="1" width={20} height={20} className="size-fit"/>
            <p>Expert vetted <span className="text-[#a9df51] text-2xl">Transcription, Translation</span> and <span className="xl:text-3xl text-2xl text-[#a9df51]">AI Dubs</span> for your videos</p>
          </div>
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center">
            <Image src="/4.png" alt="1" width={20} height={20} className="size-fit"/>
            <p>You get perfect <span className="text-2xl text-[#a9df51]">subtitles and dubs</span> along with <span className="xl:text-3xl text-2xl text-[#a9df51] font-bold">Platform access</span> to customize</p>
          </div>
        </div>
      </div>

      <div className="mb-14 flex justify-center">
        <StyledButton text="Know More" />
      </div>
    </React.Fragment>

  )
}

export default ProcessBanner;