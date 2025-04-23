
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Experiences from "./components/main/Experiencies";
import Projects from "./components/main/Projects";
import Contact from "./components/footer/Contact";
import { LanguageProvider } from "./context/LanguajeContext";
import "@fontsource/open-sans";
import Navbar from "./components/nav/Navbar";
import Technologies from "./components/main/Technologies";
import YoutubeVideos from "./components/main/YoutubeVideos";


const App = () => {
	return (
		<LanguageProvider>
			<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-violet-200 selection:text-cyan-900 ">
				<div className="fixed top-0 -z-10 h-full w-full">
					<div className="relative h-full w-full bg-slate-950">
						<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
					</div>
				</div>
				<div className="container mx-auto px-8">
					<Navbar />
					<Hero />
					<About />
					<Technologies />
					<Experiences />
					<YoutubeVideos />
					<Projects />
					<Contact />
				</div>
			</div>
		</LanguageProvider>
	);
};

export default App;
