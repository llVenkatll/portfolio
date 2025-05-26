import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { TbEye, TbBrain, TbDeviceHeartMonitor, TbEar, TbTemperature } from 'react-icons/tb'

const Projects = () => {
  const projects = [
    {
      title: "Gaze Mapping Based Attention Monitoring",
      date: "Aug 2024 - Apr 2025",
      description: "Pioneered a groundbreaking gaze tracking system that maps visual attention patterns during cognitive tasks, enabling real-time monitoring of focus levels and attention span, leading to improved assessment accuracy for attention-related disorders and enhanced learning environment adaptations.",
      skills: ["Full Stack Development", "Firebase", "Machine Learning", "Human-Computer Interface"],
      icon: <TbEye className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/GazeMapping"
    },
    {
      title: "Eye Fundus Image-Based Chronic Disease Prediction",
      date: "Jul 2023 - Jan 2025",
      description: "Developed an advanced retinal analysis system using fundus imagery that accurately predicts the progression of chronic diseases like diabetes and hypertension, achieving 95% sensitivity in early detection and enabling preventive interventions months before traditional diagnostic methods.",
      skills: ["Image Segmentation", "Machine Learning", "UI UX", "Medical Image Processing"],
      icon: <TbEye className="text-accent-theme text-3xl" />,
      github: "https://github.com/VenkatM300/fundus-disease-prediction"
    },
    {
      title: "Multi-Modal VR-Based System for Home Glaucoma Monitoring",
      date: "Jul 2024 - Oct 2024",
      description: "Designed an at-home diagnostic platform combining interactive headset technology with non-invasive sensors that captured temperature variations, sound-based indicators, and field-of-vision data, enabling constant health tracking while achieving diagnostic accuracy comparable to specialized clinics.",
      skills: ["Data Processing", "Thermal Imaging", "Unity VR", "Embedded Systems", "Acoustics"],
      icon: <TbTemperature className="text-accent-theme text-3xl" />,
      github: "https://github.com/VenkatM300/vr-glaucoma-monitoring"
    },
    {
      title: "Tinnitus Diagnosis and Adaptive Sound Therapy",
      date: "Sep 2023 - Mar 2024",
      description: "Developed an innovative system for tinnitus diagnosis and personalized sound therapy using advanced acoustic signal processing and machine learning algorithms. The system achieved an 87% accuracy in diagnosing tinnitus severity and provided adaptive sound therapy.",
      skills: ["Flutter", "BioSignal Processing", "Data Analytics", "Pattern Recognition"],
      icon: <TbEar className="text-accent-theme text-3xl" />,
      github: "https://github.com/VenkatM300/tinnitus-therapy"
    },
    {
      title: "Thermal And Optical Camera based Life Detection System",
      date: "Sep 2023 - Mar 2024",
      description: "Architected and deployed a dual-modality biometric surveillance system leveraging thermal-optical sensor fusion and deep convolutional neural networks on Google Cloud Platform, integrating MLflow for model versioning and MongoDB for scalable medical diagnostics processing.",
      skills: ["Deep Learning", "Computer Vision", "MLflow", "MongoDB", "Medical Image Processing"],
      icon: <TbTemperature className="text-accent-theme text-3xl" />,
      github: "https://github.com/VenkatM300/thermal-optical-detection"
    },
    {
      title: "AI-Powered COVID-19 Detection in Lung CT Scans",
      date: "Sep 2023 - Mar 2024",
      description: "Created an advanced image processing and segmentation system to detect COVID-affected regions in lung CT scans using adaptive thresholding and morphological operations.",
      skills: ["MATLAB", "Image Processing", "Adaptive Histogram Equalization", "Morphological Operations"],
      icon: <TbDeviceHeartMonitor className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/AI-Powered-COVID-19-Detection-in-Lung-CT-Scans-"
    },
    {
      title: "AI for Early Detection of Schizophrenia",
      date: "Jul 2024 - Oct 2024",
      description: "Engineered a pioneering EEG analysis pipeline that detects early neurological markers of schizophrenia, achieving 99% accuracy in identifying at-risk patients through brain wave pattern analysis, enabling crucial early interventions and personalized treatment planning.",
      skills: ["Transformers", "Attention Networks", "Machine Learning", "Feature Extraction"],
      icon: <TbBrain className="text-accent-theme text-3xl" />,
      github: "https://github.com/llVenkatll/Classification-of-Schizophrenia-for-Early-Diagnosis"
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
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center justify-center h-12 w-12 bg-primary-theme/20 rounded-lg shrink-0">
                  {project.icon}
                </div>
                <span className="text-accent-theme font-mono text-sm">{project.date}</span>
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
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-theme hover:text-accent-theme transition-colors duration-300 flex items-center gap-1 text-sm"
                  >
                    <FaGithub /> 
                    <span>View Code</span>
                  </a>
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
