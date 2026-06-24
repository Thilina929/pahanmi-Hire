import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      period: '2025 Q2',
      title: 'Pilot Prototype Deployment',
      description: 'Launch of MVP with core CV parsing and job matching features',
      status: 'In Progress',
    },
    {
      phase: 'Phase 2',
      period: '2025 Q4',
      title: 'Enterprise Licensing & Academic Integration',
      description: 'Enterprise licensing model and academic institution partnerships',
      status: 'Upcoming',
    },
    {
      phase: 'Phase 3',
      period: '2026 Q2',
      title: 'Global Expansion into Asia & Europe',
      description: 'International expansion with localization and regional partnerships',
      status: 'Planned',
    },
  ]

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Commercialization Roadmap</span>
          </h2>
          <p className="section-subtitle">
            Strategic milestones driving our growth and global expansion
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-0">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`md:flex md:mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-lg transition-all"
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold">
                        {item.phase}
                      </span>
                      <span className="text-sm font-semibold text-secondary-600">
                        {item.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-600 mb-4">
                      {item.description}
                    </p>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      <FiCheck className={`${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-blue-500' : 'text-primary-500'}`} />
                      <span className={`text-sm font-semibold ${index === 0 ? 'text-yellow-600' : index === 1 ? 'text-blue-600' : 'text-primary-600'}`}>
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex md:w-0 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r ${
                      index === 0
                        ? 'from-yellow-400 to-yellow-600'
                        : index === 1
                        ? 'from-blue-400 to-blue-600'
                        : 'from-primary-500 to-accent-600'
                    } relative z-10 flex items-center justify-center`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </motion.div>
                </div>

                {/* Empty space for alternate layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap
