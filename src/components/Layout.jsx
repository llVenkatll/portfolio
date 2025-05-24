import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 sm:px-6 py-10"
      >
        <Outlet />
      </motion.main>
      
      <Footer />
    </div>
  )
}

export default Layout