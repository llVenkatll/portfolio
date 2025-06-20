import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Your actual images with proper names
  const images = [
    {
      src: "/images/1 (1).jpg",
      alt: "Venkatesh - Professional Event 1",
      title: "Diversity Hiring",
      description: "Proof that engineers can dress up and still look like a startup pitch."
    },
    {
      src: "/images/1 (2).jpg",
      alt: "Venkatesh - Lab Work 1",
      title: "Delft Diaries: The Dream Team",
      description: "Moments from a global experience that reshaped perspectives."
    },
    {
      src: "/images/1 (3).jpg",
      alt: "Venkatesh - Team Photo 1",
      title: "Paris Nights, Eiffel Heights",
      description: "Lit by the tower, driven by dreams – a night in the city of lights."
    },
    {
      src: "/images/1 (4).jpg",
      alt: "Venkatesh - Award Ceremony 1",
      title: "eXlog – Math in Motion",
      description: "The Math Club squad that made 'eXlog' a fun equation of logic and laughter."
    },
    {
      src: "/images/5th.jpg",
      alt: "Venkatesh - Tennis Tournament",
      title: "Global Connect: From Peru to SSN",
      description: "Welcoming our exchange student from Peru for an ICASSP 2025 internship. Cultures, ideas, and smiles exchanged—English wasn't the only common language!"
    },
    {
      src: "/images/1 (6).jpg",
      alt: "Venkatesh - Graduation",
      title: "Runners-Up at MSP Cup – EEG Edition",
      description: "Clinched 2nd place at the Multimedia Signal Processing Cup in Ahmedabad! Decoded EEG with AM-LSTM and 1D-CNN – signal processing done right!"
    },
    {
      src: "/images/7th.jpg",
      alt: "Venkatesh - Hackathon",
      title: "Outing at Science City",
      description: "Smiles, steps, and science – team outings don't get better than this. Candid laughter outside Chennai's iconic dome of curiosity!"
    },
    {
      src: "/images/8th.jpg",
      alt: "Venkatesh - Professional Event 2",
      title: "Suits, Smiles & Soulmates",
      description: "Not just friends—family in formals, hearts in sync."
    },
    {
      src: "/images/1 (9).jpg",
      alt: "Venkatesh - Lab Work 2",
      title: "Dinner & Dialogues at Novotel",
      description: "Wrapped up the SPS talk by Dr. Ken Sugeyama with good food and great minds. From high-impact journals to high-impact buffet—what a night!"
    },
    {
      src: "/images/1 (10).jpg",
      alt: "Venkatesh - Team Photo 2",
      title: "Biomedical Engineers at WHIF 2023",
      description: "Holistic thinkers at the World Health Innovation Forum. Learning, networking, and repping SSN like pros on a mission."
    }
  ]

  const currentImage = images[activeIndex]
  const prevImage = images[(activeIndex - 1 + images.length) % images.length]

  // Smooth spring transition configuration
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8
  }

  // Smooth ease transition
  const smoothTransition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth easing
  }

  return (
    <section 
      id="gallery" 
      className="pt-10 relative z-0"
      style={{ touchAction: 'auto' }} // Enable touch scrolling
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={smoothTransition}
        viewport={{ once: true }}
        style={{ touchAction: 'auto' }} // Enable touch scrolling
      >
        {/* Section Title - High z-index to stay above images */}
        <div className="relative z-50 mb-12">
          <h2 className="section-title">Gallery</h2>
        </div>
        
        {/* Gallery Display */}
        <div 
          className="max-w-7xl mx-auto px-6 relative z-10"
          style={{ touchAction: 'auto' }} // Enable touch scrolling
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Images Container - Left Side */}
            <div className="relative z-20">
              <div className="flex items-center justify-center relative h-[500px]">
                
                {/* Previous Image (Left, Blurred) */}
                <motion.div
                  key={`prev-${activeIndex}`}
                  initial={{ opacity: 0, x: -60, scale: 0.9 }}
                  animate={{ 
                    opacity: 0.4, 
                    x: -80, 
                    scale: 0.7,
                    transition: springTransition
                  }}
                  className="absolute left-0 w-[180px] h-[280px] rounded-lg overflow-hidden shadow-lg z-30 cursor-pointer"
                  onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
                  style={{ touchAction: 'manipulation' }} // Better touch handling
                >
                  <img
                    src={prevImage.src}
                    alt={prevImage.alt}
                    className="w-full h-full object-cover filter blur-sm transition-all duration-300"
                    loading="lazy"
                    draggable={false} // Prevent image dragging
                  />
                </motion.div>

                {/* Current Image (Center, Sharp, Full Display) */}
                <motion.div
                  key={`current-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: springTransition
                  }}
                  className="relative z-40 w-[400px] h-[500px] rounded-lg overflow-hidden shadow-2xl"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-contain bg-secondary-theme/10"
                    loading="lazy"
                    draggable={false} // Prevent image dragging
                  />
                </motion.div>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { ...springTransition, delay: 0.1 }
              }}
              className="space-y-6 relative z-30"
              style={{ touchAction: 'auto' }} // Enable touch scrolling
            >
              <div>
                <motion.h3 
                  className="text-4xl font-bold text-primary-theme mb-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { ...smoothTransition, delay: 0.2 }
                  }}
                >
                  {currentImage.title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { ...smoothTransition, delay: 0.3 }
                  }}
                >
                  {currentImage.description}
                </motion.p>
              </div>

              {/* Image Counter */}
              <motion.div 
                className="text-sm text-gray-500 font-medium"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { ...smoothTransition, delay: 0.4 }
                }}
              >
                {activeIndex + 1} of {images.length}
              </motion.div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-1">
                <motion.div
                  className="bg-accent-theme h-1 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: `${((activeIndex + 1) / images.length) * 100}%`,
                    transition: springTransition
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          {/* Navigation Controls */}
          <div 
            className="flex justify-center items-center gap-8 mt-16 relative z-30"
            style={{ touchAction: 'manipulation' }} // Better touch handling for buttons
          >
            
            {/* Previous Button */}
            <motion.button
              className="bg-secondary-theme/90 hover:bg-secondary-theme text-primary-theme p-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              style={{ touchAction: 'manipulation' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Navigation Dots */}
            <div className="flex gap-3" style={{ touchAction: 'manipulation' }}>
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-accent-theme w-8' 
                      : 'bg-secondary-theme hover:bg-accent-theme/50 w-3'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                  style={{ touchAction: 'manipulation' }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              className="bg-secondary-theme/90 hover:bg-secondary-theme text-primary-theme p-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              style={{ touchAction: 'manipulation' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery
