import { ChartsComponent } from "@/components/ChartsComponent";
import { LivePollSection } from "@/components/LivePollSection";
import { PrintReportButton } from "@/components/PrintReportButton";
import { authorInfo } from "@/data/researchData";
import { Database, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GrafiekenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* ========================================================================= */}
      {/* Printable Report Header (Visible only when printed or exported to PDF) */}
      {/* ========================================================================= */}
      <div className="print-only mb-8 border-b-2 border-[#1F1D1A] pb-6 text-[#1F1D1A]">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#7A7366]">
              Officiële Schoolbeoordeling &bull; INFT Opdracht 4
            </span>
            <h1 className="text-2xl font-black tracking-tight text-[#1F1D1A] mt-1 font-heading">
              INFT Onderzoeksrapport: Sociale Media Gebruik, Motieven & Balans
            </h1>
            <p className="text-xs text-[#5A544A] mt-1">
              Grafische en cijfermatige analyse op basis van Yonathan Hidrian&apos;s InDesign onderzoeksposter.
            </p>
          </div>
          <div className="text-right text-xs">
            <span className="inline-block px-2.5 py-1 rounded bg-[#F4EFE6] font-bold font-mono border border-[#E3DDD1]">
              Klas 4m3
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4 pt-3 border-t border-[#E3DDD1] text-[11px]">
          <div>
            <span className="text-[#7A7366] block">Auteur / Leerling:</span>
            <strong className="text-[#1F1D1A]">{authorInfo.name}</strong>
          </div>
          <div>
            <span className="text-[#7A7366] block">Vak & Opdracht:</span>
            <strong className="text-[#1F1D1A]">{authorInfo.course} ({authorInfo.class})</strong>
          </div>
          <div>
            <span className="text-[#7A7366] block">Academisch Jaar:</span>
            <strong className="text-[#1F1D1A]">{authorInfo.academicYear}</strong>
          </div>
          <div>
            <span className="text-[#7A7366] block">Status:</span>
            <strong className="text-[#5C6E58] font-semibold">Gevalideerd & Compleet</strong>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Editorial Header & Action Bar */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E3DDD1] pb-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] border border-[#E3DDD1] px-3.5 py-1 text-xs font-semibold text-[#5C6E58] font-mono tracking-wide">
            <Database className="h-3.5 w-3.5" />
            Dossier Deel 2 &bull; Alle 3 Grafieken Geïntegreerd
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F1D1A]">
            Data, Cijfers & 3 Grafieken
          </h1>
          <p className="text-sm sm:text-base text-[#5A544A] leading-relaxed">
            Deze pagina bevat alle drie de verplichte grafieken van het onderzoek. Centraal staat de leeftijdsspecifieke verdeling van sociale media gebruikers, aangevuld met analyse van motieven en ervaren impact.
          </p>
        </div>

        {/* Print / Export Action Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
          <PrintReportButton />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Research Highlights Ribbon */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 no-print">
        <div className="rounded-2xl border border-[#E3DDD1] bg-white/90 p-4 shadow-xs">
          <span className="text-[11px] font-bold text-[#7A7366] font-mono uppercase tracking-wider block">
            Grafiek 1
          </span>
          <p className="text-lg sm:text-xl font-bold font-heading text-[#1F1D1A] mt-0.5">
            7 Leeftijdsgroepen
          </p>
          <span className="text-xs text-[#5C6E58] font-medium">
            12 t/m 75+ jaar (100%)
          </span>
        </div>

        <div className="rounded-2xl border border-[#E3DDD1] bg-white/90 p-4 shadow-xs">
          <span className="text-[11px] font-bold text-[#7A7366] font-mono uppercase tracking-wider block">
            Grafiek 2
          </span>
          <p className="text-lg sm:text-xl font-bold font-heading text-[#1F1D1A] mt-0.5">
            84% Sociaal Contact
          </p>
          <span className="text-xs text-[#8C6D4F] font-medium">
            #1 Motief voor gebruik
          </span>
        </div>

        <div className="rounded-2xl border border-[#E3DDD1] bg-white/90 p-4 shadow-xs">
          <span className="text-[11px] font-bold text-[#7A7366] font-mono uppercase tracking-wider block">
            Grafiek 3
          </span>
          <p className="text-lg sm:text-xl font-bold font-heading text-[#1F1D1A] mt-0.5">
            86% Slaap & Focus
          </p>
          <span className="text-xs text-[#C26747] font-medium">
            Grootste ervaren nadeel
          </span>
        </div>

        <div className="rounded-2xl border border-[#E3DDD1] bg-white/90 p-4 shadow-xs">
          <span className="text-[11px] font-bold text-[#7A7366] font-mono uppercase tracking-wider block">
            Rapport Export
          </span>
          <p className="text-lg sm:text-xl font-bold font-heading text-[#1F1D1A] mt-0.5">
            A4 Print-Ready
          </p>
          <span className="text-xs text-[#5C6E58] font-medium">
            Direct downloadbaar als PDF
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Chart System Component (Responsive Recharts + Cohort Drill-Down) */}
      {/* ========================================================================= */}
      <ChartsComponent />

      {/* ========================================================================= */}
      {/* Live Peiling Module (Powered by Convex Real-Time Synchronization) */}
      {/* ========================================================================= */}
      <div className="no-print">
        <LivePollSection />
      </div>

      {/* ========================================================================= */}
      {/* Methodologische Verantwoording & Link naar Conclusie */}
      {/* ========================================================================= */}
      <div className="rounded-3xl border border-[#E3DDD1] bg-[#F4EFE6]/70 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 print-card print-avoid-break">
        <div className="space-y-1 max-w-xl">
          <h4 className="font-heading font-bold text-sm text-[#1F1D1A] flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#5C6E58]" />
            Methodologische Notitie & Bronverantwoording
          </h4>
          <p className="text-xs text-[#5A544A] leading-relaxed">
            De percentages uit Grafiek 1 (18% bij 12–25 tot 6% bij 75+) zijn exact overgenomen van de fysieke InDesign poster. De data toont aan dat sociale media generatie-overstijgend is, maar dat het type platform en de risicofactoren per levensfase sterk verschillen.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 no-print">
          <PrintReportButton variant="secondary" />
          <Link
            href="/conclusie"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#24211D] hover:bg-[#38332C] px-5 py-2.5 text-xs font-bold text-[#FAF8F5] shadow-xs transition-all"
          >
            <span>Naar Deel 3: Conclusie & Balans</span>
            <ArrowRight className="h-4 w-4 opacity-80" />
          </Link>
        </div>
      </div>
    </div>
  );
}
