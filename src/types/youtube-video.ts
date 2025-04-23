export interface YoutubeVideo {
	id: {
		videoId: string;
	};
	snippet: {
		title: string;
		description: string;
		thumbnails: {
			medium: {
				url: string;
			};
		};
		publishedAt: string;
	};
}
