import { type Level, type YouTubeVideo } from '../types.d'
import { useState, useEffect } from 'react'

function App() {
  const [level, setLevel] = useState<Level>({})
  const [verificationVideo, setVerificationVideo] = useState<YouTubeVideo>({})

  useEffect(()=> {
    (async () => {
      let randomMainList = Math.floor(Math.random() * 151)

      let res = await fetch(`https://api.aredl.net/v2/api/aredl/levels/${randomMainList}`)
      let lvl: Level = await res.json()

      console.log(lvl)
      setLevel(lvl)
      
      let url = lvl.verifications[0].video_url
      
      let res2 = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`)
      let videoInfo = await res2.json()
      setVerificationVideo(videoInfo)
    })()
  }, [])

  return (
    <>
      <h2>
        #{level.position}. {level.name}
      </h2>
      
      <img 
        src={verificationVideo.thumbnail_url} 
        height={verificationVideo.thumbnail_height}
        width={verificationVideo.thumbnail_width}
      />

      {level.description}
    </>
  )
}

export default App
