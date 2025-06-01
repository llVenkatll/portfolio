import { motion } from 'framer-motion'
import About from '../components/sections/About'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Timeline from '../components/sections/Timeline'
import Extras from '../components/sections/Extras'
import Gallery from '../components/sections/Gallery'
import Hero from '../components/sections/Hero'

const Home = () => {
  return (
    <div className="space-y-6 pt-20">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Gallery />
      <Timeline />
      <Extras />
    </div>
  )
}

export default Home
