import { motion } from 'framer-motion'
import { FaPython, FaDatabase, FaLaptopCode, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiAmazonwebservices, SiNextdotjs, SiMongodb, SiTailwindcss } from 'react-icons/si'

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
              As a full stack developer, I leverage modern web technologies including React, Next.js, Node.js, 
              MongoDB, Tailwind CSS, and ShadCN to create scalable healthcare applications. My expertise extends 
              to cloud platforms like AWS and Firebase, enabling me to design comprehensive, end-to-end solutions.
            </p>
            <p className="text-textLight">
              I'm committed to harnessing technology to improve patient care, reduce costs, and create more 
              efficient healthcare solutions through the intersection of biomedical engineering and modern web development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">My Tech Stack</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Programming Languages */}
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <FaPython className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">Python, MATLAB, Kotlin & R</h4>
                  <p className="text-textLight text-sm">Advanced data processing and analysis</p>
                </div>
              </div>
              
              {/* Full Stack Development */}
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <FaReact className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">React & Next.js</h4>
                  <p className="text-textLight text-sm">Modern frontend development</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <FaNodeJs className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">Node.js & Express</h4>
                  <p className="text-textLight text-sm">Backend development and APIs</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <SiMongodb className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">MongoDB & SQL</h4>
                  <p className="text-textLight text-sm">Database management and design</p>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <SiTailwindcss className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">Tailwind CSS & ShadCN</h4>
                  <p className="text-textLight text-sm">Modern UI design and components</p>
                </div>
              </div>
              
              {/* AI/ML Frameworks */}
              <div className="bg-secondary rounded-lg p-4 flex items-start space-x-3">
                <SiTensorflow className="text-tertiary text-3xl mt-1" />
                <div>
                  <h4 className="font-bold">TensorFlow & PyTorch</h4>
                  <p className="text-textLight text-sm">Deep learning and neural networks</p>
                </div>
              </div>
              
              {/* Cloud & Mobile */}
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
                  <h4 className="font-bold">Flutter & Mobile Development</h4>
                  <p className="text-textLight text-sm">Cross-platform mobile applications</p>
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
