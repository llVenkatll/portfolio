import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          <motion.div 
            className="bg-secondary-theme rounded-lg p-6 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary-theme/20 rounded-lg shrink-0">
                <FaGraduationCap className="text-accent-theme text-3xl" />
              </div>
              
              <div className="space-y-2 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-xl font-bold text-primary-theme">Master of Science in Artificial Engineering</h3>
                  <span className="text-accent-theme font-mono text-sm whitespace-nowrap sm:ml-4">Aug 2025 - Current</span>
                </div>
                <p className="font-medium text-primary-theme">Carnegie Mellon University, Pittsburgh, USA</p>
                <p className="text-secondary-theme">
                  Department of Biomedical Engineering
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-secondary-theme rounded-lg p-6 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary-theme/20 rounded-lg shrink-0">
                <FaGraduationCap className="text-accent-theme text-3xl" />
              </div>
              
              <div className="space-y-2 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-xl font-bold text-primary-theme">Bachelor of Engineering in Biomedical Engineering</h3>
                  <span className="text-accent-theme font-mono text-sm whitespace-nowrap sm:ml-4">Aug 2021 - Jun 2025</span>
                </div>
                <p className="font-medium text-primary-theme">Sri Sivasubramaniya Nadar College of Engineering, Chennai, India</p>
                <div>
                  <h4 className="font-semibold text-sm text-accent-theme mt-3 mb-1">Relevant Coursework:</h4>
                  <p className="text-secondary-theme text-sm">
                    Machine/Deep Learning, Medical Imaging, Data Science, Biostatistics, Advanced Bio-signal Processing, 
                    Computational Modeling, Advanced Medical Image Processing, Mobile Computing, Computer Vision, 
                    Big Data Analysis, Computer Networks, Data Computation, Biological Processes, Medical Informatics, 
                    Neural Networks, Calculus, Medical Electronics, Instrumentation, Microprocessors, Quality Control, 
                    Medical Device Development, Control Systems, Diagnostic Devices, Natural and Large Language Processing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-secondary-theme rounded-lg p-6 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary-theme/20 rounded-lg shrink-0">
                <FaSchool className="text-accent-theme text-3xl" />
              </div>
              
              <div className="space-y-2 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-xl font-bold text-primary-theme">High School Diploma</h3>
                  <span className="text-accent-theme font-mono text-sm whitespace-nowrap sm:ml-4">Aug 2017 - Jun 2021</span>
                </div>
                <p className="font-medium text-primary-theme">D.A.V. Boys School, Gopalapuram, Chennai, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
