import React from 'react'
import { loginUrl } from '../spotifyData';

function Account({user}) {
    return (
      <div>
        <h3 className="row justify-content-center">Welcome to profile!!</h3>
        <a
          href={loginUrl}
          style={styles.refresh}
          className="row justify-content-center"
        >
          Refersh Token
        </a>

        {user && (
          <>
            <div className="row my-3 align-items-center justify-content-center">
              <img
                src={user?.images[0]?.url}
                alt={user?.display_name}
                className="img-thumbnail mr-2"
                style={styles.proImg}
              />
              <h3>{user?.display_name}</h3>
            </div>
          </>
        )}
      </div>
    );
}

export default Account


/*
*
* STYLING
*
*/
const styles = {
  profile: {
    // display: "grid",
    // placeItems: "center",
    backgroundColor: "#987654",
    fontSize: "15px",
  },
  refresh: {
    padding: "4px",
    fontSize: "20px",
    backgroundColor: "#1db954",
    color: "white",
    borderRadius: "99px",
    // float: "right",
  },
  proImg: {
    borderRadius: "20px",
    overflow: "auto",
    width: "100px",
  },
};
