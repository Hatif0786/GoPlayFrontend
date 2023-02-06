export interface VideoDto{
    id: string;
	title: string;
	description: string;
	tags: Array<String>;
    videoUrl: string;
	videoStatus: string;
	thumbnailUrl: string;
	likes: number;
	dislikes: number;
	viewCount: number;
	userUploaded: string;
}