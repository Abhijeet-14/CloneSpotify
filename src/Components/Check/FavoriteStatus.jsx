import React, { useState } from 'react'

import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

function FavoriteSatuts() {
    const [love, setLove] = useState(false)
    return (
        <div onClick = { () => setLove(!love)}>
            {love ? <Favorite /> : <FavoriteBorder />}
        </div>
    )
}

export default FavoriteSatuts

