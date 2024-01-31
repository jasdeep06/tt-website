import { useEffect, useRef, useState } from "react";
import CalSlider from "../../shared/cal-slider";
import GetItem from "../../shared/get-item";
import StyledButton from "../../shared/styledButton";
import { useInView } from "framer-motion";

const Calculator = () => {

    const [videoLength, setVideoLength] = useState(10);
    const paraRef = useRef(null);
    const paraInView = useInView(paraRef, { once: true });
    const calcRef = useRef(null);
    const calcInView = useInView(calcRef, { once: true });
    const [isOpen, setIsOpen] = useState(false);

    //detect if transition on calcRef is complete and set isOpen to true

    // useEffect(() => {

    // })



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
                <p className="md:mt-10 md:block hidden">The calculation is approximate and depends on the text's density, the source language, and other parameters.</p>
                <p className="md:hidden text-center">Approx estimate</p>

            </div>
            <div className="flex flex-col bg-[#ffffff] md:px-12 px-5 py-5 rounded-3xl" style={{
        transform: calcInView ? "none" : "translateX(-50px)",
        opacity: calcInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      ref={calcRef}
      onTransitionEnd={() => {console.log("transition ended"); setIsOpen(true)}}
      >
                <p className="mb-12 text-[#B9ABA0] md:text-sm">YOUR VIDEO LENGTH (MINUTES)</p>
                <CalSlider value={videoLength} onChangeSlider={setVideoLength} isOpen={isOpen}/>
                <p className="my-5 text-[#B9ABA0] md:text-sm">Total</p>
                <p><span className="md:text-5xl text-3xl">{"$ "}</span><span className="md:text-5xl text-3xl">{videoLength * 6}</span><span className="text-xl mb-1">/language</span></p>
                <p className="self-center md:text-2xl text-lg my-2 font-bold">What you'll get?</p>
                {/* <ul>
                    <li>Expert verified translated and dubbed audio track.</li>
                    <li>Access to the platform to make desired tweaks.</li>
                    <li>Original Subtitles</li>
                    <li>Translated Subtitles</li>
                </ul> */}
                <GetItem text="Expert verified translated and dubbed audio track." />
                <GetItem text="Access to the platform to make desired tweaks." />
                <GetItem text="Original Subtitles" />
                <GetItem text="Translated Subtitles" />
                <StyledButton text={"GET STARTED"} className="self-center mt-5" inverted />

            </div>


        </div>
    )
}

export default Calculator;