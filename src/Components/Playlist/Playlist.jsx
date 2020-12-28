import React from 'react'
import {Link} from 'react-router-dom'

function Playlist() {
    return (
        <div>
            Playlist
            <ul>
                <li><Link to="/playlist/1">PlayList 1</Link></li>
                <li><Link to="/playlist/2">PlayList 2</Link></li>
                <li><Link to="/playlist/3">PlayList 3</Link></li>
            </ul>
        </div>
    )
}

export default Playlist
