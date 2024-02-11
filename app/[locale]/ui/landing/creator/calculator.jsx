import { useRef, useState } from "react";
import CalSlider from "../../shared/cal-slider";
import GetItem from "../../shared/get-item";
import StyledButton from "../../shared/styledButton";
import { useInView } from "framer-motion";
import { Checkbox } from "@nextui-org/checkbox"; // Ensure correct import path
import { useTranslations } from "next-intl"; // Import useTranslations

const Calculator = () => {
    const t = useTranslations('Creator-Calculator'); // Use a specific namespace if needed
    const [videoLength, setVideoLength] = useState(10);
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    const calcRef = useRef(null);
    const calcInView = useInView(calcRef, { once: true });
    const [lipsync, setlipSync] = useState(true);
    const [screenTranslation, setscreenTranslation] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex lg:flex-row lg:mt-[100px] mt-[50px] gap-3 justify-around">
            <div className="md:max-w-[500px] self-center" style={{
                transform: paraInView ? "none" : "translateX(50px)",
                opacity: paraInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
                ref={paraRef}>
                <p className="lg:text-5xl text-center lg:text-left text-2xl font-bold">{t('calculateCostTitle')}</p>
                <p className="lg:mt-10 lg:block hidden">{t('calculationNoteDesktop')}</p>
                <p className="lg:hidden text-center">{t('calculationNoteMobile')}</p>
            </div>
            <div className="flex flex-col bg-[#ffffff] md:px-12 px-5 py-5 rounded-3xl text-black m-auto lg:m-0" style={{
                transform: calcInView ? "none" : "translateX(-50px)",
                opacity: calcInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
                ref={calcRef}
                onTransitionEnd={() => { setIsOpen(true) }}>
                <p className="mb-12 text-[#B9ABA0] md:text-sm">{t('videoLengthLabel')}</p>
                <CalSlider value={videoLength} onChangeSlider={setVideoLength} isOpen={isOpen}/>
                <div className="flex justify-around mt-5">
                    <Checkbox isSelected={lipsync} onChange={() => setlipSync(!lipsync)}>{t('lipSyncOption')}</Checkbox>
                    <Checkbox isSelected={screenTranslation} onChange={() => setscreenTranslation(!screenTranslation)}>{t('screenTranslationOption')}</Checkbox>
                </div>
                <p className="my-5 text-[#B9ABA0] md:text-sm">{t('totalLabel')}</p>
                <p><span className="md:text-5xl text-3xl">{"$ "}</span><span className="md:text-5xl text-3xl">{(6 + (+lipsync) * 3 + (+screenTranslation) * 3) * videoLength}</span><span className="text-xl mb-1">{t('perLanguage')}</span></p>
                <p className="self-center md:text-2xl text-lg my-2 font-bold">{t('whatYouWillGet')}</p>
                <GetItem text={lipsync ? t('getItemLipSync') : t('getItemNoLipSync')} />
                {screenTranslation && <GetItem text={t('getItemScreenTranslation')} />}
                <GetItem text={t('getItemAccessPlatform')} />
                <GetItem text={t('getItemOriginalSubtitles')} />
                <GetItem text={t('getItemTranslatedSubtitles')} />
                <StyledButton text={t('getStartedButton')} className="self-center mt-5" inverted />
            </div>
        </div>
    )
}

export default Calculator;
