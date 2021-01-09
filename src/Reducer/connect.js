export  const connect = (token) =>{
    window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: "ABJ--",
          getOAuthToken: (cb) => {
            cb(token);
          },
          volume: 1,
        });
        console.log("Transferring", player)
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
  
        player.connect();

        return player;
      };
}
