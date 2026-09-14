import Link from "next/link";
import Image from "next/image";
import { authorInfo } from "@/data/researchData";
import { BalanceQuiz } from "@/components/BalanceQuiz";
import {
  CheckCircle2,
  HeartHandshake,
  Moon,
  Sparkles,
  Smartphone,
  Quote,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ConclusiePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4 border-b border-[#E3DDD1] pb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] border border-[#E3DDD1] px-3.5 py-1 text-xs font-semibold text-[#5C6E58] font-mono tracking-wide">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Dossier Deel 3 &bull; Eindconclusie & Aanbevelingen
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1F1D1A]">
          Eindconclusie & Bewust Gebruik
        </h1>
        <p className="text-base text-[#5A544A] leading-relaxed">
          Hoe houden we de regie over onze aandacht? De bevindingen samengevat in concrete handvatten voor scholieren, jongeren en volwassenen.
        </p>
      </div>

      {/* Quote Banner (Exacte slotzin van Yonathan's InDesign poster) */}
      <div className="relative rounded-3xl border border-[#E3DDD1] bg-gradient-to-br from-[#FAF8F5] via-white to-[#F4EFE6] p-8 sm:p-12 shadow-xs">
        <Quote className="h-10 w-10 text-[#C26747]/40 mb-4" />
        <blockquote className="font-heading text-xl sm:text-2xl font-bold text-[#1F1D1A] leading-relaxed max-w-4xl">
          &ldquo;Sociale media kan leuk en handig zijn, maar het is belangrijk om een goede balans te vinden. Gebruik het bewust, zodat het jouw leven verrijkt en niet bepaalt.&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#24211D] text-[#FAF8F5] flex items-center justify-center font-bold text-xs font-mono">
            YH
          </div>
          <div>
            <p className="text-xs font-bold text-[#1F1D1A]">{authorInfo.name}</p>
            <p className="text-[11px] text-[#7A7366] font-mono">{authorInfo.class} &bull; {authorInfo.course}</p>
          </div>
        </div>
      </div>

      {/* 4 Concrete Balanstips */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E3DDD1] pb-3">
          <h2 className="font-heading text-2xl font-bold text-[#1F1D1A]">
            4 Praktische Tips voor een Gezonde Balans
          </h2>
          <span className="text-xs text-[#7A7366] font-mono">Aanbevelingen uit het onderzoek</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 shadow-xs space-y-3 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#5C6E58] border border-[#E3DDD1] flex items-center justify-center">
              <Moon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1D1A]">
              1. Schermvrij voor het slapen
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Leg je smartphone 45 minuten voor bedtijd weg om de melatonine-aanmaak niet te onderbreken.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 shadow-xs space-y-3 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#8C6D4F] border border-[#E3DDD1] flex items-center justify-center">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1D1A]">
              2. Beperk meldingen
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Zet notificaties uit voor niet-urgente apps. Jij bepaalt wanneer je kijkt, niet het algoritme.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 shadow-xs space-y-3 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#C26747] border border-[#E3DDD1] flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1D1A]">
              3. Tijdslimieten instellen
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Stel app-limieten in op je telefoon (bijv. max 45 minuten TikTok per dag) voor direct inzicht.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E3DDD1] bg-white/90 p-6 shadow-xs space-y-3 hover:border-[#5C6E58]/60 transition-all">
            <div className="h-10 w-10 rounded-2xl bg-[#F4EFE6] text-[#3D5A50] border border-[#E3DDD1] flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1D1A]">
              4. Offline ontmoeten
            </h3>
            <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
              Vervang doelloos scrollen door fysieke interactie, sport, muziek of buitensportactiviteiten.
            </p>
          </div>
        </div>
      </section>

      {/* Japandi Visual Art Bridge */}
      <div className="relative overflow-hidden rounded-3xl border border-[#E3DDD1] bg-[#24211D] text-[#FAF8F5] shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-7 sm:p-12 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38332C] border border-[#4F483F] px-3.5 py-1 text-xs font-semibold text-[#D8CFBC] font-mono">
              <Sparkles className="h-3.5 w-3.5 text-[#C26747]" />
              Mindful Digitaal Leven
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FAF8F5] leading-tight">
              Regie over jouw tijd: rust in een digitale wereld
            </h3>
            <p className="text-xs sm:text-sm text-[#D5CEBF] leading-relaxed">
              Sociale media is ontworpen om vast te houden. Maar door bewuste pauzes in te bouwen en je slaapkamer heilig schermvrij te houden, transformeer je technologie van een afleiding naar een krachtig hulpmiddel.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#A39B8B] font-mono">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#5C6E58]" /> +365u focus per jaar
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C26747]" /> Rustiger inslapen
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-64 sm:h-80 w-full">
            <Image
              src="/illustrations/balance-hourglass.jpg"
              alt="Japandi kunstwerk van zandloper en mindful tijd"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Interactive Quiz Component */}
      <BalanceQuiz />

      {/* Back to Home CTA */}
      <div className="pt-6 flex justify-between items-center border-t border-[#E3DDD1]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#24211D] hover:bg-[#38332C] px-6 py-3 text-xs sm:text-sm font-bold text-[#FAF8F5] shadow-xs transition-all"
        >
          <span>Terug naar Home</span>
          <ArrowRight className="h-4 w-4 opacity-80" />
        </Link>
      </div>
    </div>
  );
}
