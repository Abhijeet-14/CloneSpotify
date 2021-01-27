// To store & Access Web Api

// to get access token & expires in 1 hour
export const authEndpoint = "https://accounts.spotify.com/authorize";

export const redirectUri = "http://localhost:3000/";
// export const redirectUri = "https://192.168.1.10:3000/";
// export const redirectUri = "https://spotiffy.netlify.app/";

const clientId = "faf03f07c25447eaa635bb167bf7764e";
// const clientSecret = "0821079c2c0c4cbfa75abd1bca051f7e"

// Base 64: <clientId:clientSecret>
// ZmFmMDNmMDdjMjU0NDdlYWE2MzViYjE2N2JmNzc2NGU6MDgyMTA3OWMyYzBjNGNiZmE3NWFiZDFiY2EwNTFmN2U=


// SCOPE: required permission to take
//      https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = [
  "streaming",
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-email", //	Read access to user’s email address.
  "user-library-read", //  Read access to a user's "Your Music" library
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-private",

];

/*
* Extract ACCESS TOKEN from URL
*/
export const getTokenFromUrl = () => {
  return window.location.hash // it goes to the hash in the location.
    .substring(1) // copy from 1st string
    .split("&") // split over '&'
    .reduce((initial, item) => {
      let parts = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
  // this {} - empty object,  tells the value of initial-value of initial
};

// extract CODE from URL
export const getCodeFromUrl = () => {
  return window.location.search
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

const token_type = "token";
// const token_type = "code";

// TOKEN
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=${token_type}&show_dialog=true`;














// "ugc-image-upload",
// "user-read-recently-played",
// "user-top-read",
// "user-read-playback-position",
// "user-read-playback-state",
// "user-modify-playback-state",
// "user-read-currently-playing",
// "app-remote-control",
// "streaming",
// "playlist-modify-public",
// "playlist-modify-private",
// "playlist-read-private",
// "playlist-read-collaborative",
// "user-follow-modify",
// "user-follow-read",
// "user-library-modify",
// "user-library-read",
// "user-read-email"
// "user-read-private"