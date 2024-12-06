import "./PlaylistInfoPage.css";
import { PLAYLISTS } from "../../data";
import { Link, useParams } from "react-router-dom";

export function PlaylistInfoPage() {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];

	if (!playlist) {
		return (
			<div className="userInfoPage">
				<h2>PlaylistInfoPage</h2>

				<div className="users">
					<p>Такого плейлиста нет!</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>PlaylistInfoPage</h2>

			<div className="users">
			<p className="text">Название: {playlist.name}</p>
			<p className="text">Жанр: <Link to={`/playlists/?searchName=&searchGenre=${playlist.genre}`}>{playlist.genre}</Link></p>
			<p className="text">Список песен: <br/> - {playlist.info}</p>
			</div>
		</div>
	);
}
