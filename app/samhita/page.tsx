'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Leaf,
  TreePine,
  Scroll,
  BookOpen,
  ShieldAlert,
  Landmark,
  FlaskConical,
  FileCheck,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  Filter,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Info,
} from 'lucide-react';
import { SAMHITA_CATEGORIES, SAMHITA_ENTRIES, SamhitaEntry } from '@/lib/samhita-data';

const categoryIconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-5 h-5 text-[#477A5B]" />,
  TreePine: <TreePine className="w-5 h-5 text-[#477A5B]" />,
  Scroll: <Scroll className="w-5 h-5 text-[#477A5B]" />,
  BookOpen: <BookOpen className="w-5 h-5 text-[#477A5B]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#477A5B]" />,
  Landmark: <Landmark className="w-5 h-5 text-[#477A5B]" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-[#477A5B]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#477A5B]" />,
};

// 6 Featured Herbs
const FEATURED_SLUGS = ['ashwagandha', 'tulsi', 'neem', 'turmeric', 'amla', 'brahmi'];

export default function SamhitaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  // Extract all unique plant parts across entries
  const allParts = useMemo(() => {
    const partsSet = new Set<string>();
    SAMHITA_ENTRIES.forEach((e) => e.partsUsed.forEach((p) => partsSet.add(p)));
    return Array.from(partsSet).sort();
  }, []);

  // Multi-field search and filtering logic
  const filteredEntries = useMemo(() => {
    return SAMHITA_ENTRIES.filter((entry) => {
      const query = searchQuery.trim().toLowerCase();

      // Multi-field text match
      const matchesSearch =
        query === '' ||
        entry.commonName.toLowerCase().includes(query) ||
        entry.scientificName.toLowerCase().includes(query) ||
        entry.synonyms.some((syn) => syn.toLowerCase().includes(query)) ||
        Object.values(entry.regionalNames).some((reg) => reg.toLowerCase().includes(query)) ||
        entry.category.toLowerCase().includes(query) ||
        entry.traditionalContext.toLowerCase().includes(query) ||
        entry.ipInformation.patentStatus.toLowerCase().includes(query) ||
        entry.ipInformation.patentabilityNotes.toLowerCase().includes(query) ||
        entry.ipInformation.priorArtHighlights.some((pa) => pa.toLowerCase().includes(query));

      // Category filter match
      const matchesCategory = !selectedCategory || entry.category === selectedCategory;

      // Plant part filter match
      const matchesPart = !selectedPart || entry.partsUsed.includes(selectedPart);

      return matchesSearch && matchesCategory && matchesPart;
    });
  }, [searchQuery, selectedCategory, selectedPart]);

  const featuredEntries = useMemo(() => {
    return SAMHITA_ENTRIES.filter((e) => FEATURED_SLUGS.includes(e.slug));
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#202124] pt-24 pb-16 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7F3] via-[#F8F9FA] to-[#FFFFFF] py-16 md:py-24 border-b border-[#DADCE0]">
        <div className="samhita-container relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0E9] text-[#2D5A3F] text-xs font-semibold tracking-wider uppercase mb-6 border border-[#477A5B]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#477A5B]" />
            Ayurveda Knowledge meets Intellectual Property
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
            className="text-sm md:text-base text-[#5F6368] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Explore medicinal plants, traditional knowledge, classical references, scientific research and intellectual-property connections through one intelligent knowledge layer.
          </motion.p>

          {/* MAJOR SEARCH BAR */}
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
                placeholder="Search herbs, plants, formulations, texts, patents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-[#202124] placeholder-[#80868B] text-base focus:outline-none focus:ring-0 py-2.5 px-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#5F6368] hover:text-[#202124] px-3 py-1 rounded-md bg-[#F1F3F4] mr-2 shrink-0"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick search suggestions */}
            <div className="text-xs text-[#5F6368] text-left mt-3 ml-3 flex flex-wrap items-center gap-2">
              <span className="font-medium text-[#3C4043]">Suggested searches:</span>
              {['Ashwagandha', 'Withania', 'Phyllanthus emblica', 'patent', 'TKDL', 'Root'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-1 rounded-full bg-[#F8F9FA] hover:bg-[#E8F0E9] text-[#2D5A3F] border border-[#DADCE0] text-[11px] font-medium transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section className="py-12 border-b border-[#DADCE0] bg-[#FFFFFF]">
        <div className="samhita-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#202124] tracking-tight mb-1">
                Explore Samhita Knowledge Domains
              </h2>
              <p className="text-sm text-[#5F6368]">
                Browse structured collections across Ayurvedic & IP domains
              </p>
            </div>
            {(selectedCategory || selectedPart || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedPart(null);
                  setSearchQuery('');
                }}
                className="mt-3 md:mt-0 text-xs font-semibold text-[#477A5B] hover:underline inline-flex items-center gap-1"
              >
                Reset All Filters (Show All 40 Entries)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAMHITA_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 samhita-card-hover ${
                    isSelected
                      ? 'bg-[#F3F7F3] border-[#477A5B] ring-2 ring-[#477A5B]/20'
                      : 'bg-[#F8F9FA] border-[#DADCE0] hover:border-[#477A5B]/50 hover:bg-[#FFFFFF]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DADCE0] shadow-sm">
                      {categoryIconMap[cat.iconName] || <Leaf className="w-5 h-5 text-[#477A5B]" />}
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E8F0E9] text-[#2D5A3F]">
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

      {/* FEATURED KNOWLEDGE REPOSITORY */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#DADCE0]">
        <div className="samhita-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#477A5B] uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" />
                Featured Ayurveda Entries
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#202124] tracking-tight">
                Benchmark Herbal Profiles & Prior-Art Records
              </h2>
            </div>
            <span className="text-xs text-[#5F6368] mt-2 md:mt-0">
              Showing 6 benchmark entries
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEntries.map((entry) => (
              <div
                key={entry.slug}
                className="group bg-[#FFFFFF] rounded-2xl border border-[#DADCE0] overflow-hidden samhita-card-shadow samhita-card-hover flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#F8F9FA] border-b border-[#DADCE0]">
                  <img
                    src={entry.image}
                    alt={`Botanical photograph of ${entry.scientificName} (${entry.commonName})`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-[#2D5A3F] border border-[#DADCE0] shadow-sm">
                    {entry.regionalNames.sanskrit || entry.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-xs font-medium text-[#477A5B] italic mb-1">
                      {entry.scientificName}
                    </div>
                    <h3 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#477A5B] transition-colors">
                      {entry.commonName}
                    </h3>
                    <p className="text-xs text-[#5F6368] leading-relaxed mb-4 line-clamp-3">
                      {entry.overview}
                    </p>
                  </div>

                  <div>
                    <div className="bg-[#F8F9FA] p-3 rounded-xl border border-[#DADCE0] mb-4 space-y-1.5 text-xs text-[#3C4043]">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#202124]">Family:</span>
                        <span>{entry.family}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#202124]">Parts Used:</span>
                        <span className="truncate max-w-[160px] text-right">{entry.partsUsed.join(', ')}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#DADCE0]">
                      <Link
                        href={`/samhita/${entry.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#477A5B] hover:text-[#2D5A3F] transition-colors"
                      >
                        Explore Entry →
                      </Link>
                      <span className="text-[11px] text-[#5F6368]">
                        POWO / e-Charak Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL REPOSITORY & FILTERABLE DATASET (40 HERBS) */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="samhita-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#202124]">
                Complete Repository Index ({filteredEntries.length} Records)
              </h2>
              <p className="text-xs text-[#5F6368] mt-1">
                Filter by category or plant part to refine traditional and IP records
              </p>
            </div>

            {/* Plant Part Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#3C4043] flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Part:
              </span>
              <button
                onClick={() => setSelectedPart(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  !selectedPart
                    ? 'bg-[#477A5B] text-white border-[#477A5B]'
                    : 'bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:border-[#477A5B]'
                }`}
              >
                All Parts
              </button>
              {allParts.slice(0, 5).map((part) => (
                <button
                  key={part}
                  onClick={() => setSelectedPart(selectedPart === part ? null : part)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    selectedPart === part
                      ? 'bg-[#477A5B] text-white border-[#477A5B]'
                      : 'bg-[#FFFFFF] text-[#3C4043] border-[#DADCE0] hover:border-[#477A5B]'
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          {filteredEntries.length === 0 ? (
            <div className="text-center py-16 bg-[#FFFFFF] rounded-2xl border border-[#DADCE0]">
              <AlertCircle className="w-10 h-10 text-[#5F6368] mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-[#202124]">No entries match your search</h3>
              <p className="text-sm text-[#5F6368] mt-1 max-w-md mx-auto">
                Try searching for another botanical or common name, or clear your category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSelectedPart(null);
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#477A5B] rounded-xl hover:bg-[#396248] transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredEntries.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/samhita/${entry.slug}`}
                  className="group bg-[#FFFFFF] rounded-2xl border border-[#DADCE0] overflow-hidden samhita-card-shadow samhita-card-hover flex flex-col justify-between p-5"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-36 w-full rounded-xl overflow-hidden bg-[#F8F9FA] mb-4 border border-[#DADCE0]">
                      <img
                        src={entry.image}
                        alt={`Botanical illustration of ${entry.scientificName}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-[#FFFFFF]/90 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#2D5A3F] border border-[#DADCE0]">
                        {entry.category}
                      </div>
                    </div>

                    <div className="text-[11px] font-medium text-[#477A5B] italic truncate mb-0.5">
                      {entry.scientificName}
                    </div>
                    <h3 className="text-base font-bold text-[#202124] group-hover:text-[#477A5B] transition-colors truncate mb-1.5">
                      {entry.commonName}
                    </h3>
                    <p className="text-xs text-[#5F6368] line-clamp-2 mb-3 leading-relaxed">
                      {entry.traditionalContext}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DADCE0] flex items-center justify-between text-[11px]">
                    <span className="text-[#3C4043] font-medium">
                      {entry.partsUsed.slice(0, 2).join(', ')}
                    </span>
                    <span className="font-bold text-[#477A5B] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
                Query our AI assistant regarding plant formulations, traditional knowledge references, and international patentability considerations.
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

      {/* FOOTER DISCLAIMER */}
      <footer className="py-8 bg-[#FFFFFF] border-t border-[#DADCE0]">
        <div className="samhita-container text-center text-xs text-[#5F6368]">
          <p className="max-w-3xl mx-auto">
            <strong>Educational & IP Knowledge Disclaimer:</strong> Information in Samhita is compiled from public botanical and classical reference sources (e-Charak/NMPB, POWO Kew, TKDL). Content is provided for educational and prior-art reference purposes and does not constitute medical diagnosis or formal legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
