"use client";
import Image from "next/image";
import HowBlock from "../how/how-block";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from "react";
import StyledButton from "../../shared/styledButton";
import { useTranslations } from "next-intl";

const ProcessBanner = () => {
  const t = useTranslations('Process');

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
        <p className="col-start-2 justify-self-center md:text-4xl mb-14  text-nowrap uppercase">{t('processTitle')}</p>
        <div className="col-start-2 justify-self-center">
          <div className="flex justify-end gap-2 text-2xl">
            <Image src="/2.png" alt="1" width={20} height={20} className="size-fit" />
            <div className="flex flex-col">
              <p>{t('step1Part1')}</p>
              <p className="text-[#a9df51] xl:text-3xl text-2xl self-center">{t('step1Part2')}</p>
            </div>
          </div>
        </div>
        <div className="col-start-1 self-center">
          <div className="flex justify-end gap-2">
            <Image src="/1.png" alt="1" width={20} height={20} className="size-fit" />
            <div className="flex flex-col">
              <p>{t('step2Part1')}</p>
              <p className="text-[#a9df51] xl:text-3xl text-2xl">{t('step2Part2')}</p>
              <p>{t('step2Part3')}</p>
            </div>
          </div>
        </div>
        <Image src="/process.png" alt="process" width={400} height={400} className="col-start-2 w-full" />
        <div className="col-start-2 self-center justify-self-center ml-5 ">
          <div className="flex justify-end gap-2">
            <Image src="/4.png" alt="1" width={20} height={20} className="size-fit inline-block" />
            <div className="flex flex-col">
              <p>{t('step3Part1')} <span className="xl:text-3xl text-2xl text-[#a9df51]">{t('step3Part2')}</span> {t('step3Part3')}</p>
              <p className="self-center"><span className="xl:text-3xl text-2xl text-[#a9df51] font-bold">{t('step3Part4')}</span> {t('step3Part5')}</p>
            </div>
          </div>
        </div>
        <div className="col-start-3 row-start-4 self-center justify-self-start text-wrap">
          <div className="flex justify-end gap-2">
            <Image src="/3.png" alt="1" width={20} height={20} className="size-fit inline-block" />
            <div className="flex flex-col">
              <p>{t('step4Part1')}</p>
              <p className="text-[#a9df51] xl:text-3xl text-2xl">{t('step4Part2')}</p>
              <p>{t('step4Part3')} <span className="xl:text-3xl text-2xl text-[#a9df51]">{t('step4Part4')}</span> {t('step4Part5')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden "  style={{
        transform: paraInView ? "none" : "translateY(150px)",
        opacity: paraInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
        ref={paraRef}
        id="process">
      <Image src="/globe-64.png" alt="globe" width={75} height={75} className="m-auto py-4" />
      <p className="mb-14 text-center uppercase text-2xl">{t('processTitle')}</p>
        <div className="flex flex-col gap-3 text-lg mb-5 px-5">
          { /* Your mobile view content with t('key') replacements */ }
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center  ">
            <Image src="/1.png" alt="1" width={20} height={20} style={{width:"20",height:"20"}} className="size-fit"/>
            {/* <p>You create original content in your language</p> */}
            <p>{t('step2Part1')}<span className="text-[#a9df51] text-2xl"> {t('step2Part2')} </span> {t('step2Part3')} </p>
          </div>
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center ">
            <Image src="/2.png" alt="1" width={20} height={20} style={{width:"20",height:"20"}} className="size-fit"/>
            <p>{t('step1Part1')}<span className="text-[#a9df51] text-2xl self-center"> {t('step1Part2')}</span></p>
          </div>
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center ">
            <Image src="/3.png" alt="1" width={20} height={20} className="size-fit"/>
            <p>{t('step3Part1')} <span className="text-[#a9df51] text-2xl">{t('step3Part2')}</span> {t('step3Part3')} <span className="xl:text-3xl text-2xl text-[#a9df51]"> {t('step3Part4')} </span>{t('step3Part5')}</p>
          </div>
          <div className="flex gap-3 p-5 bg-[#404040] w-full md:w-2/3 rounded-2xl self-center">
            <Image src="/4.png" alt="1" width={20} height={20} className="size-fit"/>
            <p>{(t('step4Part1'))} <span className="text-2xl text-[#a9df51]">{t('step4Part2')} </span>{t('step4Part3')} <span className="xl:text-3xl text-2xl text-[#a9df51] font-bold">{t('step4Part4')}</span> {t('step4Part5')}</p>
          </div>
        </div>
      </div>

      <div className="mb-14 flex justify-center">
        <StyledButton text={t('buttonText')} />
      </div>
    </React.Fragment>
  )
}

export default ProcessBanner;
