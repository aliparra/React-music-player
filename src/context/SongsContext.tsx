import { createContext, useState } from 'react';
import { SongsProviderProps } from './songs-context.types';
import { songs } from '../constants'

//Create context and default value
export const SongsContext = createContext<any>({});

//Create context Provider form previous context
export const SongsProvider = ({ children }: SongsProviderProps) => {
	const [currentSong, setCurrentSong] = useState({
		title: '',
		author: '',
		id: null,
	});

	return (
		<SongsContext.Provider value={{ currentSong, setCurrentSong, songs }}>
			{children}
		</SongsContext.Provider>
	);
};
