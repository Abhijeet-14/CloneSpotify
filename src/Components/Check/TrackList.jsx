import React, { useState } from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";
import { spotify } from "../../Reducer/useSpotify";

function TrackList({ list, token, title = "<Playlist_Name>" }) {
  const [state, dispatch] = useDataLayerValue();
  const [val, setVal] = useState({ theme: "dark", play: null });

  const items = list?.items;
  const next = list?.next;
  const previous = list?.previous;

  const changeTheme = () => {
    if (val.theme === "light") setVal({ ...val, theme: "dark" });
    else setVal({ ...val, theme: "light" });
  };

  const isPlay = () => {
    val.play === "P"
      ? setVal({ ...val, play: null })
      : setVal({ ...val, play: "P" });
  };

  const shuffleLib = (link) => {
    fetch(link + `&access_token=${token}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_YOUR_LIBRARY",
          payload: { yourLibrary: data },
        });
      })
      .catch((err) => console.log("Error shuffle: ", err));
  };

  const play = async (spotify_uri) => {
    // const device_id = "1ccff34fa3935ea7c72aea368ba646d87587ef45";
    // .play({ device_id, uris: [spotify_uri] })
    
    // If device_id is not given, it plays song in current active device
    await spotify
      .play({ uris: [spotify_uri] })
      .then(() => console.log("Play!!"))
      .catch((err) => console.log("err-play: ", err));
  };

  return (
    <div className="container-fluid my-2 p-1" style={{ background: "#181818" }}>
      <h4 className="text-center">{title}</h4>
      {!items && <h6>Nothing to show</h6>}
      {items && (
        <>
          <div className="row justify-content-between p-1 my-1 mx-0">
            <button
              onClick={() => shuffleLib(previous)}
              className="bg-info text-reset rounded p-2"
              disabled={!previous}
            >
              PREV
            </button>
            <button onClick={changeTheme}>THEME</button>
            <button
              onClick={() => shuffleLib(next)}
              className="bg-info text-reset rounded p-2"
              disabled={!next}
            >
              NEXT
            </button>
          </div>
          <table className={`table table-${val.theme} table-hover `}>
            <thead className="text-center text-sm-left">
              <tr>
                <th scope="col">#</th>
                <th scope="col">TITLE</th>
                <th scope="col">ALBUM</th>
                <th scope="col">TIME</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {items?.map((item, index) => {
                const time = item?.track?.duration_ms / 1000;
                const min = Math.floor(time / 60);
                var sec = Math.floor(time % 60);
                sec = sec < 10 ? "0" + sec : sec;
                var isMuted = item?.track?.available_markets.length !== 0 ? "--" : "mute";
                return (
                  <tr
                    key={index + 1}
                    className={`m-0 p-0 border-0 text-${isMuted}`}
                    style={{ cursor: "default" }}
                    onDoubleClick={() => play(item?.track?.uri)}
                    onMouseLeave={isPlay}
                    onMouseEnter={isPlay}
                  >
                    <th
                      scope="row"
                      className="p-0 m-0 align-middle text-center"
                    >
                      {/* {val.play !== "" ? val.play : index + 1} */}
                      {val.play || index + 1}
                    </th>
                    <td className="row p-1 m-0 border-top-0  justify-content-center">
                      <img
                        src={item?.track?.album?.images[2]?.url}
                        alt={item?.track?.name}
                        height={item?.track?.album?.images[2]?.height + "px"}
                        width={item?.track?.album?.images[2]?.width + "px"}
                        className="align-self-center p-1"
                      />
                      <div className="col p-2 m-0 align-self-center text-center text-sm-left">
                        {item?.track?.name}
                        <div className="">
                          {item?.track?.artists?.map((artist, index) => {
                            if (index > 1) return <>..</>;
                            return (
                              <a
                                href={artist?.external_urls?.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="text-reset"
                              >
                                {artist?.name + " "}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </td>
                    <td className="p-1 m-0 align-middle text-center text-sm-left">
                      <div className="p-1">
                        <a
                          href={item?.track?.album?.external_urls?.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-reset"
                        >
                          {item?.track?.album?.name}
                        </a>
                      </div>
                    </td>
                    <td className="align-middle">{min + ":" + sec}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default TrackList;
