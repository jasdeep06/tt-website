import BlogCarousal from "../../ui/blog/blog-carousal"
import BlogHeader from "../../ui/blog/blog-header"
import React from "react";


const FirstBlogPage = () => {
    return (
        <React.Fragment>
        <BlogHeader imgSrc={"/em1.png"} heading={"Going From 0 to 10 Million Views per Month"} meta={"September 1, 2021"} writerName={"Georgia Austin"} writerSrc={"/em1.png"}/>
        <BlogCarousal/>
        </React.Fragment>
        );
}

export default FirstBlogPage;
