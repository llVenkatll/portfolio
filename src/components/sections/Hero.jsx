import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-12">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl flex-1"
      >
        <h1 className="text-primary-theme font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Venkatesh Meenakshinathan.
        </h1>
        <div className="flex justify-center lg:justify-start items-center gap-4 sm:gap-6 md:gap-8 text-accent-theme font-medium text-lg sm:text-xl md:text-2xl">
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

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative">
          {/* Animated background circles */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-theme/20 to-transparent"
            style={{ width: '350px', height: '350px' }}
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-2 rounded-full border-2 border-accent-theme/30"
          />
          
          {/* Profile Image Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent-theme/50 shadow-2xl"
          >
            {/* Replace this placeholder with your actual image */}
            <img
              src="public/images/FormalsPic.jpg"
              alt="Venkatesh Meenakshinathan - Profile"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-theme/20 to-transparent" />
          </motion.div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-accent-theme/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <span className="text-2xl">🧠</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-theme/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <span className="text-2xl">⚕️</span>
          </motion.div>
          
          <motion.div
            animate={{ 
              x: [0, 8, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/2 -right-8 w-12 h-12 bg-accent-theme/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <span className="text-xl">🔬</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
