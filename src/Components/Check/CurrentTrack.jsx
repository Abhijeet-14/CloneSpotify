import React from "react";

// Component
import FavoriteStatus from "./FavoriteStatus";

function CurrentTrack({ item }) {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row p-0 m-0 row-cols-3 bg-danger h-100 align-items-center">
        {/* Image */}
        <div className="col-3 m-0 p-0 bg-warning text-center">
          <img
            src={item?.album?.images[1]?.url}
            alt={item?.album?.name}
            width={item?.album?.images[2].width}
            height={item?.album?.images[2].height}
            style={{ objectFit: "contain" }}
            className="img-fluid"
          />
        </div>
        {/* Title */}
        <div className="col-7 p-1 m-0 align-self-center bg-info">
          <div className="m-0 p-0 " style={styles.textTruncate}>
            <a
              href={item?.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >
              {item?.name}
            </a>
          </div>
          {/* Artist */}
          <div style={styles.textTruncate}>
            {item?.artists.map((artist) => (
              <a
                href={artist.external_urls.spotify}
                key={artist.id}
                className="text-reset"
              >
                {artist.name}
                {", "}
              </a>
            ))}
          </div>
        </div>
        {/* Favorite Status */}
        <div className="col-2 m-0 p-0 bg-success">
          <FavoriteStatus />
        </div>
      </div>
    </div>
  );
}

export default CurrentTrack;

/*
 *
 *
 *
 */
const styles = {
  textTruncate: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};
