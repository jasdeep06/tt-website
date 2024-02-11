"use client"

import Image from "next/image"

const BurgerButton = () => {
    return (
        <Image src="/burger.png" alt="burger" width={30} height={30} className="md:hidden cursor-pointer" onClick={() => console.log("Hi")}/>
    )
}

export default BurgerButton;