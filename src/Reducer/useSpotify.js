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

    if (access_token) {
      //--- set token
      dispatch({
        type: "SET_TOKEN",
        payload: {
          token: access_token,
          expires: expires_in,
        },
      });

      // this will set token bw our App and spotify-server
      spotify.setAccessToken(access_token);

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
          payload: { yourLibrary: res},
        });
      });
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
            setTime(20000);
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
