import { useState } from 'react'
import Loader from './components/loader'
import HackerHero from "./pages/home"
import helmet from 'helmet';

function App() {
 const [loaded, setLoaded] = useState(false);

  return (
    <>
     <helmet>
        <title>Aayan Anees | Portfolio</title>
        <meta name="description" content="Frontend & Full Stack Developer. Check my projects, skills, and achievements." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aayan Anees",
            "url": "https://aayan-portfolio-three.vercel.app/",
            "sameAs": [
              "https://github.com/aayanA91",
              "https://www.linkedin.com/in/aayan-aness-b1a14231b/",
              "https://twitter.com/aayanA91"
            ],
            "jobTitle": "Frontend Developer / Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Self-employed"
            }
          }
          `}
        </script>
      </helmet>

      {!loaded ? (
        <Loader onComplete={() => setLoaded(true)} />
      ) : (
        <HackerHero/>
      )}
    </>
  )
}

export default App
