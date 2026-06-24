import { motion } from 'framer-motion'
import {
  FiSmartphone,
  FiCpu,
  FiBarChart2,
  FiActivity,
  FiDatabase,
  FiLayers,
} from 'react-icons/fi'

const Technology = () => {
  const technologies = [
    {
      icon: <FiSmartphone />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP for semantic understanding and intelligent text analysis',
    },
    {
      icon: <FiCpu />,
      title: 'Deep Learning',
      description: 'Neural networks for pattern recognition and predictive modeling',
    },
    {
      icon: <FiBarChart2 />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights for forecasting and decision making',
    },
    {
      icon: <FiActivity />,
      title: 'Recommender Systems',
      description: 'Intelligent algorithms for personalized recommendations',
    },
    {
      icon: <FiDatabase />,
      title: 'Behavioral Analytics',
      description: 'User behavior tracking and pattern analysis',
    },
    {
      icon: <FiLayers />,
      title: 'Career Ontology Models',
      description: 'Structured knowledge representation for career pathways',
    },
  ]

  const architectureItems = [
    { label: 'Architecture', value: 'Cloud Native SaaS' },
    { label: 'Development', value: 'Agile R&D' },
    { label: 'Framework', value: 'Modular Microservices' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Powered by <span className="gradient-text">Advanced AI Research</span>
          </h2>
          <p className="section-subtitle">
            Cutting-edge technology stack combining machine learning, data science, and domain expertise
          </p>
        </motion.div>

        {/* Technology Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-primary-300 transition-all card-hover group"
            >
              <div className="text-4xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {tech.title}
              </h3>
              <p className="text-secondary-600">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-primary-50 via-white to-accent-50 border border-primary-200 p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Technical Framework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architectureItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-secondary-900">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology
