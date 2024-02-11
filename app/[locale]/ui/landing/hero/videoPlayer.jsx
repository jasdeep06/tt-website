'use client'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ReactVideo = ({url}) => {
    return (
        <ReactPlayer url={url} />
    )
}

export default ReactVideo;