import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-primary-300 transition-all card-hover"
          >
            <div className="text-4xl text-primary-600 mb-4">
              <FiMail />
            </div>
            <h3 className="text-lg font-bold text-secondary-900 mb-2">Email</h3>
            <p className="text-secondary-600">hello@pahanmihire.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-primary-300 transition-all card-hover"
          >
            <div className="text-4xl text-primary-600 mb-4">
              <FiPhone />
            </div>
            <h3 className="text-lg font-bold text-secondary-900 mb-2">Phone</h3>
            <p className="text-secondary-600">+94 71 978 0187</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-primary-300 transition-all card-hover"
          >
            <div className="text-4xl text-primary-600 mb-4">
              <FiMapPin />
            </div>
            <h3 className="text-lg font-bold text-secondary-900 mb-2">Location</h3>
            <p className="text-secondary-600">Colombo, Sri Lanka</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white border border-gray-200 p-8 md:p-12 shadow-lg"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center"
            >
              ✓ Thank you! We'll get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            >
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold text-secondary-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold text-secondary-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold text-secondary-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Your company"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-bold text-secondary-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Message subject"
                />
              </motion.div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <label className="block text-sm font-bold text-secondary-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full btn-primary py-4 font-bold text-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
