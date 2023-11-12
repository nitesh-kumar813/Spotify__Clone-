// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token: "BQCiWVPHrXtV9e8eAuV84yc3khBvqmzHJplvSpdRllqxGk8Qk9DwsEOG934JSqS1ZyR8cLR2MWZoYsEROYE3qFRn6GFMHaE9Q-pfnZHJF6VxbWsGxLs4UdK5RbHco8QIKtYp4NgvlKY21gXVbR6VaxMm-p7h4IfIut248eh8Rm8xedDOlgwdQfTFC5041AiCnqdwL44ryyej0qQ8qfLH",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;