import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Flow: React.FC<{
	transitionStart: number;
}> = () => {

    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();

    const translation = interpolate(
		spring({
			frame: frame,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
		}),
		[0, 1],
		[100, 0]
	);

    const caption = 'Purchase Tickets'
    const text = caption.split(' ').map((t) => ` ${t} `);

	return (
		<div 
            className="flex-1 bg-blue-100"
            style={{
                transform : `translateY(${translation}%)`,
            }}
        >
			<div className="h-full flex justify-center items-center w-1/3 m-auto">
                <h1 className="text-8xl font-bold text-center">
                    {text.map((t, i) => {
                        return (
                            <span
                                key={t}
                                style={{
                                    transform: `scale(${spring({
                                        fps: videoConfig.fps,
                                        frame: frame - i * 5,
                                        config: {
                                            damping: 100,
                                            stiffness: 200,
                                            mass: 0.5,
                                        },
                                    })})`,
                                    display: 'inline-block',
                                }}
                            >
                                {t}
                            </span>
                        );
                    })}    
                </h1>
			</div>
		</div>
	);
}