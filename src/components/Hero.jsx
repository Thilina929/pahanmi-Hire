import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { FiTrendingUp, FiZap, FiCloud, FiMessageCircle } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Hero = ({ onNavClick }) => {
  const [stats, setStats] = useState([
    { value: 0, label: 'Reduction in Screening Time', suffix: '%' },
    { value: 0, label: 'AI Modules', suffix: '+' },
    { value: 0, label: 'Cloud Based', suffix: '%' },
    { value: 0, label: 'Career Guidance', suffix: '/7' },
  ])

  useEffect(() => {
    const targets = [90, 13, 100, 24]
    const intervals = targets.map((target, index) => {
      let current = 0
      return setInterval(() => {
        current += Math.ceil(target / 50)
        if (current >= target) {
          current = target
          setStats(prev => {
            const newStats = [...prev]
            newStats[index].value = target
            return newStats
          })
        } else {
          setStats(prev => {
            const newStats = [...prev]
            newStats[index].value = current
            return newStats
          })
        }
      }, 30)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  const statIcons = [
    <FiTrendingUp className="text-3xl" />,
    <FiZap className="text-3xl" />,
    <FiCloud className="text-3xl" />,
    <FiMessageCircle className="text-3xl" />,
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-200 to-primary-200 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-700 text-sm font-semibold flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              AI-Powered Innovation
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight"
          >
            AI-Powered Recruitment &{' '}
            <span className="gradient-text">Career Intelligence Platform</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Transform hiring and career development into a faster, fairer, and data-driven process through intelligent automation, predictive analytics, and personalized career guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavClick('contact')}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Request Demo
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavClick('features')}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Learn More
              <BsArrowRight />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-lg transition-all card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary-600">{statIcons[index]}</div>
                <span className="text-xs font-bold text-primary-500 bg-primary-50 px-2 py-1 rounded">
                  {index + 1}/4
                </span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm text-secondary-600 line-clamp-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
