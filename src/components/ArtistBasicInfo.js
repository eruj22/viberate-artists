import React from "react";
import ReactTooltip from "react-tooltip";

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
          className="btn btn--filled btn--add"
          data-tip={`<h3 class="tooltip__title">VOTE FOR SUBGENRES</h3>
              <p>Don’t agree with the subgenres? <br />
              Add the ones you think are <br />
              missing or vote for existing to get <br />
              yours on top!</p><br />
              <h4>ALTERNATIVE ROCK</h4>
              <progress class="progress" value="32" max="100">
                32%
              </progress>
              <h4>ALTERNATIVE METAL</h4>
              <progress class="progress" value="32" max="100">
                32%
              </progress>
              <h4>PROGRESSIVE ROCK</h4>
              <progress class="progress" value="32" max="100">
                32%
              </progress>
              <button class="btn btn--reverse">VOTE NOW</button>`}
        ></button>
      </div>
    </>
  );
}

export default ArtistBasicInfo;
