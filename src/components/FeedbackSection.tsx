"use client";

import React, { useState, useMemo, Component, ReactNode } from "react";
import { MessageSquare, Star, User, Wifi, Radio, AlertCircle } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { makeFunctionReference } from "convex/server";
import { SendIcon, SuccessIcon, HeartIcon } from "@/components/AnimatedStateIcons";

interface CommentItem {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  likes?: number;
}

interface ConvexFeedbackDoc {
  _id: string;
  _creationTime?: number;
  author: string;
  role: string;
  comment: string;
  rating: number;
  likes?: number;
  createdAt?: number;
}

const initialFeedback: CommentItem[] = [
  {
    id: "1",
    author: "M. van der Meer",
    role: "Docent Informatietechnologie",
    comment: "Sterke interactieve vertaling van de InDesign poster naar een professionele website. De 3 grafieken en datavisualisaties zijn overzichtelijk!",
    rating: 5,
    date: "10 sep 2026",
    likes: 12,
  },
  {
    id: "2",
    author: "Sophie (Klas 4m3)",
    role: "Klasgenoot",
    comment: "Heel herkenbaar over die schermtijd voor het slapen gaan. De donutchart van de leeftijden is super duidelijk.",
    rating: 5,
    date: "9 sep 2026",
    likes: 8,
  },
];

const hasConvexUrl = Boolean(process.env.NEXT_PUBLIC_CONVEX_URL);

// Function references defined for Convex query and mutation
const getFeedbackRef = makeFunctionReference<"query">("social:getFeedback");
const addFeedbackRef = makeFunctionReference<"mutation", { author: string; role: string; comment: string; rating: number }>("social:addFeedback");
const likeFeedbackRef = makeFunctionReference<"mutation", { id: any }>("social:likeFeedback");

