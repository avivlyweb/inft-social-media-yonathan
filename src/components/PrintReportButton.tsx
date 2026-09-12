"use client";

import { useState } from "react";
import { DownloadDoneIcon } from "@/components/AnimatedStateIcons";

interface PrintReportButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "minimal";
}

export function PrintReportButton({
  className = "",
  variant = "primary",
}: PrintReportButtonProps) {
  const [hasPrinted, setHasPrinted] = useState(false);

  const handlePrint = () => {
    setHasPrinted(true);
    if (typeof window !== "undefined") {
      window.print();
    }
    setTimeout(() => {
      setHasPrinted(false);
    }, 4000);
  };

  if (variant === "secondary") {
    return (
      <button
        onClick={handlePrint}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2.5 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700 shadow-xs transition-all cursor-pointer no-print ${className}`}
        title="Print of bewaar als PDF via het browser afdrukmenu"
      >
        <DownloadDoneIcon size={18} active={hasPrinted} color="currentColor" />
        <span>{hasPrinted ? "Afdrukvenster geopend" : "Exporteer / Print Rapport"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handlePrint}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 dark:bg-white px-5 py-3 text-xs font-bold text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md hover:shadow-lg transition-all cursor-pointer no-print group ${className}`}
      title="Print of bewaar als PDF via het browser afdrukmenu"
    >
      <DownloadDoneIcon size={20} active={hasPrinted} color="currentColor" />
      <span>{hasPrinted ? "Afdrukmenu geopend..." : "Exporteer / Print Onderzoeksrapport"}</span>
      <span className="hidden sm:inline-block text-[10px] opacity-70 font-normal border-l border-zinc-700 dark:border-zinc-300 pl-2 ml-0.5">
        PDF / A4
      </span>
    </button>
  );
}
