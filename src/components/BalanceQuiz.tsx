"use client";

import { useState } from "react";
import {
  Sparkles,
  CheckCircle,
  Smartphone,
  Moon,
  HeartHandshake,
  Clock,
  BatteryCharging,
  Zap,
  TrendingDown,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Flame,
  Coffee,
  Brain,
} from "lucide-react";
import confetti from "canvas-confetti";

export function BalanceQuiz() {
  const [hours, setHours] = useState<number>(4);
  const [inBed, setInBed] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [morningScroll, setMorningScroll] = useState<boolean>(true);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  // Dynamic calculations for storytelling
  // Average lifespan ~ 80 years. Hours spent per year:
  const hoursPerYear = Math.round(hours * 365);
  const daysPerYear = Math.round(hoursPerYear / 24);
  const yearsLostInLifetime = ((hours / 24) * 60).toFixed(1); // approx active 60 adult years

  // Sleep latency delay: inBed adds ~40 mins, high hours add up to 35 mins
  const sleepDelayMinutes = (inBed ? 45 : 10) + (hours > 3 ? Math.round((hours - 3) * 12) : 0);

  // Score from 0 (critical) to 100 (optimal)
  let balanceScore = 100;
  balanceScore -= Math.min(hours * 9, 54);
  if (inBed) balanceScore -= 22;
  if (notifications) balanceScore -= 12;
  if (morningScroll) balanceScore -= 12;
  balanceScore = Math.max(8, balanceScore);

  const triggerAnalysis = () => {
    setHasCalculated(true);
    if (balanceScore >= 65) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const resetAnalysis = () => {
    setHasCalculated(false);
  };

  return (
    <div id="quiz" className="relative rounded-3xl border border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-900/90 shadow-xl overflow-hidden scroll-mt-24">
      {/* 21st.dev Ambient Glow Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />

      <div className="p-6 sm:p-10 space-y-8">
        {/* Header with Storytelling Narrative */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <Sparkles className="h-3.5 w-3.5" />
              21st.dev Interactive Story Simulator
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Wat doet jouw schermtijd écht met je leven?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Pas de knoppen hieronder aan om real-time te simuleren hoeveel dagen per jaar je opgaat in algoritmes, hoe laat je inslaapt en wat jouw persoonlijke focus kost.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/60 px-4 py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-700/80">
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">Jouw Balansindex</span>
              <span className={`text-xl font-extrabold font-mono ${
                balanceScore >= 70 ? "text-emerald-500" : balanceScore >= 45 ? "text-amber-500" : "text-rose-500"
              }`}>
                {balanceScore}/100
              </span>
            </div>
          </div>
        </div>

        {/* Live Interactive Sliders & Narrative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Slider: Daily Hours */}
            <div className="p-5 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-800/40 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-indigo-500" />
                  Gemiddelde Dagelijkse Schermtijd
                </span>
                <span className="text-sm font-extrabold font-mono px-3 py-1 rounded-xl bg-indigo-600 text-white shadow-sm">
                  {hours} {hours === 1 ? "uur" : "uur"} / dag
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-indigo-600 h-2.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
              />

              <div className="flex justify-between text-[11px] text-zinc-500 font-medium">
                <span>1u (Focus)</span>
                <span>4u (Gemiddeld NL)</span>
                <span>8u+ (Grootgebruiker)</span>
              </div>
            </div>

            {/* Habit Toggles */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Jouw Gewoontes & Triggers
              </span>

              {/* Toggle 1: In bed */}
              <button
                type="button"
                onClick={() => setInBed(!inBed)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${
                  inBed
                    ? "border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-sm"
                    : "border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                    inBed ? "bg-indigo-600 text-white" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}>
                    <Moon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      Telefoon in bed na 22:00
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Blauw licht remt melatonine-aanmaak met ca. 45-60 min
                    </p>
                  </div>
                </div>
                <div className={`h-6 w-11 rounded-full p-1 transition-colors ${inBed ? "bg-indigo-600" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform ${inBed ? "translate-x-5" : "translate-x-0"}`} />
                </div>
              </button>

              {/* Toggle 2: Meldingen */}
              <button
                type="button"
                onClick={() => setNotifications(!notifications)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${
                  notifications
                    ? "border-fuchsia-500 bg-fuchsia-50/60 dark:bg-fuchsia-950/40 shadow-sm"
                    : "border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                    notifications ? "bg-fuchsia-600 text-white" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}>
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      Notificaties en trillingen aan
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Continue reactie op pings veroorzaakt fragmentatie
                    </p>
                  </div>
                </div>
                <div className={`h-6 w-11 rounded-full p-1 transition-colors ${notifications ? "bg-fuchsia-600" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform ${notifications ? "translate-x-5" : "translate-x-0"}`} />
                </div>
              </button>

              {/* Toggle 3: Ochtend scroll */}
              <button
                type="button"
                onClick={() => setMorningScroll(!morningScroll)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${
                  morningScroll
                    ? "border-cyan-500 bg-cyan-50/60 dark:bg-cyan-950/40 shadow-sm"
                    : "border-zinc-200/80 bg-zinc-50/50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                    morningScroll ? "bg-cyan-600 text-white" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}>
                    <Coffee className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      Check binnen 10 min na het ontwaken
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Zet direct een reactieve stress- en cortisolmodus in gang
                    </p>
                  </div>
                </div>
                <div className={`h-6 w-11 rounded-full p-1 transition-colors ${morningScroll ? "bg-cyan-600" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform ${morningScroll ? "translate-x-5" : "translate-x-0"}`} />
                </div>
              </button>
            </div>

            <button
              onClick={triggerAnalysis}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 text-white text-xs sm:text-sm font-bold shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="h-4 w-4" />
              Genereer Mijn Persoonlijke Balansverhaal
            </button>
          </div>

          {/* Dynamic Storytelling Stats & Real-World Impact (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
              Jouw Real-Life Tijdslijn & Impact
            </span>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-800/40 p-4 space-y-1">
                <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                  <Clock className="h-3 w-3 text-cyan-500" /> Tijd per jaar:
                </span>
                <p className="font-heading text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {daysPerYear} <span className="text-xs font-normal text-zinc-500">dagen volcontinue</span>
                </p>
                <p className="text-[10px] text-zinc-400">
                  Gelijk aan {Math.round(hoursPerYear)} uur online per 365 dagen.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-800/40 p-4 space-y-1">
                <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                  <Moon className="h-3 w-3 text-indigo-500" /> Slaapvertraging:
                </span>
                <p className="font-heading text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  +{sleepDelayMinutes} <span className="text-xs font-normal text-zinc-500">min/nacht</span>
                </p>
                <p className="text-[10px] text-zinc-400">
                  Tijd die je brein extra nodig heeft om rust te vinden.
                </p>
              </div>
            </div>

            {/* Story Card */}
            <div className="rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 via-white to-indigo-50/30 p-6 dark:border-zinc-800 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-900/60 space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 flex items-center justify-center font-bold">
                  <Brain className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-zinc-900 dark:text-white">
                    Wat betekent dit voor jou?
                  </h4>
                  <p className="text-[11px] text-zinc-500">Conclusie uit Yonathan&apos;s data-model</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Als je dit tempo van <strong className="text-zinc-900 dark:text-white">{hours} uur per dag</strong> aanhoudt, breng je in een volwassen leven van 60 jaar circa <strong className="text-indigo-600 dark:text-indigo-400">{yearsLostInLifetime} jaar onafgebroken</strong> achter een scherm door.
                </p>

                {inBed ? (
                  <p className="text-rose-600 dark:text-rose-400 font-medium">
                    ⚠️ Doordat je na 22:00 in bed scrollt, onderdruk je de natuurlijke aanmaak van melatonine. Hierdoor start je volgende schooldag met een cognitieve achterstand van gemiddeld 15 tot 25%.
                  </p>
                ) : (
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                    ✅ Goed bezig: doordat je telefoon niet meegaat naar bed, krijgt je brein de diepe REM-slaap die nodig is voor school- en sportprestaties.
                  </p>
                )}
              </div>

              {/* Concrete Action Steps */}
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Aanbevolen actie volgens Yonathan:
                </span>
                <ul className="text-xs text-zinc-700 dark:text-zinc-300 space-y-1.5 list-disc list-inside">
                  <li>Stel een dagelijks app-tijdslimiet in op maximaal <strong>{Math.max(2, hours - 1)} uur</strong>.</li>
                  <li>Gebruik een traditionele wekker in plaats van je telefoon naast je kussen.</li>
                  <li>Wacht &apos;s ochtends 30 minuten voor je eerste feed-check.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
