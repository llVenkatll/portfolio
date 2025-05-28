import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-secondary-theme py-6 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-accent-theme text-lg font-bold">Venkatesh Meenakshinathan</h2>
            <p className="text-secondary-theme text-sm mt-1">Biomedical Engineer & AI Enthusiast</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/llVenkatll" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/venkateshmeenakshinathan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:venkat011003@gmail.com"
              className="text-secondary-theme hover:text-accent-theme transition-colors duration-300"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-secondary-theme text-sm">
            &copy; {new Date().getFullYear()} Venkatesh Meenakshinathan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
