
import VideoPlayer from "./VideoPlayer.jsx";
import { useRef } from "react";

function Vplay2() {
  let link = localStorage.getItem("link")
  console.log(link)
  const playerRef = useRef(null);
  const videoLink = link;
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: link,
        // type: "mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      

      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  );
}

export default Vplay2;