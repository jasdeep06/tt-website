const { default: Image } = require("next/image")

const GetItem = ({text}) => {
    return (
        <div className="flex">
            <Image src="/check.png" width={50} height={50} alt="check-logo" className="self-center" />
            <p className="self-center">{text}</p>
        </div>
    )
}

export default GetItem;