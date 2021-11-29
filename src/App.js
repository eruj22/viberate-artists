import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ArtistInfo from "./pages/ArtistInfo";
import Home from "./pages/Home";
import "./style/main.scss";

function App() {
  const [allArtists, setAllArtists] = useState([]);
  const [areArtistsLoading, setAreArtistsLoading] = useState(true);

  const fetchArtists = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setAllArtists(resp.all_artists);
        setAreArtistsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArtists(
      "https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a"
    );
  }, []);

  return (
    <BrowserRouter>
      <Navigation allArtists={allArtists} />
      <Routes>
        <Route path="/" element={<Home loading={areArtistsLoading} />}></Route>
        <Route path=":id" element={<ArtistInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
