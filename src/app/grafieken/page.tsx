import { ChartsComponent } from "@/components/ChartsComponent";
import { BarChart3, Database, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GrafiekenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <Database className="h-3.5 w-3.5" />
          Pagina 2 &bull; Productie-eis: Alle 3 Grafieken
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Data, Cijfers & 3 Grafieken
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Deze pagina bevat alle drie de grafieken van het onderzoek. Centraal staat de leeftijdsspecifieke verdeling van sociale media gebruikers, aangevuld met analyse van motieven en ervaren impact.
        </p>
      </div>

      {/* Chart System Component */}
      <ChartsComponent />

      {/* Onderzoeksverantwoording Banner */}
      <div className="rounded-3xl border border-zinc-200/80 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h4 className="font-heading font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-500" />
            Methodologische Notitie
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed">
            De verdeling over de 7 leeftijdsgroepen toont een opvallende spreiding: van 18% bij jongeren (12–25) tot 6% bij senioren (75+). Dit toont aan dat sociale media generatie-overstijgend is.
          </p>
        </div>
        <Link
          href="/conclusie"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-xs font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-sm transition-all"
        >
          Naar Conclusie & Balans <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
