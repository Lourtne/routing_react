export interface IUser {
	id: number;
	playlist?: string | undefined;
	email: string;
	fullName: string;
	jobTitle: string;
	avatar: string;
	bio: string;
}

export interface IPlaylist {
	playlistId: number;
	genre: string;
	name: string;
	info: string;
}