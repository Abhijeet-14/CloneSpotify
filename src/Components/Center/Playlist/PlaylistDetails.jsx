import React from 'react'

function PlaylistDetails({ history, match }) {
    return (
        <div>
            <h1>PlayList Details - {match.params.id} </h1>
            <button onClick={() => history.push('/home')} className="btn-primary">Home</button>
            <button onClick={() => history.replace('/home')} className="btn-outline-danger">CAN'T GO BACK</button>
        </div>
    )
}

export default PlaylistDetails
