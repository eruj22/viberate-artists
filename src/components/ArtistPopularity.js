import React from "react";
import ArtistPopularityGraph from "./ArtistPopularityGraph";
import PropTypes from "prop-types";

function ArtistPopularity({ artistData }) {
  const popularity = [...artistData.popularity];

  return (
    <div className="artist__popularity">
      <span className="label">most popular in</span>

      <div className="artist__graph">
        <ArtistPopularityGraph data={popularity.reverse()} />
      </div>
    </div>
  );
}

ArtistPopularity.propTypes = {
  artistData: PropTypes.object.isRequired,
};

export default ArtistPopularity;
