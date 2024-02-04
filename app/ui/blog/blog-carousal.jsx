import StyledButton from "../shared/styledButton";
import Card from "./card"

const BlogFooter = () => {
    return (
        <div>
            <div className="flex justify-center my-5">
                <StyledButton text={"Get Started"} />
            </div>
            <p className="text-2xl font-bold ml-5">Read More</p>
            <div className="flex overflow-auto w-full py-2 gap-5 ml-5">
                <Card src={"/blog_MLA_header_3.jpg"} meta={"May 12, 2021"} link={"/blog/finding_the_MLA_feature"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."} />
                <Card src={"/blog_2_header.jpg"} meta={"May 12, 2021"} link={"/blog/mrbeast_rise_MLA"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."} />
                <Card src={"/blog_3_header.jpg"} meta={"May 12, 2021"} link={"/blog/secret_of_mrbeast"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."} />
            </div>
        </div>
    )
}

export default BlogFooter;