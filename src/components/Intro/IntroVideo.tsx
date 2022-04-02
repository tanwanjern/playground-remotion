import { AbsoluteFill, Video } from "remotion";
import video from "../../assets/videos/intro.mp4";

export const IntroVideo: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {

    return (
        <AbsoluteFill
            className="w-full h-full bg-black overflow-hidden" 
            style={{ 
                borderRadius: '40px',
                transform: `scale(0.5)`,
            }}
        >
            <Video src={video} startFrom={30} endAt={90} className="w-full h-full scale-105"></Video>
        </AbsoluteFill>
    )
}