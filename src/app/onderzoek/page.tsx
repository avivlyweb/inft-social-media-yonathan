import Image from "next/image";
import Link from "next/link";
import { prosAndCons, motivationData } from "@/data/researchData";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Users,
  Compass,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default function OnderzoekPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
          <Compass className="h-3.5 w-3.5" />
          Pagina 1 &bull; Diepte-analyse & Context
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Waarom gebruiken mensen Sociale Media?
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Een analyse van de fundamentele behoeften achter onze digitale interacties. Wat brengt miljoenen mensen dagelijks naar apps zoals Instagram, TikTok, WhatsApp en LinkedIn?
        </p>
      </div>

      {/* 3 Primaire Redenen (InDesign Poster Kern) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white">
            De Drie Kernmotieven
          </h2>
          <span className="text-xs text-zinc-400">Uitwerking uit onderzoeksposter</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              Contacten met vrienden en familie
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Geografische afstanden vervagen. Of het nu gaat om familie in het buitenland of de dagelijkse groepsapp met klasgenoten: sociale media is het moderne dorpsplein geworden.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              Nieuws en actuele informatie
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Jongeren en volwassenen ontdekken actuele gebeurtenissen niet langer via traditionele kranten, maar via korte video-analyses, threads en live breaking-updates.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/60 dark:text-fuchsia-400 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              Vermaak en ontspanning
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Korte sketches, memes, gaming clips en livestreams bieden direct dopaminerijk vermaak na een lange schooldag of werkdag om even de gedachten te verzetten.
            </p>
          </div>
        </div>
      </section>

      {/* Redactionele Split: De Voordelen vs De Nadelen */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Kritische Afweging
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-zinc-950 dark:text-white">
            De Voordelen versus De Nadelen
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500">
            Zoals geformuleerd in Yonathan&apos;s InDesign poster: ieder digitaal voordeel kent een mogelijke keerzijde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voordelen Column */}
          <div className="rounded-3xl border border-emerald-200/80 bg-emerald-50/20 dark:border-emerald-900/60 dark:bg-emerald-950/20 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white">
                  De Voordelen
                </h3>
                <p className="text-xs text-zinc-500">Positieve invloeden op individu & maatschappij</p>
              </div>
            </div>

            <div className="space-y-4">
              {prosAndCons.voordelen.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-white/90 dark:bg-zinc-900/80 p-4 space-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-zinc-900 dark:text-white">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nadelen Column */}
          <div className="rounded-3xl border border-rose-200/80 bg-rose-50/20 dark:border-rose-900/60 dark:bg-rose-950/20 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white shadow-md shadow-rose-500/20">
                <XCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white">
                  De Nadelen
                </h3>
                <p className="text-xs text-zinc-500">Aandachtspunten en gezondheidsrisico&apos;s</p>
              </div>
            </div>

            <div className="space-y-4">
              {prosAndCons.nadelen.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-rose-100 dark:border-rose-900/40 bg-white/90 dark:bg-zinc-900/80 p-4 space-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-zinc-900 dark:text-white">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next page link */}
      <div className="flex justify-end pt-8">
        <Link
          href="/grafieken"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:opacity-95 transition-all"
        >
          Bekijk de Grafieken & Data <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
