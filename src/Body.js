


import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body ({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log("dicover titel", discover_weekly);

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:3T3viSzYcdXRdbiVB4b08C`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log("heheheheheheheheh",r);
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  // 
  const playSong = (track) => {
    spotify.play({
      uris: [track.uri],
    });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />


      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <h4 className="playtext">PLAYLIST</h4>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle"
            // onClick={playPlaylist}  
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}
export default Body;