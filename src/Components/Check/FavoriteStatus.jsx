import React from 'react'

import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

function FavoriteSatuts() {
    return (
        <div onClick = { () => console.log("Whooaa!! You liked it.")}>
            <Favorite />
            <FavoriteBorder />
        </div>
    )
}

export default FavoriteSatuts

