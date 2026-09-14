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
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-[#E3DDD1] bg-white px-4 py-2.5 text-xs font-bold text-[#1F1D1A] hover:bg-[#FAF8F5] shadow-2xs transition-all cursor-pointer no-print ${className}`}
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
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#24211D] hover:bg-[#38332C] px-5 py-3 text-xs font-bold text-[#FAF8F5] shadow-xs hover:shadow-md transition-all cursor-pointer no-print group ${className}`}
      title="Print of bewaar als PDF via het browser afdrukmenu"
    >
      <DownloadDoneIcon size={20} active={hasPrinted} color="currentColor" />
      <span>{hasPrinted ? "Afdrukmenu geopend..." : "Exporteer / Print Onderzoeksrapport"}</span>
      <span className="hidden sm:inline-block text-[10px] opacity-70 font-normal border-l border-[#5A544A] pl-2 ml-0.5 font-mono">
        PDF / A4
      </span>
    </button>
  );
}
