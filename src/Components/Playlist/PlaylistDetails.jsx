import React from 'react'

function PlaylistDetails({history, match}) {
    return (
        <div>
            <h1>PlayList Details - {match.params.id} </h1>
            <button onClick={() => history.push('/home')}>Home</button>
            <button onClick={() => history.replace('/home')}>CAN'T GO BACK</button>
        </div>
    )
}

export default PlaylistDetails
