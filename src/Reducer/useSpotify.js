import { useEffect, useState } from "react";

/* this is a lightweight wrapper for Spotify-Web-Api */
import SpotifyApi from "spotify-web-api-js";

import { getTokenFromUrl } from "../Components/spotifyData";

export const spotify = new SpotifyApi();

export const useSpotify = (dispatch) => {
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const { access_token, expires_in } = hash;
    const token = access_token;

    if(token){
      console.log("TRANSFER NAAA");
      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: "ABJ--",
          getOAuthToken: (cb) => {
            cb(token);
          },
          volume: 1,
        });
        console.log(
          token,
          player?._options?.name,
          player?._options?.id,
          player?._options?.getOAuthToken
        );
        // Error handling
        player.addListener("initialization_error", ({ message }) => {
          console.error(message);
        });
        player.addListener("authentication_error", ({ message }) => {
          console.error(message);
        });
        player.addListener("account_error", ({ message }) => {
          console.error(message);
        });
        player.addListener("playback_error", ({ message }) => {
          console.error(message);
        });

        // Playback status updates
        player.addListener("player_state_changed", (state) => {
          console.log("a: ", state);
        });

        // Ready
        player.addListener("ready", ({ device_id }) => {
          console.log("Ready with Device ID", device_id);
        });

        // Not Ready
        player.addListener("not_ready", ({ device_id }) => {
          console.log("Device ID has gone offline", device_id);
        });     

        // Connect to the player!
        player.connect();
      };
    }

    /*    // CODE FROM URL
    const search = getCodeFromUrl();
    const { code } = search;
    // window.location.search = "xyz";

    const refr = async () => {
      await fetch(`https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${code}&redirect_uri=${"http://192.168.1.10:3000/"}`,{
          headers: {
            Authorization: "Basic ZmFmMDNmMDdjMjU0NDdlYWE2MzViYjE2N2JmNzc2NGU6MDgyMTA3OWMyYzBjNGNiZmE3NWFiZDFiY2EwNTFmN2U=",
            "Content-Type": "application/x-www-form-urlencoded",},
          method: "POST",})
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: "SET_NEWVAL",
            payload: { newVal: data },
          })
        )
        .catch((err) => console.log("please: ", err));
    };

    refr();
      */

    // window.location.search = "";
    // console.log(state);

    if (token) {
      //--- set token
      dispatch({
        type: "SET_TOKEN",
        payload: {
          token: token,
          expires: expires_in,
        },
      });

      // this will set token bw our App and spotify-server
      spotify.setAccessToken(token);

      //gets user data:
      spotify.getMe().then((user) => {
        //--- set User
        dispatch({
          type: "SET_USER",
          payload: { user },
        });
      });

      spotify.getMyCurrentPlayingTrack().then((response) => {
        dispatch({
          type: "SET_CURRENT_PLAYING_TRACK",
          payload: { playingTrack: response, ads: false },
        });
      });

      spotify.getMyCurrentPlaybackState().then((response) => {
        dispatch({
          type: "SET_CURRENT_PLAYBACK_STATE",
          payload: { playbackState: response, playing: true },
        });
      });

      spotify.getMySavedTracks().then((res) => {
        dispatch({
          type: "SET_YOUR_LIBRARY",
          payload: { yourLibrary: res },
        });
      });

      // const device_id = localStorage.getItem("_spharmony_device_id");

      // const transs = ({
      //   playerInstance: {
      //     _options: { getOAuthToken, id },
      //   },
      // }) => {
      //   console.log(id, getOAuthToken);
      //   getOAuthToken((token) => {
      //     fetch(`https://api.spotify.com/v1/me/player`, {
      //       method: "PUT",
      //       body: JSON.stringify({ device_ids: [device_id] }),
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${token}`,
      //       },
      //     })
      //       .then((res) => res.json())
      //       .then((data) => console.log("data: ", data))
      //       .catch((err) => console.log("err: ", err));
      //   });
      // };
  
      // transs({
      //   playerInstance: new window.Spotify.Player({
      //     name: "ABJ--",
      //     getOAuthToken: (cb) => cb(token),
      //   })
      // });
    }
  }, [dispatch]);
};

/*
In Track Check by using setInterval we call the getMyCurrentTrackingPlaying()
And we check the CURRENT TRACK NAME with RESPONSE TRACK NAME
If Response item = null....  that means ADVERTISEMENT
If CURRENT TRACK NAME !== RESPONSE TRACK NAME.... song has changed
Hence, dispatch response(newTrack) to set playingTrack to NEW TRACK
*/
export const useTrackCheck = (track, dispatch) => {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    const check = setInterval(() => {
      spotify
        .getMyCurrentPlayingTrack()
        .then((response) => {
          if (response.item === null) {
            setTime(5000);
            console.log("ADS or PAUSED");
            dispatch({
              type: "SET_ADS",
              payload: { ads: true, playingTrack: null },
            });
          } else if (response?.item?.name !== track?.name) {
            setTime(1000);
            // DISPATCHDE NEW TRACK
            console.log("DISPATCHED NEW TRACK");
            dispatch({
              type: "SET_CURRENT_PLAYING_TRACK",
              payload: { playingTrack: response, ads: false },
            });

            // RECENTLY PLAYED TRACK
            console.log("RECENTLY PLAYED TRACK");
            spotify
              .getMyRecentlyPlayedTracks()
              .then((response) =>
                dispatch({
                  type: "SET_RECENTLY_PLAYED_TRACKS",
                  payload: { recentlyPlayed: response },
                })
              )
              .catch((err) => console.log("error: ", err.response));
          }
        })
        .catch((err) => console.log("err", err));
    }, time);

    return () => clearInterval(check);
  });
  // Note: [], we didn't give any dependencies nor []
  //        because we want to render it every seconds
};

//
//
//
//
//
/*
=== GET ACCESS TOKEN ===
    spotify.getAccessToken();

=== SET ACCESS TOKEN ===
    .setAccessToken();

=== GET ME ===
    .getMe();    - Fetches information about the current user

=== GET MY CURRENT PLAYING TRACK ===
    .getMyCurrentPlayingTrack();    - it will only work when we are listening any song

=== GET MY CURRENT PLAYBACK STATE ===
    .getMyCurrentPlaybackState();    - it will only work when we are listening any song

=== GET MY RECENTLY PLAYED ===
    .getMyRecentlyPlayedTracks()

=== GET ARTISTS & MULTIPLE ARTISTS ===
    .getArtist('2hazSY4Ef3aB9ATXW7F5w3');
             &&
    .getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8']);
    
=== GET ALBUMS & MULTIPLE ALBUMS ===
    .getAlbum('3KyVcddATClQKIdtaap4bV');
             &&
    .getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV']);

=== SEARCH ARTISTS ===
    .searchArtists('Iktara');

=== SEARCH TRACKS ===
    .searchTracks('Iktara');

=== GET PLAYLIST ===
    .getPlaylist('4vHIKV7j4QcZwgzGQcZg1x')

=== GET USER PLAYLISTS ===
    .getUserPlaylists('jmperezperez')

=== GET My DEVICES ===
    spotify.getMyDevices()

*/
