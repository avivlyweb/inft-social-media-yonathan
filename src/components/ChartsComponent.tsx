"use client";

import { useState } from "react";
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
} from "@/data/researchData";
import { Info, PieChart as PieIcon, BarChart2, Split } from "lucide-react";

export function ChartsComponent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      {/* Grafiek 1: Originele Donut Chart uit InDesign Poster */}
      <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-5 mb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-[11px] font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
              <PieIcon className="h-3.5 w-3.5" /> Grafiek 1 &bull; Primaire Onderzoeksposter Data
            </div>
            <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white">
              Social Media Gebruik naar Leeftijdscategorie (22 tot 75+ jaar)
            </h3>
            <p className="text-xs text-zinc-500">
              Exacte percentages overgenomen uit Yonathan&apos;s InDesign posteranalyse.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Donut Chart */}
          <div className="lg:col-span-6 h-72 sm:h-80 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={115}
                  paddingAngle={3}
                  dataKey="percentage"
                  nameKey="ageGroup"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                >
                  {ageDistributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      strokeWidth={activeIndex === index ? 3 : 1}
                      stroke="#ffffff"
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => [`${value}% van de totale gebruikers`, "Aandeel"]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                100%
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                Verdeling
              </span>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="lg:col-span-6 space-y-2.5">
            {ageDistributionData.map((item, idx) => (
              <div
                key={item.ageGroup}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                  activeIndex === idx
                    ? "border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/30 scale-[1.01]"
                    : "border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-800/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3.5 w-3.5 rounded-md flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {item.ageGroup}
                    </span>
                    <p className="text-[10px] text-zinc-400">{item.description}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 pl-2">
                  <span className="text-sm font-extrabold font-mono text-zinc-900 dark:text-white">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Twee kolommen voor Grafiek 2 en 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grafiek 2: Motieven */}
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md flex flex-col">
          <div className="space-y-1 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <BarChart2 className="h-3.5 w-3.5" /> Grafiek 2 &bull; Gebruiksmotieven
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              Waarom gebruiken mensen Sociale Media?
            </h3>
            <p className="text-xs text-zinc-500">
              Gebaseerd op de 3 kernpijlers uit de poster: Contact, Nieuws en Vermaak.
            </p>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={motivationData}
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.3} />
                <XAxis type="number" domain={[0, 100]} unit="%" tick={{ fontSize: 11 }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  width={110}
                />
                <Tooltip formatter={(val: any) => [`${val}% van de respondenten`, "Prioriteit"]} />
                <Bar dataKey="percentage" fill="url(#barGradient)" radius={[0, 8, 8, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grafiek 3: Balans en Impact */}
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md flex flex-col">
          <div className="space-y-1 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-fuchsia-50 dark:bg-fuchsia-950/60 text-[11px] font-semibold text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-800">
              <Split className="h-3.5 w-3.5" /> Grafiek 3 &bull; Balans & Impact Vergelijking
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              Positieve Ervaring vs. Negatieve Factoren (%)
            </h3>
            <p className="text-xs text-zinc-500">
              Vergelijking van voordelen (contact/nieuws) versus nadelen (stress/slaap).
            </p>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={impactComparisonData}
                margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="aspect"
                  angle={-15}
                  textAnchor="end"
                  interval={0}
                  tick={{ fontSize: 9 }}
                />
                <YAxis unit="%" tick={{ fontSize: 10 }} domain={[0, 100]} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: "11px" }} />
                <Bar dataKey="positief" name="Positief ervaren" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="negatief" name="Nadelig ervaren" fill="#f43f5e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
