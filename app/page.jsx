import React from "react";
import Nav from "./ui/landing/NavBar/nav";
import Banner from "./ui/landing/hero/banner";
import ClientCarousel from "./ui/landing/carousel/client-carousel";
import HowBanner from "./ui/landing/how/how-banner";


export default function Home() {
  return (
    <React.Fragment>
    <Nav/>
    <Banner/>
    <ClientCarousel/>
    <HowBanner/>
    </React.Fragment>
  )
}
