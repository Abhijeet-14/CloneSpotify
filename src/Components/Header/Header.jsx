import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="container-fluid bg-secondary m-0">
            <div className="row justify-content-center m-0">
                <ul className="bg-warning text-left m-0">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/playlist">PlayList</Link></li>
                    <li><Link to="/recommendation">Recommendation</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
