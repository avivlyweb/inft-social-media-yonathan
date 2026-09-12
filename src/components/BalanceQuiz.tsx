"use client";

import { useState } from "react";
import {
  Sparkles,
  Smartphone,
  Moon,
  HeartHandshake,
  Clock,
  Zap,
  Coffee,
  Brain,
  Copy,
  Check,
  Target,
  Sliders,
  BookOpen,
  Hourglass,
  Flame,
  Award,
  Share2,
} from "lucide-react";
import confetti from "canvas-confetti";

export function BalanceQuiz() {
  const [hours, setHours] = useState<number>(4);
  const [inBed, setInBed] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [morningScroll, setMorningScroll] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<"custom" | "standard" | "optimal">("standard");
  const [copied, setCopied] = useState<boolean>(false);

  // Dynamic calculations for storytelling
  // Average lifespan ~ 80 years. Hours spent per year:
  const hoursPerYear = Math.round(hours * 365);
  const daysPerYear = Math.round(hoursPerYear / 24);
  const yearsLostInLifetime = ((hours / 24) * 60).toFixed(1); // approx active 60 adult years

  // Sleep latency delay: inBed adds ~45 mins, high hours add up to 35 mins
  const sleepDelayMinutes = (inBed ? 45 : 10) + (hours > 3 ? Math.round((hours - 3) * 12) : 0);

  // Time-back & Productivity Calculations (Reducing by 1 hour daily or aiming for focus):
  // 1 hour saved per day = 365 hours/year
  const hoursSavedPerYear = 365;
  const daysSavedPerYear = (hoursSavedPerYear / 24).toFixed(1);
  // Average book is ~60,000 words, read at 250 wpm = 4 hours per book.
  const booksEquivalent = Math.floor(hoursSavedPerYear / 5);
  // Deep sleep regained per year (sleepDelayMinutes saved if bedtime scroll stops):
  const deepSleepMinutesPerNight = inBed ? 45 : 15;
  const deepSleepHoursPerYear = Math.round((deepSleepMinutesPerNight * 365) / 60);

  // Score from 0 (critical) to 100 (optimal)
  let balanceScore = 100;
  balanceScore -= Math.min(hours * 9, 54);
  if (inBed) balanceScore -= 22;
  if (notifications) balanceScore -= 12;
  if (morningScroll) balanceScore -= 12;
  balanceScore = Math.max(8, balanceScore);

  const applyPreset = (preset: "standard" | "optimal") => {
    setActivePreset(preset);
    if (preset === "standard") {
      setHours(4);
      setInBed(true);
      setNotifications(true);
      setMorningScroll(true);
    } else if (preset === "optimal") {
      setHours(1);
      setInBed(false);
      setNotifications(false);
      setMorningScroll(false);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleCustomChange = () => {
    setActivePreset("custom");
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const copyReportToClipboard = async () => {
    const reportText = `📊 MIJN DIGITALE BALANSRAPPORT (Yonathan's Data Onderzoek)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Balansindex: ${balanceScore}/100 ${balanceScore >= 70 ? "🌿 (Gezond & Scherp)" : balanceScore >= 45 ? "⚖️ (Gemiddeld risico)" : "⚠️ (Kritiek aandacht vereist)"}
• Gemiddelde schermtijd: ${hours} uur / dag
• Jaarlijks schermgebruik: ${hoursPerYear} uur (~${daysPerYear} volle 24u-dagen/jaar)
• Levensimpact (60 jaar): ~${yearsLostInLifetime} jaar aan een scherm gekluisterd
• Slaapinslagtijd vertraging: +${sleepDelayMinutes} minuten/nacht
• Telefoon in bed na 22u: ${inBed ? "Ja (verstoorde REM-slaap)" : "Nee (optimale rust)"}
• Notificaties aan: ${notifications ? "Ja (continue micro-onderbrekingen)" : "Nee (doelgerichte focus)"}
• Ochtendscroll binnen 10m: ${morningScroll ? "Ja (reactieve stressmodus)" : "Nee (rustige start)"}

💡 TIJDSWINST POTENTIEEL (-1 uur/dag):
• +365 uur winst per jaar (~15 volle etmalen terug!)
• Equivalent aan ~${booksEquivalent} gelezen boeken of een nieuwe vaardigheid
• +${deepSleepHoursPerYear} uur extra diepe herstellende slaap per jaar

Ontdek jouw eigen balans op: https://inft-yonathan.vercel.app`;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(reportText);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = reportText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      triggerCelebration();
      setTimeout(() => setCopied(false), 3500);
    } catch (err) {
      console.error("Kopiëren mislukt", err);
    }
  };

  return (
    <div id="quiz" className="relative rounded-3xl border border-zinc-200/80 bg-white dark:border-zinc-800 dark:bg-zinc-900/90 shadow-xl overflow-hidden scroll-mt-24">
      {/* 21st.dev Ambient Glow Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />

      <div className="p-6 sm:p-10 space-y-8">
        {/* Header with Storytelling Narrative & Action Buttons */}
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
              Pas de presets en knoppen hieronder aan om real-time te simuleren hoeveel dagen per jaar je opgaat in algoritmes, hoe laat je inslaapt en wat jouw persoonlijke focuswinst kan zijn.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Score Badge */}
            <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/60 px-4 py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-700/80 shadow-sm">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">Jouw Balansindex</span>
                <span className={`text-xl font-extrabold font-mono ${
                  balanceScore >= 70 ? "text-emerald-500" : balanceScore >= 45 ? "text-amber-500" : "text-rose-500"
                }`}>
                  {balanceScore}/100
                </span>
              </div>
            </div>

            {/* Copy / Share Button */}
            <button
              onClick={copyReportToClipboard}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-md ${
                copied
                  ? "bg-emerald-600 text-white shadow-emerald-500/20"
                  : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-200" />
                  <span>Gekopieerd naar klembord!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Kopieer Balansrapport</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preset Switcher (Quick Scenarios) */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300">
            <Sliders className="h-4 w-4 text-indigo-500" />
            <span>Snelle Scenario Presets:</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => applyPreset("standard")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activePreset === "standard"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm border border-zinc-200 dark:border-zinc-700"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Gemiddelde Jongere (4u)
            </button>
            <button
              onClick={() => applyPreset("optimal")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activePreset === "optimal"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm"
                  : "text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
              }`}
            >
              <Target className="h-3.5 w-3.5" />
              Gezonde Balans Focus (1u)
            </button>
            {activePreset === "custom" && (
              <span className="text-[11px] font-medium px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                Aangepast
              </span>
            )}
          </div>
        </div>

        {/* Live Interactive Sliders & Narrative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (6 cols) */}
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
                onChange={(e) => {
                  setHours(Number(e.target.value));
                  handleCustomChange();
                }}
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
                onClick={() => {
                  setInBed(!inBed);
                  handleCustomChange();
                }}
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
                onClick={() => {
                  setNotifications(!notifications);
                  handleCustomChange();
                }}
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
                      Continue reactie op pings veroorzaakt aandachtsfragmentatie
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
                onClick={() => {
                  setMorningScroll(!morningScroll);
                  handleCustomChange();
                }}
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

            {/* Celebrate / Share Call to Action */}
            <div className="flex gap-3">
              <button
                onClick={triggerCelebration}
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 text-white text-xs sm:text-sm font-bold shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="h-4 w-4" />
                Vier Mijn Balans met Confetti
              </button>
              <button
                onClick={copyReportToClipboard}
                title="Deel Mijn Resultaat"
                className="py-3 px-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Deel Resultaat</span>
              </button>
            </div>
          </div>

          {/* Dynamic Storytelling Stats & Real-World Impact (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
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

            {/* NEW: Tijdswinst & Productiviteit Calculator Card */}
            <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white dark:border-emerald-900/60 dark:bg-gradient-to-br dark:from-emerald-950/30 dark:via-zinc-900 dark:to-zinc-900 p-5 space-y-3.5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/70 dark:text-emerald-300 flex items-center justify-center font-bold">
                    <Hourglass className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-zinc-900 dark:text-white">
                      Tijdswinst Calculator (-1 uur per dag)
                    </h4>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Wat levert 60 minuten bewuste offline rust jou jaarlijks op?
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                  +365u winst
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-zinc-800/70 border border-emerald-100 dark:border-emerald-900/40">
                  <Flame className="h-4 w-4 text-amber-500 mx-auto mb-1" />
                  <p className="font-mono text-base font-extrabold text-zinc-900 dark:text-white">~{daysSavedPerYear}</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Dagen pure tijd terug/jaar</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-zinc-800/70 border border-emerald-100 dark:border-emerald-900/40">
                  <BookOpen className="h-4 w-4 text-indigo-500 mx-auto mb-1" />
                  <p className="font-mono text-base font-extrabold text-zinc-900 dark:text-white">~{booksEquivalent}</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Boeken gelezen per jaar</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-zinc-800/70 border border-emerald-100 dark:border-emerald-900/40">
                  <Award className="h-4 w-4 text-emerald-500 mx-auto mb-1" />
                  <p className="font-mono text-base font-extrabold text-zinc-900 dark:text-white">+{deepSleepHoursPerYear}u</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Diepe herstelslaap/jaar</p>
                </div>
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
