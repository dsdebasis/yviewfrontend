import { VideoEditOpnClicked } from "./Context.js";
import React from "react";
function VideoEditContextProvider({ children }) {
  const [buttonClicked, setButtonClicked] = React.useState(null);
  const [videoData,setVideoData] = React.useState({})
  return (
    <VideoEditOpnClicked.Provider value={{ buttonClicked, setButtonClicked,setVideoData,videoData }}>
      {children}
    </VideoEditOpnClicked.Provider>
  );
}
export default VideoEditContextProvider;