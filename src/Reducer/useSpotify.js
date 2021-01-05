import { useEffect } from "react";

/* this is a lightweight wrapper for Spotify-Web-Api */
import SpotifyApi from "spotify-web-api-js";

import { getTokenFromUrl } from "../Components/spotifyData";
// import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyApi();
// const [{token}, enDispatch] = useDataLayerValue();

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


    //   const userPlaylist = async () => {
    //         console.log("PLAYLIST")
    //     try {
    //       const response = await spotify.getUserPlaylists();
    //       console.log("UserPlaylists", response);
    //     } catch (error) {
    //       console.log("error", error.response);
    //     }
    //   };
    // userPlaylist();

    spotify.getPlaylist('4vHIKV7j4QcZwgzGQcZg1x')
      .then( response => console.log(response) )
      .catch( error => console.log("error", error.response) );
    }
    
  }, []);
};


export const useSpotifyCheck = () => {
    useEffect( () => {
        console.log("SPOTIFY-CHECK")
    //   const tracks = async () => {
    //     try {
    //       const response = await spotify.searchTracks('Iktara');
    //       console.log("response", response);
    //     } catch (error) {
    //       console.log("error", error.response);
    //     }
    //   };

    //   tracks();
    },[]);
} 



/*
=== GET ARTISTS & MULTIPLE ARTISTS ===
    spotify.getArtist('2hazSY4Ef3aB9ATXW7F5w3');
             &&
    spotify.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8']);
    
=== GET ALBUMS & MULTIPLE ALBUMS ===
    spotify.getAlbum('3KyVcddATClQKIdtaap4bV');
             &&
    spotify.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV']);

=== SEARCH ARTISTS ===
    spotify.searchArtists('Iktara');

=== SEARCH TRACKS ===
    spotify.searchTracks('Iktara');

=== GET PLAYLIST ===
    spotify.getPlaylist('4vHIKV7j4QcZwgzGQcZg1x')

=== GET USER PLAYLISTS ===
    spotify.getUserPlaylists('jmperezperez')
*/