import { useState, useEffect } from 'react'

function App() {
  const [levels, setLevels] = useState([]);

  useEffect(()=> {
    fetch("https://api.aredl.net/v2/api/aredl/levels")
      .then(res => res.json())
      .then(res => {
        setLevels(res)
      })
  })

  return (
    <>
      <ol>
        {levels.map((level) => {
          return (
            <li>{level.name}</li>
          )
        })}
      </ol>
    </>
  )
}

export default App
