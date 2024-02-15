import Image from "next/image";
import BlogHeader from "../../ui/blog/blog-header";
import React from "react";
import BlogFooter from "../../ui/blog/blog-carousal";
import { useTranslations } from "next-intl";

const BlogPost = () => {
    const t = useTranslations('BlogPost3'); // Use a specific namespace for this blog post's translations

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
                <p>{t('mrBeastIntro')}</p>
                <br />
                <p>{t('gameChanger')}</p>
                <br />
                <p>{t('crucialInsight')}</p>
                <br />
                <p>{t('strategyShift')}</p>
                <br />
                <p>{t('translateTracksRole')}</p>
                <br />
                <p>{t('translateTracksOffering')}</p>
                <br />
                <p>{t('futureTrend')}</p>
                <br />
                <p>{t('globalCommunity')}</p>              
            </div>
            <BlogFooter />
        </React.Fragment>
    );
}

export default BlogPost;
