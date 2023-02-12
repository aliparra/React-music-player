import { ReactElement } from 'react'
import ControlBar from '../control-bar/ControlBar'
import SongsList from '../songs-list/SongsList'
import './music-player.css'

function MusicPlayer(): ReactElement {

  return (
    <div className="MusicPlayer">
      <SongsList/>
      <ControlBar/>
    </div>
  )
}

export default MusicPlayer