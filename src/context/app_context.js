import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/app_reducer";

const initialState = {
  areArtistsLoading: false,
  allArtists: [],
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchArtists = async (url) => {
    dispatch({ type: "ALL_ARTISTS_LOADING" });

    fetch(url)
      .then((res) => res.json())
      .then((artists) => {
        dispatch({ type: "GET_ALL_ARTISTS", payload: artists.all_artists });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArtists(
      "https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a"
    );
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
