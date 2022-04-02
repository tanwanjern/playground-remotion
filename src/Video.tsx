import {Composition} from 'remotion';
import { Flow } from './components/Flow';
import { Main } from './Main';
import { IntroVideo } from './components/Intro/IntroVideo';
import { Logo } from './components/Intro/Logo';
// import {Subtitle} from './components/HelloWorld/Subtitle';
// import {Title} from './components/HelloWorld/Title';
import "./styles/tailwind.css";

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="IntroVideo"
				component={IntroVideo}
				durationInFrames={60}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Flow"
				component={Flow}
				durationInFrames={50}
				fps={30}
				width={1920}
				height={1080}
			/>

			{/* <Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/> */}
		</>
	);
};
