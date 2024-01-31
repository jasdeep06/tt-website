import StyledButton from "../../shared/styledButton";
// import ReactVideo from "./videoPlayer";
import vid from "../../../../videos/vid.mp4"
import MuxPlayer from "./muxPlayer";


const Banner = () => {
    return (
        <div className="flex justify-around my-4 flex-wrap-reverse">
        <div className="flex flex-col self-center">
            <p className="text-4xl my-4 self-center md:text-7xl md:self-start">Democratizing</p>
            <p className="text-4xl self-center md:text-7xl md:my-4">Premium Dubbing</p>
            <div className="flex justify-between">
                <p className="text-xl m-1 mx-2 text-center">4x Cheaper</p>
                <p className="text-xl m-1 mx-2 text-center">Expert verified localization </p>
                <p className="text-xl m-1 mx-2 text-center">Accurate lip sync.</p>
            </div>
            <StyledButton text={"Get Started"} className="w-1/3 self-center md:self-start my-5"/>
        </div>
        {/* <ReactPlayer url={"/vid.mp4"}/> */}
        {/* <ReactVideo url={"https://translatetracks.s3.amazonaws.com/test/render_test.mp4"}/> */}
        <MuxPlayer src={vid}/>
        </div>
    )
}

export default Banner;