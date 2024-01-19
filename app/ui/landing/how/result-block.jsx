const { default: Image } = require("next/image")

const ResultBlock = () => {
    return(
        <div className="flex flex-col bg-[#151515]">
            <div className="flex mb-1">
                <Image src="/up-arrow.png" alt="up-arrow" width={50} height={50}/>
                <p className="self-center text-white">Quality</p>
            </div>
            <div className="flex">
                <Image src="/down-arrow.png" alt="down-arrow" width={50} height={50}/>
                <p className="self-center text-white">Cost</p>
            </div>
        </div>
    )
}
export default ResultBlock;