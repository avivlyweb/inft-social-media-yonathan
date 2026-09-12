"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Home,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Calculator,
  Flame,
} from "lucide-react";
import { JapandiLogo } from "@/components/JapandiLogo";
import { MenuCloseIcon } from "@/components/AnimatedStateIcons";

const navItems = [
  {
    name: "Home",
    href: "/",
    desc: "Overzicht & highlights",
    icon: Home,
  },
  {
    name: "Onderzoek",
    href: "/onderzoek",
    desc: "Motieven, voor- en nadelen",
    icon: BookOpen,
  },
  {
    name: "3 Grafieken & Data",
    href: "/grafieken",
    desc: "Leeftijdsverdeling & impactcijfers",
    icon: BarChart3,
    badge: "3 Grafieken",
  },
  {
    name: "Conclusie & Balans",
    href: "/conclusie",
    desc: "Advies & Interactieve Balanstest",
    icon: CheckCircle2,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change without effect setState cascade
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll only on small screens when open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#E3DDD1] bg-[#FAF8F5]/90 backdrop-blur-md transition-colors print:hidden">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <JapandiLogo className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-extrabold tracking-tight text-[#1F1D1A] text-base sm:text-lg">
                  SocialMedia<span className="text-[#5C6E58]">.INFT</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-[#F4EFE6] px-2 py-0.5 text-[10px] font-mono font-bold text-[#5A544A] border border-[#E3DDD1]">
                  4m3
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#7A7366] hidden xs:block font-medium">
                Yonathan Hidrian
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3.5 py-2 text-xs lg:text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#24211D] text-[#FAF8F5] shadow-xs"
                      : "text-[#5A544A] hover:text-[#1F1D1A] hover:bg-[#F0EBE1]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-[#D8CFBC]" : "text-[#7A7366]"}`} />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-[#38332C] text-[#EBE6DC]"
                        : "bg-[#F4EFE6] text-[#5A544A] border border-[#E3DDD1]"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <Link
              href="/conclusie#quiz"
              className="ml-2 flex items-center gap-1.5 rounded-xl bg-[#C26747] hover:bg-[#A85538] px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors"
            >
              <Flame className="h-3.5 w-3.5 text-[#FCEEEA]" />
              <span>Balanstest</span>
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-900 shadow-sm hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigatiemenu"
          >
            <MenuCloseIcon size={24} active={mobileMenuOpen} color="currentColor" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer with highest z-index and solid background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-zinc-950 md:hidden animate-in fade-in duration-200">
          {/* Mobile Drawer Top Header Bar */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="flex items-center gap-2.5">
              <JapandiLogo className="h-8 w-8 flex-shrink-0" size={32} />
              <span className="font-heading font-extrabold text-sm text-zinc-950 dark:text-white">
                SocialMedia<span className="text-indigo-600">.INFT</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              aria-label="Sluit menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Nav Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Menu & Onderdelen
              </span>
              <p className="text-xs text-zinc-500">
                Kies een pagina uit Yonathan&apos;s onderzoek
              </p>
            </div>

            <div className="space-y-2.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                      isActive
                        ? "border-indigo-600 bg-indigo-50 text-indigo-950 dark:border-indigo-500 dark:bg-indigo-950/60 dark:text-white"
                        : "border-zinc-200 bg-zinc-50/70 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                          : "bg-white text-zinc-700 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold">{item.name}</span>
                          {item.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 font-extrabold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`h-4 w-4 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-400"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Balanstool CTA */}
            <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4 dark:border-indigo-900 dark:bg-zinc-900 space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-white">
                  <Flame className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">
                  Interactieve Balanstool
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Bereken direct jouw risicoscore op schermmoeheid en melatoninevertraging.
              </p>
              <Link
                href="/conclusie#quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 text-white text-xs font-bold shadow hover:opacity-95"
              >
                Doe de Balanstest <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Footer Info inside Drawer */}
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Yonathan Hidrian &bull; Klas 4m3</span>
            <span>INFT Opdracht 4</span>
          </div>
        </div>
      )}
    </>
  );
}
