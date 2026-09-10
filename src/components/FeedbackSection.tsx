"use client";

import { useState } from "react";
import { MessageSquare, Star, Send, User, CheckCircle } from "lucide-react";

interface CommentItem {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}

const initialFeedback: CommentItem[] = [
  {
    id: "1",
    author: "M. van der Meer",
    role: "Docent Informatietechnologie",
    comment: "Sterke interactieve vertaling van de InDesign poster naar een professionele website. De 3 grafieken en datavisualisaties zijn overzichtelijk!",
    rating: 5,
    date: "10 sep 2026",
  },
  {
    id: "2",
    author: "Sophie (Klas 4m3)",
    role: "Klasgenoot",
    comment: "Heel herkenbaar over die schermtijd voor het slapen gaan. De donutchart van de leeftijden is super duidelijk.",
    rating: 5,
    date: "9 sep 2026",
  },
];

export function FeedbackSection() {
  const [comments, setComments] = useState<CommentItem[]>(initialFeedback);
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("Klasgenoot");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newEntry: CommentItem = {
      id: Date.now().toString(),
      author: author.trim(),
      role,
      comment: comment.trim(),
      rating,
      date: "Zojuist",
    };

    setComments([newEntry, ...comments]);
    setAuthor("");
    setComment("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="mt-16 rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-lg shadow-zinc-100 dark:shadow-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            <MessageSquare className="h-3.5 w-3.5" />
            Convex Realtime Feedback & Beoordeling
          </div>
          <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-white">
            Wat vind je van dit onderzoek?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500">
            Laat een reactie of beoordeling achter voor Yonathan (gekoppeld via Convex).
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-zinc-50 dark:bg-zinc-800/60 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-700 dark:text-zinc-300">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="font-bold">4.9 / 5.0</span>
          <span className="text-zinc-400">({comments.length} beoordelingen)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Jouw Naam
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Bijv. Dhr. Jansen of Lucas"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-xs text-zinc-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white dark:focus:border-indigo-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Rol
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 py-2.5 text-xs text-zinc-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                <option value="Docent">Docent INFT</option>
                <option value="Klasgenoot">Klasgenoot (4m)</option>
                <option value="Bezoeker">Bezoeker</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Cijfer / Waardering
              </label>
              <div className="flex items-center gap-1 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 focus:outline-none hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`h-4 w-4 ${
                        star <= rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-zinc-300 dark:text-zinc-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Jouw Feedback / Toelichting
            </label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Wat vind je van de uitwerking, grafieken of de conclusie?"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-xs text-zinc-900 focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white dark:focus:border-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 py-2.5 text-xs font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
          >
            <Send className="h-3.5 w-3.5" />
            Plaats Beoordeling
          </button>

          {submitted && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
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
            {comments.map((item) => (
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

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  &quot;{item.comment}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
