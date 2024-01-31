"use client";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

const ClientCarousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 7000,
        cssEase: "linear",
        arrows:false,
        pauseOnHover: false,
        dots:false,
      };
    return(
        <div>
        <p className="text-3xl text-center my-8">Our Clients</p>
        <Slider {...settings}>
          <div >
            <Image className="m-auto" src="/logo3.png" alt="amazon" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto" src="/logo1.png" alt="apple" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto" src="/logo6.png" alt="facebook" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto" src="/logo4.png" alt="amazon" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto" src="/logo5.png" alt="amazon" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto" src="/logo7.png" alt="amazon" width={75} height={75}/>
          </div>
        </Slider>
      </div>

    )
}

export default ClientCarousel;