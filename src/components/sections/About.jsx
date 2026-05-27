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
                I am pursuing a <span className="text-accent-theme font-semibold">Master of Science in Artificial Engineering - Biomedical Engineering at Carnegie Mellon University</span>,
                with a resume-backed focus on AI safety, medical image segmentation, biosignal processing,
                transformer architectures, large language models, RAG, distributed computing, and few-shot learning.
              </p>
              
              <p className="text-secondary-theme">
                My project work includes clinical speech inference for SOAP note generation, adversarially robust and
                fair postoperative complication prediction, 3D medical image segmentation with MONAI, gaze-based
                attention monitoring, and thermal-optical life detection.
              </p>
              
              <p className="text-secondary-theme">
                My technical stack includes PyTorch, TensorFlow, Transformers, LangChain, MONAI, OpenAI API, RAG,
                React, Node.js, Flutter, Django, SwiftUI, Firebase, AWS, Apache Spark, Kafka, SQL/NoSQL, MLflow,
                TensorBoard, W&B, CUDA, vLLM, INT8 quantization, and KV-cache optimization.
              </p>
              
              <p className="text-secondary-theme">
                My professional experience spans prosthetic simulator research at TU Delft University, ophthalmic
                biomarker and vessel segmentation work at Prediscan Medtech, HTIC, IIT Madras, and biomedical
                engineering work at Awali Hospital.
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
                    <p className="text-secondary-theme text-xs">MONAI workflows, 3D U-Net, SegResNet, NIfTI/DICOM processing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TbHeartRateMonitor className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">Biomedical Signal Processing</h4>
                    <p className="text-secondary-theme text-xs">EEG analysis, gaze monitoring, prosthetic simulation responsiveness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SiUnity className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">LLM Systems</h4>
                    <p className="text-secondary-theme text-xs">Whisper ASR, Mistral-7B, vLLM, INT8 quantization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TbMicroscope className="text-accent-theme text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary-theme">AI in Healthcare</h4>
                    <p className="text-secondary-theme text-xs">Adversarial robustness, fairness, differential privacy, API hardening</p>
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
                    <span className="text-sm font-medium text-primary-theme">CUDA</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaDatabase className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">MATLAB</span>
                  </div>
                </div>
              </div>

              {/* Full Stack Development */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">Full Stack Development</h4>
                <div className="space-y-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaReact className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">React & Node.js</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaNodeJs className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">Flutter & Django</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiMongodb className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">SwiftUI & Firebase</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiTailwindcss className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">AWS</span>
                  </div>
                </div>
              </div>
              
              {/* AI/ML Frameworks */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">AI/ML Frameworks</h4>
                <div className="space-y-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiTensorflow className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">TensorFlow & MONAI</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiPytorch className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">PyTorch & Transformers</span>
                  </div>
                </div>
              </div>
              
              {/* Cloud & Tools */}
              <div>
                <h4 className="font-semibold text-sm text-accent-theme mb-2">Cloud & Development Tools</h4>
                <div className="space-y-2">
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <SiAmazonwebservices className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">vLLM & RAG</span>
                  </div>
                  <div className="bg-secondary-theme rounded-lg p-3 flex items-center space-x-2">
                    <FaLaptopCode className="text-accent-theme text-xl" />
                    <span className="text-sm font-medium text-primary-theme">MLflow & W&B</span>
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
