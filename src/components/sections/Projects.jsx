import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { TbEye, TbBrain, TbDeviceHeartMonitor, TbEar, TbTemperature } from 'react-icons/tb'

const Projects = () => {
  const projects = [
    {
      title: "Long-Input Clinical Speech Inference Pipeline",
      date: "CMU, Spring 2026",
      description: "Designed a clinical note generation system for SOAP notes from 30-minute doctor-patient audio using Whisper-based ASR and chunked LLM inference. Achieved about 2.1x throughput improvement and about 37% GPU memory reduction via INT8 quantization over an fp16 chunked baseline on T4 GPU.",
      skills: ["PyTorch", "Mistral-7B", "Whisper", "INT8 Quantization", "vLLM", "ROUGE-L / BERTScore"],
      icon: <TbBrain className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/SCALING-LONG-INPUT-LONG-OUTPUT-LLM-INFERENCE-FOR-CLINICAL-SOAP"
    },
    {
      title: "Adversarially Robust & Fair Postoperative Complication Prediction",
      date: "CMU, Spring 2026",
      description: "Built a 4-pillar secure ML pipeline over a synthetic TKA dataset covering adversarial robustness, fairness, differential privacy, and API hardening. The project used FGSM/PGD adversarial training, equalized-odds threshold post-processing, and DP-SGD.",
      skills: ["PyTorch", "Scikit-learn", "Opacus", "Fairlearn", "PGD/FGSM", "API Hardening"],
      icon: <TbDeviceHeartMonitor className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/secure_trust"
    },
    {
      title: "Medical Image Segmentation with MONAI",
      date: "CMU, Spring 2026",
      description: "Developed 3D medical image segmentation workflows using MONAI transforms, DataLoader, and model zoo components including U-Net and SegResNet for volumetric clinical imaging tasks with standardized preprocessing pipelines.",
      skills: ["MONAI", "PyTorch", "3D U-Net", "SegResNet", "Dice Loss", "NIfTI/DICOM"],
      icon: <TbEye className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/Liver-Tumor-Segmentation-using-MONAI-Attn-U-Net-with-Focal-Tversky-Loss-2"
    },
    {
      title: "EEG-Based Schizophrenia Detection using AI",
      date: "ATSN-2024, Kuwait",
      description: "Pioneered an EEG analysis pipeline achieving 99% accuracy in early detection of schizophrenia through transformer-based attention networks for brain wave pattern analysis.",
      skills: ["PyTorch", "Transformers", "Attention Networks", "Feature Extraction", "Data Preprocessing"],
      icon: <TbBrain className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/Classification-of-Schizophrenia-for-Early-Diagnosis"
    },
    {
      title: "Gaze-Based Attention Monitoring System",
      date: "Conference Presentation",
      description: "Pioneered a webcam-based gaze tracking system using WebGazer.js for real-time monitoring of focus levels and attention patterns during cognitive tasks with a cost-effective hardware-free solution.",
      skills: ["WebGazer.js", "Firebase", "React", "Machine Learning", "Human-Computer Interface"],
      icon: <TbEye className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/GazeMapping"
    },
    {
      title: "Thermal-Optical Life Detection System",
      date: "Dual-Modality Biometric Surveillance on GCP",
      description: "Architected a sensor fusion system with deep CNNs leveraging thermal-optical imaging, integrated MLflow for model versioning and MongoDB for scalable diagnostics processing, and deployed it on Google Cloud Platform for real-time analysis.",
      skills: ["Deep Learning", "Computer Vision", "MLflow", "MongoDB", "Google Cloud Platform", "PyTorch"],
      icon: <TbTemperature className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll"
    },
    {
      title: "AI-Powered COVID-19 Detection in Lung CT Scans",
      date: "Medical Image Processing",
      description: "Created an advanced segmentation system for COVID-affected regions using adaptive thresholding, morphological operations, edge detection algorithms, and adaptive histogram equalization.",
      skills: ["MATLAB", "Image Processing", "Adaptive Histogram Equalization", "Morphological Operations"],
      icon: <TbDeviceHeartMonitor className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/AI-Powered-COVID-19-Detection-in-Lung-CT-Scans-"
    }
  ]

  return (
    <section id="projects" className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Research Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-secondary-theme rounded-lg p-6 h-full flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <div className="flex items-center justify-center h-12 w-12 bg-primary-theme/20 rounded-lg shrink-0">
                  {project.icon}
                </div>
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-accent-theme font-mono text-sm text-right">{project.date}</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                    title="View GitHub repository"
                    className="text-secondary-theme hover:text-accent-theme transition-colors duration-300 shrink-0"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary-theme">{project.title}</h3>
              <p className="text-secondary-theme flex-grow mb-4">{project.description}</p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="text-xs bg-primary-theme/20 px-2 py-1 rounded-full text-accent-theme"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-theme hover:text-accent-theme transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <FaExternalLinkAlt /> 
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
