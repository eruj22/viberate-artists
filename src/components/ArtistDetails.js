import React from "react";
import ArtistBasicInfo from "./ArtistBasicInfo";
import ArtistSocial from "./ArtistSocial";
import hot from "../assets/hot.svg";
import claimed from "../assets/icon-claimed.svg";

function ArtistDetails({ artistData }) {
  const { booking_available, name, trending } = artistData;

  return (
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
  );
}

export default ArtistDetails;
