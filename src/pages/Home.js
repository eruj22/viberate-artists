import React from "react";
import { useAppContext } from "../context/app_context";

function Home() {
  const { areArtistsLoading } = useAppContext();

  if (areArtistsLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

export default Home;
