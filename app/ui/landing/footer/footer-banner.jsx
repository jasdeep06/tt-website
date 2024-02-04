import Image from "next/image";
import NavLink from "../NavBar/navlink";

const FooterBanner = () => {
    return (
        <div className="flex flex-col">
            <div className="flex md:flex-row flex-col md:w-2/3 justify-around m-auto mt-[50px]">
                <NavLink text="How it works?" target_id="how" />
                <NavLink text="Process" target_id={"process"} />
                <NavLink text="Youtube MLA" target_id={"mla"} />
                <NavLink text="Video Translation" target_id={"translation"} />
                <NavLink text="Blog" path={"blog"} />
            </div>
            <div className="flex m-auto md:w-1/4 w-1/2 justify-around mt-5">
                <Image src="/twitter-64.png" alt="twitter" width={30} height={30} className="self-center"/>
                <Image src="/instagram-64.png" alt="instagram" width={30} height={30} className="self-center"/>
                <Image src="/email-64.png" alt="email" width={30} height={30} className="self-center"/>
            </div>
            <p className="text-center mt-5">© 2024 TranslateTracks. All rights reserved</p>
        </div>
    )
}

export default FooterBanner;