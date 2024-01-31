import { useRef, useState } from "react";
import CalSlider from "../../shared/cal-slider";
import GetItem from "../../shared/get-item";
import StyledButton from "../../shared/styledButton";
import { useInView } from "framer-motion";
import { Checkbox } from "@nextui-org/checkbox";

const Calculator = () => {

    const [videoLength, setVideoLength] = useState(10);
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    const calcRef = useRef(null);
    const calcInView = useInView(calcRef, { once: true });
    const [lipsync, setlipSync] = useState(true);
    const [screenTranslation, setscreenTranslation] = useState(true);
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="flex flex-col md:flex md:flex-row md:mt-[100px] mt-[50px] gap-3 justify-around">
            <div className="md:max-w-[500px] self-center" style={{
                transform: paraInView ? "none" : "translateX(50px)",
                opacity: paraInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
                ref={paraRef}
            >
                <p className="md:text-5xl text-center md:text-left text-2xl font-bold">CALCULATE HOW MUCH IT WILL COST YOU</p>
                <p className="md:mt-10 md:block hidden">The calculation is approximate and depends on the text density, the source language, and other parameters.</p>
                <p className="md:hidden text-center">Approx estimate</p>

            </div>
            <div className="flex flex-col bg-[#ffffff] md:px-12 px-5 py-5 rounded-3xl text-black" style={{
                transform: calcInView ? "none" : "translateX(-50px)",
                opacity: calcInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
                ref={calcRef}
                onTransitionEnd={() => { console.log("transition ended"); setIsOpen(true) }}
            >
                <p className="mb-12 text-[#B9ABA0] md:text-sm">YOUR VIDEO LENGTH (MINUTES)</p>
                <CalSlider value={videoLength} onChangeSlider={setVideoLength} isOpen={isOpen}/>
                <div className="flex justify-around mt-5">
                    <Checkbox isSelected={lipsync} onValueChange={() => setlipSync(!lipsync)} classNames={{label:"text-xl"}}>Lip Sync </Checkbox>
                    {/* <span className="ml-2">Lipsync</span> */}
                    <Checkbox isSelected={screenTranslation} onValueChange={() => setscreenTranslation(!screenTranslation)} classNames={{label:"text-xl"}}> Screen Translation</Checkbox>
                    {/* <span className="ml-2">Screen Translation</span> */}
                </div>
                <p className="my-5 text-[#B9ABA0] md:text-sm">Total</p>
                <p><span className="md:text-5xl text-3xl">{"$ "}</span><span className="md:text-5xl text-3xl">{(6 + (+lipsync)*3 + (+screenTranslation)*3)*videoLength}</span><span className="text-xl mb-1">/language</span></p>
                <p className="self-center md:text-2xl text-lg my-2 font-bold">What you will get?</p>
                <GetItem text= { lipsync ? "You will magically speak the desired language in the video!" : "Expert verified translated and dubbed video."} />
                {screenTranslation && <GetItem text="All the screens translated in the video." />}
                <GetItem text="Access to the platform to make desired tweaks." />
                <GetItem text="Original Subtitles" />
                <GetItem text="Translated Subtitles" />
                <StyledButton text={"GET STARTED"} className="self-center mt-5" inverted />

            </div>


        </div>
    )
}

export default Calculator;