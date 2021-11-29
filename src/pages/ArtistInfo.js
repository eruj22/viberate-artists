import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArtistDetails from "../components/ArtistDetails";
import ArtistPopularity from "../components/ArtistPopularity";
import Loader from "../components/Loader";

function ArtistInfo() {
  const [artistData, setArtistData] = useState([]);
  const [isArtistLoading, setIsArtistLoading] = useState(true);
  const { id } = useParams();
  const { image, name } = artistData;

  const fetchData = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setArtistData(resp.data);
        setIsArtistLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData(`https://run.mocky.io/v3/${id}`);
  }, [id]);

  if (isArtistLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <section className="artist">
        <img src={image} alt={`artist ${name}`} className="artist__image" />

        <ArtistDetails artistData={artistData} />

        <ArtistPopularity artistData={artistData} />
      </section>
    </div>
  );
}

export default ArtistInfo;
