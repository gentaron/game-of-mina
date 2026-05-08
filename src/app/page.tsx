"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Gamepad2, Scroll, BookOpen, ChevronRight, Swords } from "lucide-react"
import { useLang } from "@/lib/use-lang"
import { type Lang, tl } from "@/lib/lang"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
}

export default function HomePage() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen bg-edu-bg">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3b82f6]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-6">
              <Gamepad2 className="w-8 h-8 text-[#3b82f6]" />
            </div>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl font-bold tracking-wider text-edu-text mb-4"
          >
            GAME OF MINA
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-base text-edu-muted max-w-lg mx-auto leading-relaxed mb-8"
          >
            {lang === "en"
              ? "Mina's world of strategy and conflict — Explore the civilizations, battles, and alliances that shaped the E16 universe."
              : "Minaの戦略と対立の世界 — E16宇宙を形作った文明、戦い、そして同盟を探る。"}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-2 text-xs text-[#3b82f6]/70"
          >
            <Swords className="w-3 h-3" />
            <span>{lang === "en" ? "Mina Character Theme" : "Mina キャラクターテーマ"}</span>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/timeline"
              className="group block edu-card rounded-xl p-6 hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                  <Scroll className="w-4.5 h-4.5 text-[#3b82f6]" />
                </div>
                <h2 className="text-base font-bold text-edu-text">
                  {tl("統合年表", "Timeline", lang)}
                </h2>
              </div>
              <p className="text-xs text-edu-muted leading-relaxed mb-4">
                {lang === "en"
                  ? "From AD 3500 to the present E528 — trace the grand sweep of E16 civilization across eras and locations."
                  : "AD 3500からE528現代まで — 各時代・各場所を横断するE16文明の壮大な年表。"}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#3b82f6] group-hover:gap-2 transition-all">
                {tl("年表を見る", "View Timeline", lang)}
                <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/wiki"
              className="group block edu-card rounded-xl p-6 hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                  <BookOpen className="w-4.5 h-4.5 text-[#3b82f6]" />
                </div>
                <h2 className="text-base font-bold text-edu-text">
                  {tl("Wiki 百科事典", "Wiki Encyclopedia", lang)}
                </h2>
              </div>
              <p className="text-xs text-edu-muted leading-relaxed mb-4">
                {lang === "en"
                  ? "Characters, organizations, geography, technology, and more — a comprehensive encyclopedia of the E16 universe."
                  : "キャラクター・組織・地理・技術など — E16世界観の包括的な百科事典。"}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#3b82f6] group-hover:gap-2 transition-all">
                {tl("Wikiを見る", "View Wiki", lang)}
                <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
