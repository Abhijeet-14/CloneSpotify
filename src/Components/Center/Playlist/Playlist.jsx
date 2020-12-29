import React from 'react'
import {Link} from 'react-router-dom'

function Playlist() {
    return (
        <div className="">
            Playlist
            <ul className="text-left" >
                <li><Link to="/playlist/1">Create Playlist</Link></li>
                <li><Link to="/playlist/2">Liked Songs</Link></li>
                <li><Link to="/playlist/3">PlayList 3</Link></li>
                <li><Link to="/playlist/4">PlayList 4</Link></li>
                <li><Link to="/playlist/5">PlayList 5</Link></li>
                <li><Link to="/playlist/6">PlayList 6</Link></li>
                <li><Link to="/playlist/7">PlayList 7</Link></li>
            </ul>
        </div>
    )
}

export default Playlist
