import React from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";
import { useSpotify, useTrackCheck } from "../../Reducer/useSpotify";

//Components
import Account from "./Account";
import LoadingAds from "./LoadingAds";
import PlayerButton from "./PlayerButton";
import TrackList from "./TrackList";
import Transfer from "./Transfer";

function Profile() {
  const [state, dispatch] = useDataLayerValue();
  const { user, ads, playingTrack, token, recentlyPlayed, yourLibrary } = state;

  console.log(state);

  const item = playingTrack?.item;

  //--- TRACK CHECK 
  useTrackCheck(item, dispatch);

  return (
    <div
      className="container-fluid nin-vh-100 text-white"
      style={styles.profile}
    >
      <Account user={user} />

      {!ads && item ? (
        <>
          <Transfer />
          <PlayerButton item={item} />

          <TrackList
            title="Your Library"
            token={token}
            list={yourLibrary}
            key={1}
          />

          <TrackList
            title="Recently Played"
            token={token}
            list={recentlyPlayed}
            key={2}
          />
        </>
      ) : (
        <LoadingAds />
      )}
    </div>
  );
}

export default Profile;

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
