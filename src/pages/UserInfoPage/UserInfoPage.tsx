import { Link, useParams } from "react-router-dom";
import { PLAYLISTS, USERS } from "../../data";
import "./UserInfoPage.css";
import { useEffect, useState } from "react";

function getPlaylist(nameOfPlaylist: string) {
	const filteredPlaylist= PLAYLISTS.filter(({ name }) =>
		name.toLowerCase().includes(nameOfPlaylist.toLowerCase())
	);

	const playlist = filteredPlaylist[0].playlistId;

	return playlist
}

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];
	const [ playlist, setPlaylist ] = useState(-1)
	

	useEffect(() => {
		if (user.playlist) {
			setPlaylist(getPlaylist(user.playlist));
		} 
	  });
	
	

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользоатвеля с таким ИД нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				{playlist >= 0 && (
					<p>playlist: <Link to={`/playlists/${playlist}`}>{user.playlist}</Link></p>
				)}
			</div>
		</div>
	);
}
