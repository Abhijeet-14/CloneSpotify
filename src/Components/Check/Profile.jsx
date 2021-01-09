import React from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";
import { loginUrl } from "../spotifyData";
import { useTrackCheck } from "../../Reducer/useSpotify";
import PlayerButton from "./PlayerButton";
import TrackList from "./TrackList";

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
      <h3 className="row justify-content-center">Welcome to profile!!</h3>
      <a
        href={loginUrl}
        style={styles.refresh}
        className="row justify-content-center"
      >
        Refersh Token
      </a>

      {user && (
        <div className="row my-3 align-items-center justify-content-center">
          <img
            src={user?.images[0]?.url}
            alt={user?.display_name}
            className="img-thumbnail mr-2"
            style={styles.proImg}
          />
          <h3>{user?.display_name}</h3>
        </div>
      )}

      {!ads && item ? (
        <>
          <h2 id="player">Current Track:</h2>
          <div className="bg-dark row justify-content-center">
            <img
              src={item?.album?.images[1]?.url}
              alt={item?.album?.name}
              width={item?.album?.images[1].width}
              height={item?.album?.images[1].height}
              className="m-0 p-0 col- align-self-center"
              style={{ objectFit: "contain" }}
            />
            <div className="col align-self-end text-center text-sm-left">
              <div>
                <a
                  href={item?.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-truncate">{item?.name}</span> {"("}
                  {Math.floor(item?.duration_ms / 60000)}
                  {":"}
                  {Math.floor(item?.duration_ms / 1000) % 60}
                  {" mins)."}
                </a>
              </div>
              <div>
                {item?.artists.map((artist) => (
                  <a href={artist.external_urls.spotify} key={artist.id}>
                    {artist.name}
                    {", "}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href={item?.album?.external_urls?.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="">{item?.album?.name}</span>
                </a>
              </div>
            </div>
          </div>

          <PlayerButton />

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
        <div className="row bg-dark justify-content-center">
          <h1>Loading... or ADS</h1>
        </div>
      )}
    </div>
  );
}

export default Profile;

// STYLING
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
