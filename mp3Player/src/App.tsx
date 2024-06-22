import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const Line = ({ pos }) => (
  <div className='line' style={{'--pos': pos}}></div>
)


function App() {

  const tracks = [
    {
      url: "synthwave1.wav",
      title: "achechi15 - Come To Dance",
      tags: [""],
    },
    {
      url: "NeonPulse.wav",
      title: "achechi15 - Neon Pulse",
      tags: [""],
    },
    {
      url: "VelocityVibes.wav",
      title: "achechi15 - velocity Vibes",
      tags: [""],
    },
  ];


  return (
    <>
    <div>
      <div className='synthwave-background'>
        <div className='_80s-text'>
          <h1>PlayList Neon Horizon</h1>
        </div>
        {/* this will be the sun */}
        <div className='sun'>
          {/* lines */}
          <div className='lines'>
            <Line pos={1} />
            <Line pos={2} />
            <Line pos={3} />
            <Line pos={4} />
            <Line pos={5} />
            <Line pos={6} />
            <Line pos={7} />
          </div>
        </div>
        {/* <audio className='fixed z-40 ' controls loop autoPlay>

          <source src='synthwave1.wav' />
          Your Browser does not support the Audio Tag
        </audio> */}
        <div className='fixed z-40 bottom-[2rem]' >
        <Player 
          trackList={tracks}
          includeTags={false} 
          includeSearch={false}
        />

        </div>
        <div className='road'>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
