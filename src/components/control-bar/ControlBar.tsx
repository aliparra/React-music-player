import { ReactElement, useContext, useState } from 'react';
import { SongsContext } from '../../context/SongsContext';
import './control-bar.css';
import { SongProps } from '../song/song.types';

function ControlBar(): ReactElement {
	const { currentSong, setCurrentSong, songs } = useContext(SongsContext);

	enum LoopModes {
		NOT = 'Not Replaying',
		ALL = 'Replaying all',
		ONE = 'Replaying one',
	}

	const totalSongs = songs.length;

	const [loopButtonState, setLoopButtonState] = useState(LoopModes.NOT);

	/**
	 * It sets a loopButtonState based on the current loopButtonState value
	 */
	const handleLoopButton = () => {
		if (loopButtonState === LoopModes.NOT) {
			setLoopButtonState(LoopModes.ALL);
		} else if (loopButtonState === LoopModes.ALL) {
			setLoopButtonState(LoopModes.ONE);
		} else {
			setLoopButtonState(LoopModes.NOT);
		}
	};

	// It returns the song index position in the songs array
	const getSongPosition = () => {
		const currentIndex = songs.findIndex((song: SongProps) => {
			return song.id === currentSong.id;
		});
		return currentIndex;
	};

	// Change currentSong for the next song in the array
	const setNextSong = () => {
		setCurrentSong(songs[getSongPosition() + 1]);
	};

	// Return true if currentSong is the last song in the array, otherwise returns false.
	const isLastSong = () => {
		return currentSong?.id === songs[totalSongs - 1].id;
	};

	// Return true if currentSong is the first song in the array, otherwise returns false.
	const isFirstSong = () => {
		return currentSong?.id === songs[0].id;
	};

	// Change currentSong for the previous song in the array
	const setPreviousSong = () => {
		setCurrentSong(songs[getSongPosition() - 1]);
	};

	// Add next button logic attending to the loop button mode
	const handleNextButton = () => {
		switch (loopButtonState) {
			case LoopModes.NOT:
				!isLastSong() && setNextSong();
				break;
			case LoopModes.ALL:
				isLastSong() ? setCurrentSong(songs[0]) : setNextSong();
				break;
			default:
				break;
		}
	};

	// Add previous button logic attending to the loop button mode
	const handlePreviousButton = () => {
		switch (loopButtonState) {
			case LoopModes.NOT:
				!isFirstSong() && setPreviousSong();
				break;
			case LoopModes.ALL:
				isFirstSong()
					? setCurrentSong(songs[totalSongs - 1])
					: setPreviousSong();
				break;
			default:
				break;
		}
	};

	return (
		<div className="control-bar">
			<p className="current-">
				{currentSong.title && currentSong.author
					? `${currentSong.title}-${currentSong.author}`
					: ''}
			</p>
			<button onClick={() => currentSong.id && handleNextButton()}>
				Next song
			</button>
			<button onClick={() => currentSong.id && handlePreviousButton()}>
				Previous song
			</button>
			<button onClick={handleLoopButton}>{loopButtonState}</button>
		</div>
	);
}

export default ControlBar;
