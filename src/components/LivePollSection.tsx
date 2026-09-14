"use client";

import React, { useState, Component, ReactNode } from "react";
import { useQuery, useMutation } from "convex/react";
import { makeFunctionReference } from "convex/server";
import {
  Vote,
  Users,
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

interface PollVote {
  ageGroup: string;
  dailyHours: number;
  primaryGoal: string;
  impact?: string;
  createdAt?: number;
}

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
  { id: "Sociaal Contact", label: "Sociaal Contact & Vrienden", color: "#5C6E58" },
  { id: "Informatie & Nieuws", label: "Nieuws & Actualiteit", color: "#8C6D4F" },
  { id: "Ontspanning & Vermaak", label: "Ontspanning & Scrollen", color: "#C26747" },
  { id: "Studie & Werk", label: "School, Studie & Werk", color: "#3D5A50" },
];

const DEFAULT_MOCK_VOTES: PollVote[] = [
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

interface LivePollPresenterProps {
  isLive: boolean;
  liveVotes?: unknown;
  castVoteMutation?: ((args: {
    ageGroup: string;
    dailyHours: number;
    primaryGoal: string;
    impact: string;
  }) => Promise<unknown>) | null;
}

function LivePollPresenter({
  isLive,
  liveVotes,
  castVoteMutation,
}: LivePollPresenterProps) {
  const [selectedAge, setSelectedAge] = useState("12 - 25 jaar");
  const [selectedHours, setSelectedHours] = useState(3);
  const [selectedGoal, setSelectedGoal] = useState("Sociaal Contact");
  const [localVotes, setLocalVotes] = useState<PollVote[]>(DEFAULT_MOCK_VOTES);
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const votes: PollVote[] = (isLive && Array.isArray(liveVotes) && liveVotes.length > 0)
    ? (liveVotes as PollVote[])
    : localVotes;

  // Aggregate by primary goal
  const chartData = PRIMARY_GOALS.map((goal) => {
    const count = votes.filter((v) => v.primaryGoal === goal.id).length;
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
    const newVote: PollVote = {
      ageGroup: selectedAge,
      dailyHours: selectedHours,
      primaryGoal: selectedGoal,
      impact: "Positief",
      createdAt: Date.now(),
    };

    setLocalVotes((prev) => [newVote, ...prev]);

    try {
      if (isLive && castVoteMutation) {
        await castVoteMutation({
          ageGroup: selectedAge,
          dailyHours: selectedHours,
          primaryGoal: selectedGoal,
          impact: "Positief",
        });
      }

      setHasVoted(true);

      // Festive micro-interaction with Japandi warm accents
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#5C6E58", "#C26747", "#D5CEBF", "#FAF8F5"],
      });
    } catch (err) {
      console.warn("Vote recording error:", err);
      setHasVoted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="poll" className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-xs print-avoid-break">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E3DDD1] pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[11px] font-semibold text-[#5C6E58] border border-[#E3DDD1]">
              <Vote className="h-3.5 w-3.5" />
              Live Peiling &bull; Convex Real-time
            </span>

            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#5C6E58]/10 text-[11px] font-medium text-[#5C6E58]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5C6E58] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5C6E58]"></span>
                </span>
                <Wifi className="h-3 w-3" />
                Live WebSocket
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[11px] font-medium text-[#7A7366] border border-[#E3DDD1]">
                <Radio className="h-3 w-3 text-[#A39B8B]" />
                Demo Cijfers
              </span>
            )}
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1F1D1A]">
            Hoe verhoudt jouw gebruik zich tot de klas? (Stem Live)
          </h3>
          <p className="text-xs text-[#7A7366]">
            Doe anoniem mee aan de peiling. De grafiek hieronder synchroniseert direct voor iedereen op de site.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#FAF8F5] px-4 py-2 rounded-2xl border border-[#E3DDD1] text-xs text-[#5A544A]">
          <Users className="h-4 w-4 text-[#5C6E58]" />
          <span>
            <strong className="font-bold text-[#1F1D1A]">{votes.length}</strong> deelnemers
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Voting Form */}
        <form onSubmit={handleVote} className="lg:col-span-5 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#5A544A]">
              Jouw Leeftijdscategorie
            </label>
            <select
              disabled={hasVoted}
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full rounded-xl border border-[#E3DDD1] bg-[#FAF8F5] px-3.5 py-2 text-xs text-[#1F1D1A] focus:border-[#5C6E58] focus:bg-white focus:outline-none disabled:opacity-60"
            >
              {AGE_GROUPS.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#5A544A]">
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
                      ? "border-[#5C6E58] bg-[#F4EFE6] text-[#1F1D1A] font-bold shadow-2xs"
                      : "border-[#E3DDD1] bg-white hover:bg-[#FAF8F5] text-[#5A544A]"
                  } disabled:opacity-60 cursor-pointer`}
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
              <span className="font-semibold text-[#5A544A]">
                Geschatte dagelijkse schermtijd
              </span>
              <span className="font-bold text-[#C26747] font-mono">
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
              className="w-full accent-[#C26747] h-2 bg-[#E3DDD1] rounded-lg appearance-none cursor-pointer disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={hasVoted || isSubmitting}
            className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all shadow-xs cursor-pointer ${
              hasVoted
                ? "bg-[#F4EFE6] text-[#5C6E58] border border-[#E3DDD1]"
                : "bg-[#24211D] hover:bg-[#38332C] text-[#FAF8F5]"
            }`}
          >
            {hasVoted ? (
              <>
                <SuccessIcon size={18} active={true} color="currentColor" />
                <span>Stem geregistreerd in Convex!</span>
              </>
            ) : (
              <>
                <SendIcon size={18} active={isSubmitting} color="#FAF8F5" />
                <span>{isSubmitting ? "Versturen..." : "Breng Jouw Stem Uit"}</span>
              </>
            )}
          </button>
        </form>

        {/* Real-time Aggregated Chart */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A7366] flex items-center gap-1.5">
              <BarChart2 className="h-3.5 w-3.5 text-[#5C6E58]" />
              Live Verdeling Motieven (Real-time Convex)
            </span>
            <span className="text-[11px] text-[#A39B8B] font-mono">
              Totaal {votes.length} antwoorden
            </span>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 15, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3DDD1" opacity={0.6} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#7A7366" }}
                  interval={0}
                  tickLine={false}
                  stroke="#E3DDD1"
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#7A7366" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(val) => [`${val ?? 0} stemmen`, "Deelnemers"]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #E3DDD1",
                    backgroundColor: "#FAF8F5",
                    fontSize: "12px",
                    color: "#1F1D1A",
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

function LivePollLive() {
  const liveVotes = useQuery(getPollStatsRef);
  const castVoteMutation = useMutation(castVoteRef);
  return (
    <LivePollPresenter
      isLive={true}
      liveVotes={liveVotes}
      castVoteMutation={castVoteMutation}
    />
  );
}

function LivePollStatic() {
  return (
    <LivePollPresenter
      isLive={false}
      liveVotes={undefined}
      castVoteMutation={null}
    />
  );
}

export function LivePollSection() {
  if (hasConvexUrl) {
    return (
      <ConvexPollErrorBoundary fallback={<LivePollStatic />}>
        <LivePollLive />
      </ConvexPollErrorBoundary>
    );
  }
  return <LivePollStatic />;
}
