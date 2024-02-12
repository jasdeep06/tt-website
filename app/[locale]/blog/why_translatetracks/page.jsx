// TranslateTracksBlogPost.js
import React from 'react';
import Image from 'next/image';
import BlogHeader from '../../ui/blog/blog-header';
import BlogFooter from '../../ui/blog/blog-carousal';
import { useTranslations } from 'next-intl';

const BlogPost = () => {
    const t = useTranslations('BlogPost4'); // Unique namespace for this blog post

    return (
        <React.Fragment>
            <BlogHeader
              imgSrc={"/blog_MLA_header_3.jpg"} // Change this to the appropriate header image path
              heading={t('blogTitle')}
              meta={t('metaDate')}
              writerName={t('writerName')}
              writerSrc={"/em1.png"} // Change this to the appropriate writer image path
            />

            <div className="container mt-[50px] px-10 leading-8 text-xl m-auto">
                <p>{t('introductionContent')}</p>
                <br />
                <p className="font-bold text-4xl mb-10">{t('understandingTitle')}</p>
                <p>{t('understandingContent')}</p>
                <br />
                <p className="font-bold text-3xl mb-10">{t('manualDubbingTitle')}</p>
                <p>{t('manualDubbingContent')}</p>
                <br />
                <p className='font-bold text-xl mb-4'>{t('meritTitle')}</p>
                <ul className="list-disc ml-10">
                    <li className="mt-3">{t('manualDubbingMerit1')}</li>
                </ul>
                <p className='font-bold text-xl mb-4 mt-4'>{t('demeritTitle')}</p>
                <ul className="list-disc ml-10">
                    <li className="mt-3">{t('manualDubbingDemerit1')}</li>
                    <li className="mt-3">{t('manualDubbingDemerit2')}</li>
                </ul>
                <br />
                <p className="font-bold text-3xl mb-10">{t('aiDubbingTitle')}</p>
                <p>{t('aiDubbingContent')}</p>
                <br />
                <p className='font-bold text-xl mb-4'>{t('meritTitle')}</p>
                <ul className="list-disc ml-10">
                    <li className="mt-3">{t('aiDubbingMerit1')}</li>
                </ul>
                <p className='font-bold text-xl mb-4 mt-4'>{t('demeritTitle')}</p>
                <ul className='list-disc ml-10'>
                    <li className="mt-3">{t('aiDubbingDemerit1')}</li>
                    <li className="mt-3">{t('aiDubbingDemerit2')}</li>
                    <li className="mt-3">{t('aiDubbingDemerit3')}</li>
                </ul>
                <br />
                <p className="font-bold text-3xl mb-10">{t('whyChooseTranslateTracksTitle')}</p>
                <p>{t('whyChooseTranslateTracksContent')}</p>
                <br />
                <p className='font-bold text-xl mb-4'>{t('meritTitle')}</p>
                <ul className="list-disc ml-10">
                    <li className="mt-3">{t('whyChooseTranslateTracksMerit1')}</li>
                    <li className="mt-3">{t('whyChooseTranslateTracksMerit2')}</li>
                    <li className="mt-3">{t('whyChooseTranslateTracksMerit3')}</li>
                    <li className="mt-3">{t('whyChooseTranslateTracksMerit4')}</li>
                    <li className="mt-3">{t('whyChooseTranslateTracksMerit5')}</li>
                    <li className="mt-3">{t('whyChooseTranslateTracksMerit6')}</li>
                </ul>
                <br />
                <p>{t('conclusion')}</p>
                <br />
                <p>{t('bye')}</p>
            </div>

            <BlogFooter />
        </React.Fragment>
    );
}

export default BlogPost;
