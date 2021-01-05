import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";
import { useSpotifyCheck } from "../Reducer/useSpotify";

function Profile() {
  const [{ user }, dispatch] = useDataLayerValue();

  useSpotifyCheck();
  return (
    <div className="bg-dark text-white">
      Welcome to profile!! <hr />
      {user && (
        <section>
          <p>Name: {user.display_name}</p>
          <img src={user.images[0].url} alt="Profile" />
          {/* <p>Id: {user.id}</p>
          <p>Href: {user.href}</p>
          <p>Images: {user.images[0].url}</p>
          <p>Followers: {user.followers.total}</p>
          <p>Type: {user.type}</p>
          <p>Uri: {user.uri}</p>
          <p>External_urls: {user.external_urls.spotify}</p> */}
        </section>
      )}
    </div>
  );
}

export default Profile;
