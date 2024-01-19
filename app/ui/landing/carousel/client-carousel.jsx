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
            <Image className="m-auto" src="/amazon-256.png" alt="amazon" width={50} height={50}/>
          </div>
          <div>
            <Image className="m-auto" src="/apple-256.png" alt="apple" width={50} height={50}/>
          </div>
          <div>
            <Image className="m-auto" src="/angellist-256.png" alt="facebook" width={50} height={50}/>
          </div>
          <div>
            <Image className="m-auto" src="/posterous-256.png" alt="amazon" width={50} height={50}/>
          </div>
          <div>
            <Image className="m-auto" src="/spotify-256.png" alt="amazon" width={50} height={50}/>
          </div>
          <div>
            <Image className="m-auto" src="/whatsapp-256.png" alt="amazon" width={50} height={50}/>
          </div>
        </Slider>
      </div>

    )
}

export default ClientCarousel;