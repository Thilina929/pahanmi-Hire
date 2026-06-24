import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const CompetitiveAdvantage = () => {
  const advantages = [
    'AI Driven CV Screening',
    'Semantic & Behavioral Analysis',
    'Predictive Success Models',
    'Career Guidance',
    'Academic Guidance',
    'Diversity & Bias Auditing',
    'Cloud Native SaaS',
    'Multi Tenant Architecture',
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            <span className="gradient-text">Why Pahanmi Hire?</span>
          </h2>
          <p className="section-subtitle">
            Unmatched capabilities that set us apart from traditional recruitment platforms
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-gray-200 hover:border-primary-300 transition-all card-hover group"
            >
              {/* Checkbox Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white shadow-md"
                >
                  <FiCheck className="text-xl font-bold" />
                </motion.div>
              </div>

              {/* Text */}
              <div className="flex-grow">
                <p className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {advantage}
                </p>
              </div>

              {/* Arrow */}
              <div className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-4">
                →
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Complete Talent Ecosystem
          </h3>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Pahanmi Hire combines the best of recruitment technology, career development, and data science to create a truly transformative hiring experience for all stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitiveAdvantage
