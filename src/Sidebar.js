import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from "./DataLayer";



function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  // console.log(playlists);



  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img className="sidebar_logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"alt=""/>
        <SidebarOption Icon={HomeIcon} option="Home" />
        <SidebarOption Icon={SearchIcon} option="Search" />
      </div>
      

      <div className="sidebar_bottam">
        <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
        <strong className="sidebar_title">Playlists </strong>
        <hr />
        {playlists?.items?.map((playlist) => ( <SidebarOption key={playlist.id} option={playlist.name} />))}
       
      </div>
    </div>
  );
}

export default Sidebar;