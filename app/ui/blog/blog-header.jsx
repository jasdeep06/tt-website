import Image from "next/image";

const BlogHeader = ({imgSrc,meta,heading,writerSrc,writerName}) => {
    return (
        <div class="relative min-h-[80lvh] md:max-h-[70lvh]">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 text-white rounded-b-3xl flex items-end">
                <div class="container mx-auto grid md:grid-cols-12 gap-5 px-6 md:px-0 py-12">
                    <div class="col-span-8">
                        <small class="uppercase">{meta}</small>
                        <h1 class="text-3xl md:text-6xl font-bold">{heading}</h1>
                    </div>
                    <div class="col-span-3 flex items-center gap-3">
                        <Image alt="Georgia Austin" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" class="rounded-full w-16 h-16" style="color:transparent" src={writerSrc}/>
                            <div>
                                <h3 class="font-bold text-sm">{writerName}</h3>
                                <p class="text-sm">Blog Writer</p>
                            </div>
                    </div>
                </div>
            </div>
            <Image src={imgSrc}  alt="Going From 0 to 10 Million Views per Month" loading="lazy" width="1792" height="1024" decoding="async" data-nimg="1" class="object-cover w-full h-full rounded-b-3xl min-h-[80lvh] md:max-h-[70lvh]" style="color:transparent"/>

        </div>
    )
}

export default BlogHeader;