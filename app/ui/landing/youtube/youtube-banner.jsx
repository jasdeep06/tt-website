import VideoPlayer from "./video-player"

const YouTubeBanner = () => {
    return(
        <VideoPlayer videoSrc={"https://translatetracks.s3.amazonaws.com/videos/8e6168fb-26ab-4489-ba98-91a714d30565/sample_test.mp4"}
                    audioTracks={{'English':"https://translatetracks.s3.amazonaws.com/user-data/8e6168fb-26ab-4489-ba98-91a714d30565/789b4702-5d8c-45a0-9d91-5f2d07c3815e/output_audio.mp3","EngBg":"https://translatetracks.s3.amazonaws.com/user-data/8e6168fb-26ab-4489-ba98-91a714d30565/789b4702-5d8c-45a0-9d91-5f2d07c3815e/output_audio_with_bg.mp3"}}/>
    )
}

export default YouTubeBanner;