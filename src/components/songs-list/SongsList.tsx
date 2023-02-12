import { ReactElement, useContext } from 'react';
import { SongsContext } from '../../context/SongsContext';
import Song from '../song/Song';
import { SongProps } from '../song/song.types';
import './songs-list.css';

function SongsList(): ReactElement {
	// Context data I need / Context name
	const { currentSong, setCurrentSong, songs } = useContext(SongsContext);

	const isCurrentSong = (songId: number) => {
		return songId ? songId === currentSong.id : false;
	};

	return (
		<div className="songs-list">
			{songs.map((song: SongProps) => {
				const { title, author, id } = song;
				return (
					<div className="song__wrapper" key={song.id}>
						<div className="song">
							<Song
								id={song.id}
								title={song.title}
								author={song.author}
								active={isCurrentSong(song.id)}
							/>
						</div>
						<button onClick={() => setCurrentSong({ title, author, id })}>
							Play!
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default SongsList;
