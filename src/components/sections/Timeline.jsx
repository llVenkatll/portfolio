import { motion } from 'framer-motion'
import { FaSignal } from 'react-icons/fa'

const Timeline = () => {
  const timelineEvents = [
    {
      title: "Financial Advisor",
      organization: "Joint Funding Commission, Carnegie Mellon University",
      period: "Carnegie Mellon University",
      description: "Leadership and responsibility listed in the provided resume.",
      icon: <FaSignal />
    },
    {
      title: "President",
      organization: "Indian Graduate Student Association (IGSA), Carnegie Mellon University",
      period: "Carnegie Mellon University",
      description: "Leadership and responsibility listed in the provided resume.",
      icon: <FaSignal />
    },
    {
      title: "Treasurer",
      organization: "Graduate Biomedical Engineering Society (GBMES), Carnegie Mellon University",
      period: "Carnegie Mellon University",
      description: "Leadership and responsibility listed in the provided resume.",
      icon: <FaSignal />
    },
    {
      title: "Chair",
      organization: "IEEE Signal Processing Society, SSN College of Engineering",
      period: "SSN College of Engineering",
      description: "Leadership and responsibility listed in the provided resume.",
      icon: <FaSignal />
    },
    {
      title: "President",
      organization: "Math Club, SSN College of Engineering",
      period: "SSN College of Engineering",
      description: "Leadership and responsibility listed in the provided resume.",
      icon: <FaSignal />
    }
  ]

  return (
    <section id="timeline" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Leadership & Responsibilities</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-accent-theme/30 transform -translate-x-1/2" />
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 relative`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary-theme border-2 border-accent-theme rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 text-accent-theme">
                  {event.icon}
                </div>
                
                {/* Content */}
                <motion.div 
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'} relative`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-secondary-theme p-6 rounded-lg">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-primary-theme">
                        {event.title} - {event.organization}
                      </h3>
                      <span className="text-accent-theme font-mono text-sm">{event.period}</span>
                    </div>
                    <p className="text-secondary-theme">{event.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Timeline
