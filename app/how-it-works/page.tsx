'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const steps = [
  {
    number: '01',
    title: 'Submit Your Query',
    description:
      'Describe your Ayurvedic formulation, product, or IP concern in your preferred language.',
    details: [
      'Upload formulation details',
      'Specify target markets',
      'Mention regulatory concerns',
    ],
  },
  {
    number: '02',
    title: 'AI Analysis',
    description:
      'Our RAG system retrieves relevant IP laws, regulatory frameworks, and case precedents.',
    details: ['Multi-database search', 'Regulatory mapping', 'Precedent analysis'],
  },
  {
    number: '03',
    title: 'Context Integration',
    description:
      'Information is augmented with Ayurvedic domain knowledge and your specific context.',
    details: ['Domain expertise applied', 'Market analysis', 'Competitive positioning'],
  },
  {
    number: '04',
    title: 'Source-Cited Guidance',
    description:
      'Receive actionable recommendations backed by verified sources and legal references.',
    details: ['Detailed reports', 'Source attribution', 'Implementation roadmap'],
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            How <span className="text-primary">IP-SAKTI</span> Works
          </h1>
          <p className="text-xl text-gray-400">
            Four simple steps to protect your Ayurvedic intellectual property.
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl font-bold text-primary">{step.number}</div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">{step.title}</h2>
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        {step.details.map((detail, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`aspect-square bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                </div>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div className="flex justify-center mt-8 mb-4">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Powered By</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            State-of-the-art AI and retrieval technologies ensuring accuracy and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'LLM',
              tech: 'Claude API',
              description: 'Advanced language understanding and generation',
            },
            {
              title: 'Retrieval',
              tech: 'Vector DB',
              description: 'Fast, accurate document and case law retrieval',
            },
            {
              title: 'Data',
              tech: 'Multi-Source',
              description: 'Integration of 50+ authoritative IP databases',
            },
            {
              title: 'Deployment',
              tech: 'Cloud Native',
              description: 'Scalable, secure, and globally accessible',
            },
          ].map((tech, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-sm text-primary font-semibold mb-2">{tech.title}</div>
              <h3 className="text-xl font-bold text-white mb-2">{tech.tech}</h3>
              <p className="text-sm text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked</h2>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: "How accurate is IP-SAKTI's guidance?",
              a: 'Our recommendations are backed by real-time data from 50+ authoritative IP databases. However, we recommend consulting with IP specialists for final legal decisions.',
            },
            {
              q: 'Which languages are supported?',
              a: 'Currently supporting English, Hindi, Sanskrit, Tamil, Telugu, Marathi, and Bengali with plans to add more regional languages.',
            },
            {
              q: 'Is my formulation data secure?',
              a: 'Yes. All submissions are encrypted, stored securely, and can be deleted on request. We never share data with third parties.',
            },
            {
              q: 'Can I export the guidance?',
              a: 'Absolutely. All reports can be exported as PDF for documentation, filing, or sharing with your IP counsel.',
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
