import { motion } from 'framer-motion'
import { FaPython, FaDatabase, FaLaptopCode, FaReact, FaNodeJs, FaBrain } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiAmazonwebservices, SiNextdotjs, SiMongodb, SiTailwindcss, SiUnity } from 'react-icons/si'
import { TbEye, TbHeartRateMonitor, TbMicroscope } from 'react-icons/tb'

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
        
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <p className="text-secondary-theme text-lg leading-relaxed">
                I am a highly motivated Biomedical Engineering student driven by a passion for using cutting-edge 
                technology to revolutionize healthcare. My journey in this field started with a fascination for how 
                technology can improve human lives, particularly in healthcare, leading me to pursue an 
                <span className="text-accent-theme font-semibold"> MS in Artificial Engineering at Carnegie Mellon University</span>.
              </p>
              
              <p className="text-secondary-theme">
                With extensive experience in machine learning, deep learning, and data analytics, I specialize in developing 
                predictive models, medical image analysis systems, and natural language processing applications. My work spans 
                <span className="text-accent-theme font-semibold"> biomedical data analysis, medical imaging, biostatistics, medical informatics, and computational modeling</span>.
              </p>
              
              <p className="text-secondary-theme">
                As a full stack developer, I leverage modern web technologies including React, Next.js, Node.js, 
                MongoDB, Tailwind CSS, and ShadCN to create scalable healthcare applications. My expertise extends 
                to cloud platforms like AWS and Firebase, enabling me to design comprehensive, end-to-end solutions 
                that bridge the gap between cutting-edge research and practical healthcare applications.
              </p>
              
              <p className="text-secondary-theme">
                Through my research and professional experience, I've developed innovative solutions that bridge 
                theoretical knowledge with practical healthcare applications. I'm committed to harnessing technology 
                to improve patient care, reduce costs, and create more efficient healthcare solutions that can make 
                a meaningful impact on global health outcomes.
              </p>
            </div>

            {/* Research Focus Areas */}
            <div className="bg-secondary-theme/50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center text-primary-theme">
                <FaBrain className="text-accent-theme mr-2" />
                Research Focus Areas
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <TbEye className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">Medical Image Analysis</h4>
                    <p className="text-secondary-theme text-xs">Retinal analysis, fundus imaging, optic disc segmentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TbHeartRateMonitor className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">Biomedical Signal Processing</h4>
                    <p className="text-secondary-theme text-xs">EEG analysis, attention monitoring, prosthetic control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SiUnity className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">VR/AR Healthcare</h4>
                    <p className="text-secondary-theme text-xs">Home monitoring systems, diagnostic platforms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TbMicroscope className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">AI in Healthcare</h4>
                    <p className="text-secondary-theme text-xs">Predictive modeling, disease progression tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech Stack Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-primary-theme">My Tech Stack</h3>
            <div className="space-y-4">
              {/* Programming Languages */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">Programming Languages</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaPython className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">Python</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaDatabase className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">MATLAB</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaLaptopCode className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">Kotlin</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaDatabase className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">R</span>
                  </div>
                </div>
              </div>

              {/* Full Stack Development */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">Full Stack Development</h4>
                <div className="space-y-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaReact className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">React & Next.js</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaNodeJs className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">Node.js & Express</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiMongodb className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">MongoDB & SQL</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiTailwindcss className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">Tailwind & ShadCN</span>
                  </div>
                </div>
              </div>
              
              {/* AI/ML Frameworks */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">AI/ML Frameworks</h4>
                <div className="space-y-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiTensorflow className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">TensorFlow</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiPytorch className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">PyTorch</span>
                  </div>
                </div>
              </div>
              
              {/* Cloud & Tools */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">Cloud & Development Tools</h4>
                <div className="space-y-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiAmazonwebservices className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">AWS & Firebase</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaLaptopCode className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">Flutter & Unity</span>
                  </div>
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
