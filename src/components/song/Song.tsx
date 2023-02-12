import { ReactElement } from 'react'
import './song.css'
import { SongProps } from './song.types'
import PropTypes from 'prop-types';

function Song({active, author, title }: SongProps): ReactElement {

  return (
    <div className="song">
      <h1 className={active ? `--active-song` : ``}>{title}</h1>
      <p>{author}</p>
    </div>
  )
}

Song.propTypes = {  
  active: PropTypes.bool,  
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,  
}  
  
Song.defaultProps = {  
  active: false 
} 

export default Song