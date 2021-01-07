import React, { useState } from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";

function RecentlyPlayed() {
  const [state] = useDataLayerValue();
  const [variables, setVariables] = useState({
    theme: "light",
    play: "",
  });

  const { recentlyPlayed, token } = state;
  const items = recentlyPlayed?.items;
  const next = recentlyPlayed?.next;

  //   console.log(items)
  const changeTheme = () => {
    if (variables.theme === "light")
      setVariables({ ...variables, theme: "dark" });
    else setVariables({ ...variables, theme: "light" });
  };

  const changeToPlay = (val) => {
    // if (variables.theme === "light") setVariables({...variables, theme:"dark"});
    // else setVariables({...variables, theme:"light"});
    setVariables({ ...variables, play: val });
  };

  return (
    <div className="container-fluid m-0 px-1 py-0 bg-danger">
      <h4>Recently Played </h4>
      {!items && <h6>Nothing to show</h6>}
      {items && (
        <>
          <div className="row justify-content-between bg-dark p-1 my-1 mx-0">
            <a href="##">PREV</a>
            <button onClick={changeTheme}>THEME</button>
            <a
              href={next + `&access_token=${token}`}
              rel="noreferrer"
              target="_blank"
            >
              NEXT
            </a>
          </div>
          <table
            className={`table table-${variables.theme} -bordered table-hover table-responsive`}
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
                const min = Math.floor(time/60);
                var sec = Math.floor(time%60);
                sec = (sec < 10) ? ("0" + sec) : sec;
                
                return (
                  <tr key={index+1}>
                    <th scope="row">
                      {variables.play !== "" ? variables.play : index + 1}
                    </th>
                    <td>
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
                    <td>
                      {min + ":" + sec}
                    </td>
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
