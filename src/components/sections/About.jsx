import { motion } from 'framer-motion'
import { FaPython, FaDatabase, FaLaptopCode } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiAmazonwebservices } from 'react-icons/si'

const About = () => {
  return (
    <section id="about" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-textLight">
              I am a highly motivated Biomedical Engineering student driven by a passion for using cutting-edge 
              technology to revolutionize healthcare. My journey in this field started with a fascination for how 
              technology can improve human lives, particularly in healthcare.
            </p>
            <p className="text-textLight">
              With proficiency in machine learning, deep learning, and data analytics, I specialize in developing 
              predictive models, medical image analysis systems, and natural language processing applications.
            </p>
            <p className="text-textLight">
              My experience spans biomedical data analysis, including medical imaging, and I am well-versed in 
              biostatistics, medical informatics, and computational modeling.
            </p>
            <p className="text-textLight">
              I'm committed to harnessing technology to improve patient care, reduce costs, and create more 
              efficient healthcare solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">My Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <FaPython className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">Python & MATLAB</h4>
                  <p className="text-textLight text-sm">Advanced data processing and analysis</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <SiTensorflow className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">TensorFlow & PyTorch</h4>
                  <p className="text-textLight text-sm">Deep learning and neural networks</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <FaDatabase className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">SQL & Excel</h4>
                  <p className="text-textLight text-sm">Data management and analysis</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <SiAmazonwebservices className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">AWS & Firebase</h4>
                  <p className="text-textLight text-sm">Cloud infrastructure and deployment</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <FaLaptopCode className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">Flutter & Kotlin</h4>
                  <p className="text-textLight text-sm">Mobile app development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
