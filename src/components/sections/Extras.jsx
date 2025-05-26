import { motion } from 'framer-motion'
import { FaMedal, FaTrophy, FaUsers } from 'react-icons/fa'
import { GiTennisBall } from 'react-icons/gi'

const Extras = () => {
  const awards = [
    {
      title: "Smart India Hackathon 2023",
      description: "Selected as one of the Top 5 teams nationally in the prestigious Smart India Hackathon 2023, recognized for developing an innovative solution to address a real-world problem in the government and industry sector.",
      icon: <FaTrophy className="text-tertiary text-3xl" />
    },
    {
      title: "IEEE SPS Multimedia Signal Processing Cup",
      description: "Achieved 3rd place in the highly competitive National Level IEEE SPS Multimedia Signal Processing Cup, showcasing excellence in multimedia signal processing through the development of a cutting-edge project.",
      icon: <FaMedal className="text-tertiary text-3xl" />
    },
    {
      title: "National Level Math Competition EXLOG",
      description: "Emerged as the winner of the National Level Math Competition EXLOG, demonstrating exceptional analytical and problem-solving skills in a challenging mathematical environment.",
      icon: <FaTrophy className="text-tertiary text-3xl" />
    },
    {
      title: "People's Choice Award on Innovation Day 2024",
      description: "Honored with the People's Choice Award on Innovation Day 2024 at SSN College of Engineering for presenting a groundbreaking innovation that captured the interest and votes of both the audience and jury members.",
      icon: <FaUsers className="text-tertiary text-3xl" />
    },
    {
      title: "Regional Level Tennis Championship",
      description: "Proudly represented Abu Dhabi in the National Level Tennis Championship (Under-18 category), showcasing talent and sportsmanship at a high level of athletic competition.",
      icon: <GiTennisBall className="text-tertiary text-3xl" />
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
        <h2 className="section-title">Awards & Extracurriculars</h2>
        
        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              className="bg-secondary rounded-lg p-6 flex gap-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-center h-12 w-12 bg-primary/50 rounded-lg shrink-0">
                {award.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                <p className="text-textLight">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Extras
