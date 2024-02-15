import Image from "next/image";
import BlogHeader from "../../ui/blog/blog-header";
import React from "react";
import BlogFooter from "../../ui/blog/blog-carousal";
import { useTranslations } from "next-intl";

const BlogPost = () => {
    const t = useTranslations('BlogPost1'); // Assuming 'BlogPost' is your namespace for this component's translations

    return (
        <React.Fragment>
            <BlogHeader 
              imgSrc={"/blog_MLA_header_3.jpg"} 
              heading={t('blogTitle')} 
              meta={t('metaDate')} 
              writerName={t('writerName')} 
              writerSrc={"/em1.png"} 
            />

            <div className="container mt-[50px] px-10 leading-8 text-xl m-auto">
                <p className="font-bold text-3xl mb-10">{t('section1Title')}</p>
                <p>{t('section1Content')}</p>
                <br />
                <p>{t('section2Content')}</p>
                <br />
                <video className="lg:w-1/2 w-full m-auto my-5" autoPlay loop muted>
                    <source src="/mla_demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                <p>{t('section3Content')}</p>
                <br />

                <p>{t('section3Content2')}</p>
                <br/>
                <p className="font-bold text-3xl my-8">{t('checkFeatureTitle')}</p>
                <p>{t('checkFeatureContent')}</p>
                <br />

                <Image src="/creator.jpg" alt={t('creatorImageAlt')} width={500} height={500} className="lg:w-1/2 w-full m-auto my-10" />

                <p className="font-bold text-3xl my-8">{t('featureNotAvailableTitle')}</p>
                <br />
                <p>{t('featureNotAvailableContent')}</p>
                <br />

                <Image src="/MLA_not_available.png" alt={t('mlaNotAvailableImageAlt')} width={500} height={500} className="lg:w-1/2 w-full m-auto my-10" />
                <p>{t('conclusion')}</p>
            </div>
            <BlogFooter />
        </React.Fragment>
    );
}

export default BlogPost;




