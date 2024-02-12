import StyledButton from "../../shared/styledButton";
import vid from "../../../../../videos/vid.mp4"
import MuxPlayer from "./muxPlayer";
import {useTranslations} from 'next-intl';

const Banner = () => {
    const t = useTranslations('Hero'); // Assuming 'Index' is the namespace you're using for this component's translations
    return (
        <div className="flex justify-around my-4 flex-wrap-reverse">
        <div className="flex flex-col self-center">
            <p className="text-4xl my-4 self-center md:text-7xl md:self-start">{t('Democratizing')}</p>
            <p className="text-4xl md:text-7xl md:my-4 self-center">{t('PremiumDubbing')}</p>
            <div className="flex justify-between">
                <p className="text-xl m-1 mx-2 text-center">{t('Cheaper')}</p>
                <p className="text-xl m-1 mx-2 text-center">{t('ExpertVerifiedLocalization')}</p>
                <p className="text-xl m-1 mx-2 text-center">{t('AccurateLipSync')}</p>
            </div>
            <StyledButton text={t('GetStarted')} className="md:w-1/3 w-1/2 self-center md:self-start my-5 text-nowrap"/>
        </div>
        <MuxPlayer src={vid}/>
        </div>
    )
}

export default Banner;
