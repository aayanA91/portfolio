import { useState } from 'react'
import Loader from './components/loader'
import HackerHero from "./pages/home"


function App() {
 const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <Loader onComplete={() => setLoaded(true)} />
      ) : (
        <HackerHero/>
      )}
    </>
  )
}

export default App
