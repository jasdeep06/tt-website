import Card from "./card"

const BlogCarousal = () => {
    return (
        <div className="flex overflow-auto w-full py-2 gap-5">
            <Card src={"/em1.png"} meta={"May 12, 2021"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."}/>
            <Card src={"/em1.png"} meta={"May 12, 2021"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."}/>
            <Card src={"/em1.png"} meta={"May 12, 2021"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."}/>
            <Card src={"/em1.png"} meta={"May 12, 2021"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."}/>
            <Card src={"/em1.png"} meta={"May 12, 2021"} heading={"Going From 0 to 10 Million Views per Month"} teaser={"How we helped a client scale from 0 to 10 million views per month on YouTube."}/>
        </div>
    )
}

export default BlogCarousal;