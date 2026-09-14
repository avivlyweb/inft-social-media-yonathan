"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PlayPauseIcon } from "@/components/AnimatedStateIcons";

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => {
        console.warn("Video playback error:", err);
      });
    } else {
      video.pause();
    }
  };

  return (
    <div className="mt-14 sm:mt-18 max-w-5xl mx-auto">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:rounded-[32px] border border-[#E3DDD1] bg-[#F4EFE6] shadow-xl shadow-[#1F1D1A]/5 group">
        {/* Instant Static Poster Fallback */}
        <Image
          src="/illustrations/hero-social-media.jpg"
          alt="Japandi illustratie van jongeren en schermtijd op smartphones"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
          className={`object-cover object-center transition-opacity duration-1000 ease-out ${
            isVideoReady ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Lightweight Background Video */}
        <video
          ref={videoRef}
          src="/illustrations/hero-video.mp4"
          poster="/illustrations/hero-social-media.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          onPlaying={() => setIsVideoReady(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Japandi Organic Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F1D1A]/70 via-[#1F1D1A]/15 to-transparent" />

        {/* Floating Japandi Monograph Pill */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 rounded-full border border-white/30 bg-[#FAF8F5]/85 backdrop-blur-md px-3.5 py-1.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#5C6E58] animate-pulse" />
          <span className="font-mono text-[11px] font-semibold text-[#1F1D1A] uppercase tracking-wider">
            {isVideoReady ? "Dossier Video • Levend Beeld" : "Dossier Beeld • Schermtijd & Connectie"}
          </span>
        </div>

        {/* Bottom Bar: Title, Context, and Play/Pause Controller */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
          <div className="max-w-xl">
            <p className="font-heading font-bold text-base sm:text-lg tracking-tight text-white drop-shadow-sm">
              De Digitale Aandachtseconomie in Beeld
            </p>
            <p className="text-xs sm:text-sm text-[#F4EFE6]/90 line-clamp-2 leading-relaxed">
              Hoe constante connectiviteit, micro-video&apos;s en notificaties het dagelijks leven van jongeren en jongvolwassenen vormgeven.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#EAE4D7]">
              <span>12–25 jaar &bull; 3–4.5u/dag</span>
            </div>

            {/* Smart Play / Pause Controller */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pauzeer achtergrondvideo" : "Speel achtergrondvideo af"}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/25 text-white text-xs font-mono transition-all shadow-xs cursor-pointer hover:scale-105"
            >
              <PlayPauseIcon size={16} color="#FAF8F5" active={isPlaying} />
              <span className="text-[10px] hidden xs:inline">
                {isPlaying ? "Pauzeer" : "Afspelen"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Figure Caption */}
      <p className="mt-3 text-center text-[11px] font-mono text-[#7A7366]">
        Figuur 1.0 &bull; Geanimeerde visuele synthese van schermtijd, prikkelverwerking en sociale interactie
      </p>
    </div>
  );
}
