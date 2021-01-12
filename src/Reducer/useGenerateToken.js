import { useEffect } from "react";
import {
  getCodeFromUrl,
  getTokenFromUrl,
  redirectUri,
} from "../Components/spotifyData";
import { setUserAction } from "./useSpotify";

export const useCodeToToken = (dispatch) => {
  useEffect(() => {
    // CODE FROM URL
    const search = getCodeFromUrl();
    const { code } = search;

    const refr = async () => {
      await fetch(
        `https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
        {
          headers: {
            Authorization:
              "Basic ZmFmMDNmMDdjMjU0NDdlYWE2MzViYjE2N2JmNzc2NGU6MDgyMTA3OWMyYzBjNGNiZmE3NWFiZDFiY2EwNTFmN2U=",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("25: ", data);
          dispatch({
            type: "SET_NEWVAL",
            payload: { newVal: data },
          });
          if (data.access_token) {
            setUserAction(dispatch, data);
          }
        })
        .catch((err) => console.log("please: ", err));

      // window.location.search = "?"
    };

    refr();
  }, [dispatch]);
};

export const useUrlToToken = (dispatch) => {
  useEffect(() => {
    /* TOKEN FROM URL */
    const hash = getTokenFromUrl();
    window.location.hash = "";

    if (hash.access_token) {
      setUserAction(dispatch, hash);
    }
  });
};
