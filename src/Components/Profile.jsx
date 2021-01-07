import React, { useState } from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";
import { loginUrl } from "./spotifyData";
import { spotify, useTrackCheck } from "../Reducer/useSpotify";
import RecentlyPlayed from "./Check/RecentlyPlayed";

function Profile() {
  const [state, dispatch] = useDataLayerValue();
  // const [accessToken, setAccessToken] = useState("");
  const { user, ads, playingTrack, playbackState, token, recentlyPlayed, yourLibrary } = state;

  const item = playingTrack?.item;
  console.log(state);

  //--- TRACK CHECK
  useTrackCheck(item, dispatch);

  const pausePlay = () => {
    spotify
      .play({ device_id: playbackState?.device.id })
      .then((response) => console.log(response))
      .catch((err) => console.log("err: ", err.response));
  };

  const playNext = () => {
    spotify
      .skipToNext({ device_id: playbackState?.device?.id })
      .then((response) => console.log(response))
      .catch((err) => console.log("err: ", err.response));
  };

  const playPrev = () => {
    spotify
      .skipToPrev({ device_id: playbackState?.device?.id })
      .then((response) => console.log(response))
      .catch((err) => console.log("err: ", err.response));
  };

  const modVolume = () => {
    spotify
      .setVolume({ volume_percent: 20 })
      .then((response) => console.log(response))
      .catch((err) => console.log("err: ", err.response));
  };

  return (
    <div className="container-fluid vh-100 text-white" style={styles.profile}>
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
          <h2>Current Track:</h2>
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
                <a href={item?.external_urls.spotify} target="_blank" rel='noreferrer'>
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
                <a href={item?.album?.external_urls?.spotify} target="_blank" rel='noreferrer'>
                  <span className="">{item?.album?.name}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <button onClick={pausePlay}>play</button>
            <button onClick={playPrev}>prev</button>
            <button onClick={pausePlay}>pause</button>
            <button onClick={playNext}>next</button>
            <button onClick={modVolume}>Volume</button>
          </div>

          <RecentlyPlayed title="Your Library" token={token} list={yourLibrary}/>
          <RecentlyPlayed title="Recently Played" token={token} list={recentlyPlayed}/>
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
    backgroundColor: "black",
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
