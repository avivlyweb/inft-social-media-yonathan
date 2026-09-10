"use client";

import { useState } from "react";
import { Sparkles, CheckCircle, Smartphone, Moon, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";

export function BalanceQuiz() {
  const [hours, setHours] = useState<number>(3);
  const [inBed, setInBed] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [scoreCalculated, setScoreCalculated] = useState<boolean>(false);

  const calculateScore = () => {
    setScoreCalculated(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  let advice = "";
  let badgeColor = "";
  if (hours <= 2 && !inBed) {
    advice = "Geweldig! Je hebt een bewuste en gezonde schermbalans. Je slaap en focus blijven optimaal beschermd.";
    badgeColor = "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800";
  } else if (hours <= 4) {
    advice = "Gemiddelde balans. Let op: het gebruik van je telefoon in bed kan je inslaaptijd met 30 tot 60 minuten verlengen.";
    badgeColor = "text-amber-500 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800";
  } else {
    advice = "Hoog risico op overprikkeling en slaaptekort. Volg de tips van Yonathan: leg je telefoon minimaal 45 minuten voor het slapen buiten bereik.";
    badgeColor = "text-rose-500 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800";
  }

  return (
    <div className="rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white">
            Interactieve Scherm & Balans Check
          </h3>
          <p className="text-xs text-zinc-500">
            Ontdek of jouw sociale media gewoontes in balans zijn met je nachtrust en focus.
          </p>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div>
          <div className="flex justify-between items-center text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            <span className="flex items-center gap-1.5">
              <Smartphone className="h-3.5 w-3.5 text-indigo-500" />
              Dagelijkse Schermtijd op Social Media
            </span>
            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
              {hours} {hours === 1 ? "uur" : "uur"} per dag
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
              setScoreCalculated(false);
            }}
            className="w-full accent-indigo-600 h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
          />
          <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
            <span>1 uur (minimaal)</span>
            <span>4 uur (gemiddeld)</span>
            <span>8+ uur (extreem)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-800/40 cursor-pointer">
            <input
              type="checkbox"
              checked={inBed}
              onChange={(e) => {
                setInBed(e.target.checked);
                setScoreCalculated(false);
              }}
              className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <div className="text-xs">
              <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                <Moon className="h-3 w-3 text-cyan-500" /> Telefoon in bed
              </span>
              <p className="text-[10px] text-zinc-400">Ik scroll nog na 22:00 in het donker</p>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-800/40 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => {
                setNotifications(e.target.checked);
                setScoreCalculated(false);
              }}
              className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <div className="text-xs">
              <span className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                <HeartHandshake className="h-3 w-3 text-fuchsia-500" /> Meldingen aan
              </span>
              <p className="text-[10px] text-zinc-400">Ik word direct afgeleid bij een ping</p>
            </div>
          </label>
        </div>

        <button
          onClick={calculateScore}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 text-xs font-bold text-white shadow-md hover:opacity-95 transition-all"
        >
          Analyseer Mijn Balans
        </button>

        {scoreCalculated && (
          <div className={`p-4 rounded-2xl border ${badgeColor} transition-all duration-300 space-y-2`}>
            <div className="flex items-center gap-2 font-bold text-xs">
              <CheckCircle className="h-4 w-4" />
              <span>Resultaat van Yonathan&apos;s Balans Formule:</span>
            </div>
            <p className="text-xs leading-relaxed">{advice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
