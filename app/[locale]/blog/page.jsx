import Image from "next/image";
import Card from "../ui/blog/card";
import { useTranslations } from "next-intl";

export default function Blog() {
    const t = useTranslations('Blog');
    return (
        <div className="container mx-auto">
            <p className="mt-[100px] mb-5 text-center md:text-5xl text-3xl">{t('blogTitle')}</p>
            <div className="md:relative hidden md:block">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black rounded-2xl text-white flex items-center justify-center flex-col gap-3">
                    <div className="uppercase flex gap-5 justify-center">
                        <p>{t('recent')}</p>
                        <p>—</p>
                        <p>{t('blogPost1Date')}</p>
                        <p>—</p>
                        <p>{t('readTime')}</p>
                    </div>
                    <h2 className="text-4xl font-bold text-balance text-center">{t('blogPost1Title')}</h2>
                    <a className="px-6 py-4 rounded-full max-h-[60px] bg-black font-bold text-white border border-pink hidden md:flex items-center w-max" href="/blog/finding_the_MLA_feature">{t('readMore')}</a>
                </div>
                <Image src="/blog_MLA_header_3.jpg" height={500} width={500} alt="blog-header" className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="grid md:grid-cols-2 p-6 xl:px-24 gap-5 mt-12">
                {/* For mobile view, showing the first blog post */}
                <div className="md:hidden">
                    <Card 
                        key={6} 
                        src="/blog_MLA_header_3.jpg" 
                        meta={`${t('blogPost1Date')} • ${t('readTime')}`} 
                        link={"/blog/finding_the_MLA_feature"} 
                        heading={t('blogPost1Title')} 
                        teaser={t('blogPost1Teaser')}
                    />
                </div>
                {/* Additional blog posts */}
                <Card 
                    key={0} 
                    src="/blog_2_thumbnail.jpg" 
                    meta={`${t('blogPost1Date')} • ${t('readTime')}`}
                    heading={t('blogPost2Title')}
                    link={"/blog/mrbeast_rise_MLA"}
                    teaser={t('blogPost2Teaser')} 
                />
                <Card 
                    key={1} 
                    src="/blog_3_header.jpg"
                    meta={`${t('blogPost1Date')} • ${t('readTime')}`}
                    heading={t('blogPost3Title')}
                    link={"/blog/secret_of_mrbeast"}
                    teaser={t('blogPost3Teaser')} 
                />
                <Card 
                    key={2} 
                    src="/blog_3_header.jpg"
                    meta={`${t('blogPost1Date')} • ${t('readTime')}`}
                    heading={t('blogPost4Title')}
                    link={"/blog/why_translatetracks"}
                    teaser={t('blogPost4Teaser')} 
                />
            </div>
        </div>
    )
}
