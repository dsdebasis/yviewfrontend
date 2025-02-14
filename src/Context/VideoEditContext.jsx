import { VideoEditOpnClicked } from "./Context.js";
import React from "react";
function VideoEditContextProvider({ children }) {
  const [buttonClicked, setButtonClicked] = React.useState(null);

  return (
    <VideoEditOpnClicked.Provider value={{ buttonClicked, setButtonClicked }}>
      {children}
    </VideoEditOpnClicked.Provider>
  );
}
export default VideoEditContextProvider;