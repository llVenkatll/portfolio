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
            className="bg-secondary rounded-lg p-6 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary/50 rounded-lg shrink-0">
                <FaGraduationCap className="text-tertiary text-3xl" />
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold">Master of Science in Artificial Engineering</h3>
                  <span className="text-tertiary font-mono text-sm">Aug 2025 - Dec 2026</span>
                </div>
                <p className="font-medium">Carnegie Mellon University, Pittsburgh, USA</p>
                <p className="text-textLight">
                  Department of Biomedical Engineering
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-secondary rounded-lg p-6 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary/50 rounded-lg shrink-0">
                <FaGraduationCap className="text-tertiary text-3xl" />
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold">Bachelor of Engineering in Biomedical Engineering</h3>
                  <span className="text-tertiary font-mono text-sm">Aug 2021 - June 2025</span>
                </div>
                <p className="font-medium">Sri Sivasubramaniya Nadar College of Engineering, Chennai, India</p>
                <div>
                  <h4 className="font-semibold text-sm text-tertiary mt-3 mb-1">Relevant Coursework:</h4>
                  <p className="text-textLight text-sm">
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
            className="bg-secondary rounded-lg p-6 relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 bg-primary/50 rounded-lg shrink-0">
                <FaSchool className="text-tertiary text-3xl" />
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold">High School Diploma</h3>
                  <span className="text-tertiary font-mono text-sm">Aug 2017 - June 2021</span>
                </div>
                <p className="font-medium">D.A.V. Boys School, Gopalapuram, Chennai, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education