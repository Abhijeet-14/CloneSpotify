// to store & access Web Api

// to get access token & expires in 1 hour
export const authEndpoint = "https://accounts.spotify.com/authorize";

// we need to add '/callback' so that it can redirect to the uri
// const redirectUri = "http://192.168.1.10:3000/";
const redirectUri = "https://clone-spotify-rts.netlify.app/";

const clientId = "faf03f07c25447eaa635bb167bf7764e";
// const clientSecret = "0821079c2c0c4cbfa75abd1bca051f7e"

// Base 64
// ZmFmMDNmMDdjMjU0NDdlYWE2MzViYjE2N2JmNzc2NGU6MDgyMTA3OWMyYzBjNGNiZmE3NWFiZDFiY2EwNTFmN2U=


// SCOPE: required permission to take
//      https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-email", //	Read access to user’s email address.
  "user-library-read", //  Read access to a user's "Your Music" library
  "user-read-playback-state",
  "user-modify-playback-state",
];

//extract ACCESS TOKEN from URL
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
  // console.log("Code: ", window.location)
  return window.location.search
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// TOKEN
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true&state=34fFs29kd09`;

// CODE
// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=code&show_dialog=true&state=34fFs29kd09`;
