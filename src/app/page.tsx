import Link from "next/link";
import { HeroMedia } from "@/components/HeroMedia";
import {
  ArrowRight,
  BarChart3,
  Sparkles,
  Users,
  Flame,
  BrainCircuit,
  Eye,
  Lightbulb,
} from "lucide-react";
import { authorInfo } from "@/data/researchData";
import { FeedbackSection } from "@/components/FeedbackSection";
import {
  HeartIcon,
  PlayPauseIcon,
  LockUnlockIcon,
} from "@/components/AnimatedStateIcons";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Japandi Organic Warm Canvas Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] overflow-hidden -z-10">
        <div className="absolute -top-[120px] left-1/3 w-[500px] h-[400px] bg-gradient-to-br from-[#EAE4D7]/70 via-[#E4DCD0]/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-[80px] right-1/4 w-[380px] h-[320px] bg-gradient-to-tr from-[#D8CFBC]/40 to-transparent rounded-full blur-[90px]" />
      </div>

      {/* Editorial Monograph Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-24 sm:pb-24">
        <div className="flex flex-col items-center text-center space-y-7 max-w-3xl mx-auto">
          {/* Editorial Monograph Label */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D9D2C3] bg-[#F4EFE6]/80 px-4 py-1.5 text-xs font-semibold text-[#2D2A26] shadow-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5C6E58] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6B6357]">Dossier 04</span>
            <span className="text-[#A39B8B]">&bull;</span>
            <span>INFT Onderzoeksposter naar Digitale Uitgave</span>
          </div>

          {/* Heading with dramatic editorial contrast */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1F1D1A] leading-[1.08]">
            Maakt gebruik van{" "}
            <span className="italic font-serif font-normal text-[#2D2A26] block sm:inline decoration-1 underline underline-offset-8 decoration-[#D5CEBF]">
              Sociale Media
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#5A544A] leading-relaxed font-normal max-w-2xl">
            Een diepgaand digitaal onderzoek naar hoe mensen tussen de 12 en 75+ jaar sociale netwerken benutten,
            waarom we online zijn, en hoe we een gezonde balans bewaren tussen schermtijd, slaap en het echte leven.
          </p>

          {/* Meta Tag pills in refined tactile stone style */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs text-[#5A544A]">
            <span className="flex items-center gap-2 bg-[#FFFFFF]/90 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#E3DDD1] shadow-xs font-medium">
              <Users className="h-3.5 w-3.5 text-[#5C6E58]" /> Onderzoeker: <strong className="text-[#1F1D1A]">{authorInfo.name}</strong> ({authorInfo.class})
            </span>
            <span className="flex items-center gap-2 bg-[#FFFFFF]/90 backdrop-blur-xs px-4 py-2 rounded-xl border border-[#E3DDD1] shadow-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-[#8C6D4F]" /> Vak: <strong className="text-[#1F1D1A]">{authorInfo.course}</strong>
            </span>
          </div>

          {/* CTA Buttons in understated luxury styling */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4 w-full sm:w-auto">
            <Link
              href="/grafieken"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-[#24211D] px-7 py-3.5 text-sm font-bold text-[#FAF8F5] hover:bg-[#38332C] shadow-md hover:shadow-xl transition-all"
            >
              <BarChart3 className="h-4 w-4 text-[#D8CFBC]" />
              Bekijk alle 3 Grafieken
              <ArrowRight className="h-4 w-4 ml-1 opacity-70" />
            </Link>

            <Link
              href="/conclusie#quiz"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl border border-[#D5CEBF] bg-[#FFFFFF] px-7 py-3.5 text-sm font-bold text-[#24211D] shadow-xs hover:bg-[#F7F4EE] hover:border-[#BDB4A1] transition-all"
            >
              <Flame className="h-4 w-4 text-[#C26747]" />
              Doe de Balanstest
            </Link>
          </div>
        </div>

        {/* Smart Editorial Hero Media Showcase */}
        <HeroMedia />

        {/* Japandi Editorial Monograph Bento Grid */}
        <div className="mt-20 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E3DDD1] pb-5">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#5C6E58]">
                Architectuur & Synthese
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1F1D1A] tracking-tight mt-1">
                De Drie Pijlers uit Yonathan&apos;s Onderzoek
              </h2>
            </div>
            <p className="text-xs text-[#7A7366] font-mono">
              [ INFT DOSSIER &bull; DATA &bull; PSYCHOLOGIE &bull; BALANS ]
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Data & Demografie */}
            <div className="rounded-3xl border border-[#E3DDD1] bg-[#FFFFFF]/90 backdrop-blur-xs p-7 sm:p-8 shadow-xs hover:border-[#5C6E58]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EFE6] text-[#2D2A26] border border-[#E3DDD1]">
                    <PlayPauseIcon size={24} color="currentColor" duration={2600} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F4EFE6] text-[#5A544A] border border-[#E3DDD1]">
                    7 Cohorten
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-[#1F1D1A]">
                      <AnimatedNumber value={36} suffix="%" />
                    </span>
                    <span className="text-xs font-mono uppercase text-[#7A7366]">12–35 Jaar Piek</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1F1D1A] mt-2">
                    Wat tonen de cijfers?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
                  De grafiek toont hoe Nederlanders van 12 tot 75+ sociale netwerken benutten. Waar jongeren de piek vormen, groeit de actieve participatie bij 45-plussers gestaag.
                </p>

                {/* Concrete Research Value Box */}
                <div className="rounded-2xl bg-[#FAF8F5] p-4 border border-[#EBE6DC] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7A7366] flex items-center gap-1.5">
                    <Eye className="h-3 w-3 text-[#5C6E58]" /> Kernbevinding:
                  </span>
                  <p className="text-xs text-[#2D2A26] leading-relaxed">
                    Jongeren (12–25) domineren op visuele feeds (TikTok, Snapchat), terwijl 65+ (17% samen) hoofdzakelijk WhatsApp en Facebook kiest voor hechte familiecontacten.
                  </p>
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-[#EBE6DC] flex items-center justify-between">
                <Link
                  href="/grafieken"
                  className="text-xs font-bold text-[#1F1D1A] flex items-center gap-2 group-hover:text-[#5C6E58] transition-colors"
                >
                  Bekijk interactieve donut grafiek
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Drijfveren & Psychologie */}
            <div className="rounded-3xl border border-[#E3DDD1] bg-[#FFFFFF]/90 backdrop-blur-xs p-7 sm:p-8 shadow-xs hover:border-[#8C6D4F]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EFE6] text-[#2D2A26] border border-[#E3DDD1]">
                    <HeartIcon size={24} color="currentColor" duration={2200} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F4EFE6] text-[#5A544A] border border-[#E3DDD1]">
                    3 Motieven
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-[#1F1D1A]">
                      <AnimatedNumber value={84} suffix="%" />
                    </span>
                    <span className="text-xs font-mono uppercase text-[#7A7366]">Sociale Connectie</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1F1D1A] mt-2">
                    Waarom zijn we online?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
                  De 3 hoofdredenen: direct contact met vrienden & familie (84%), actueel nieuws (62%), en ontspanning (76%).
                </p>

                {/* Concrete Research Value Box */}
                <div className="rounded-2xl bg-[#FAF8F5] p-4 border border-[#EBE6DC] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7A7366] flex items-center gap-1.5">
                    <BrainCircuit className="h-3 w-3 text-[#8C6D4F]" /> Psychologische trigger:
                  </span>
                  <p className="text-xs text-[#2D2A26] leading-relaxed">
                    Variabele beloningen triggeren dopamine: &apos;even 5 minuten ontspanning&apos; glijdt door infinite scroll makkelijk door naar een uur onbewust consumeren.
                  </p>
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-[#EBE6DC] flex items-center justify-between">
                <Link
                  href="/onderzoek"
                  className="text-xs font-bold text-[#1F1D1A] flex items-center gap-2 group-hover:text-[#8C6D4F] transition-colors"
                >
                  Lees het volledige artikel
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Advies & Balans */}
            <div className="rounded-3xl border border-[#E3DDD1] bg-[#FFFFFF]/90 backdrop-blur-xs p-7 sm:p-8 shadow-xs hover:border-[#C26747]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EFE6] text-[#2D2A26] border border-[#E3DDD1]">
                    <LockUnlockIcon size={24} color="currentColor" duration={2400} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#F4EFE6] text-[#5A544A] border border-[#E3DDD1]">
                    Gezonde Balans
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-[#1F1D1A]">
                      <AnimatedNumber value={365} suffix="u" />
                    </span>
                    <span className="text-xs font-mono uppercase text-[#7A7366]">Tijdswinst / Jaar</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1F1D1A] mt-2">
                    Gezonde Balans Vinden
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
                  Sociale media verrijkt wanneer je doelbewust kiest, maar vergt bewuste grenzen om slaapkwaliteit, offline vriendschappen en rust te waarborgen.
                </p>

                {/* Concrete Research Value Box */}
                <div className="rounded-2xl bg-[#FAF8F5] p-4 border border-[#EBE6DC] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7A7366] flex items-center gap-1.5">
                    <Lightbulb className="h-3 w-3 text-[#C26747]" /> Gouden 20-20-Bed Regel:
                  </span>
                  <p className="text-xs text-[#2D2A26] leading-relaxed">
                    Schakel blauwlichtfilters in na 20:00 uur en leg je telefoon 45 minuten voor het slapengaan buiten handbereik voor diepere nachtrust.
                  </p>
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-[#EBE6DC] flex items-center justify-between">
                <Link
                  href="/conclusie"
                  className="text-xs font-bold text-[#1F1D1A] flex items-center gap-2 group-hover:text-[#C26747] transition-colors"
                >
                  Bekijk Yonathan&apos;s Conclusie & Balanstest
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
