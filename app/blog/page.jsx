import Image from "next/image";
import Card from "../ui/blog/card";

export default function Blog() {
    return (
        <div className="container mx-auto">
            <p className="mt-[100px] mb-5 text-center md:text-5xl text-3xl">Blog</p>
            <div className="md:relative hidden md:block">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black rounded-2xl text-white flex items-center justify-center flex-col gap-3">
                    <div class="uppercase flex gap-5 justify-center">
                        <p>Recent</p>
                        <p>—</p>
                        <p>January 17, 2024</p>
                        <p>—</p>
                        <p>3 min read</p>
                    </div>
                    <h2 class="text-4xl font-bold text-balance text-center">BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions</h2>
                    <a class="px-6 py-4 rounded-full max-h-[60px] bg-black font-bold text-white border border-pink hidden md:flex items-center w-max" href="/blog/bemultilingual-dubs-viral-animated-series-pilot-episode-for-glitch">Read More →</a>
                </div>

                <Image src="/em1.png" height={500} width={500} alt="elon-musk" className="object-cover w-full h-full rounded-2xl" />

            </div>
            <div className="grid md:grid-cols-2 p-6 xl:px-24 gap-5 mt-12">
                <div className="md:hidden">
                <Card  key={6} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />
                </div>
                <Card  key={0} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />
                <Card key={1} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />
                <Card key={2} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />
                <Card key={3} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />
                <Card key={4} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />
                <Card key={5} src="/em1.png" meta="January 17, 2024 • 3 min read" heading="BeMultilingual Dubs Viral Animated Series Pilot Episode for Glitch Productions" teaser={"Content creation is hyper-competitive – for every idea, topic, or theme that a creator might have, there are likely a hundred other versions already live. So how can you stand out? How can you build a loyal audience in such a crowded marketplace?"} />

            </div>

        </div>
    )
}