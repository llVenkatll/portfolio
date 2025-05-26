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
                  <h3 className="text-xl font-bold text-primary-theme">Intern</h3>
                  <span className="text-accent-theme font-mono text-sm">Feb 2025 - Apr 2025</span>
                </div>
                <p className="font-medium text-primary-theme">T U Delft University, Netherlands</p>
                <ul className="text-secondary-theme space-y-2 list-disc pl-5">
                  <li>
                    Research on Upper Arm Prosthetic Simulator, developing and refining a biomechanical simulator for upper limb prosthetics, focusing on movement analysis and control mechanisms.
                  </li>
                  <li>
                    Integration of 3D Printing (FDM), utilizing Fused Deposition Modeling for rapid prototyping of prosthetic components, optimizing design iterations for enhanced functionality and user adaptability.
                  </li>
                  <li>
                    Signal Processing, exploring AI-driven control strategies and signal processing techniques to improve real-time responsiveness and accuracy in prosthetic simulations.
                  </li>
                  <li>
                    Collaboration & Validation, working under Dr. Gerwin Smit and Dr J. van Frankenhuyzen, collaborating with experts at TU Delft's BioMechanical Engineering department, and conducting hands-on testing to validate prosthetic designs.
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
                <p className="font-medium text-primary-theme">Prediscan Medtech, HTIC, IIT Madras - India</p>
                <ul className="text-secondary-theme space-y-2 list-disc pl-5">
                  <li>
                    Developed a comprehensive disease progression tracking system that enabled physicians to predict patient outcomes with higher accuracy, leading to faster interventions.
                  </li>
                  <li>
                    Led the identification of novel biomarkers in ophthalmic imaging that reduced diagnostic time by 40%. The validated biomarker screening tool will be available to ophthalmology clinics globally through a user-friendly interface by late 2024.
                  </li>
                  <li>
                    Designed and executed a clinical correlation study analyzing patient data across multiple parameters, establishing significant relationships between imaging findings and disease outcomes.
                  </li>
                  <li>
                    Engineered a precise vessel and optic disc segmentation tool achieving 98% anatomical accuracy. This technology is being transformed into a cloud-based solution accessible to healthcare facilities.
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
                    Performed precise calibration and quality assurance on critical medical equipment including ECG machines, patient monitors, and diagnostic devices and reducing equipment downtime.
                  </li>
                  <li>
                    Managed daily histology laboratory operations, including tissue processing, embedding, and staining procedures, while ensuring proper specimen handling and documentation.
                  </li>
                  <li>
                    Resolved technical issues across various medical devices, achieving a 95% first-time fix rate and maintaining essential equipment uptime of 98%.
                  </li>
                  <li>
                    Conducted quality control for radiological imaging equipment, ensuring optimal image quality and radiation safety compliance. Reduced image artifacts by 40% through proper calibration and maintenance protocols.
                  </li>
                  <li>
                    Executed comprehensive equipment lifecycle tracking for 50+ medical devices, implementing preventive maintenance schedules that extend equipment lifespan and reduced unexpected breakdowns by 55%.
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
