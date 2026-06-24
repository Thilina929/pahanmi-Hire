import { motion } from 'framer-motion'
import {
  FiFileText,
  FiTarget,
  FiBarChart2,
  FiCalendar,
  FiLayers,
  FiUsers,
  FiShoppingCart,
  FiShield,
  FiCompass,
  FiEdit3,
  FiBell,
  FiAward,
  FiTrendingUp,
} from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: <FiFileText />,
      title: 'Intelligent CV Parser & Evaluator',
      description: 'NLP-powered resume parsing with semantic matching and knowledge graph analysis',
    },
    {
      icon: <FiTarget />,
      title: 'Precision Job Matcher',
      description: 'Deep learning recommendations with career goal and personality-based matching',
    },
    {
      icon: <FiBarChart2 />,
      title: 'Predictive Hiring Analytics',
      description: 'Candidate success forecasting with retention prediction and KPI tracking',
    },
    {
      icon: <FiCalendar />,
      title: 'Interview Flow Manager',
      description: 'AI scheduling with Google Calendar and Outlook integration',
    },
    {
      icon: <FiLayers />,
      title: 'AI Career Portfolio Generator',
      description: 'Smart CV creation with LinkedIn integration and skill recommendations',
    },
    {
      icon: <FiUsers />,
      title: 'Recruiter Control Center',
      description: 'ATS integration with Greenhouse, Lever, and BambooHR support',
    },
    {
      icon: <FiShoppingCart />,
      title: 'Talent Hub Marketplace',
      description: 'Freelance marketplace with project-based hiring and skill matching',
    },
    {
      icon: <FiShield />,
      title: 'FairHire AI',
      description: 'Diversity & inclusion focused with bias detection and anonymous reviews',
    },
    {
      icon: <FiCompass />,
      title: 'FutureFit Career Advisor',
      description: 'Skill-gap analysis with learning recommendations and career roadmapping',
    },
    {
      icon: <FiEdit3 />,
      title: 'Smart JD Builder',
      description: 'Generative AI job descriptions with LLM-powered content generation',
    },
    {
      icon: <FiBell />,
      title: 'AI Nudging Engine',
      description: 'Smart email, SMS, and push notifications to keep users engaged',
    },
    {
      icon: <FiAward />,
      title: 'Talent Brand Showcase',
      description: 'Career microsites with employer branding and video testimonials',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Hiring & Market Insights',
      description: 'Salary benchmarking with pipeline analytics and market intelligence',
    },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
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
            <span className="gradient-text">13 AI-Powered Modules</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive features designed to revolutionize recruitment and career development
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-xl transition-all duration-300 card-hover cursor-pointer"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-secondary-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold">Learn more</span>
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
