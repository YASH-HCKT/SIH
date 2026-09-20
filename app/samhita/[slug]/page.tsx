'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  FileText,
  Layers,
  Leaf,
  Share2,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { SAMHITA_ENTRIES } from '@/lib/samhita-data';

export default function SamhitaEntryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const entry = SAMHITA_ENTRIES.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] text-[#202124] pt-32 pb-16 font-sans">
        <div className="samhita-container text-center py-20">
          <h1 className="text-3xl font-bold text-[#202124] mb-4">Record Not Found</h1>
          <p className="text-sm text-[#5F6368] mb-8">
            The knowledge entry you are looking for does not exist in the repository.
          </p>
          <Link
            href="/samhita"
            className="px-5 py-2.5 bg-[#477A5B] text-white text-xs font-semibold rounded-xl hover:bg-[#396248] transition-colors"
          >
            Back to Samhita Repository
          </Link>
        </div>
      </div>
    );
  }

  // Related knowledge items
  const relatedItems = SAMHITA_ENTRIES.filter((e) =>
    entry.relatedKnowledgeSlugs.includes(e.slug)
  );

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#202124] pt-24 pb-16 font-sans">
      {/* BREADCRUMB HEADER */}
      <div className="bg-[#F8F9FA] border-b border-[#DADCE0] py-4">
        <div className="samhita-container flex items-center justify-between">
          <Link
            href="/samhita"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#477A5B] hover:text-[#2D5A3F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Samhita Repository
          </Link>
          <div className="flex items-center gap-2 text-xs text-[#5F6368]">
            <span>Samhita</span>
            <span>/</span>
            <span className="capitalize">{entry.category.replace('-', ' ')}</span>
            <span>/</span>
            <span className="text-[#202124] font-medium">{entry.name}</span>
          </div>
        </div>
      </div>

      {/* HERO / SUMMARY HEADER */}
      <section className="py-12 bg-[#FFFFFF] border-b border-[#DADCE0]">
        <div className="samhita-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Metadata & Titles */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F7F3] text-[#2D5A3F] text-xs font-semibold mb-4 border border-[#DADCE0]">
                <Leaf className="w-3.5 h-3.5 text-[#477A5B]" />
                {entry.sanskritName ? `${entry.sanskritName} • ` : ''}
                {entry.botanicalName}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#202124] mb-3">
                {entry.name}
              </h1>

              {entry.family && (
                <p className="text-xs text-[#5F6368] mb-4">
                  Botanical Family: <strong className="text-[#202124]">{entry.family}</strong>
                </p>
              )}

              <p className="text-base md:text-lg text-[#3C4043] leading-relaxed mb-6 max-w-3xl">
                {entry.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={entry.externalReadMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#477A5B] hover:bg-[#396248] text-white font-semibold text-xs transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  Read Research Article (NCBI)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href={`/chat?context=${encodeURIComponent(entry.name)}#chat-input`}
                  className="px-4 py-2.5 rounded-xl bg-[#F8F9FA] hover:bg-[#E8F0E9] text-[#2D5A3F] font-semibold text-xs border border-[#DADCE0] transition-colors inline-flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#477A5B]" />
                  Ask AI About {entry.name}
                </Link>
              </div>
            </div>

            {/* Right: Herb Image */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-[#DADCE0] overflow-hidden shadow-sm bg-[#F8F9FA] p-2">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-[11px] text-[#5F6368]">
                    Botanical illustration reference: {entry.botanicalName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT SECTIONS */}
      <section className="py-12 bg-[#FFFFFF]">
        <div className="samhita-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">

              {/* SECTION 1: TRADITIONAL CONTEXT & SAMHITA REFERENCES */}
              <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#DADCE0]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DADCE0] text-[#477A5B]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#202124]">Classical & Traditional Context</h2>
                    <p className="text-xs text-[#5F6368]">Historical Ayurvedic text citations & classical properties</p>
                  </div>
                </div>

                <p className="text-sm text-[#3C4043] leading-relaxed mb-6">
                  {entry.traditionalContext}
                </p>

                {/* Ayurvedic Properties Table / Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 bg-[#FFFFFF] rounded-xl border border-[#DADCE0]">
                  <div>
                    <span className="block text-[11px] text-[#5F6368]">Rasa (Taste)</span>
                    <span className="text-xs font-semibold text-[#202124]">{entry.traditionalKnowledge.rasa || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#5F6368]">Virya (Potency)</span>
                    <span className="text-xs font-semibold text-[#202124]">{entry.traditionalKnowledge.virya || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#5F6368]">Vipaka</span>
                    <span className="text-xs font-semibold text-[#202124]">{entry.traditionalKnowledge.vipaka || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#5F6368]">Dosha Action</span>
                    <span className="text-xs font-semibold text-[#2D5A3F]">{entry.traditionalKnowledge.doshaEffect || 'N/A'}</span>
                  </div>
                </div>

                {/* Classical Text References */}
                <h3 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-3">
                  Classical Samhita References
                </h3>
                <ul className="space-y-2 mb-6">
                  {entry.ayurvedicReferences.map((ref, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#3C4043]">
                      <CheckCircle className="w-4 h-4 text-[#477A5B] shrink-0 mt-0.5" />
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>

                {/* Formulations */}
                <h3 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-3">
                  Classical Formulations Containing {entry.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {entry.relatedFormulations.map((form, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#DADCE0] text-xs font-medium text-[#202124]"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* SECTION 2: MODERN RESEARCH & PHYTOCHEMISTRY */}
              <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DADCE0] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F3F7F3] border border-[#DADCE0] text-[#477A5B]">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#202124]">Phytochemistry & Modern Research</h2>
                    <p className="text-xs text-[#5F6368]">Active bioactives & validated pharmacological mechanisms</p>
                  </div>
                </div>

                <p className="text-sm text-[#3C4043] leading-relaxed mb-6">
                  {entry.research.publicationSummary}
                </p>

                {/* Active Bioactive Compounds */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-3">
                    Identified Bioactive Compounds
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {entry.research.activeCompounds.map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#E8F0E9] text-[#2D5A3F] text-xs font-semibold border border-[#477A5B]/20"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Studied Pharmacological Effects */}
                <div>
                  <h3 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-3">
                    Validated Pharmacological Activity
                  </h3>
                  <ul className="space-y-2">
                    {entry.research.studiedEffects.map((effect, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3C4043]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#477A5B] mt-1.5 shrink-0" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SECTION 3: INTELLECTUAL PROPERTY & PRIOR ART LANDSCAPE */}
              <div className="p-8 rounded-2xl bg-[#F3F7F3] border border-[#477A5B]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DADCE0] text-[#477A5B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#202124]">Intellectual Property & Prior Art Landscape</h2>
                    <p className="text-xs text-[#2D5A3F]">TKDL status, patent precedents, and Section 3(p) evaluation</p>
                  </div>
                </div>

                {/* Status Summary */}
                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#DADCE0] mb-6">
                  <span className="block text-xs font-bold text-[#202124] mb-1">Global Patent Status</span>
                  <p className="text-xs text-[#3C4043] leading-relaxed">
                    {entry.ipLandscape.patentStatus}
                  </p>
                </div>

                {/* TKDL Status */}
                <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#DADCE0] mb-6">
                  <span className="block text-xs font-bold text-[#202124] mb-1">Traditional Knowledge Digital Library (TKDL) Status</span>
                  <p className="text-xs text-[#2D5A3F] font-medium">
                    {entry.ipLandscape.tkdlStatus}
                  </p>
                </div>

                {/* Prior Art Highlights */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-3">
                    Key Prior Art & Patent References
                  </h3>
                  <ul className="space-y-2">
                    {entry.ipLandscape.priorArtHighlights.map((art, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#3C4043]">
                        <FileText className="w-4 h-4 text-[#477A5B] shrink-0 mt-0.5" />
                        <span>{art}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3(p) Note */}
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DADCE0] text-xs text-[#5F6368]">
                  <span className="font-bold text-[#202124] block mb-1">Indian Patent Law Section 3(p) Assessment</span>
                  <p className="leading-relaxed">
                    {entry.ipLandscape.patentabilityNotes}
                  </p>
                </div>
              </div>

              {/* SECTION 4: OFFICIAL SOURCES & REFERENCES */}
              <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#DADCE0]">
                <h2 className="text-lg font-bold text-[#202124] mb-4">Official Sources & References</h2>
                <div className="space-y-3">
                  {entry.sources.map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] hover:border-[#477A5B] transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <span className="block text-xs font-bold text-[#202124] group-hover:text-[#477A5B] transition-colors">
                          {src.title}
                        </span>
                        <span className="text-[11px] text-[#5F6368]">{src.publisher}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#5F6368] group-hover:text-[#477A5B]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Contextual AI Assistant & Related Knowledge */}
            <div className="lg:col-span-4 space-y-8">
              {/* AI CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#F3F7F3] to-[#FFFFFF] border border-[#DADCE0] shadow-sm sticky top-28">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#477A5B] mb-2">
                  <Sparkles className="w-4 h-4" />
                  Ask IP-Sakti AI
                </div>
                <h3 className="font-bold text-[#202124] text-base mb-2">
                  Analyze {entry.name} Prior Art
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-6">
                  Query our AI regarding patentability risks, bioactive extract claims, or TKDL citations for {entry.name}.
                </p>

                <Link
                  href={`/chat?context=${encodeURIComponent(entry.name)}#chat-input`}
                  className="w-full py-3 rounded-xl bg-[#477A5B] hover:bg-[#396248] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Start Contextual Chat
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Knowledge Cards */}
              {relatedItems.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DADCE0]">
                  <h3 className="font-bold text-[#202124] text-sm mb-4">Related Knowledge Entries</h3>
                  <div className="space-y-4">
                    {relatedItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/samhita/${item.slug}`}
                        className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F8F9FA] transition-colors border border-transparent hover:border-[#DADCE0]"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover border border-[#DADCE0]"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="block text-xs font-bold text-[#202124] group-hover:text-[#477A5B] transition-colors truncate">
                            {item.name}
                          </span>
                          <span className="block text-[11px] text-[#5F6368] italic truncate">
                            {item.botanicalName}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="py-8 bg-[#FFFFFF] border-t border-[#DADCE0]">
        <div className="samhita-container text-center text-xs text-[#5F6368]">
          <p className="max-w-3xl mx-auto">
            <strong>Educational Prototype:</strong> Samhita Knowledge Repository provides cataloged Ayurvedic and prior art records for information and research purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
