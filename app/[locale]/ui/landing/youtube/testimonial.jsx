import Image from 'next/image';

const Testimonial = ({text,name,channel,hiddenSm=true,imgSrc}) => {
    const style = hiddenSm ? "md:flex md:flex-col hidden" : "flex flex-col";
    return (
    <div className={style}>
        <p className="text-xl mb-5 text-center xl:text-left ">{text}</p>
        <div className="flex gap-3 xl:self-start self-center">
            <Image src={imgSrc} alt="client-image" width={50} height={50} className="size-fit self-center"/>
            <div className="flex flex-col justify-center">
                <p className="text-lg font-bold ">{name}</p>
                <p className="text-md">{channel}</p>
            </div>
        </div>
    </div>
    )
}

export default Testimonial;