import React from "react";
import ArtistBasicInfo from "./ArtistBasicInfo";
import ArtistSocial from "./ArtistSocial";
import hot from "../assets/hot.svg";
import claimed from "../assets/icon-claimed.svg";
import ReactTooltip from "react-tooltip";

function ArtistDetails({ artistData }) {
  const { booking_available, name, trending } = artistData;

  console.log(artistData);

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

      <div className="artist__details">
        <div className="artist__titleWrapper">
          <button className={booking_available ? "btn btn--solid" : "hide"}>
            booking request
          </button>
          <h1 className="artist__title">
            {name}
            <img
              src={claimed}
              alt="claim"
              className="icon--small icon--marginLeft"
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
            />
            <img
              src={hot}
              alt="fire"
              className={trending ? "icon--small  icon--marginLeft" : "hide"}
            />
          </h1>
        </div>

        <div className="row row--center">
          <button className="btn btn--filled btn--follow">follow</button>
          <button className="btn btn--filled btn--share"></button>
        </div>

        <ArtistBasicInfo artistData={artistData} />

        <ArtistSocial artistData={artistData} />
      </div>
    </>
  );
}

export default ArtistDetails;
