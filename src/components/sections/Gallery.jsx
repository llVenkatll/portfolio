import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Your actual images with proper names
  const images = [
    {
      src: "/images/1 (1).jpg",
      alt: "Venkatesh - Professional Event 1",
      title: "Conference Presentation",
      description: "Presenting research findings at a professional conference, showcasing innovative solutions in biomedical engineering."
    },
    {
      src: "/images/1 (2).jpg",
      alt: "Venkatesh - Lab Work 1",
      title: "Research Laboratory",
      description: "Working on advanced biomedical equipment and conducting research in the laboratory environment."
    },
    {
      src: "/images/1 (3).jpg",
      alt: "Venkatesh - Team Photo 1",
      title: "Team Collaboration",
      description: "Collaborating with team members on innovative projects and research initiatives."
    },
    {
      src: "/images/1 (4).jpg",
      alt: "Venkatesh - Award Ceremony 1",
      title: "Award Recognition",
      description: "Receiving recognition for outstanding contributions to research and academic excellence."
    },
    {
      src: "/images/1 (5).jpg",
      alt: "Venkatesh - Tennis Tournament",
      title: "Tennis Championship",
      description: "Competing in tennis tournaments and maintaining an active sports lifestyle alongside academics."
    },
    {
      src: "/images/1 (6).jpg",
      alt: "Venkatesh - Graduation",
      title: "Academic Achievement",
      description: "Celebrating graduation and academic milestones with family and friends."
    },
    {
      src: "/images/1 (7).jpg",
      alt: "Venkatesh - Hackathon",
      title: "Smart India Hackathon",
      description: "Participating in the Smart India Hackathon, developing innovative solutions for national challenges."
    },
    {
      src: "/images/1 (8).jpg",
      alt: "Venkatesh - Professional Event 2",
      title: "IEEE Leadership",
      description: "Taking leadership roles in IEEE student chapter and organizing technical events."
    },
    {
      src: "/images/1 (9).jpg",
      alt: "Venkatesh - Lab Work 2",
      title: "Medical Equipment",
      description: "Working with advanced medical equipment and biomedical instruments in research projects."
    },
    {
      src: "/images/1 (10).jpg",
      alt: "Venkatesh - Team Photo 2",
      title: "Innovation Day 2024",
      description: "Participating in Innovation Day 2024, showcasing cutting-edge projects and research work."
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const currentImage = images[activeIndex]

  return (
    <section id="gallery" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Gallery</h2>
        
        {/* Single Image Display */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Image Container */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl bg-secondary-theme/10">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary-theme mb-4">
                  {currentImage.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentImage.description}
                </p>
              </div>

              {/* Image Counter */}
              <div className="text-sm text-gray-500">
                {activeIndex + 1} of {images.length}
              </div>
            </motion.div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            
            {/* Previous Button */}
            <button
              className="bg-secondary-theme/90 hover:bg-secondary-theme text-primary-theme p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-accent-theme w-8' 
                      : 'bg-secondary-theme hover:bg-accent-theme/50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              className="bg-secondary-theme/90 hover:bg-secondary-theme text-primary-theme p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Gallery
