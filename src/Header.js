import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { getTokenFromResponse } from "./spotify";
// import { useDataLayerValue } from "./DataLayer";
import { useDataLayerValue, DataLayerContext } from './DataLayer';


function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  console.log("disply user:",user);

  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="What do you want to listen to?"
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar  src={user?.images[1].url} alt="hello"/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;


