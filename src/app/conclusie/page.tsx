import Link from "next/link";
import { authorInfo } from "@/data/researchData";
import { BalanceQuiz } from "@/components/BalanceQuiz";
import {
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Moon,
  Sparkles,
  Smartphone,
  Quote,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ConclusiePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Pagina 3 &bull; Eindconclusie & Aanbevelingen
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Eindconclusie & Bewust Gebruik
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Hoe houden we de regie over onze aandacht? De bevindingen samengevat in concrete handvatten voor scholieren, jongeren en volwassenen.
        </p>
      </div>

      {/* Quote Banner (Exacte slotzin van Yonathan's InDesign poster) */}
      <div className="relative rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/70 via-white to-cyan-50/50 p-8 sm:p-12 dark:border-indigo-900/60 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-900 dark:to-indigo-950/40 shadow-sm">
        <Quote className="h-10 w-10 text-indigo-400/50 mb-4" />
        <blockquote className="font-heading text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-relaxed max-w-4xl">
          &ldquo;Sociale media kan leuk en handig zijn, maar het is belangrijk om een goede balans te vinden. Gebruik het bewust, zodat het jouw leven verrijkt en niet bepaalt.&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
            YH
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-900 dark:text-white">{authorInfo.name}</p>
            <p className="text-[10px] text-zinc-500">{authorInfo.class} &bull; {authorInfo.course}</p>
          </div>
        </div>
      </div>

      {/* 4 Concrete Balanstips */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold text-zinc-950 dark:text-white">
          4 Praktische Tips voor een Gezonde Balans
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 flex items-center justify-center">
              <Moon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-zinc-900 dark:text-white">
              1. Schermvrij voor het slapen
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Leg je smartphone 45 minuten voor bedtijd weg om de melatonine-aanmaak niet te onderbreken.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 flex items-center justify-center">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-zinc-900 dark:text-white">
              2. Beperk meldingen
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Zet notificaties uit voor niet-urgente apps. Jij bepaalt wanneer je kijkt, niet het algoritme.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/60 dark:text-fuchsia-400 flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-zinc-900 dark:text-white">
              3. Tijdslimieten instellen
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Stel app-limieten in op je telefoon (bijv. max 45 minuten TikTok per dag) voor direct inzicht.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm space-y-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-zinc-900 dark:text-white">
              4. Offline ontmoeten
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Vervang doelloos scrollen door fysieke interactie, sport, muziek of buitensportactiviteiten.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Component */}
      <BalanceQuiz />

      {/* Back to Home CTA */}
      <div className="pt-6 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-all"
        >
          Terug naar Home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
