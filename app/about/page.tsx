"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About <span className="text-primary">IP-SAKTI</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            IP-SAKTI Sahayak (Intellectual Property - Systemic Assistant for Knowledge and Technology Integration) is an AI-powered platform designed to protect and promote Ayurvedic knowledge in the digital age.
          </p>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">The Challenge</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Ayurvedic formulations contain centuries of accumulated knowledge, yet often lack formal intellectual property protection. Traditional practitioners struggle with:
            </p>
            <ul className="space-y-4">
              {[
                "Complex regulatory requirements across countries",
                "Lack of accessible IP guidance in local languages",
                "Difficulty navigating international trade regimes",
                "Limited resources for proper documentation",
                "Risk of unauthorized commercialization",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-transparent rounded-xl border border-primary/30" />
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 aspect-video bg-gradient-to-br from-amber-500/20 to-transparent rounded-xl border border-amber-500/30" />
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Solution</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              IP-SAKTI Sahayak leverages advanced AI and Retrieval-Augmented Generation (RAG) to provide:
            </p>
            <ul className="space-y-4">
              {[
                "Multilingual guidance in 6+ languages",
                "Real-time analysis of IP regulations",
                "Source-cited recommendations with full transparency",
                "Formulation documentation assistance",
                "Regulatory compliance roadmaps",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Built by Innovators</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A dedicated team of engineers, IP experts, and Ayurveda enthusiasts from Asansol Engineering College, participating in Smart India Hackathon 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-full mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Team Member {i}</h3>
              <p className="text-sm text-gray-400">Role & Expertise</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div {...fadeInUp} className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Impact & Vision</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We envision a future where Ayurvedic knowledge is protected, respected, and celebrated globally. Through IP-SAKTI, we're democratizing access to IP guidance, enabling thousands of practitioners to safeguard their heritage while contributing to India's bioeconomy.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
