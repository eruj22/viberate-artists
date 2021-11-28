import React from "react";

function ArtistBasicInfo({ artistData }) {
  const { country, genre, subgenres } = artistData;

  return (
    <>
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
        <button className="btn btn--filled btn--add"></button>
      </div>
    </>
  );
}

export default ArtistBasicInfo;
