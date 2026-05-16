"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

const AVATAR_GRADIENTS = [
  ["#1D4ED8", "#2563EB"],
  ["#7C3AED", "#8B5CF6"],
  ["#059669", "#10B981"],
  ["#B45309", "#F59E0B"],
  ["#BE123C", "#F43F5E"],
  ["#0369A1", "#06B6D4"],
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

function Avatar({ name, index, size = "lg" }: { name: string; index: number; size?: "sm" | "lg" }) {
  const [from, to] = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  const dim = size === "lg" ? "w-13 h-13" : "w-9 h-9";
  const text = size === "lg" ? "text-xl" : "text-sm";
  return (
    <div
      className={`${dim} rounded-2xl flex items-center justify-center font-bold ${text} text-white shrink-0`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {name[0]}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    []
  );

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => navigate(1), 5000);
    return () => clearInterval(id);
  }, [paused, navigate]);

  const t = TESTIMONIALS[current];

  return (
    <section
      className="section-padding relative"
      style={{ background: "#EFF6FF", overflowX: "hidden" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.3) 30%, rgba(6,182,212,0.2) 70%, transparent 100%)" }}
      />

      <div className="container-xl">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-5" variant="cyan">Customer Stories</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.9rem)", lineHeight: 1.15 }}
          >
            Businesses that run on{" "}
            <span className="gradient-text">Kassapos</span>
          </h2>
          <p className="text-base text-slate-500 max-w-md mx-auto">
            From Chennai kirana stores to multi-branch textile showrooms — real results, real businesses.
          </p>
        </ScrollReveal>

        {/* Featured testimonial */}
        <div
          className="max-w-3xl mx-auto mb-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.38, ease: EASE_EXPO }}
                className="rounded-3xl p-8 md:p-10 relative overflow-hidden border"
                style={{
                  background: "#FFFFFF",
                  borderColor: "#E2E8F0",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.03) 0%, transparent 70%)" }}
                />

                {/* Giant quote mark */}
                <Quote
                  size={72}
                  className="absolute top-6 right-8 opacity-[0.05] rotate-180 text-brand-400"
                />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={17} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 relative z-10"
                  style={{ fontFamily: "var(--kp-font-display)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author row */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    <Avatar name={t.name} index={current} size="lg" />
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role} · {t.business}</p>
                      <p className="text-xs text-slate-400 mt-0.5">📍 {t.city} · {t.industry}</p>
                    </div>
                  </div>

                  {/* Verified badge */}
                  <div
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      borderColor: "rgba(16,185,129,0.2)",
                      color: "#059669",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified Customer
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all border"
              style={{
                background: "#FFFFFF",
                borderColor: "#E2E8F0",
                color: "#94A3B8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E8F0";
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="transition-all rounded-full"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? "#2563EB" : "#E2E8F0",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all border"
              style={{
                background: "#FFFFFF",
                borderColor: "#E2E8F0",
                color: "#94A3B8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E8F0";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mini card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-w-0">
          {TESTIMONIALS.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.name}
              className="rounded-2xl p-5 border min-w-0 overflow-hidden"
              style={{
                background: "#FFFFFF",
                borderColor: "#E2E8F0",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, ease: EASE_EXPO }}
            >
              <Stars />
              <p className="text-sm text-slate-700 leading-relaxed my-3.5 line-clamp-3">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                <Avatar name={item.name} index={i} size="sm" />
                <div>
                  <p className="text-xs font-semibold text-slate-900">{item.name}</p>
                  <p className="text-[10px] text-slate-400">{item.business} · {item.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google rating badge */}
        <ScrollReveal className="text-center mt-10" delay={0.15}>
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
            style={{
              background: "rgba(245,158,11,0.06)",
              borderColor: "rgba(245,158,11,0.15)",
            }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-sm text-slate-500">on Google · 500+ verified reviews</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
