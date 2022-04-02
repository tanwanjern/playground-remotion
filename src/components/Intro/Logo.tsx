import { Img } from "remotion";
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import logo from "../../assets/vectors/cloud-logomark-colour.svg";
import { useAppearWithScaleAndBounce } from "../../hooks/useAppearWithScaleAndBounce";

export const Logo: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {

    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();
 
    // const opacity = interpolate(frame, [0, 20], [0, 1]); 
    const { scaleValue } = useAppearWithScaleAndBounce(transitionStart);

    const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
		}),
		[0, 0.5, 1],
		[-50, -100, 0]
	);

    const scale = interpolate(
		spring({
			frame: frame - (transitionStart + 50),
			fps: videoConfig.fps,
            config: { damping: 100, mass: 0.5 },
		}),
		[0, 0.8, 1],
		[1, 2, 0.5]
	);

    const showRounded = frame > 80 ? '40px' : '0px';

    return(
        <div 
            className="w-full h-full bg-black" 
            style={{ 
                borderRadius: showRounded,
                transform: `scale(${scale})`,
            }}
        >
            <div 
                className="w-full h-full flex justify-center" 
                style={{ 
                    // opacity: opacity,
                    transform: `scale(${scaleValue}) translateY(${translation}px)`,
                }}
            >
                <Img 
                    src={logo} 
                    className="w-1/2 h-48 m-auto"
                    // style={{
                    //     transform: `scale(${scale})`
                    // }}
                />
            </div>
        </div>
    )
}