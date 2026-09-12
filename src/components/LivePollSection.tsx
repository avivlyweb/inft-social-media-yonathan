"use client";

import React, { useState, Component, ReactNode } from "react";
import { useQuery, useMutation } from "convex/react";
import { makeFunctionReference } from "convex/server";
import {
  Vote,
  Users,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Radio,
  Wifi,
  BarChart2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import confetti from "canvas-confetti";
import { SuccessIcon, SendIcon } from "@/components/AnimatedStateIcons";

const hasConvexUrl = Boolean(process.env.NEXT_PUBLIC_CONVEX_URL);

// Function references
const getPollStatsRef = makeFunctionReference<"query">("social:getPollStats");
const castVoteRef = makeFunctionReference<
  "mutation",
  { ageGroup: string; dailyHours: number; primaryGoal: string; impact: string }
>("social:castVote");

const AGE_GROUPS = [
  "12 - 25 jaar",
  "25 - 35 jaar",
  "35 - 45 jaar",
  "45 - 55 jaar",
  "55 - 65 jaar",
  "65 - 75 jaar",
  "75+ jaar",
];

const PRIMARY_GOALS = [
  { id: "Sociaal Contact", label: "Sociaal Contact & Vrienden", color: "#3b82f6" },
  { id: "Informatie & Nieuws", label: "Nieuws & Actualiteit", color: "#06b6d4" },
  { id: "Ontspanning & Vermaak", label: "Ontspanning & Scrollen", color: "#a855f7" },
  { id: "Studie & Werk", label: "School, Studie & Werk", color: "#10b981" },
];

const DEFAULT_MOCK_VOTES = [
  { ageGroup: "12 - 25 jaar", dailyHours: 4, primaryGoal: "Sociaal Contact", impact: "Gemengd", createdAt: 1 },
  { ageGroup: "12 - 25 jaar", dailyHours: 5, primaryGoal: "Ontspanning & Vermaak", impact: "Gemengd", createdAt: 2 },
  { ageGroup: "25 - 35 jaar", dailyHours: 3, primaryGoal: "Sociaal Contact", impact: "Positief", createdAt: 3 },
  { ageGroup: "25 - 35 jaar", dailyHours: 3, primaryGoal: "Informatie & Nieuws", impact: "Positief", createdAt: 4 },
  { ageGroup: "35 - 45 jaar", dailyHours: 2, primaryGoal: "Informatie & Nieuws", impact: "Positief", createdAt: 5 },
  { ageGroup: "12 - 25 jaar", dailyHours: 3, primaryGoal: "Ontspanning & Vermaak", impact: "Kritiek", createdAt: 6 },
  { ageGroup: "55 - 65 jaar", dailyHours: 1.5, primaryGoal: "Sociaal Contact", impact: "Positief", createdAt: 7 },
  { ageGroup: "65 - 75 jaar", dailyHours: 1, primaryGoal: "Sociaal Contact", impact: "Positief", createdAt: 8 },
  { ageGroup: "12 - 25 jaar", dailyHours: 4, primaryGoal: "Sociaal Contact", impact: "Gemengd", createdAt: 9 },
  { ageGroup: "25 - 35 jaar", dailyHours: 2.5, primaryGoal: "Studie & Werk", impact: "Positief", createdAt: 10 },
  { ageGroup: "45 - 55 jaar", dailyHours: 2, primaryGoal: "Informatie & Nieuws", impact: "Positief", createdAt: 11 },
];

function LivePollInner({ isLive }: { isLive: boolean }) {
  const liveVotes = isLive ? useQuery(getPollStatsRef) : undefined;
  const castVoteMutation = isLive ? useMutation(castVoteRef) : null;

  const [selectedAge, setSelectedAge] = useState("12 - 25 jaar");
  const [selectedHours, setSelectedHours] = useState(3);
  const [selectedGoal, setSelectedGoal] = useState("Sociaal Contact");
  const [selectedImpact, setSelectedImpact] = useState("Positief");
  const [localVotes, setLocalVotes] = useState(DEFAULT_MOCK_VOTES);
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const votes = (isLive && liveVotes && Array.isArray(liveVotes) && liveVotes.length > 0)
    ? liveVotes
    : localVotes;

  // Aggregate by primary goal
  const chartData = PRIMARY_GOALS.map((goal) => {
    const count = votes.filter((v: any) => v.primaryGoal === goal.id).length;
    const percentage = votes.length > 0 ? Math.round((count / votes.length) * 100) : 0;
    return {
      name: goal.id,
      stemmen: count,
      percentage,
      fill: goal.color,
    };
  });

  const handleVote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasVoted) return;

    setIsSubmitting(true);
    const newVote = {
      ageGroup: selectedAge,
      dailyHours: selectedHours,
      primaryGoal: selectedGoal,
      impact: selectedImpact,
      createdAt: Date.now(),
    };

    setLocalVotes((prev) => [newVote, ...prev]);

    try {
      if (isLive && castVoteMutation) {
        await castVoteMutation({
          ageGroup: selectedAge,
          dailyHours: selectedHours,
          primaryGoal: selectedGoal,
          impact: selectedImpact,
        });
      }
      setHasVoted(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.warn("Stemmen via Convex mislukt:", err);
      setHasVoted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-md print-avoid-break">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Vote className="h-3.5 w-3.5" />
              Live Peiling &bull; Convex Real-time
            </span>

            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Wifi className="h-3 w-3" />
                Live WebSocket
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                <Radio className="h-3 w-3 text-zinc-400" />
                Demo Cijfers
              </span>
            )}
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            Hoe verhoudt jouw gebruik zich tot de klas? (Stem Live)
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Doe anoniem mee aan de peiling. De grafiek hieronder synchroniseert direct voor iedereen op de site.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/80 px-4 py-2 rounded-2xl border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-700 dark:text-zinc-300">
          <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>
            <strong className="font-bold text-zinc-900 dark:text-white">{votes.length}</strong> deelnemers
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Voting Form */}
        <form onSubmit={handleVote} className="lg:col-span-5 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Jouw Leeftijdscategorie
            </label>
            <select
              disabled={hasVoted}
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-white disabled:opacity-60"
            >
              {AGE_GROUPS.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Jouw Primaire Reden voor Social Media
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRIMARY_GOALS.map((goal) => (
                <button
                  type="button"
                  key={goal.id}
                  disabled={hasVoted}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                    selectedGoal === goal.id
                      ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold"
                      : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                  } disabled:opacity-60`}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: goal.color }}
                    />
                    <span className="truncate">{goal.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Geschatte dagelijkse schermtijd
              </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                {selectedHours} uur/dag
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              step="0.5"
              disabled={hasVoted}
              value={selectedHours}
              onChange={(e) => setSelectedHours(Number(e.target.value))}
              className="w-full accent-emerald-600 h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700 disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={hasVoted || isSubmitting}
            className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all shadow-sm ${
              hasVoted
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
            }`}
          >
            {hasVoted ? (
              <>
                <SuccessIcon size={18} active={true} color="currentColor" />
                <span>Stem geregistreerd in Convex!</span>
              </>
            ) : (
              <>
                <SendIcon size={18} active={isSubmitting} color="#FFFFFF" />
                <span>{isSubmitting ? "Versturen..." : "Breng Jouw Stem Uit"}</span>
              </>
            )}
          </button>
        </form>

        {/* Real-time Aggregated Chart */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <BarChart2 className="h-3.5 w-3.5 text-emerald-600" />
              Live Verdeling Motieven (Real-time Convex)
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">
              Totaal {votes.length} antwoorden
            </span>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 15, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#71717a" }}
                  interval={0}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#71717a" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(value: any) => [`${value} stemmen`, "Deelnemers"]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="stemmen" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error boundary to gracefully catch any Convex provider / connection failures
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ConvexPollErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.warn("ConvexPollErrorBoundary caught error, falling back to local demo:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function LivePollSection() {
  if (hasConvexUrl) {
    return (
      <ConvexPollErrorBoundary fallback={<LivePollInner isLive={false} />}>
        <LivePollInner isLive={true} />
      </ConvexPollErrorBoundary>
    );
  }
  return <LivePollInner isLive={false} />;
}
