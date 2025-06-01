import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(4) // Start with middle image (index 4 out of 0-9)
  
  // Placeholder images - replace these with your actual image paths
  const images = [
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Professional Event 1",
      title: "Conference Presentation"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Lab Work 1",
      title: "Research Laboratory"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Team Photo 1",
      title: "Team Collaboration"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Award Ceremony 1",
      title: "Award Recognition"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Tennis Tournament",
      title: "Tennis Championship"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Graduation",
      title: "Academic Achievement"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Hackathon",
      title: "Smart India Hackathon"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Professional Event 2",
      title: "IEEE Leadership"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Lab Work 2",
      title: "Medical Equipment"
    },
    {
      src: "/api/placeholder/400/500",
      alt: "Venkatesh - Team Photo 2",
      title: "Innovation Day 2024"
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const getImageScale = (index) => {
    if (index === activeIndex) return 1.2 // Middle/active image is larger
    const distance = Math.abs(index - activeIndex)
    if (distance === 1) return 1.0 // Adjacent images normal size
    if (distance === 2) return 0.9 // Further images slightly smaller
    return 0.8 // Furthest images smallest
  }

  const getImageOpacity = (index) => {
    if (index === activeIndex) return 1
    const distance = Math.abs(index - activeIndex)
    if (distance === 1) return 0.8
    if (distance === 2) return 0.6
    return 0.4
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
        
        {/* Image Gallery Container */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center py-8">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer flex-shrink-0"
                  animate={{
                    scale: getImageScale(index),
                    opacity: getImageOpacity(index),
                    x: `${(index - activeIndex) * 80}px`
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: getImageScale(index) + 0.05 }}
                >
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-64 h-80 object-cover rounded-lg shadow-lg"
                    />
                    
                    {/* Overlay with title - only show on active image */}
                    {index === activeIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg"
                      >
                        <h3 className="text-white font-semibold text-sm">
                          {image.title}
                        </h3>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary-theme/80 hover:bg-secondary-theme text-primary-theme p-2 rounded-full transition-all duration-300"
            onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary-theme/80 hover:bg-secondary-theme text-primary-theme p-2 rounded-full transition-all duration-300"
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
