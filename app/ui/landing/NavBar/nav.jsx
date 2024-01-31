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


    return (
        <div>
            <div className="flex justify-between p-2">
                <Image src="/logo.png" alt="logo" width={250} height={50} className="hidden md:block" />
                <Image src="/logo.png" alt="logo" width={150} height={30} className="md:hidden" />
                {/* <BurgerButton handleClick/> */}
                <Image src="/burger.png" alt="burger" width={30} height={30} className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                <div className="hidden md:flex md:w-2/3 md:justify-around md:self-center">
                    <NavLink text="How it works?" />
                    <NavLink text="Process" />
                    <NavLink text="Youtube Multilingual Audio" />
                    <NavLink text="Complete Video Translation" />
                    <NavLink text="Blog" />

                </div>
                <StyledButton text={"Get Started"} className={"hidden md:block"} />
            </div>
            <motion.nav 
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={`md:hidden p-1 ${isOpen ? '' : 'hidden'}`}>
                <NavLink text="How it works?" />
                <NavLink text="Process" />
                <NavLink text="For YouTube" />
                <NavLink text="For Other Creators" />
            </motion.nav>
        </div>
    )
}

export default Nav;