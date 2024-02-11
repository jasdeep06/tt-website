import { useEffect, useRef, useState } from "react";
import CalSlider from "../../shared/cal-slider";
import GetItem from "../../shared/get-item";
import StyledButton from "../../shared/styledButton";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations

const Calculator = () => {
    const t = useTranslations('Youtube-Calculator'); // Assuming 'Calculator' is your namespace for this component's translations

    const [videoLength, setVideoLength] = useState(10);
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    const calcRef = useRef(null);
    const calcInView = useInView(calcRef, { once: true });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex lg:flex-row lg:mt-[100px] mt-[50px] gap-3 justify-around">
            <div className="md:max-w-[500px] self-center" style={{
                transform: paraInView ? "none" : "translateX(50px)",
                opacity: paraInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            ref={paraRef}>
                <p className="lg:text-5xl text-center lg:text-left text-2xl font-bold">{t('calculatorTitle')}</p>
                <p className="lg:mt-10 lg:block hidden">{t('calculatorSubtitleDesktop')}</p>
                <p className="lg:hidden text-center">{t('calculatorSubtitleMobile')}</p>
            </div>
            <div className="flex flex-col bg-[#ffffff] lg:px-12 px-5 py-5 rounded-3xl m-auto lg:m-0" style={{
                transform: calcInView ? "none" : "translateX(-50px)",
                opacity: calcInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            ref={calcRef}
            onTransitionEnd={() => {console.log("transition ended"); setIsOpen(true)}}>
                <p className="mb-12 text-[#B9ABA0] lg:text-sm">{t('videoLengthLabel')}</p>
                <CalSlider value={videoLength} onChangeSlider={setVideoLength} isOpen={isOpen}/>
                <p className="my-5 text-[#B9ABA0] lg:text-sm">{t('totalLabel')}</p>
                <p><span className="lg:text-5xl text-3xl">{"$ "}</span><span className="lg:text-5xl text-3xl">{videoLength * 6}</span><span className="text-xl mb-1">{t('perLanguage')}</span></p>
                <p className="self-center lg:text-2xl text-lg my-2 font-bold">{t('whatYouWillGet')}</p>
                <GetItem text={t('getItem1')} />
                <GetItem text={t('getItem2')} />
                <GetItem text={t('getItem3')} />
                <GetItem text={t('getItem4')} />
                <StyledButton text={t('getStartedButton')} className="self-center mt-5" inverted />
            </div>
        </div>
    )
}

export default Calculator;
