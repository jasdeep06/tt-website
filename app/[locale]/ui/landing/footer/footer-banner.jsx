import Image from "next/image";
import NavLink from "../NavBar/navlink";
import { useTranslations } from "next-intl"; // Import useTranslations
import Link from "next/link";

const FooterBanner = () => {
    const t = useTranslations('Footer'); // Assuming 'Footer' is your namespace for this component's translations

    return (
        <div className="flex flex-col">
            <div className="flex md:flex-row flex-col md:w-2/3 justify-around m-auto mt-[50px]">
                <NavLink text={t('footerHowItWorks')} target_id="how" />
                <NavLink text={t('footerProcess')} target_id="process" />
                <NavLink text={t('footerYoutubeMLA')} target_id="mla" />
                <NavLink text={t('footerVideoTranslation')} target_id="translation" />
                <NavLink text={t('footerBlog')} path="blog" />
            </div>
            <div className="flex m-auto md:w-1/4 w-1/2 justify-around mt-5">
             <Link href="mailto:contact@translatetracks.com"><Image src="/email-64.png" alt="email" width={30} height={30} className="self-center"/></Link>
            </div>
            <p className="text-center mt-5">{t('footerCopyright')}</p>
        </div>
    )
}

export default FooterBanner;
