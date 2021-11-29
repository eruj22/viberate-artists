const reducer = (state, action) => {
  if (action.type === "ALL_ARTISTS_LOADING") {
    return { ...state, areArtistsLoading: true };
  }

  if (action.type === "GET_ALL_ARTISTS") {
    return { ...state, areArtistsLoading: false, allArtists: action.payload };
  }

  return state;
};

export default reducer;
