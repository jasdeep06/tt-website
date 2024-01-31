import Image from "next/image"

const Card = ({src,meta,heading,teaser}) => {
    return (
        <article className="flex flex-col gap-5">
            <Image alt="Going From 0 to 10 Million Views per Month"
                className="rounded-2xl h-auto object-cover w-full"
                src={src} 
                width={500}
                height={500}/>
            <small className="self-center md:self-start">{meta}</small>
            <div className="flex justify-between flex-col lg:flex-row gap-5 w-full">
                <div className="flex flex-col max-w-[300px] md:max-w-[350px] 2xl:max-w-[500px] self-center">
                    <h3 className="font-bold text-xl">{heading}</h3>
                    <p className="truncate">{teaser}</p>
                </div>
                <a className="px-6 py-4 rounded-full max-h-[60px] bg-purple font-bold text-white border border-pink flex items-center justify-center min-w-max lg:w-max" href="/blog/going-from-0-to-10-million-views-per-month">Read →</a>
            </div>
        </article>
    )
}

export default Card;