import React from 'react'

function PlaylistDetails(props) {
    return (
        <div>
            <h1>PlayList Details - {props.match.params.id} </h1>
        </div>
    )
}

export default PlaylistDetails
