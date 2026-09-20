'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Leaf,
  Scroll,
  BookOpen,
  FileCheck,
  FlaskConical,
  MapPin,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { SAMHITA_CATEGORIES, SAMHITA_ENTRIES, SamhitaEntry } from '@/lib/samhita-data';

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-5 h-5 text-[#477A5B]" />,
  Scroll: <Scroll className="w-5 h-5 text-[#477A5B]" />,
  BookOpen: <BookOpen className="w-5 h-5 text-[#477A5B]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#477A5B]" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-[#477A5B]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#477A5B]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#477A5B]" />,
};

export default function SamhitaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter entries based on search or selected category
  const filteredEntries = SAMHITA_ENTRIES.filter((entry) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (entry.sanskritName && entry.sanskritName.includes(searchQuery)) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = !activeCategory || entry.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#202124] pt-24 pb-16 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7F3] to-[#FFFFFF] py-16 md:py-24 border-b border-[#DADCE0]">
        <div className="samhita-container relative z-10 text-center max-w-4xl mx-auto">
          {/* Tag / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2ECE4] text-[#2D5A3F] text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#477A5B]" />
            Traditional Knowledge meets Modern IP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#202124] mb-4"
          >
            SAMHITA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl font-medium text-[#2D5A3F] max-w-2xl mx-auto mb-3"
          >
            A living knowledge repository for Ayurveda, innovation and intellectual property.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#5F6368] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Explore structured knowledge across medicinal plants, classical formulations, traditional remedies, global patent prior art, and scientific research.
          </motion.p>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="relative max-w-2xl mx-auto mb-6"
          >
            <div className="relative flex items-center bg-[#FFFFFF] rounded-2xl shadow-lg border border-[#DADCE0] p-2 hover:border-[#477A5B] transition-colors focus-within:ring-2 focus-within:ring-[#477A5B]/30 focus-within:border-[#477A5B]">
              <Search className="w-5 h-5 text-[#5F6368] ml-3 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search herbs, botanical names, formulations, or prior art..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-[#202124] placeholder-[#80868B] text-base focus:outline-none focus:ring-0 py-2.5 px-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#5F6368] hover:text-[#202124] px-3 py-1 rounded-md bg-[#F1F3F4] mr-2"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-xs text-[#5F6368] text-left mt-2.5 ml-3 flex items-center gap-1.5">
              <span>Try searching:</span>
              <button
                onClick={() => setSearchQuery('Ashwagandha')}
                className="text-[#477A5B] hover:underline font-medium"
              >
                Ashwagandha
              </button>
              <span>•</span>
              <button
                onClick={() => setSearchQuery('Curcuma longa')}
                className="text-[#477A5B] hover:underline font-medium"
              >
                Curcuma longa
              </button>
              <span>•</span>
              <button
                onClick={() => setSearchQuery('US Patent 5,401,504')}
                className="text-[#477A5B] hover:underline font-medium"
              >
                US Patent 5,401,504
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-12 border-b border-[#DADCE0] bg-[#FFFFFF]">
        <div className="samhita-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#202124] tracking-tight mb-1">
                Explore Knowledge Domains
              </h2>
              <p className="text-sm text-[#5F6368]">
                Select a category to filter the repository records
              </p>
            </div>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="mt-3 md:mt-0 text-xs font-semibold text-[#477A5B] hover:underline inline-flex items-center gap-1"
              >
                Reset Filter (Show All)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAMHITA_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(isSelected ? null : cat.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 samhita-card-hover ${
                    isSelected
                      ? 'bg-[#F3F7F3] border-[#477A5B] ring-2 ring-[#477A5B]/20'
                      : 'bg-[#F8F9FA] border-[#DADCE0] hover:border-[#477A5B]/50 hover:bg-[#FFFFFF]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DADCE0] shadow-sm">
                      {iconMap[cat.iconName] || <Leaf className="w-5 h-5 text-[#477A5B]" />}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F0E9] text-[#2D5A3F]">
                      {cat.count} records
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#202124] text-base mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#5F6368] leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED KNOWLEDGE REPOSITORY GRID */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="samhita-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#477A5B] uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" />
                Featured Knowledge Profiles
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#202124] tracking-tight">
                Curated Ayurvedic Botanicals & IP Records
              </h2>
            </div>
            <p className="text-xs text-[#5F6368] mt-2 md:mt-0">
              Showing {filteredEntries.length} of {SAMHITA_ENTRIES.length} entries
            </p>
          </div>

          {filteredEntries.length === 0 ? (
            <div className="text-center py-16 bg-[#F8F9FA] rounded-2xl border border-[#DADCE0]">
              <AlertCircle className="w-10 h-10 text-[#5F6368] mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-[#202124]">No records match your search</h3>
              <p className="text-sm text-[#5F6368] mt-1 max-w-md mx-auto">
                Try searching for a different keyword or resetting your category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory(null);
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#477A5B] rounded-lg hover:bg-[#396248] transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntries.map((entry) => (
                <div
                  key={entry.slug}
                  className="group bg-[#FFFFFF] rounded-2xl border border-[#DADCE0] overflow-hidden samhita-card-shadow samhita-card-hover flex flex-col h-full"
                >
                  {/* Image container with internet plant/herb picture */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#F8F9FA] border-b border-[#DADCE0]">
                    <img
                      src={entry.image}
                      alt={entry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-[#2D5A3F] border border-[#DADCE0] shadow-sm">
                      {entry.sanskritName}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-xs font-medium text-[#477A5B] italic mb-1">
                        {entry.botanicalName}
                      </div>
                      <h3 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#477A5B] transition-colors">
                        {entry.name}
                      </h3>
                      <p className="text-xs text-[#5F6368] leading-relaxed mb-4 line-clamp-3">
                        {entry.description}
                      </p>
                    </div>

                    <div>
                      {/* Active Compounds & TK Highlights */}
                      <div className="bg-[#F8F9FA] p-3 rounded-xl border border-[#DADCE0] mb-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs text-[#3C4043]">
                          <span className="font-semibold text-[#202124]">Compounds:</span>
                          <span className="truncate">{entry.research.activeCompounds.slice(0, 2).join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#3C4043]">
                          <span className="font-semibold text-[#202124]">TKDL Status:</span>
                          <span className="truncate text-[#2D5A3F] font-medium">Cataloged Prior Art</span>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#DADCE0]">
                        <Link
                          href={`/samhita/${entry.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#477A5B] hover:text-[#2D5A3F] transition-colors"
                        >
                          Explore Full Entry
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={entry.externalReadMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-[#5F6368] hover:text-[#202124] transition-colors"
                        >
                          NCBI Source
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* VISUAL KNOWLEDGE WORKFLOW */}
      <section className="py-16 bg-[#F8F9FA] border-y border-[#DADCE0]">
        <div className="samhita-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#202124] mb-3">
              How Samhita Connects Ayurveda & IP
            </h2>
            <p className="text-sm text-[#5F6368]">
              A transparent flow bridging classical heritage texts with modern patent prior art evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DADCE0] shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0E9] text-[#2D5A3F] font-bold flex items-center justify-center mb-4 text-sm">
                01
              </div>
              <h3 className="font-bold text-[#202124] text-base mb-2">Classical Digitization</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Ayurvedic texts (Charaka, Sushruta, Nighantus) are cataloged into structured plant & formulation records.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DADCE0] shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0E9] text-[#2D5A3F] font-bold flex items-center justify-center mb-4 text-sm">
                02
              </div>
              <h3 className="font-bold text-[#202124] text-base mb-2">Phytochemistry Linkage</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Active bioactives (e.g. Curcumin, Withanolides) are mapped to therapeutic mechanisms & peer-reviewed research.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DADCE0] shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0E9] text-[#2D5A3F] font-bold flex items-center justify-center mb-4 text-sm">
                03
              </div>
              <h3 className="font-bold text-[#202124] text-base mb-2">Prior Art & TKDL Indexing</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Cross-referenced against international patent databases (WIPO/USPTO/EPO) and TKDL protective disclosures.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DADCE0] shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0E9] text-[#2D5A3F] font-bold flex items-center justify-center mb-4 text-sm">
                04
              </div>
              <h3 className="font-bold text-[#202124] text-base mb-2">AI-Driven IP Intelligence</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                IP-Sakti AI provides instant prior art risk assessment & Section 3(p) patentability guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASK IP-SAKTI INTEGRATION CTA */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="samhita-container">
          <div className="bg-gradient-to-r from-[#F3F7F3] via-[#E8F0E9] to-[#F3F7F3] p-8 md:p-12 rounded-3xl border border-[#DADCE0] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] text-[#2D5A3F] text-xs font-semibold mb-4 border border-[#DADCE0]">
                <Sparkles className="w-3.5 h-3.5 text-[#477A5B]" />
                Interactive AI Knowledge Assistant
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#202124] mb-3">
                Have questions about Ayurvedic IP or Section 3(p) prior art?
              </h2>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Ask our AI assistant for deep contextual analysis on plant formulations, legal precedents, and biodiversity compliance.
              </p>
            </div>

            <Link
              href="/chat?context=Samhita%20Repository#chat-input"
              className="px-6 py-3.5 rounded-xl bg-[#477A5B] hover:bg-[#396248] text-white font-semibold text-sm shadow-md transition-all shrink-0 inline-flex items-center gap-2"
            >
              Ask IP-Sakti AI
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER FOOTNOTE */}
      <footer className="py-8 bg-[#FFFFFF] border-t border-[#DADCE0]">
        <div className="samhita-container text-center text-xs text-[#5F6368]">
          <p className="max-w-3xl mx-auto">
            <strong>Prototype Disclaimer:</strong> Samhita Knowledge Repository is an educational demonstration platform. Patent status summaries and classical references are cataloged for prior art demonstration purposes and do not constitute formal legal or medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
