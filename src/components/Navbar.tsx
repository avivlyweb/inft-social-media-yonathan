"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpen, CheckCircle2, Home, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Onderzoek", href: "/onderzoek", icon: BookOpen },
  { name: "3 Grafieken & Data", href: "/grafieken", icon: BarChart3 },
  { name: "Conclusie & Balans", href: "/conclusie", icon: CheckCircle2 },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold tracking-tight text-zinc-900 dark:text-white text-base sm:text-lg">
                SocialMedia<span className="text-indigo-600 dark:text-indigo-400 font-extrabold">.INFT</span>
              </span>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                4m3
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block">
              Onderzoek door Yonathan Hidrian
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full md:hidden" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
