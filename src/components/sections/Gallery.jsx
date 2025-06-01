import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(4) // Start with middle image (index 4 out of 0-9)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  // Your actual images with proper names
  const images = [
    {
      src: "/images/1 (1).jpg",
      alt: "Venkatesh - Professional Event 1",
      title: "Conference Presentation"
    },
    {
      src: "/images/1 (2).jpg",
      alt: "Venkatesh - Lab Work 1",
      title: "Research Laboratory"
    },
    {
      src: "/images/1 (3).jpg",
      alt: "Venkatesh - Team Photo 1",
      title: "Team Collaboration"
    },
    {
      src: "/images/1 (4).jpg",
      alt: "Venkatesh - Award Ceremony 1",
      title: "Award Recognition"
    },
    {
      src: "/images/1 (5).jpg",
      alt: "Venkatesh - Tennis Tournament",
      title: "Tennis Championship"
    },
    {
      src: "/images/1 (6).jpg",
      alt: "Venkatesh - Graduation",
      title: "Academic Achievement"
    },
    {
      src: "/images/1 (7).jpg",
      alt: "Venkatesh - Hackathon",
      title: "Smart India Hackathon"
    },
    {
      src: "/images/1 (8).jpg",
      alt: "Venkatesh - Professional Event 2",
      title: "IEEE Leadership"
    },
    {
      src: "/images/1 (9).jpg",
      alt: "Venkatesh - Lab Work 2",
      title: "Medical Equipment"
    },
    {
      src: "/images/1 (10).jpg",
      alt: "Venkatesh - Team Photo 2",
      title: "Innovation Day 2024"
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const getImageScale = (index) => {
    if (index === activeIndex) return 1.15 // Center image slightly larger
    return 1.0 // All other images normal size
  }

  return (
    <section id="gallery" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Gallery</h2>
        
        {/* Simple Horizontal Scrolling Gallery */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center py-10">
            <div className="flex gap-6 transition-transform duration-500 ease-out">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer flex-shrink-0"
                  animate={{
                    scale: getImageScale(index),
                    x: (index - activeIndex) * 300 // Bigger spacing for larger images
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative">
                    {/* Bigger fixed size container - NO BLUR, NO OPACITY */}
                    <div className="w-80 h-96 rounded-xl overflow-hidden shadow-xl bg-secondary-theme/20">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Hover caption popup */}
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-secondary-theme/95 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-accent-theme/30 z-20 min-w-max"
                      >
                        <h3 className="text-primary-theme font-bold text-sm mb-1">
                          {image.title}
                        </h3>
                        <p className="text-secondary-theme text-xs">
                          {image.alt.replace('Venkatesh - ', '')}
                        </p>
                        
                        {/* Small arrow pointing up */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-secondary-theme/95" />
                      </motion.div>
                    )}
                    
                    {/* Active indicator */}
                    {index === activeIndex && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-3 -right-3 w-6 h-6 bg-accent-theme rounded-full flex items-center justify-center shadow-lg"
                      >
                        <div className="w-2 h-2 bg-primary-theme rounded-full" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-accent-theme w-8' 
                    : 'bg-secondary-theme hover:bg-accent-theme/50'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          {/* Manual navigation arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary-theme/90 hover:bg-secondary-theme text-primary-theme p-3 rounded-full transition-all duration-300 z-10 shadow-lg"
            onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary-theme/90 hover:bg-secondary-theme text-primary-theme p-3 rounded-full transition-all duration-300 z-10 shadow-lg"
            onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery
