export interface UserDto{
    id: string;
    firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	sub: string;
	subscribedToUsers: Array<String>
	subscribers: Array<String>
	videoHistory: Array<String>
	likedVideos: Array<String>
	dislikedVideos: Array<String>
	savedForWatchLater: Array<String>
	userImage: String;
}