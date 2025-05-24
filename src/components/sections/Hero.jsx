import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h2 className="text-tertiary font-mono text-lg">Hi, my name is</h2>
        <h1 className="text-text font-bold text-5xl sm:text-6xl md:text-7xl">
          Venkatesh Meenakshinathan.
        </h1>
        <h1 className="text-textLight font-bold text-4xl sm:text-5xl md:text-6xl">
          I build healthcare innovations.
        </h1>
        <p className="text-textLight max-w-lg mt-5 text-lg">
          I'm a biomedical engineer and AI specialist focusing on revolutionizing healthcare with 
          cutting-edge technology. Currently pursuing an MS in Artificial Engineering at CMU.
        </p>

        <div className="pt-6">
          <a 
            href="#projects" 
            className="btn inline-flex items-center gap-2 group"
          >
            View my work
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero