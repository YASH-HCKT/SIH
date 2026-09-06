"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Lock, FileText, Zap, BarChart3 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning to analyze Ayurveda formulations and identify IP vulnerabilities.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Access guidance in 6+ languages including Hindi, Sanskrit, Tamil, Telugu, Marathi, and English.",
  },
  {
    icon: Lock,
    title: "IP Protection",
    description: "Comprehensive strategies for patents, trademarks, trade secrets, and geographical indications.",
  },
  {
    icon: FileText,
    title: "Documentation Assist",
    description: "AI-guided documentation of formulations with proper technical specifications and heritage information.",
  },
  {
    icon: Zap,
    title: "Real-Time Regulatory",
    description: "Up-to-date information on regulatory requirements across 15+ international regimes.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Competitive analysis and market positioning strategies for Ayurvedic products.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-black pt-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Powerful <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to protect and promote your Ayurvedic intellectual property.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">RAG Architecture</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Our Retrieval-Augmented Generation system combines the latest AI models with authoritative IP and regulatory databases, ensuring every recommendation is backed by verified sources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Retrieval",
              description: "Sources from 50+ authoritative databases including WIPO, USPTO, and Indian IP databases.",
              items: ["Patent Databases", "Regulatory Docs", "Case Law", "Formulation Libraries"],
            },
            {
              title: "Augmentation",
              description: "Context-aware processing ensures recommendations are specific to Ayurveda sector.",
              items: ["Domain Tuning", "Regulatory Mapping", "Language Processing", "Citation Tracking"],
            },
            {
              title: "Generation",
              description: "Produces actionable, source-cited guidance in user's preferred language.",
              items: ["Compliance Reports", "Protection Plans", "Documentation Guides", "Export Analysis"],
            },
          ].map((stage, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{stage.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{stage.description}</p>
              <ul className="space-y-2">
                {stage.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Use Cases</h2>
          <p className="text-gray-400 text-lg">See how IP-SAKTI helps different stakeholders</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              role: "Ayurvedic Practitioners",
              tasks: ["Document proprietary formulations", "Develop protection strategy", "Prepare for commercialization"],
            },
            {
              role: "Pharmaceutical Companies",
              tasks: ["Regulatory compliance mapping", "International expansion planning", "Patent portfolio analysis"],
            },
            {
              role: "Researchers",
              tasks: ["Identify unprotected IP spaces", "Literature review acceleration", "Publication strategy guidance"],
            },
            {
              role: "Government Agencies",
              tasks: ["Monitor IP violations", "Track traditional knowledge", "Policy development support"],
            },
          ].map((useCase, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{useCase.role}</h3>
              <ul className="space-y-2">
                {useCase.tasks.map((task, j) => (
                  <li key={j} className="text-gray-300 flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-3" />
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
