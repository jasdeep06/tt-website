import React from "react";
import Nav from "./ui/landing/NavBar/nav";
import Banner from "./ui/landing/hero/banner";
import ClientCarousel from "./ui/landing/carousel/client-carousel";
import HowBanner from "./ui/landing/how/how-banner";
import ProcessBanner from "./ui/landing/process/process-banner";
import YouTubeBanner from "./ui/landing/youtube/youtube-banner";


export default function Home() {
  return (
    <React.Fragment>
    <Nav/>
    <Banner/>
    <ClientCarousel/>
    <HowBanner/>
    <ProcessBanner/>
    <YouTubeBanner/>
    </React.Fragment>
  )
}
