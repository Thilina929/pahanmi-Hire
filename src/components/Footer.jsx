import { motion } from 'framer-motion'
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiArrowUp,
} from 'react-icons/fi'
import logo from '../assets/logo.png'

const Footer = ({ onNavClick }) => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Technology', id: 'technology' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FiFacebook, label: 'Facebook', href: '#' },
    { icon: FiInstagram, label: 'Instagram', href: '#' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Pahanmi Hire" className="h-36 w-auto object-contain" />
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed mb-4">
              Empowering Talent. Evolving Recruitment. Enabling Futures.
            </p>
            <p className="text-secondary-400 text-sm">
              Presented by Suchith Gunarathna
            </p>
            <p className="text-secondary-400 text-sm font-semibold">
              Astakon Labs
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-primary-600 flex items-center justify-center text-secondary-300 hover:text-white transition-all"
                    title={social.label}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-secondary-800 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <div className="text-secondary-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} Pahanmi Hire. All rights reserved. |{' '}
              <a href="https://astakonlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                Astakon Labs
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-secondary-400 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary-600 hover:bg-primary-700 flex items-center justify-center transition-all"
            title="Scroll to top"
          >
            <FiArrowUp className="text-lg text-white" />
          </motion.button>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-primary-400 italic font-semibold"
        >
          <p>Empowering Talent. Evolving Recruitment. Enabling Futures.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
