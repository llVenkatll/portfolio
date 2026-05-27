import { motion } from 'framer-motion'
import { FaMedal } from 'react-icons/fa'

const Extras = () => {
  const publications = [
    {
      title: "Leveraging AI for Early Detection and Monitoring of Schizophrenia",
      description: "International Conference & Forum on Assistive Technologies for Special Needs (ATSN-2024), Kuwait 2025.",
      icon: <FaMedal className="text-accent-theme text-3xl" />
    },
    {
      title: "Gaze-Based Attention Monitoring and Assessment System",
      description: "Conference Presentation 2025.",
      icon: <FaMedal className="text-accent-theme text-3xl" />
    }
  ]

  return (
    <section id="extras" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Research Publications & Presentations</h2>
        
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <motion.div 
              key={index}
              className="bg-secondary-theme rounded-lg p-6 flex gap-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-center h-12 w-12 bg-primary-theme/20 rounded-lg shrink-0">
                {award.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary-theme">{publication.title}</h3>
                <p className="text-secondary-theme">{publication.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Extras
