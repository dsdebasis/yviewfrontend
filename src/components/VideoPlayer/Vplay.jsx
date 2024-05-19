import React from 'react'
import { VideoJS } from './VideoPlayer.jsx'

const Vplay = ({src}) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://res.cloudinary.com/idsdebasis/video/upload/v1716059497/nv7dgysgnvjitunnr5yy.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
    <div className=' h-screen border-black w-full  flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 '>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>


    </div>
  )
}

export default Vplay
