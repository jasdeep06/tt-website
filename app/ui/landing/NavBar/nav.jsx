"use client"

import Image from "next/image";
import StyledButton from "../../shared/styledButton";
import NavLink from "./navlink";
import { useState } from "react";
import { motion } from "framer-motion";


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Nav = () => {

    const [isOpen,setIsOpen] = useState(false);
    const WidthImagelg = 300;
    const HeightImagelg = WidthImagelg * 91 / 500;

    const WidthImagemd = 250;
    const HeightImagemd = WidthImagemd * 91 / 500;


    return (
        <div>
            <div className="flex justify-between p-2">
                <Image src="/Translatetracks_logo_large.png" alt="logo" width={WidthImagelg} height={50} style={{
        width: WidthImagelg,
        height:HeightImagelg
      }} className="hidden lg:block" />
                <Image src="/Translatetracks_logo_large.png" alt="logo" width={WidthImagemd} height={30} className="lg:hidden"  style={{width:WidthImagemd,height:HeightImagemd}}/>
                {/* <BurgerButton handleClick/> */}
                <Image src="/burger.png" alt="burger" width={50} height={30} className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                <div className="hidden lg:flex lg:w-2/3 lg:justify-around lg:self-center">
                    <NavLink text="How it works?" target_id="how" />
                    <NavLink text="Process" target_id={"process"} />
                    <NavLink text="Youtube MLA" target_id={"mla"} />
                    <NavLink text="Video Translation" target_id={"translation"}/>
                    <NavLink text="Blog" path={"blog"}/>

                </div>
                <StyledButton text={"Get Started"} className={"hidden lg:block"} />
            </div>
            <motion.nav 
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={`lg:hidden p-1 ${isOpen ? '' : 'hidden'}`}>
                <NavLink text="How it works?" />
                    <NavLink text="Process" />
                    <NavLink text="Youtube MLA" />
                    <NavLink text="Video Translation" />
                    <NavLink text="Blog" />
            </motion.nav>
        </div>
    )
}

export default Nav;