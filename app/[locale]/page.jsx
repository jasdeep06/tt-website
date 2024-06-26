"use client";
import React from "react";
import Nav from "./ui/landing/NavBar/nav";
import Banner from "./ui/landing/hero/banner";
import ClientCarousel from "./ui/landing/carousel/client-carousel";
import HowBanner from "./ui/landing/how/how-banner";
import ProcessBanner from "./ui/landing/process/process-banner";
import YouTubeBanner from "./ui/landing/youtube/youtube-banner";
import {NextUIProvider} from "@nextui-org/system";
import CreatorBanner from "./ui/landing/creator/creator-banner";
import FooterBanner from "./ui/landing/footer/footer-banner";
import BlogFooter from "./ui/blog/blog-carousal";


export default function Home() {
  return (
    <NextUIProvider>
    <React.Fragment>
    <Nav/>
    <Banner/>
    <ClientCarousel/>
    <HowBanner/>
    <ProcessBanner/>
    <YouTubeBanner/>
    <CreatorBanner/>
    <BlogFooter showButton={false}/>
    <FooterBanner/>
    </React.Fragment>
    </NextUIProvider>

  )
}
