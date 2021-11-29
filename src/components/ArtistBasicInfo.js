import React from "react";
import ReactTooltip from "react-tooltip";
import { tooltipContent } from "../utils/functions";
import PropTypes from "prop-types";

function ArtistBasicInfo({ artistData }) {
  const { country, genre, subgenres } = artistData;

  return (
    <>
      <ReactTooltip
        place="bottom"
        html={true}
        clickable={true}
        event="mouseover"
        eventOff="mouseout"
        offset={{ top: "8px", right: "100%" }}
        arrowColor="transparent"
        backgroundColor="#000"
        delayHide={300}
      />

      <div className="row">
        <span className="label">origin</span>
        <button className="btn btn--light">{country.name}</button>
      </div>

      <div className="row">
        <span className="label">genre</span>
        <button className="btn btn--light">{genre.name}</button>
      </div>

      <div className="row">
        <span className="label">subgenres</span>
        {subgenres.map((subgenre) => {
          const { name, id } = subgenre;
          return (
            <button key={id} className="btn btn--light btn--marginBottom">
              {name}
            </button>
          );
        })}
        <button
          className="btn btn--filled btn__add"
          data-tip={tooltipContent("vote", subgenres)}
        ></button>
      </div>
    </>
  );
}

ArtistBasicInfo.propTypes = {
  artistData: PropTypes.object.isRequired,
};

export default ArtistBasicInfo;
