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
                  <h3 className="text-xl font-bold text-primary-theme">Master of Science in Artificial Engineering - Biomedical Engineering</h3>
                  <span className="text-accent-theme font-mono text-sm whitespace-nowrap sm:ml-4">August 2025 - May 2027</span>
                </div>
                <p className="font-medium text-primary-theme">Carnegie Mellon University</p>
                <p className="text-secondary-theme">
                  CGPA: 3.92/4
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
                  <span className="text-accent-theme font-mono text-sm whitespace-nowrap sm:ml-4">September 2021 - May 2025</span>
                </div>
                <p className="font-medium text-primary-theme">Sri Sivasubramaniya Nadar College of Engineering</p>
                <p className="text-secondary-theme">CGPA: 8.5/10</p>
                <div>
                  <h4 className="font-semibold text-sm text-accent-theme mt-3 mb-1">Resume Focus Areas:</h4>
                  <p className="text-secondary-theme text-sm">
                    Medical Image Segmentation, Biosignal Processing, Transformer Architectures, Large Language Models,
                    RAG, Distributed Computing, Few-Shot Learning, AI Safety, Fairness Metrics, Differential Privacy,
                    and Adversarial Robustness.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
