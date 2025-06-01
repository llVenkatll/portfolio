import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(4) // Start with middle image (index 4 out of 0-9)
  const [imageDimensions, setImageDimensions] = useState({})
  
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

  // Load image dimensions
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = {}
      
      for (let i = 0; i < images.length; i++) {
        const img = new Image()
        img.src = images[i].src
        
        await new Promise((resolve) => {
          img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight
            // Normalize height to 320px and calculate width based on aspect ratio
            const height = 320
            const width = height * aspectRatio
            
            dimensions[i] = {
              width: Math.min(width, 280), // Max width of 280px
              height: height,
              aspectRatio: aspectRatio
            }
            resolve()
          }
          img.onerror = () => {
            // Fallback dimensions if image fails to load
            dimensions[i] = { width: 240, height: 320, aspectRatio: 0.75 }
            resolve()
          }
        })
      }
      
      setImageDimensions(dimensions)
    }
    
    loadImageDimensions()
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const getImageScale = (index) => {
    if (index === activeIndex) return 1.3 // Middle/active image is larger
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

  const getImageDimensions = (index) => {
    const dims = imageDimensions[index]
    if (!dims) return { width: 240, height: 320 } // Default while loading
    
    const scale = getImageScale(index)
    return {
      width: dims.width * scale,
      height: dims.height * scale
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
        
        {/* Image Gallery Container */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center py-8">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide items-end">
              {images.map((image, index) => {
                const dims = getImageDimensions(index)
                return (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer flex-shrink-0"
                    animate={{
                      scale: getImageScale(index),
                      opacity: getImageOpacity(index),
                      x: `${(index - activeIndex) * 60}px`
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: getImageScale(index) + 0.05 }}
                  >
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover rounded-lg shadow-lg"
                        style={{
                          width: `${dims.width}px`,
                          height: `${dims.height}px`,
                          minWidth: '180px', // Minimum width to prevent too narrow images
                          maxWidth: '350px'   // Maximum width to prevent too wide images
                        }}
                        loading="lazy"
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
                )
              })}
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
