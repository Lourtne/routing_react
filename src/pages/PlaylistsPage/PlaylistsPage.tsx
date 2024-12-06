import "./PlaylistsPage.css";
import { PLAYLISTS } from "../../data";
import { Link, useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";

export function PlaylistsPage() {
	const [searchNameParams, setSearchNameParams] = useSearchParams();
	const [searchGenreParams, setSearchGenreParams] = useSearchParams();

	const searchName = searchNameParams.get("searchName")?.toLowerCase() || "";
	const searchGenre = searchGenreParams.get("searchGenre")?.toLowerCase() || "";

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchNameParams({
			searchName: value.toLowerCase(),
			searchGenre: searchGenre
		})
	}

	const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchGenreParams({
			searchName: searchName,
			searchGenre: value.toLowerCase()
		})
	}

	const playlistNonMusic = PLAYLISTS.filter(({genre}) => 
		genre !== 'Non Music'
	)

	const filteredPlaylists = playlistNonMusic.filter(( {name, genre} ) =>
		name.toLowerCase().includes(searchName) && genre.toLowerCase().includes(searchGenre)
	);

	return (
		<div className="PlaylistsPage">
			<h2>PlaylistsPage</h2>

			<label>
				введите жанр {" "}
				<input type="text" value={searchGenre} onChange={handleSearchGenre} />
			</label>
			<br/>
			<label>
				введите название {" "}
				<input type="text" value={searchName} onChange={handleSearchName} />
			</label>

			<ul className="list">
				{filteredPlaylists.map(({ playlistId, name }) => (
					<li key={playlistId}>
						<Link to={`/playlists/${playlistId}`}>
							{name}
						</Link>
					</li>
					))}
			</ul>
		</div>
	);
}
