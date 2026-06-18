"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Building2, Users, Award } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

const STATS = [
  { icon: <Award size={18} />, value: "15+", label: "Years of Innovation" },
  { icon: <Users size={18} />, value: "7,500+", label: "Businesses Trust Us" },
  { icon: <Building2 size={18} />, value: "20+", label: "Industries Served" },
];

export function FounderStrip() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #F0F6FF 0%, #FFFFFF 50%, #EEF4FF 100%)",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -80, left: -80,
          width: 320, height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -60, right: -60,
          width: 280, height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <ScrollReveal>
            <SectionLabel className="mb-5">Meet the Founder</SectionLabel>

            {/* Big quote mark */}
            <div className="mb-3">
              <Quote
                size={44}
                style={{ color: "#2563EB", opacity: 0.25, transform: "scaleX(-1)" }}
              />
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: EASE_EXPO }}
              className="font-display font-bold text-slate-900 mb-6"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              We built Kassapos because India&apos;s retailers{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #2563EB, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                deserved better
              </span>{" "}
              than paper and pen.
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.5, ease: EASE_EXPO }}
              className="text-slate-500 mb-8"
              style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: 480 }}
            >
              15 years later, 7,500+ businesses trust us every single day —
              and we&apos;re just getting started. Our mission is to put
              enterprise-grade technology in every Indian shopkeeper&apos;s hands.
            </motion.p>

            {/* Founder identity */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.5, ease: EASE_EXPO }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-[2.5px] rounded-full" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }} />
              <div>
                <p className="font-bold text-slate-900 text-base">T. Saravana Kumar</p>
                <p className="text-sm text-slate-400">Managing Director &amp; Founder · Kassapos Software Solutions Pvt Ltd</p>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.08, duration: 0.45, ease: EASE_EXPO }}
                  className="flex flex-col gap-2 rounded-2xl p-4"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8EDF5",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB" }}
                  >
                    {s.icon}
                  </div>
                  <p className="font-extrabold text-slate-900 text-xl leading-none">{s.value}</p>
                  <p className="text-xs text-slate-500" style={{ lineHeight: 1.4 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── RIGHT: Founder image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind image */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: 0,
                borderRadius: 28,
                background: "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(37,99,235,0.14) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.08)",
              }}
            />

            {/* Image card */}
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(37,99,235,0.14), 0 4px 20px rgba(0,0,0,0.1)",
                border: "1px solid rgba(37,99,235,0.12)",
                maxWidth: 400,
                width: "100%",
              }}
            >
              <Image
                src="/images/founder1.png"
                alt="T. Saravana Kumar — Founder & Managing Director, Kassapos"
                width={400}
                height={500}
                loading="lazy"
                style={{ width: "100%", height: "auto", display: "block" }}
              />

              {/* Bottom info overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(0deg, rgba(10,18,50,0.82) 0%, rgba(10,18,50,0.0) 100%)",
                  padding: "48px 20px 20px",
                }}
              >
                <p className="font-bold text-white text-base leading-tight">T. Saravana Kumar</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(219,234,254,0.8)" }}>
                  Founder &amp; Managing Director
                </p>

                {/* Verified badge */}
                <div
                  className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(34,197,94,0.18)",
                    border: "1px solid rgba(34,197,94,0.3)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#22C55E" }}
                  />
                  <span className="text-[11px] font-semibold" style={{ color: "#86EFAC" }}>
                    Verified Founder
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
