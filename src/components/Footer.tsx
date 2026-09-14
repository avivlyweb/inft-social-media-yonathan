"use client";

import { useState } from "react";
import Link from "next/link";
import { authorInfo } from "@/data/researchData";
import { JapandiLogo } from "@/components/JapandiLogo";
import {
  ArrowUp,
  Mail,
  Check,
  Copy,
  Sparkles,
  BookOpen,
  BarChart3,
  CheckCircle2,
  Home,
  Flame,
  MessageSquare,
  Printer,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(authorInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <footer className="w-full border-t border-[#E3DDD1] bg-[#FAF8F5] text-[#1F1D1A] pt-14 pb-10 print:hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Callout Banner */}
        <div className="mb-12 rounded-2xl border border-[#E3DDD1] bg-gradient-to-r from-[#F4EFE6]/80 via-white to-[#F4EFE6]/60 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C6E58] tracking-wide uppercase font-mono">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Zelfreflectie & Inzicht</span>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1F1D1A]">
              Benieuwd naar jouw persoonlijke schermtijdbalans?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Beantwoord 5 korte vragen en ontdek direct hoe jouw mediagebruik zich verhoudt tot leeftijdsgenoten en wetenschappelijke normen.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/conclusie#quiz"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C26747] hover:bg-[#A85538] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <Flame className="h-4 w-4 text-[#FDEEEA]" />
              <span>Doe de Balanstest</span>
            </Link>
            <Link
              href="/grafieken"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#38332C] text-[#FAF8F5] text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <BarChart3 className="h-4 w-4 text-[#D8CFBC]" />
              <span>Bekijk 3 Grafieken</span>
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#E3DDD1]">
          {/* Col 1: Identity & Assignment Scope (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <JapandiLogo className="h-8 w-8 flex-shrink-0" size={32} />
              <div>
                <span className="font-heading font-extrabold text-base sm:text-lg text-[#1F1D1A] tracking-tight">
                  SocialMedia<span className="text-[#5C6E58]">.INFT</span>
                </span>
                <span className="ml-2 inline-flex items-center rounded-full bg-[#F4EFE6] px-2 py-0.5 text-[10px] font-mono font-bold text-[#5A544A] border border-[#E3DDD1]">
                  4m3
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Onafhankelijk onderzoek naar schermtijd, leeftijdsverdeling en de psychosociale balans tussen voor- en nadelen van moderne sociale netwerken.
            </p>

            <div className="pt-1 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F4EFE6] border border-[#E3DDD1] text-[11px] font-medium text-[#2D2A26]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#5C6E58]" />
                <span>{authorInfo.assignment}</span>
              </div>

              {/* Direct email with copy feedback */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${authorInfo.email}`}
                  className="inline-flex items-center gap-2 text-xs text-[#5A544A] hover:text-[#1F1D1A] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>{authorInfo.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Kopieer e-mailadres"
                  className="inline-flex items-center justify-center h-6 w-6 rounded-md hover:bg-[#F0EBE1] text-[#7A7366] hover:text-[#1F1D1A] transition-colors"
                  aria-label="Kopieer e-mailadres"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-[#5C6E58]" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
                {copied && (
                  <span className="text-[10px] font-medium text-[#5C6E58]">Gekopieerd!</span>
                )}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7366]">
              Onderzoek & Pagina&apos;s
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5A544A]">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] hover:translate-x-1 transition-all"
                >
                  <Home className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>Homepage &bull; Overzicht & Kern</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/onderzoek"
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] hover:translate-x-1 transition-all"
                >
                  <BookOpen className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>Onderzoek &bull; Motieven & Effecten</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grafieken"
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] hover:translate-x-1 transition-all"
                >
                  <BarChart3 className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>3 Grafieken &bull; Leeftijd & Data</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conclusie"
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] hover:translate-x-1 transition-all"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>Conclusie &bull; Balans & Richtlijnen</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7366]">
              Interactief
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5A544A]">
              <li>
                <Link
                  href="/conclusie#quiz"
                  className="inline-flex items-center gap-2 text-[#C26747] font-medium hover:underline transition-colors"
                >
                  <Flame className="h-3.5 w-3.5" />
                  <span>Balanstest (Quiz)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/grafieken#poll"
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] hover:translate-x-1 transition-all"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>Live Community Poll</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conclusie#feedback"
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] hover:translate-x-1 transition-all"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>Peer Feedback</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 hover:text-[#1F1D1A] transition-colors cursor-pointer text-left"
                >
                  <Printer className="h-3.5 w-3.5 text-[#7A7366]" />
                  <span>Print Onderzoeksrapport</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Author Profile Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[#E3DDD1] bg-white/80 p-5 shadow-xs space-y-3.5 backdrop-blur-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5C6E58]">
                  Onderzoeker
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#5A544A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5C6E58] animate-pulse" />
                  Gepubliceerd
                </span>
              </div>

              <div>
                <p className="font-heading text-sm font-bold text-[#1F1D1A]">
                  {authorInfo.name}
                </p>
                <p className="text-xs text-[#7A7366]">
                  {authorInfo.class} &bull; {authorInfo.course}
                </p>
                <p className="text-[11px] font-mono text-[#A39B8B] pt-0.5">
                  Schooljaar {authorInfo.academicYear}
                </p>
              </div>

              <blockquote className="text-[11px] text-[#5A544A] italic border-l-2 border-[#C26747] pl-3 leading-relaxed">
                &ldquo;{authorInfo.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7366]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-medium text-[#2D2A26]">
              Gemaakt door {authorInfo.name} &bull; {authorInfo.class}
            </p>
            <span className="hidden sm:inline text-[#D5CEBF]">&bull;</span>
            <p className="text-[11px] text-[#7A7366]">
              Schoolproject {authorInfo.course} &bull; {authorInfo.academicYear}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#A39B8B] hidden md:inline">
              Digitale uitwerking van de InDesign onderzoeksposter
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E3DDD1] bg-white hover:bg-[#F4EFE6] text-xs font-medium text-[#2D2A26] transition-all shadow-2xs hover:-translate-y-0.5"
              aria-label="Terug naar de top van de pagina"
            >
              <span>Naar boven</span>
              <ArrowUp className="h-3.5 w-3.5 text-[#5C6E58]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
