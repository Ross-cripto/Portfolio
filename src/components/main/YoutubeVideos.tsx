import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguajeContext";
import { useEffect, useState } from "react";
import type { YoutubeVideo } from "../../types/youtube-video";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const YoutubeVideos: React.FC = () => {
	const { t } = useTranslation();
	const [videos, setVideos] = useState<YoutubeVideo[]>([]);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
				);
				const data = await response.json();
				setVideos(data.items);
			} catch (error) {
				console.error("Error fetching YouTube videos:", error);
			}
		};

		fetchVideos();
	}, []);

	return (
		<div className="border-b border-neutral-900 pb-24">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				{t("youtube.title")}
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto ">
				{videos.map((video) => (
					<motion.div
						key={video.id.videoId}
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
						className="rounded-lg overflow-hidden shadow-lg"
					>
						<a
							href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
							target="_blank"
							rel="noopener noreferrer"
							className="block"
						>
							<img
								src={video.snippet.thumbnails.medium.url}
								alt={video.snippet.title}
								className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
							/>
						</a>
						<div className="pt-6">
							<h3 className="text-lg font-semibold mb-2 line-clamp-2">
								{video.snippet.title}...
							</h3>
							<p className="text-neutral-400 text-sm line-clamp-3">
								{video.snippet.description.slice(0, 150)}...
							</p>
							<p className="text-neutral-200 text-xs mt-4 ">
								{new Date(video.snippet.publishedAt).toLocaleDateString()}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default YoutubeVideos;