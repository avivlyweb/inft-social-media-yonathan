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
      <div className="print-only mb-8 border-b-2 border-zinc-900 pb-6 text-zinc-900">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">
              Officiële Schoolbeoordeling &bull; INFT Opdracht 4
            </span>
            <h1 className="text-2xl font-black tracking-tight text-zinc-950 mt-1">
              INFT Onderzoeksrapport: Sociale Media Gebruik, Motieven & Balans
            </h1>
            <p className="text-xs text-zinc-600 mt-1">
              Grafische en cijfermatige analyse op basis van de InDesign onderzoeksposter.
            </p>
          </div>
          <div className="text-right text-xs">
            <span className="inline-block px-2.5 py-1 rounded bg-zinc-100 font-bold font-mono">
              Klas 4m3
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4 pt-3 border-t border-zinc-200 text-[11px]">
          <div>
            <span className="text-zinc-500 block">Auteur / Leerling:</span>
            <strong className="text-zinc-900">{authorInfo.name}</strong>
          </div>
          <div>
            <span className="text-zinc-500 block">Vak & Opdracht:</span>
            <strong className="text-zinc-900">{authorInfo.course} ({authorInfo.class})</strong>
          </div>
          <div>
            <span className="text-zinc-500 block">Academisch Jaar:</span>
            <strong className="text-zinc-900">{authorInfo.academicYear}</strong>
          </div>
          <div>
            <span className="text-zinc-500 block">Status:</span>
            <strong className="text-emerald-700 font-semibold">Gevalideerd & Compleet</strong>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Editorial Header & Action Bar */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <Database className="h-3.5 w-3.5" />
            Pagina 2 &bull; Productie-eis: Alle 3 Grafieken Geïntegreerd
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Data, Cijfers & 3 Grafieken
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
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
        <div className="rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900/60 p-4 dark:border-zinc-800 shadow-xs">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
            Grafiek 1
          </span>
          <p className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mt-0.5">
            7 Leeftijdsgroepen
          </p>
          <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
            12 t/m 75+ jaar (100%)
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900/60 p-4 dark:border-zinc-800 shadow-xs">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
            Grafiek 2
          </span>
          <p className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mt-0.5">
            84% Sociaal Contact
          </p>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            #1 Motief voor gebruik
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900/60 p-4 dark:border-zinc-800 shadow-xs">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
            Grafiek 3
          </span>
          <p className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mt-0.5">
            86% Slaap & Focus
          </p>
          <span className="text-xs text-rose-600 dark:text-rose-400 font-medium">
            Grootste ervaren nadeel
          </span>
        </div>

        <div className="rounded-2xl border border-zinc-200/80 bg-white dark:bg-zinc-900/60 p-4 dark:border-zinc-800 shadow-xs">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
            Rapport Export
          </span>
          <p className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mt-0.5">
            A4 Print-Ready
          </p>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
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
      <div className="rounded-3xl border border-zinc-200/80 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6 print-card print-avoid-break">
        <div className="space-y-1 max-w-xl">
          <h4 className="font-heading font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-500" />
            Methodologische Notitie & Bronverantwoording
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            De percentages uit Grafiek 1 (18% bij 12–25 tot 6% bij 75+) zijn exact overgenomen van de fysieke InDesign poster. De data toont aan dat sociale media generatie-overstijgend is, maar dat het type platform en de risicofactoren per levensfase sterk verschillen.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 no-print">
          <PrintReportButton variant="secondary" />
          <Link
            href="/conclusie"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-sm transition-all"
          >
            Naar Conclusie & Balans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
