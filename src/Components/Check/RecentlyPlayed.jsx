import React, { useState } from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";
import { spotify } from "../../Reducer/useSpotify";

function RecentlyPlayed({ list, token, title = "<Playlist_Name>" }) {
  const [dispatch] = useDataLayerValue();
  const [val, setVal] = useState({ theme: "dark", play: "" });

  const items = list?.items;
  const next = list?.next;
  const previous = list?.previous;

    // console.log(!next)
  const changeTheme = () => {
    if (val.theme === "light") setVal({ ...val, theme: "dark" });
    else setVal({ ...val, theme: "light" });
  };

  const changeToPlay = (val) => {
    setVal({ ...val, play: val });
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

  return (
    <div className="container-fluid m-0 px-1 py-0 bg-danger">
      <h4>{title}</h4>
      {!items && <h6>Nothing to show</h6>}
      {items && (
        <>
          <div className="row justify-content-between bg-dark p-1 my-1 mx-0">
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
          <table
            className={`table table-${val.theme} table-hover table-responsiv`}
          >
            <thead className="text-left">
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
                return (
                  <tr key={index + 1} >
                    <th scope="row" className="align-items-baseline bg-warning p-0 m-0">
                      <div className="bg-danger p-0 m-0">
                      {val.play !== "" ? val.play : index + 1}
                      </div>
                    </th>
                    <td className="">
                      <div className="row">
                        <img
                          src={item?.track?.album?.images[2]?.url}
                          alt={item?.track?.name}
                          height={item?.track?.album?.images[2]?.height + "px"}
                          width={item?.track?.album?.images[2]?.width + "px"}
                          className=""
                        />
                        <span className="pl-0 pl-sm-1">
                          <a
                            href={item?.track?.external_urls?.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-reset"
                          >
                            {item?.track?.name}
                          </a>
                          <br />
                          {item?.track?.artists?.map((artist, index) => {
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
                        </span>
                      </div>
                    </td>
                    <td>
                      <a
                        href={item?.track?.album?.external_urls?.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-reset "
                      >
                        {item?.track?.album?.name}
                      </a>
                    </td>
                    <td>{min + ":" + sec}</td>
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

export default RecentlyPlayed;
