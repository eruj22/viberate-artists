import React from "react";
import Loader from "../components/Loader";
import { useAppContext } from "../context/app_context";

function Home() {
  const { areArtistsLoading } = useAppContext();

  if (areArtistsLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

export default Home;
