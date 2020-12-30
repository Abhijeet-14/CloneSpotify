import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


//--- useContext
import { WindowDimContext } from '../../App'

function Header(props) {
    const { windowWidth } = useContext(WindowDimContext)
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        windowWidth < 700 ? setMobile(true) : setMobile(false);
    }, [windowWidth])

    return (
        <div className="container-fluid bg-warning">
            {!mobile &&
                <React.Fragment className="d-flex flex-column m-0 p-0">
                    <ul className="list-unstyled bg-success">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/library">Library</Link></li>
                    </ul>
                    <ul className="list-unstyled bg-secondary">
                        <li><Link to="/playlist">Playlist</Link></li>
                        <ul className="list-unstyled">
                            <li><Link to="/playlist/1">PlayList</Link></li>
                            <li><Link to="/playlist/2">PlayList</Link></li>
                        </ul>
                    </ul>
                    <ul className="list-unstyled bg-success">
                        <li><Link to="/recommendation">Recommendation</Link></li>
                    </ul>
                    <ul className="list-unstyled bg-secondary">
                        <li><Link to="/feedback">Feedback</Link></li>
                    </ul>
                </React.Fragment>
            }

            {mobile &&
                <ul className="list-unstyled m-0 p-0 w-100 d-flex flex-md-column justify-content-around bg-info" >
                    <li><Link to="/home">Hom</Link></li>
                    <li><Link to="/search">Se</Link></li>
                    <li><Link to="/playlist">Pl</Link></li>
                    <li><Link to="/library">Lib</Link></li>
                </ul>
            }
        </div>
    )
}

export default Header
