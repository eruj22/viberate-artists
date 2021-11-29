import React from "react";
import MyResponsiveBar from "./MyResponsiveBar";
import PropTypes from "prop-types";

function ArtistPopularity({ artistData }) {
  return (
    <div className="artist__popularity">
      <span className="label">most popular in</span>

      <div className="artist__graph">
        <MyResponsiveBar data={artistData.popularity} />
      </div>
    </div>
  );
}

ArtistPopularity.propTypes = {
  artistData: PropTypes.object.isRequired,
};

export default ArtistPopularity;
