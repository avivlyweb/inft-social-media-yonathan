"use client";

import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  ageDistributionData,
  motivationData,
  impactComparisonData,
  AgeDistributionItem,
} from "@/data/researchData";
import {
  PieChart as PieIcon,
  BarChart2,
  Split,
  Clock,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Table as TableIcon,
} from "lucide-react";
import { PlayPauseIcon, ToggleIcon } from "@/components/AnimatedStateIcons";

export function ChartsComponent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCohortIndex, setSelectedCohortIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(1024);
  const [showTableGrafiek3, setShowTableGrafiek3] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isSmall = windowWidth < 420;

  const currentCohort: AgeDistributionItem =
    ageDistributionData[selectedCohortIndex] ?? ageDistributionData[0];

  const handleSelectCohort = (index: number) => {
    setSelectedCohortIndex(index);
    setActiveIndex(index);
  };

  const handlePrevCohort = () => {
    setSelectedCohortIndex((prev) =>
      prev === 0 ? ageDistributionData.length - 1 : prev - 1
    );
  };

  const handleNextCohort = () => {
    setSelectedCohortIndex((prev) =>
      prev === ageDistributionData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-12">
      {/* ========================================================================= */}
      {/* Grafiek 1: Originele Donut Chart & Interactieve Leeftijds Drill-down */}
      {/* ========================================================================= */}
      <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md print-card">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-5 mb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              <PieIcon className="h-3.5 w-3.5" /> Grafiek 1 &bull; Primaire Onderzoeksposter Data
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              Social Media Gebruik naar Leeftijdscategorie (12 tot 75+ jaar)
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Exacte verdeling overgenomen uit Yonathan&apos;s posteranalyse. Tik of klik op een segment of categorie voor diepgaande cohort-analyses.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-zinc-500 bg-zinc-50 dark:bg-zinc-800/60 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700/60">
            <Sparkles className="h-3.5 w-3.5 text-cyan-500 animate-pulse" />
            <span className="font-medium">Interactieve Drill-down actief</span>
          </div>
        </div>

        {/* Donut Chart & List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Donut Chart */}
          <div className="lg:col-span-5 h-64 sm:h-80 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={isSmall ? 48 : isMobile ? 58 : 70}
                  outerRadius={isSmall ? 82 : isMobile ? 96 : 115}
                  paddingAngle={3}
                  dataKey="percentage"
                  nameKey="ageGroup"
                  cursor="pointer"
                  onClick={(_, index) => handleSelectCohort(index)}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {ageDistributionData.map((entry, index) => {
                    const isSelected = selectedCohortIndex === index;
                    const isHovered = activeIndex === index;
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={isSelected ? "#09090b" : "#ffffff"}
                        strokeWidth={isSelected ? 3 : isHovered ? 2 : 1}
                        className="transition-all duration-200 outline-none"
                      />
                    );
                  })}
                </Pie>
                <Tooltip
                  formatter={(value, _name, entry) => {
                    const cohortName = (entry?.payload as { ageGroup?: string })?.ageGroup;
                    return [
                      `${value}% van alle gebruikers${cohortName ? ` (${cohortName})` : ""}`,
                      "Aandeel",
                    ];
                  }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Donut Center Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
              <span
                className="text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-200"
                style={{
                  color:
                    activeIndex !== null
                      ? ageDistributionData[activeIndex]?.color
                      : currentCohort.color,
                }}
              >
                {activeIndex !== null
                  ? `${ageDistributionData[activeIndex]?.percentage}%`
                  : `${currentCohort.percentage}%`}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 line-clamp-1 max-w-[120px]">
                {activeIndex !== null
                  ? ageDistributionData[activeIndex]?.ageGroup
                  : currentCohort.ageGroup}
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 mt-0.5">
                {activeIndex !== null ? "Preview" : "Geselecteerd"}
              </span>
            </div>
          </div>

          {/* Breakdown List with Click-to-Drill */}
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-500 uppercase tracking-wider px-1 pb-1">
              <span>Leeftijdsgroep & Primaire focus</span>
              <span>Aandeel</span>
            </div>
            {ageDistributionData.map((item, idx) => {
              const isSelected = selectedCohortIndex === idx;
              const isHovered = activeIndex === idx;

              return (
                <div
                  key={item.ageGroup}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectCohort(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectCohort(idx);
                    }
                  }}
                  className={`flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer select-none ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-sm ring-2 ring-indigo-500/20 translate-x-1"
                      : isHovered
                      ? "border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60"
                      : "border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-800/30 hover:border-zinc-200 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-lg flex-shrink-0 shadow-sm transition-transform"
                      style={{
                        backgroundColor: item.color,
                        transform: isSelected ? "scale(1.15)" : "scale(1)",
                      }}
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                          {item.ageGroup}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/60 px-1.5 py-0.2 rounded-md">
                            <CheckCircle2 className="h-2.5 w-2.5" /> Geselecteerd
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 pl-3">
                    <span className="text-sm sm:text-base font-extrabold font-mono text-zinc-950 dark:text-white">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* Interactive Cohort Drill-Down Detail Card */}
        {/* ===================================================================== */}
        <div
          className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 transition-all print-avoid-break"
          id="cohort-drilldown"
        >
          <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-700/80 bg-gradient-to-br from-zinc-50/90 via-white to-indigo-50/30 dark:from-zinc-900/90 dark:via-zinc-900 dark:to-indigo-950/20 p-5 sm:p-6 shadow-sm">
            {/* Header with Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-zinc-200/70 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <span
                  className="h-4 w-4 rounded-full flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: currentCohort.color }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                      Cohort Inzichten: {currentCohort.ageGroup}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white shadow-xs" style={{ backgroundColor: currentCohort.color }}>
                      {currentCohort.percentage}% v.d. gebruikers
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Gedetailleerd gebruiksprofiel, risico&apos;s en aanbevelingen uit het onderzoek.
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto no-print">
                <button
                  onClick={handlePrevCohort}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-colors"
                  title="Vorige leeftijdsgroep"
                >
                  <ChevronLeft className="h-3.5 w-3.5" /> Vorige
                </button>
                <button
                  onClick={handleNextCohort}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-colors"
                  title="Volgende leeftijdsgroep"
                >
                  Volgende <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Drill-down Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Blok 1: Populaire Platformen */}
              <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  <Smartphone className="h-4 w-4 text-indigo-500" />
                  Populaire Platformen
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentCohort.topPlatforms.map((platform) => (
                    <span
                      key={platform}
                      className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-1">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">Gebruiksdoel:</span>{" "}
                  {currentCohort.primaryUse}
                </p>
              </div>

              {/* Blok 2: Schermtijd & Patronen */}
              <div className="rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  <Clock className="h-4 w-4 text-cyan-500" />
                  Schermtijd & Piekuren
                </div>
                <div className="space-y-1.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      Gemiddelde tijd
                    </span>
                    <p className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
                      {currentCohort.screenTime}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      Piekactiviteit
                    </span>
                    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      {currentCohort.peakHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Blok 3: Risicofactoren */}
              <div className="rounded-xl border border-rose-200/70 dark:border-rose-950/70 bg-rose-50/40 dark:bg-rose-950/20 p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 dark:text-rose-300">
                  <AlertTriangle className="h-4 w-4 text-rose-500" />
                  Belangrijkste Risico&apos;s
                </div>
                <ul className="space-y-1.5 text-[11px] text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  {currentCohort.risks.map((risk, i) => (
                    <li key={i} className="leading-snug">
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blok 4: Kansen & Advies */}
              <div className="rounded-xl border border-emerald-200/70 dark:border-emerald-950/70 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <Lightbulb className="h-4 w-4 text-emerald-500" />
                  Positieve Kansen & Advies
                </div>
                <ul className="space-y-1 text-[11px] text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  {currentCohort.opportunities.map((opp, i) => (
                    <li key={i} className="leading-snug">
                      <span>{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Yonathan's Balansadvies Footer */}
            <div className="mt-4 p-3.5 rounded-xl bg-white dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700 flex items-start gap-2.5">
              <span className="p-1 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 mt-0.5 flex-shrink-0">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <strong className="font-semibold text-zinc-900 dark:text-white">
                  Onderzoeksaanbeveling voor {currentCohort.ageGroup}:
                </strong>{" "}
                {currentCohort.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Twee kolommen voor Grafiek 2 en Grafiek 3 */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ===================================================================== */}
        {/* Grafiek 2: Gebruiksmotieven (BarChart Horizontaal) */}
        {/* ===================================================================== */}
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md flex flex-col print-card">
          <div className="space-y-1 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <BarChart2 className="h-3.5 w-3.5" /> Grafiek 2 &bull; Gebruiksmotieven
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              Waarom gebruiken mensen Sociale Media?
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Gebaseerd op de 3 kernpijlers uit de poster: Contact, Nieuws en Vermaak.
            </p>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={motivationData}
                margin={{
                  top: 8,
                  right: 25,
                  left: isSmall ? 0 : isMobile ? 10 : 30,
                  bottom: 8,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.25} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  unit="%"
                  tick={{ fontSize: isSmall ? 10 : 11 }}
                />
                <YAxis
                  type="category"
                  dataKey={isMobile ? "shortName" : "name"}
                  tick={{ fontSize: isSmall ? 9 : 10 }}
                  width={isSmall ? 95 : isMobile ? 110 : 130}
                />
                <Tooltip
                  formatter={(val) => [`${val}% van de respondenten`, "Prioriteit"]}
                  labelFormatter={(_, payload) => {
                    if (payload && payload.length > 0) {
                      const entry = payload[0].payload as { name?: string };
                      return entry.name ?? "";
                    }
                    return "";
                  }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="percentage"
                  fill="url(#barGradientMotieven)"
                  radius={[0, 8, 8, 0]}
                />
                <defs>
                  <linearGradient id="barGradientMotieven" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Context note below Chart 2 */}
          <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
              Sociale verbinding (84%) en vermaak (76%) vormen de absolute piek.
            </span>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* Grafiek 3: Positieve Ervaring vs. Negatieve Factoren (%) */}
        {/* ===================================================================== */}
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md flex flex-col print-card">
          <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/60 text-[11px] font-semibold text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-800">
                <Split className="h-3.5 w-3.5" /> Grafiek 3 &bull; Balans & Impact Vergelijking
              </div>
              <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
                Positieve Ervaring vs. Negatieve Factoren (%)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Vergelijking van voordelen (contact/nieuws) versus nadelen (stress/slaap).
              </p>
            </div>

            {/* Quick table toggle */}
            <button
              onClick={() => setShowTableGrafiek3(!showTableGrafiek3)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors no-print"
              title="Wissel tussen staafgrafiek en data-tabel"
            >
              <ToggleIcon size={24} active={showTableGrafiek3} color="#D946EF" />
              <span>{showTableGrafiek3 ? "Tabel Weergave" : "Grafiek Weergave"}</span>
            </button>
          </div>

          {!showTableGrafiek3 ? (
            <div className="h-72 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={impactComparisonData}
                  margin={{
                    top: 10,
                    right: 12,
                    left: isSmall ? -30 : isMobile ? -20 : -10,
                    bottom: isMobile ? 45 : 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                  <XAxis
                    dataKey={isMobile ? "shortAspect" : "aspect"}
                    angle={isMobile ? -30 : -15}
                    textAnchor="end"
                    interval={0}
                    tick={{ fontSize: isSmall ? 9 : 10 }}
                    height={isMobile ? 50 : 35}
                  />
                  <YAxis
                    unit="%"
                    tick={{ fontSize: isSmall ? 9 : 10 }}
                    domain={[0, 100]}
                    width={38}
                  />
                  <Tooltip
                    formatter={(val, name) => [`${val}%`, `${name}`]}
                    labelFormatter={(_, payload) => {
                      if (payload && payload.length > 0) {
                        const entry = payload[0].payload as { aspect?: string };
                        return entry.aspect ?? "";
                      }
                      return "";
                    }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    wrapperStyle={{ fontSize: isMobile ? "10px" : "11px" }}
                  />
                  <Bar
                    dataKey="positief"
                    name="Positief ervaren"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="negatief"
                    name="Nadelig ervaren"
                    fill="#f43f5e"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            /* Accessible / Print Data Table View */
            <div className="h-72 sm:h-80 overflow-y-auto w-full pr-1">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500">
                    <th className="py-2 font-semibold">Aspect</th>
                    <th className="py-2 text-right font-semibold text-emerald-600">Positief</th>
                    <th className="py-2 text-right font-semibold text-rose-600">Nadelig</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                  {impactComparisonData.map((row) => (
                    <tr key={row.aspect} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                      <td className="py-2.5 font-medium text-zinc-800 dark:text-zinc-200 pr-2">
                        {row.aspect}
                        <p className="text-[10px] text-zinc-400 font-normal">{row.description}</p>
                      </td>
                      <td className="py-2.5 text-right font-bold font-mono text-emerald-600 dark:text-emerald-400">
                        {row.positief}%
                      </td>
                      <td className="py-2.5 text-right font-bold font-mono text-rose-600 dark:text-rose-400">
                        {row.negatief}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Context note below Chart 3 */}
          <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-fuchsia-500 flex-shrink-0" />
              Slaap & Concentratie (86% nadelig) vraagt de meeste aandacht bij jongeren.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
