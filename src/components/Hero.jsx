import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { FiTrendingUp, FiZap, FiCloud, FiMessageCircle } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import heroImage from '../assets/hero section.png'

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
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] lg:min-h-screen overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_40%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col justify-center py-20 lg:py-24"
        >
          <motion.div variants={itemVariants} className="max-w-2xl lg:max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200 border border-sky-300/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse"></span>
              AI powered healthcare hiring
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Intelligent hiring for healthcare teams with <span className="text-sky-300">AI-powered talent matching</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-8">
              Accelerate recruitment, reduce bias, and discover top medical talent faster with predictive insights and automated candidate screening.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => onNavClick('contact')}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold shadow-lg shadow-sky-500/25"
            >
              Request Demo
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavClick('features')}
              className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold border border-white/20 bg-white/10 text-white hover:bg-white/15"
            >
              Learn More
              <BsArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
