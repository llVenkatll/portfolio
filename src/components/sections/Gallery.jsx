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

  const getImageTransform = (index) => {
    const distance = index - activeIndex
    const isActive = index === activeIndex
    
    // Create a 3D perspective effect
    if (isActive) {
      return {
        scale: 1.1,
        rotateY: 0,
        z: 0,
        x: 0
      }
    } else if (Math.abs(distance) === 1) {
      return {
        scale: 0.9,
        rotateY: distance * 25, // Slight 3D rotation
        z: -100,
        x: distance * 80
      }
    } else if (Math.abs(distance) === 2) {
      return {
        scale: 0.8,
        rotateY: distance * 35,
        z: -200,
        x: distance * 120
      }
    } else {
      return {
        scale: 0.7,
        rotateY: distance * 45,
        z: -300,
        x: distance * 150
      }
    }
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
        
        {/* 3D Perspective Gallery Container */}
        <div className="relative overflow-hidden" style={{ perspective: '1000px' }}>
          <div className="flex justify-center items-center py-12">
            <div className="relative flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
              {images.map((image, index) => {
                const transform = getImageTransform(index)
                const isActive = index === activeIndex
                
                return (
                  <motion.div
                    key={index}
                    className="absolute cursor-pointer"
                    animate={{
                      scale: transform.scale,
                      rotateY: transform.rotateY,
                      z: transform.z,
                      x: transform.x,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      type: "spring",
                      damping: 20
                    }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ 
                      transformOrigin: 'center center',
                      zIndex: isActive ? 20 : 10 - Math.abs(index - activeIndex)
                    }}
                  >
                    <div className="relative">
                      {/* Modern card-style container */}
                      <div className={`w-64 h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                        isActive 
                          ? 'ring-4 ring-accent-theme/50 shadow-2xl' 
                          : 'shadow-lg hover:shadow-xl'
                      }`}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Gradient overlay for depth */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        )}
                      </div>
                      
                      {/* Modern hover popup */}
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 20 }}
                          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-secondary-theme/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-accent-theme/30 z-30 min-w-max"
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
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-accent-theme rounded-full flex items-center justify-center shadow-lg"
                        >
                          <div className="w-3 h-3 bg-primary-theme rounded-full" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
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
