import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <h1 className="text-primary-theme font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Venkatesh Meenakshinathan.
        </h1>
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 text-accent-theme font-medium text-lg sm:text-xl md:text-2xl">
          <span>Innovator.</span>
          <span className="text-secondary-theme">•</span>
          <span>Builder.</span>
          <span className="text-secondary-theme">•</span>
          <span>Learner.</span>
        </div>

        <div className="pt-8">
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
