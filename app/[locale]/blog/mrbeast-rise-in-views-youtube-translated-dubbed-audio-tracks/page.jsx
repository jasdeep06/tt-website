import Image from "next/image";
import BlogHeader from "../../ui/blog/blog-header";
import React from "react";
import BlogFooter from "../../ui/blog/blog-carousal";
import { useTranslations } from "next-intl";

const BlogPost = () => {
    const t = useTranslations('BlogPost2');

    return (
        <React.Fragment>
            <BlogHeader 
                imgSrc={t('headerImageSrc')} 
                heading={t('heading')} 
                meta={t('metaDate')} 
                writerName={t('writerName')} 
                writerSrc={t('writerImageSrc')} 
            />

            <div className="container mt-[50px] px-10 leading-8 text-xl m-auto">
                <p>{t('introduction')}</p>
                <br />
                <p className="font-bold text-3xl mb-10">{t('sectionUnderstandingTitle')}</p>
                <p>{t('sectionUnderstandingContent')}</p>
                <br />
                <p className="font-bold text-3xl my-8">{t('sectionAdvantageTitle')}</p>
                <p>{t('sectionAdvantageContent')}</p>
                <br />
                <p className="font-bold text-3xl my-8">{t('sectionStrategicMoveTitle')}</p>
                <p>{t('sectionStrategicMoveContent')}</p>
                <br />
                <p>{t('sectionStatsContent')}</p>
                <br />
                <p className="font-bold text-3xl my-8">{t('sectionActivatingTitle')}</p>
                <p>{t('sectionActivatingContent')}</p>
                <br />
                <video className="lg:w-1/2 w-full m-auto my-5" autoPlay loop muted>
                    <source src={t('demoVideoSrc')} type="video/mp4" />
                </video>
                <p>{t('sectionForCreators')}</p>
                <br />
                <Image src={t('creatorImageSrc')} alt={t('creatorImageAlt')} width={500} height={500} className="lg:w-1/2 w-full m-auto my-10" />
                {/* <p>{t('sectionRoleOfTranslateTracksContent')}</p>
                <br /> */}
                <p className="font-bold text-3xl my-8">{t('sectionRoleOfTranslateTracksTitle')}</p>
                <p>{t('sectionRoleOfTranslateTracksContent')}</p>
                <br />
                <p className="font-bold text-3xl my-8">{t('sectionYourTurnTitle')}</p>
                <p>{t('sectionYourTurnContent')}</p>
                <br />
                <p>{t('conclusion')}</p>
            </div>
            <BlogFooter />
        </React.Fragment>
    );
}

export default BlogPost;
