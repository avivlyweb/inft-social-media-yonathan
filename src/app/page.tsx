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
  Flame,
  BrainCircuit,
  Smartphone,
  Eye,
  TrendingUp,
  Heart,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { authorInfo, ageDistributionData } from "@/data/researchData";
import { FeedbackSection } from "@/components/FeedbackSection";
import {
  HeartIcon,
  PlayPauseIcon,
  LockUnlockIcon,
  SuccessIcon,
  NotificationIcon,
} from "@/components/AnimatedStateIcons";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 21st.dev Style Mesh Gradient Background */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden -z-10">
        <div className="absolute -top-[160px] left-1/4 w-[540px] h-[480px] bg-gradient-to-br from-cyan-400/25 via-indigo-500/25 to-fuchsia-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[120px] right-1/4 w-[420px] h-[370px] bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-[90px]" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
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
            Een diepgaand digitaal onderzoek naar hoe mensen tussen de 12 en 75+ jaar sociale netwerken benutten,
            waarom we online zijn, en hoe we een gezonde balans bewaren tussen schermtijd, slaap en het echte leven.
          </p>

          {/* Meta Tag pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
              <Users className="h-3.5 w-3.5 text-cyan-500" /> Onderzoeker: {authorInfo.name} ({authorInfo.class})
            </span>
            <span className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" /> Vak: {authorInfo.course}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 w-full sm:w-auto">
            <Link
              href="/grafieken"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-zinc-800 shadow-lg hover:shadow-indigo-500/10 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-all"
            >
              <BarChart3 className="h-4 w-4 text-cyan-400" />
              Bekijk alle 3 Grafieken
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>

            <Link
              href="/conclusie#quiz"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:opacity-95 transition-all"
            >
              <Flame className="h-4 w-4" />
              Doe de Balanstest
            </Link>
          </div>
        </div>

        {/* 21st.dev Style In-Depth Value Bento Grid */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Onderzoeksarchitectuur
              </span>
              <h2 className="font-heading text-2xl font-bold text-zinc-950 dark:text-white">
                De Drie Pijlers uit Yonathan&apos;s Onderzoek
              </h2>
            </div>
            <p className="text-xs text-zinc-500">
              Verdiepte inzichten & interactieve meerwaarde
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Data & Demografie */}
            <div className="rounded-3xl border border-zinc-200/80 bg-white/95 p-7 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/80 shadow-sm hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                    <PlayPauseIcon size={26} color="currentColor" duration={2600} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    7 Categorieën
                  </span>
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
                  De grafiek toont hoe mensen tussen de 12 en 75+ jaar sociale netwerken benutten. Waar jongeren (12–35 jaar) de grootste groep vormen (36% gecombineerd), blijft ook de actieve participatie bij 45-plussers gestaag stijgen.
                </p>

                {/* Concrete Research Value Box */}
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-4 border border-zinc-100 dark:border-zinc-800 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Eye className="h-3 w-3 text-cyan-500" /> Kernbevinding uit de data:
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    Jongeren (12-25) zijn piekgebruikers op visuele platformen (TikTok/Snapchat), terwijl 65+ (17% samen) hoofdzakelijk WhatsApp en Facebook inzet voor gerichte familie-updates.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <Link
                  href="/grafieken"
                  className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 hover:underline"
                >
                  Bekijk interactieve donut grafiek
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Drijfveren & Psychologie */}
            <div className="rounded-3xl border border-zinc-200/80 bg-white/95 p-7 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/80 shadow-sm hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    <HeartIcon size={26} color="currentColor" duration={2200} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    3 Hoofdpijlers
                  </span>
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
                  De 3 hoofdredenen die uit het onderzoek naar voren komen: direct contact met vrienden en familie (84%), actueel nieuws en razendsnelle informatie (62%), plus ontspanning en vermaak (76%).
                </p>

                {/* Concrete Research Value Box */}
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-4 border border-zinc-100 dark:border-zinc-800 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <BrainCircuit className="h-3 w-3 text-indigo-500" /> De Psychologische Trigger:
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    Algoritmen belonen nieuwsgierigheid met korte dopamine-hits. Hierdoor verschuift &apos;even 5 minuten ontspanning&apos; ongemerkt naar een uur scrollen zonder bewuste intentie.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <Link
                  href="/onderzoek"
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 hover:underline"
                >
                  Lees het volledige achtergrondartikel
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Advies & Balans */}
            <div className="rounded-3xl border border-zinc-200/80 bg-white/95 p-7 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/80 shadow-sm hover:border-fuchsia-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/60 dark:text-fuchsia-400 border border-fuchsia-200 dark:border-fuchsia-800">
                    <LockUnlockIcon size={26} color="currentColor" duration={2400} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950/80 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-800">
                    Gezonde Balans
                  </span>
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

                {/* Concrete Research Value Box */}
                <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-4 border border-zinc-100 dark:border-zinc-800 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Lightbulb className="h-3 w-3 text-fuchsia-500" /> Gouden 20-20-Bed Regel:
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    Schakel blauwlichtfilters in na 20:00 uur en leg apparaten 45 minuten voor het slapen buiten handbereik voor 30% snellere inslaaptijd.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <Link
                  href="/conclusie"
                  className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400 flex items-center gap-1.5 hover:underline"
                >
                  Lees Yonathan&apos;s Conclusie & Tips
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Realtime Feedback & Teacher Review Section */}
        <FeedbackSection />
      </section>
    </div>
  );
}
