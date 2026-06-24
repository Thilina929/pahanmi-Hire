import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiZap } from 'react-icons/fi'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: <FiTarget className="text-4xl" />,
      title: 'Our Mission',
      description: 'To revolutionize hiring by creating a bias-free, data-driven ecosystem that connects employers, freelancers, and job seekers through intelligent automation.',
    },
    {
      icon: <FiEye className="text-4xl" />,
      title: 'Our Vision',
      description: 'Transform hiring and career development into a faster, fairer, and data-driven process through intelligent automation and personalized career guidance.',
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: 'Core Innovation',
      description: 'Unified AI-driven recruitment, career coaching, and academic guidance into one platform, enabling smarter decisions for all stakeholders.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">
            The Future of Recruitment &{' '}
            <span className="gradient-text">Career Intelligence</span>
          </h2>
          <p className="section-subtitle">
            Pahanmi Hire is an AI-powered platform presented by Suchith Gunarathna, Founder & CEO of Pahanmi (Pvt) Ltd / Astakon Labs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-primary-300 transition-all card-hover"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">
            Why Pahanmi Hire?
          </h3>
          <div className="space-y-4 text-secondary-700 leading-relaxed">
            <p>
              Pahanmi Hire is more than a recruitment platform. It is a complete AI-powered HR and Career Ecosystem designed to connect employers, freelancers, students, and job seekers through intelligent automation and data-driven decision making.
            </p>
            <p>
              Our unified platform combines cutting-edge AI technologies with domain expertise in recruitment and career development to create an unbiased, transparent, and highly efficient hiring process.
            </p>
            <p>
              From intelligent CV parsing to predictive analytics, from career coaching to bias detection, Pahanmi Hire empowers every stakeholder in the talent ecosystem to make better decisions faster.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
