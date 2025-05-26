import { motion } from 'framer-motion'
import { FaSignal } from 'react-icons/fa'

const Timeline = () => {
  const timelineEvents = [
    {
      title: "Chair",
      organization: "IEEE Signal Processing Society",
      period: "2023 - 2025",
      description: "Led initiatives, workshops, and events to foster student engagement and technical growth in signal processing.",
      icon: <FaSignal />
    },
    {
      title: "President",
      organization: "Math Club",
      period: "2022 - 2023",
      description: "Organized competitions, seminars, and activities to promote mathematical thinking and problem-solving among peers.",
      icon: <FaSignal />
    },
    {
      title: "Secretary",
      organization: "IEEE SSN Student Branch",
      period: "2022 - 2023",
      description: "Coordinated chapter activities, managed communications, and ensured successful execution of technical and professional events.",
      icon: <FaSignal />
    },
    {
      title: "Joint Secretary",
      organization: "IEEE Engineering in Medicine and Biology Society",
      period: "2022 - 2023",
      description: "Contributed to events and projects at the intersection of engineering and healthcare.",
      icon: <FaSignal />
    },
    {
      title: "Head of Registrations",
      organization: "INSTINCTS'24, SSN's flagship cultural festival",
      period: "2024",
      description: "Efficiently managed participant onboarding and ensuring smooth event operations.",
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
        <h2 className="section-title">IEEE Journey & Leadership</h2>
        
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
