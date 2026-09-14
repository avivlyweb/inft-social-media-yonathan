import Link from "next/link";
import { prosAndCons } from "@/data/researchData";
import {
  Compass,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldAlert,
  Heart,
  Brain,
  Moon,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SuccessIcon, EyeToggleIcon } from "@/components/AnimatedStateIcons";

export default function OnderzoekPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4 border-b border-[#E3DDD1] pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] border border-[#E3DDD1] px-3.5 py-1 text-xs font-semibold text-[#5C6E58] font-mono tracking-wide">
          <Compass className="h-3.5 w-3.5" />
          Dossier Deel 1 &bull; Diepte-analyse & Context
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F1D1A]">
          Waarom gebruiken mensen Sociale Media?
        </h1>
        <p className="text-base text-[#5A544A] leading-relaxed">
          Een analyse van de fundamentele behoeften achter onze digitale interacties. Wat brengt miljoenen mensen dagelijks naar apps zoals Instagram, TikTok, WhatsApp en LinkedIn?
        </p>
      </div>

      {/* 3 Primaire Redenen (InDesign Poster Kern) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E3DDD1] pb-3">
          <h2 className="font-heading text-2xl font-bold text-[#1F1D1A]">
            De Drie Kernmotieven
          </h2>
          <span className="text-xs text-[#7A7366] font-mono">Uitwerking uit Yonathan&apos;s onderzoeksposter</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-7 shadow-xs space-y-4 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#2D2A26] border border-[#E3DDD1] flex items-center justify-center font-bold text-sm font-mono">
              01
            </div>
            <h3 className="font-heading text-lg font-bold text-[#1F1D1A]">
              Contacten met vrienden en familie
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Geografische afstanden vervagen. Of het nu gaat om familie in het buitenland of de dagelijkse groepsapp met klasgenoten: sociale media is het moderne dorpsplein geworden.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-7 shadow-xs space-y-4 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#2D2A26] border border-[#E3DDD1] flex items-center justify-center font-bold text-sm font-mono">
              02
            </div>
            <h3 className="font-heading text-lg font-bold text-[#1F1D1A]">
              Nieuws en actuele informatie
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Jongeren en volwassenen ontdekken actuele gebeurtenissen niet langer via traditionele kranten, maar via korte video-analyses, threads en live breaking-updates.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-7 shadow-xs space-y-4 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#2D2A26] border border-[#E3DDD1] flex items-center justify-center font-bold text-sm font-mono">
              03
            </div>
            <h3 className="font-heading text-lg font-bold text-[#1F1D1A]">
              Vermaak en ontspanning
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Korte sketches, memes, gaming clips en livestreams bieden direct dopaminerijk vermaak na een lange schooldag of werkdag om even de gedachten te verzetten.
            </p>
          </div>
        </div>
      </section>

      {/* Visuele Infographic: De Aandachtseconomie vs Bewuste Regie */}
      <section className="rounded-3xl border border-[#E3DDD1] bg-[#FAF8F5] p-7 sm:p-10 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C6E58] uppercase font-mono tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Onderzoeksinzicht & Infographic</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1F1D1A] tracking-tight">
            De Aandachtseconomie: Twee Paden van Mediagebruik
          </h2>
          <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
            Sociale media zijn ontworpen om aandacht vast te houden. Hoe beïnvloedt jouw gebruikswijze je mentale welzijn en energie?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Pad 1: Passief Algoritmisch Scrollen */}
          <div className="rounded-2xl border border-[#C26747]/30 bg-white/80 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C26747]/10 text-xs font-bold text-[#C26747]">
                <ShieldAlert className="h-3.5 w-3.5" />
                Valkuil: De Passieve Aandachtslus
              </span>
              <span className="text-[11px] font-mono text-[#7A7366]">&gt; 4 uur/dag</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1]">
                <Zap className="h-4 w-4 text-[#C26747] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1A]">Oneindig algoritme (Infinite Scroll)</h4>
                  <p className="text-[11px] text-[#5A544A] leading-relaxed">Geen natuurlijk stopmoment leidt tot gedachteloos doorklikken en tijdverlies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1]">
                <Brain className="h-4 w-4 text-[#C26747] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1A]">Prikkeloverbelasting & FOMO</h4>
                  <p className="text-[11px] text-[#5A544A] leading-relaxed">Vergelijking met gefilterde perfecte levens wakkert onzekerheid en fantoomnotificaties aan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1]">
                <Moon className="h-4 w-4 text-[#C26747] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1A]">Nachtelijk blauw licht</h4>
                  <p className="text-[11px] text-[#5A544A] leading-relaxed">Scrollen in bed onderdrukt melatonine en kost gemiddeld 45 minuten diepe slaap.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pad 2: Doelbewuste & Mindful Regie */}
          <div className="rounded-2xl border border-[#5C6E58]/30 bg-white/80 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5C6E58]/10 text-xs font-bold text-[#5C6E58]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Balans: Doelbewust & Mindful Gebruik
              </span>
              <span className="text-[11px] font-mono text-[#5C6E58] font-bold">1.5 – 2.5 uur/dag</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1]">
                <Heart className="h-4 w-4 text-[#5C6E58] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1A]">Directe en hechte vriendschappen</h4>
                  <p className="text-[11px] text-[#5A544A] leading-relaxed">Actief berichten sturen naar échte vrienden in plaats van uren passief consumeren.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1]">
                <Sparkles className="h-4 w-4 text-[#5C6E58] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1A]">Creatieve expressie & inspiratie</h4>
                  <p className="text-[11px] text-[#5A544A] leading-relaxed">Leren van tutorials voor fotografie, design, muziek en schoolprojecten.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E3DDD1]">
                <Clock className="h-4 w-4 text-[#5C6E58] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1A]">Vaste schermtijdlimiet & rustzones</h4>
                  <p className="text-[11px] text-[#5A544A] leading-relaxed">Telefoon na 21:30 buiten de slaapkamer opladen voor herstellende nachtrust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redactionele Split: De Voordelen vs De Nadelen */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5C6E58] font-mono">
            Kritische Afweging
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-[#1F1D1A]">
            De Voordelen versus De Nadelen
          </h2>
          <p className="text-xs sm:text-sm text-[#7A7366]">
            Zoals geformuleerd in Yonathan&apos;s InDesign poster: ieder digitaal voordeel kent een mogelijke keerzijde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voordelen Column */}
          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5C6E58] text-white shadow-xs">
                <SuccessIcon size={24} active={true} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#1F1D1A]">
                  De Voordelen
                </h3>
                <p className="text-xs text-[#7A7366]">Positieve invloeden op individu & maatschappij</p>
              </div>
            </div>

            <div className="space-y-4">
              {prosAndCons.voordelen.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E3DDD1] bg-[#FAF8F5] p-4 space-y-1 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-[#1F1D1A]">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-[#F4EFE6] text-[#5C6E58] border border-[#E3DDD1]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A544A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nadelen Column */}
          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C26747] text-white shadow-xs">
                <EyeToggleIcon size={24} active={true} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#1F1D1A]">
                  De Nadelen
                </h3>
                <p className="text-xs text-[#7A7366]">Aandachtspunten en gezondheidsrisico&apos;s</p>
              </div>
            </div>

            <div className="space-y-4">
              {prosAndCons.nadelen.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E3DDD1] bg-[#FAF8F5] p-4 space-y-1 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-[#1F1D1A]">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-[#FAF0EB] text-[#C26747] border border-[#E8D3C8]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A544A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next page link */}
      <div className="flex justify-end pt-4">
        <Link
          href="/grafieken"
          className="inline-flex items-center gap-2.5 rounded-xl bg-[#24211D] hover:bg-[#38332C] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#FAF8F5] shadow-md hover:shadow-xl transition-all"
        >
          <span>Naar Deel 2: Bekijk alle 3 Grafieken</span>
          <ArrowRight className="h-4 w-4 opacity-80" />
        </Link>
      </div>
    </div>
  );
}
