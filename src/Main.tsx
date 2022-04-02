import { Sequence, useVideoConfig } from 'remotion';
import { Audio } from "remotion";
import intro from "./assets/audios/intro.mp3";
import { Flow } from './components/Flow';

import { IntroVideo } from './components/Intro/IntroVideo';
import { Logo } from './components/Intro/Logo';

export const Main: React.FC<{
	titleText: string;
	titleColor: string;
}> = () => {

	const videoConfig = useVideoConfig();
	const transitionStart = 25;

	return (
		<div className="flex-1 bg-white">
			<Audio src={intro} startFrom={0}/>
			<div>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Logo transitionStart={transitionStart} />
				</Sequence>
				<Sequence from={90}>
					<IntroVideo transitionStart={transitionStart + 65}/>
				</Sequence>
				<Sequence from={145}>
					<Flow transitionStart={0}/>
				</Sequence>
			</div>
		</div>
	);
};
