import Link from "next/link";
import { authorInfo } from "@/data/researchData";
import { GraduationCap, Mail } from "lucide-react";
import { JapandiLogo } from "@/components/JapandiLogo";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-zinc-800 dark:bg-zinc-950 mt-auto print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <JapandiLogo className="h-7 w-7 flex-shrink-0" size={28} />
              <span className="font-heading font-bold text-zinc-900 dark:text-white">
                SocialMedia<span className="text-indigo-600 dark:text-indigo-400">.INFT</span>
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Onderzoek naar het gebruik van sociale media, leeftijdsverdeling en de balans tussen voor- en nadelen.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-medium text-zinc-700 dark:text-zinc-300 w-fit">
                <GraduationCap className="h-3.5 w-3.5 text-indigo-500" />
                {authorInfo.assignment} &bull; {authorInfo.academicYear}
              </div>
              <a
                href={`mailto:${authorInfo.email}`}
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors pl-1"
              >
                <Mail className="h-3 w-3" />
                {authorInfo.email}
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Pagina&apos;s</h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Homepage (Overzicht)
                </Link>
              </li>
              <li>
                <Link href="/onderzoek" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Onderzoek (Achtergrond & Voor/Nadelen)
                </Link>
              </li>
              <li>
                <Link href="/grafieken" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  3 Grafieken & Data (Leeftijdsverdeling & Impact)
                </Link>
              </li>
              <li>
                <Link href="/conclusie" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Conclusie (Balans & Advies)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60 shadow-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Gemaakt door
            </span>
            <div className="space-y-1">
              <p className="text-sm font-bold text-zinc-900 dark:text-white">{authorInfo.name}</p>
              <p className="text-xs text-zinc-500">{authorInfo.class} &bull; {authorInfo.course}</p>
            </div>
            <p className="text-[11px] text-zinc-500 italic border-l-2 border-indigo-500 pl-3">
              &quot;{authorInfo.quote}&quot;
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200/60 dark:border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {authorInfo.name} &bull; Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <span>Powered by Next.js &bull; Convex &bull; Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
