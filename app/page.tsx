import { IPSaktiHero } from "@/components/ui/prisma-hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <IPSaktiHero />

      {/* Quick Stats Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <p className="text-gray-400">Ayurveda Formulations Analyzed</p>
            </div>

            <div className="text-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                15+
              </div>
              <p className="text-gray-400">International Regulatory Regimes</p>
            </div>

            <div className="text-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                6
              </div>
              <p className="text-gray-400">Languages Supported</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-black/50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Protect Your Ayurveda IP Today
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get instant guidance on intellectual property protection, regulatory compliance, and internationalization strategies for your Ayurveda products.
          </p>
          <button className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-block">
            Start Free Analysis
          </button>
        </div>
      </section>
    </div>
  );
}
