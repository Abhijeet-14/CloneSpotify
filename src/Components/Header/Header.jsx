import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//--- useContext
import { WindowDimContext } from "../../App";
import Spotify from "../Spotify";

function Header(props) {
  const { windowWidth } = useContext(WindowDimContext);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    windowWidth < 700 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <div className="container-fluid bg-dark m-0 p-0 justify-content-center">
      <Spotify />
      {!mobile && (
        <ul className="list-unstyled">
          <ul className="list-unstyled bg-light ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
          </ul>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
          <ul className="list-unstyled bg-light">
            <li>
              <Link to="/playlist/1">PlayList</Link>
            </li>
            <li>
              <Link to="/playlist/2">PlayList</Link>
            </li>
          </ul>
          <li>
            <Link to="/recommendation">Recommendation</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      )}

      {mobile && (
        <ul className="list-unstyled m-0 p-0 w-100 d-flex flex-md-column justify-content-around bg-info">
          <li>
            <Link to="/home">Hom</Link>
          </li>
          <li>
            <Link to="/search">Se</Link>
          </li>
          <li>
            <Link to="/playlist">Pl</Link>
          </li>
          <li>
            <Link to="/library">Lib</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
