import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'

const CTA = ({ onNavClick }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 p-8 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Revolutionize Hiring?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Join the next generation of AI-powered recruitment and career intelligence. Transform your hiring process today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavClick('contact')}
              className="px-8 py-4 rounded-lg bg-white text-primary-600 font-bold hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              Schedule Demo
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavClick('contact')}
              className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Contact Us
              <BsArrowRight />
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90"
          >
            <div>✓ 100% Cloud-Based</div>
            <div>✓ Enterprise Ready</div>
            <div>✓ 24/7 Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
