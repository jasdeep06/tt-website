"use client";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import {useTranslations} from 'next-intl';


const ClientCarousel = () => {

    const t = useTranslations('Hero');
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
        <p className="text-3xl text-center my-8">{t('OurClients')}</p>
        <Slider {...settings}>
          <div >
            <Image className="m-auto md:w-[75px] md:h-[75px] w-[50px] h-[50px]" src="/logo3.png" alt="best-seller" width={75} height={75} />
          </div>
          <div>
            <Image className="m-auto md:w-[75px] md:h-[75px] w-[50px] h-[50px]" src="/logo8.png" alt="webedia" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto md:w-[75px] md:h-[75px] w-[50px] h-[50px]" src="/logo1.png" alt="colom" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto md:w-[75px] md:h-[75px] w-[50px] h-[50px]" src="/logo4.png" alt="epicurieux" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto md:w-[75px] md:h-[75px] w-[50px] h-[50px]" src="/logo5.png" alt="francisco" width={75} height={75}/>
          </div>
          <div>
            <Image className="m-auto md:w-[75px] md:h-[75px] w-[50px] h-[50px]" src="/logo2.png" alt="client" width={75} height={75}/>
          </div>
        </Slider>
      </div>

    )
}

export default ClientCarousel;