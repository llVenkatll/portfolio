import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaChartLine, FaHospital } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-8">
          <motion.div 
            className="bg-secondary-theme rounded-lg p-6 relative overflow-hidden border-l-4 border-accent-theme"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary-theme/20 rounded-lg shrink-0">
                <FaCode className="text-accent-theme text-3xl" />
              </div>
              
              <div className="space-y-3 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold text-primary-theme">Project Intern</h3>
                  <span className="text-accent-theme font-mono text-sm">Feb 2025 - Apr 2025</span>
                </div>
                <p className="font-medium text-primary-theme">TU Delft University, Netherlands</p>
                <ul className="text-secondary-theme space-y-2 list-disc pl-5">
                  <li>
                    Research on Upper Arm Prosthetic Simulator with 3D printing (FDM).
                  </li>
                  <li>
                    Explored signal processing techniques to improve real-time responsiveness in prosthetic simulations.
                  </li>
                  <li>
                    Collaborated with Dr. Gerwin Smit and Dr. J. van Frankenhuyzen on biomechanical validation testing.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-secondary-theme rounded-lg p-6 relative overflow-hidden border-l-4 border-accent-theme"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary-theme/20 rounded-lg shrink-0">
                <FaChartLine className="text-accent-theme text-3xl" />
              </div>
              
              <div className="space-y-3 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold text-primary-theme">Data Scientist</h3>
                  <span className="text-accent-theme font-mono text-sm">Jul 2024 - Jan 2025</span>
                </div>
                <p className="font-medium text-primary-theme">Prediscan Medtech, HTIC, IIT Madras, India</p>
                <ul className="text-secondary-theme space-y-2 list-disc pl-5">
                  <li>
                    Developed ophthalmic biomarker identification system and vessel segmentation tools achieving 98% accuracy.
                  </li>
                  <li>
                    Led clinical correlation study establishing relationships between imaging findings and disease outcomes.
                  </li>
                  <li>
                    Reduced diagnostic time by 40% through novel biomarker screening validated across multiple parameters.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-secondary-theme rounded-lg p-6 relative overflow-hidden border-l-4 border-accent-theme"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary-theme/20 rounded-lg shrink-0">
                <FaHospital className="text-accent-theme text-3xl" />
              </div>
              
              <div className="space-y-3 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold text-primary-theme">Biomedical Engineer</h3>
                  <span className="text-accent-theme font-mono text-sm">Jan 2024</span>
                </div>
                <p className="font-medium text-primary-theme">Awali Hospital, Bahrain</p>
                <ul className="text-secondary-theme space-y-2 list-disc pl-5">
                  <li>
                    Performed calibration and quality assurance on medical equipment and managed histology operations.
                  </li>
                  <li>
                    Resolved technical issues across ventilators, infusion pumps, and monitoring systems with 95% first-time fix rate.
                  </li>
                  <li>
                    Conducted quality control for radiological imaging equipment, reducing image artifacts by 40%.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
