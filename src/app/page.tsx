import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldAlert,
  Zap,
  Clock,
  Laptop2,
} from "lucide-react";
import { authorInfo, ageDistributionData } from "@/data/researchData";
import { FeedbackSection } from "@/components/FeedbackSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 21st.dev Style Mesh Gradient Background (1 kleurverloop requirement) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] overflow-hidden -z-10">
        <div className="absolute -top-[150px] left-1/4 w-[500px] h-[450px] bg-gradient-to-br from-cyan-400/25 via-indigo-500/25 to-fuchsia-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[100px] right-1/4 w-[400px] h-[350px] bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-[90px]" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INFT Eindopdracht 4 &bull; InDesign Poster naar Webapplicatie</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            Maakt gebruik van{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              Sociale Media
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            Een diepgaand digitaal onderzoek naar hoe mensen tussen de 12 en 75+ jaar sociale netwerken gebruiken,
            waarom we online zijn, en hoe we een gezonde balans bewaren tussen schermtijd en het echte leven.
          </p>

          {/* Meta Tag pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-zinc-500">
            <span className="flex items-center gap-1 bg-white dark:bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <Users className="h-3.5 w-3.5 text-cyan-500" /> Onderzoeker: {authorInfo.name} ({authorInfo.class})
            </span>
            <span className="flex items-center gap-1 bg-white dark:bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <Laptop2 className="h-3.5 w-3.5 text-indigo-500" /> Vak: {authorInfo.course}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
            <Link
              href="/grafieken"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-zinc-800 shadow-lg hover:shadow-indigo-500/10 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-all"
            >
              <BarChart3 className="h-4 w-4 text-cyan-400" />
              Bekijk alle 3 Grafieken
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>

            <Link
              href="/onderzoek"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-50 transition-all shadow-sm"
            >
              <BookOpen className="h-4 w-4 text-indigo-500" />
              Lees het Onderzoek
            </Link>
          </div>
        </div>

        {/* 21st.dev Style Bento Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Wat zien we (Oorspronkelijk tekstblok 1) */}
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800 dark:bg-zinc-900/70 shadow-sm hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                <BarChart3 className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Data & Demografie
                </span>
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mt-1">
                  Wat zien we in de cijfers?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                De grafiek toont hoe mensen tussen de 12 en 75+ jaar sociale netwerken benutten. Waar jongeren (12–35 jaar) de grootste groep vormen, blijft ook de actieve participatie bij 45-plussers gestaag stijgen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              <span>{ageDistributionData.length} leeftijdscategorieën</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Waarom gebruiken we het? (Oorspronkelijk tekstblok 2) */}
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800 dark:bg-zinc-900/70 shadow-sm hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                <Zap className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Drijfveren
                </span>
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mt-1">
                  Waarom zijn we online?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                De 3 hoofdredenen die uit het onderzoek naar voren komen: direct contact met vrienden en familie, actueel nieuws en razendsnelle informatie, plus ontspanning en vermaak.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>3 primaire pijlers</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: De Balans (Oorspronkelijk tekstblok 3) */}
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-8 dark:border-zinc-800 dark:bg-zinc-900/70 shadow-sm hover:border-fuchsia-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/60 dark:text-fuchsia-400 border border-fuchsia-200 dark:border-fuchsia-800">
                <ShieldAlert className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400">
                  Advies & Conclusie
                </span>
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mt-1">
                  Gezonde Balans Vinden
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Sociale media verrijkt wanneer je het doelbewust gebruikt, maar vergt discipline om slaap, concentratie en offline vriendschappen te beschermen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-400">
              <span>Lees de conclusie</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Realtime Feedback Section */}
        <FeedbackSection />
      </section>
    </div>
  );
}
