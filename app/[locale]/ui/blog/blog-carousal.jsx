import StyledButton from "../shared/styledButton";
import Card from "./card";
import { useTranslations } from "next-intl";

const BlogFooter = ({ showButton = true }) => {
    const t = useTranslations('BlogFooter'); // Assuming 'BlogFooter' is your namespace

    return (
        <div>
            {showButton && <div className="flex justify-center my-5">
                <StyledButton text={t('getStartedButton')} />
            </div>}
            <p className="text-2xl font-bold ml-5 my-5">{t('readMore')}</p>
            <div className="flex overflow-auto w-full py-2 gap-5">
                <Card 
                    key={6} 
                    src="/blog_MLA_header_3.jpg" 
                    meta={`${t('blogCard1.date')} • ${t('blogCard1.readTime')}`} 
                    link={"/blog/finding_the_MLA_feature"} 
                    heading={t('blogCard1.heading')} 
                    teaser={t('blogCard1.teaser')}
                />
                <Card 
                    key={0} 
                    src="/blog_2_thumbnail.jpg" 
                    meta={`${t('blogCard2.date')} • ${t('blogCard2.readTime')}`}
                    heading={t('blogCard2.heading')}
                    link={"/blog/mrbeast_rise_MLA"}
                    teaser={t('blogCard2.teaser')} 
                />
                <Card 
                    key={1} 
                    src="/blog_3_header.jpg"
                    meta={`${t('blogCard3.date')} • ${t('blogCard3.readTime')}`}
                    heading={t('blogCard3.heading')}
                    link={"/blog/secret_of_mrbeast"}
                    teaser={t('blogCard3.teaser')} 
                />
            </div>
        </div>
    );
}

export default BlogFooter;