function formatCommentDate(timestamp?: number): string {
  if (!timestamp) return "Zojuist";
  try {
    const diffMs = Date.now() - timestamp;
    const diffMinutes = Math.floor(diffMs / 60000);
    if (diffMinutes < 1) return "Zojuist";
    if (diffMinutes < 60) return `${diffMinutes}m geleden`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}u geleden`;
    return new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "short", year: "numeric" }).format(new Date(timestamp));
  } catch {
    return "Recent";
  }
}

interface FeedbackViewProps {
  isLive: boolean;
  comments: CommentItem[];
  onSubmit: (data: { author: string; role: string; comment: string; rating: number }) => Promise<void> | void;
  onLike?: (id: string) => Promise<void> | void;
}

function FeedbackView({ isLive, comments, onSubmit, onLike }: FeedbackViewProps) {
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("Klasgenoot");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const averageRating = useMemo(() => {
    if (comments.length === 0) return "5.0";
    const total = comments.reduce((acc, c) => acc + (c.rating || 5), 0);
    return (total / comments.length).toFixed(1);
  }, [comments]);

  const handleLike = (id: string) => {
    setLikedIds((prev) => ({ ...prev, [id]: true }));
    if (onLike) onLike(id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAuthor = author.trim();
    const cleanComment = comment.trim();
    if (!cleanAuthor || !cleanComment) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await onSubmit({
        author: cleanAuthor,
        role,
        comment: cleanComment,
        rating,
      });

      setAuthor("");
      setComment("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Fout bij het plaatsen van reactie:", err);
      setErrorMessage("Er ging iets mis bij het versturen. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-16 rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-lg shadow-zinc-100 dark:shadow-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-6 mb-8">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <MessageSquare className="h-3.5 w-3.5" />
              Realtime Feedback & Beoordeling
            </div>

            {/* Live indicator badge */}
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Wifi className="h-3 w-3" />
                Live Convex Sync
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[11px] font-medium text-zinc-600 dark:text-zinc-300">
                <Radio className="h-3 w-3 text-zinc-400" />
                Lokaal Demo
              </span>
            )}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
            Docenten- & Peer Feedback
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Beoordeel Yonathan&apos;s onderzoek en laat live een opmerking of tip achter.
          </p>
        </div>

        {/* Aggregate rating badge */}
        <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-950/40 px-4 py-2.5 rounded-2xl border border-amber-200/80 dark:border-amber-800/60">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
              {averageRating}
            </span>
            <span className="text-xs text-zinc-400">/ 5.0</span>
          </div>
          <div className="h-4 w-px bg-amber-200 dark:bg-amber-800" />
          <span className="text-xs text-amber-900 dark:text-amber-200 font-medium">
            {comments.length} {comments.length === 1 ? "review" : "reviews"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <form onSubmit={handleSubmit} className="lg:col-span-5 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Jouw Naam
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Bijv. Dhr. Bakker (Docent) of Liam"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Jouw Rol
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs text-zinc-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-white"
            >
              <option value="Docent Informatietechnologie">Docent Informatietechnologie</option>
              <option value="Klasgenoot (4m3)">Klasgenoot (4m3)</option>
              <option value="Gast / Ouder">Gast / Ouder</option>
              <option value="Examinator">Examinator</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Beoordeling (1-5 sterren)
            </label>
            <div className="flex items-center gap-1.5 pt-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 text-zinc-300 hover:text-amber-400 focus:outline-none transition-colors"
                >
                  <Star
                    className={`h-5 w-5 ${
                      star <= rating ? "fill-amber-400 text-amber-400" : "text-zinc-300 dark:text-zinc-700"
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs text-zinc-500 font-mono ml-2">{rating}/5</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Opmerking of Beoordeling
            </label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Deel wat je opvalt aan het onderzoek, de 3 grafieken of het advies..."
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 py-2.5 text-xs font-semibold text-white shadow-md hover:opacity-95 transition-opacity disabled:opacity-60"
          >
            <SendIcon size={18} active={isSubmitting} color="#FFFFFF" />
            <span>{isSubmitting ? "Plaatsen..." : "Plaats Beoordeling"}</span>
          </button>

          {errorMessage && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-800 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {submitted && (
            <div className="flex items-center gap-2.5 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
              <SuccessIcon size={20} active={true} color="#059669" />
              <span>Bedankt voor je feedback! Je reactie is toegevoegd.</span>
            </div>
          )}
        </form>

        {/* Comment List */}
        <div className="lg:col-span-7 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            Recente Reacties ({comments.length})
          </h4>
          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
            {comments.map((item) => {
              const isLiked = likedIds[item.id] ?? false;
              const likeCount = (item.likes || 0) + (isLiked ? 1 : 0);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-800/40 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 font-bold text-xs">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-white">
                          {item.author}
                        </p>
                        <span className="text-[10px] text-zinc-400">
                          {item.role} &bull; {item.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleLike(item.id)}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-mono transition-all ${
                          isLiked
                            ? "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-900"
                            : "bg-white dark:bg-zinc-800 text-zinc-500 border-zinc-200 dark:border-zinc-700 hover:border-rose-200"
                        }`}
                        title="Vind dit nuttig"
                      >
                        <HeartIcon size={14} active={isLiked} color={isLiked ? "#EF4444" : "#9CA3AF"} />
                        <span>{likeCount}</span>
                      </button>

                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    &quot;{item.comment}&quot;
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Connected Convex Container
function ConvexConnectedFeedback() {
  const convexFeedback = useQuery(getFeedbackRef) as ConvexFeedbackDoc[] | undefined;
  const addFeedbackMutation = useMutation(addFeedbackRef);
  const [localComments, setLocalComments] = useState<CommentItem[]>([]);

  const comments: CommentItem[] = useMemo(() => {
    if (convexFeedback && Array.isArray(convexFeedback) && convexFeedback.length > 0) {
      return convexFeedback.map((doc) => ({
        id: doc._id,
        author: doc.author,
        role: doc.role,
        comment: doc.comment,
        rating: doc.rating,
        likes: doc.likes ?? 0,
        date: formatCommentDate(doc.createdAt ?? doc._creationTime),
      }));
    }

    if (localComments.length > 0) {
      return localComments;
    }

    return initialFeedback;
  }, [convexFeedback, localComments]);

  const likeFeedbackMutation = useMutation(likeFeedbackRef);

  const handleLike = async (id: string) => {
    // Optimistically update local comments
    setLocalComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c))
    );
    try {
      if (id && !id.startsWith("opt-") && !id.startsWith("local-")) {
        await likeFeedbackMutation({ id: id as any });
      }
    } catch (err) {
      console.warn("Like mutation failed:", err);
    }
  };

  const handleSubmit = async (data: { author: string; role: string; comment: string; rating: number }) => {
    // Optimistic local update
    const optimisticItem: CommentItem = {
      id: `opt-${Date.now()}`,
      author: data.author,
      role: data.role,
      comment: data.comment,
      rating: data.rating,
      likes: 0,
      date: "Zojuist",
    };

    setLocalComments((prev) => [optimisticItem, ...prev]);

    try {
      await addFeedbackMutation(data);
    } catch (err) {
      // Revert or fallback if mutation failed
      console.warn("Convex mutation failed, retaining in local state:", err);
    }
  };

  return <FeedbackView isLive={true} comments={comments} onSubmit={handleSubmit} onLike={handleLike} />;
}

// Local Fallback Container
function LocalFallbackFeedback() {
  const [comments, setComments] = useState<CommentItem[]>(initialFeedback);

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c))
    );
  };

  const handleSubmit = (data: { author: string; role: string; comment: string; rating: number }) => {
    const newEntry: CommentItem = {
      id: `local-${Date.now()}`,
      author: data.author,
      role: data.role,
      comment: data.comment,
      rating: data.rating,
      likes: 0,
      date: "Zojuist",
    };
    setComments((prev) => [newEntry, ...prev]);
  };

  return <FeedbackView isLive={false} comments={comments} onSubmit={handleSubmit} onLike={handleLike} />;
}

// Error boundary to gracefully catch any Convex provider / connection failures
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ConvexErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.warn("ConvexErrorBoundary caught error, falling back to local demo:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function FeedbackSection() {
  if (hasConvexUrl) {
    return (
      <ConvexErrorBoundary fallback={<LocalFallbackFeedback />}>
        <ConvexConnectedFeedback />
      </ConvexErrorBoundary>
    );
  }
  return <LocalFallbackFeedback />;
}
