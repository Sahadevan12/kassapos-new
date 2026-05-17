"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion, AnimatePresence,
  useScroll, useTransform, useSpring,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight, Play, Star, TrendingUp, Zap, Shield,
  ChevronDown, Check, Wifi, ReceiptText, Package,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EASE_EXPO } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
/* ─── Constants ─────────────────────────────────── */
const HERO_WORDS = ["Supermarkets", "Restaurants", "Retail Shops", "Textile Stores", "Cloud Billing"];

const STATS = [
  { value: 5000,  suffix: "+",    label: "Supermarkets",  icon: <TrendingUp size={13} /> },
  { value: 2500,  suffix: "+",    label: "Cloud Users",   icon: <Zap size={13} /> },
  { value: 4.9,   suffix: "★",   label: "Google Rating", icon: <Star size={13} />, decimals: 1 },
  { value: 15,    suffix: " yrs", label: "Since 2008",    icon: <Shield size={13} /> },
];

const MINI_BILLS = [
  { name: "Arjun S.", amount: 845, items: 7, time: "2m ago" },
  { name: "Priya R.", amount: 1240, items: 12, time: "5m ago" },
  { name: "Kumar V.", amount: 340, items: 3, time: "8m ago" },
];

const CHART_BARS = [45, 62, 38, 80, 55, 90, 68, 100, 74, 85, 60, 95];

/* ─── Pre-seeded particles (avoids hydration mismatch) ── */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  w:    ((i * 7919 + 13) % 100) / 100 * 3 + 1,
  h:    ((i * 6271 + 37) % 100) / 100 * 3 + 1,
  left: ((i * 4999 + 71) % 100),
  top:  ((i * 3571 + 97) % 100),
  dur:  ((i * 2311 + 53) % 100) / 100 * 5 + 4,
  del:  ((i * 1847 + 29) % 100) / 100 * 6,
}));

/* ─── Floating POS Preview ──────────────────────── */
function POSPreview() {
  const [revenue, setRevenue] = useState(124500);
  const [billCount, setBillCount] = useState(1247);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setRevenue((r) => r + Math.floor(Math.random() * 300 + 80));
      setBillCount((c) => c + 1);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="rounded-3xl overflow-hidden w-full"
      style={{
        background: "linear-gradient(160deg, #0D1629 0%, #070C1B 100%)",
        border: "1px solid rgba(37,99,235,0.3)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[11px] text-brand-100/30 font-medium ml-1">Kassapos · Live Terminal</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="live-dot" />
          <span className="text-[10px] font-semibold">LIVE</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Revenue */}
        <div>
          <p className="text-[11px] text-brand-100/40 mb-1 uppercase tracking-wider font-medium">Today&apos;s Revenue</p>
          <div className="flex items-end gap-3">
            <p className="text-3xl font-extrabold font-display text-white leading-none">
              ₹{mounted ? revenue.toLocaleString("en-IN") : "1,24,500"}
            </p>
            <span className="text-xs text-emerald-400 font-semibold mb-0.5">↑ 23%</span>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-end gap-1 h-10">
          {CHART_BARS.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm overflow-hidden" style={{ height: `${h}%` }}>
              <div
                className="w-full h-full transition-all duration-700"
                style={{
                  background: i === CHART_BARS.length - 1
                    ? "linear-gradient(180deg, #06B6D4, #2563EB)"
                    : "rgba(37,99,235,0.35)",
                  borderRadius: "2px 2px 0 0",
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Bills", value: mounted ? billCount.toLocaleString() : "1,247" },
            { label: "Avg ₹", value: "₹99.8" },
            { label: "GST", value: "✓ Filed" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl px-2 py-2 text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-[10px] text-brand-100/35">{s.label}</p>
              <p className="text-xs font-bold text-white mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Recent bills */}
        <div className="space-y-2">
          {MINI_BILLS.map((bill) => (
            <div key={bill.name} className="flex items-center gap-2.5 py-1.5 border-b border-white/[0.04] last:border-0">
              <div className="w-7 h-7 rounded-full bg-brand-400/20 flex items-center justify-center text-[11px] font-bold text-brand-300 shrink-0">
                {bill.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white/90 leading-none">{bill.name}</p>
                <p className="text-[10px] text-brand-100/30 mt-0.5">{bill.items} items · {bill.time}</p>
              </div>
              <span className="text-xs font-bold text-white shrink-0">₹{bill.amount}</span>
            </div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="flex items-center gap-2 pt-1">
          <span className="flex items-center gap-1 text-[10px] text-brand-100/40 bg-white/[0.03] rounded-full px-2.5 py-1 border border-white/[0.05]">
            <Wifi size={9} className="text-brand-400" /> Offline mode ready
          </span>
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/[0.07] rounded-full px-2.5 py-1 border border-emerald-500/[0.15]">
            <Check size={9} /> GST Compliant
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────── */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  /* Scroll parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);
  const smoothY = useSpring(scrollY, { damping: 22, stiffness: 90 });

  /* Mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bg1X  = useTransform(mouseX, [-600, 600], [25, -25]);
  const bg1Y  = useTransform(mouseY, [-400, 400], [18, -18]);
  const bg2X  = useTransform(mouseX, [-600, 600], [-20, 20]);
  const bg2Y  = useTransform(mouseY, [-400, 400], [-14, 14]);
  const prevX = useTransform(mouseX, [-600, 600], [35, -35]);
  const prevY = useTransform(mouseY, [-400, 400], [22, -22]);
  const b1X   = useTransform(mouseX, [-600, 600], [-18, 18]);
  const b1Y   = useTransform(mouseY, [-400, 400], [-14, 14]);
  const b2X   = useTransform(mouseX, [-600, 600], [22, -22]);
  const b2Y   = useTransform(mouseY, [-400, 400], [16, -16]);
  const b3X   = useTransform(mouseX, [-600, 600], [-14, 14]);
  const b3Y   = useTransform(mouseY, [-400, 400], [10, -10]);

  const sPrevX = useSpring(prevX, { damping: 30, stiffness: 120 });
  const sPrevY = useSpring(prevY, { damping: 30, stiffness: 120 });
  const sB1X   = useSpring(b1X, { damping: 25, stiffness: 100 });
  const sB1Y   = useSpring(b1Y, { damping: 25, stiffness: 100 });
  const sB2X   = useSpring(b2X, { damping: 28, stiffness: 110 });
  const sB2Y   = useSpring(b2Y, { damping: 28, stiffness: 110 });
  const sB3X   = useSpring(b3X, { damping: 22, stiffness: 90 });
  const sB3Y   = useSpring(b3Y, { damping: 22, stiffness: 90 });
  const sBg1X  = useSpring(bg1X, { damping: 40, stiffness: 80 });
  const sBg1Y  = useSpring(bg1Y, { damping: 40, stiffness: 80 });
  const sBg2X  = useSpring(bg2X, { damping: 45, stiffness: 70 });
  const sBg2Y  = useSpring(bg2Y, { damping: 45, stiffness: 70 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % HERO_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_EXPO } },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 60%)" }}
    >
      {/* ── Background layers ───────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 grid-lines opacity-60" />

        {/* Orb 1 — very subtle blue */}
        <motion.div
          style={{ x: sBg1X, y: sBg1Y }}
          className="absolute top-[-5%] left-[10%] w-[700px] h-[700px] rounded-full pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", filter: "blur(80px)" }}
          />
        </motion.div>

        {/* Orb 2 — cyan accent */}
        <motion.div
          style={{ x: sBg2X, y: sBg2Y }}
          className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <div className="w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
        </motion.div>

        {/* Floating particles — client only */}
        {mounted && PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.w, height: p.h,
              left: `${p.left}%`, top: `${p.top}%`,
              background: i % 3 === 0
                ? "rgba(37,99,235,0.3)"
                : i % 3 === 1
                ? "rgba(6,182,212,0.2)"
                : "rgba(37,99,235,0.15)",
            }}
            animate={{ y: [0, -28, 0], opacity: [0, 0.9, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.del, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Main content ────────────────────────── */}
      <motion.div
        className="container-xl relative z-10 py-28 lg:py-0 lg:h-[100svh] flex items-center"
        style={{ y: smoothY, opacity: scrollOpacity, scale: scrollScale }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-brand-600"
                style={{
                  background: "rgba(37,99,235,0.06)",
                  border: "1px solid rgba(37,99,235,0.15)",
                }}
              >
                <span className="live-dot" />
                <span>India&apos;s #1 POS Platform &nbsp;·&nbsp; 7,500+ businesses</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="mb-5">
              <h1 className="font-display font-extrabold leading-[1.03] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}>
                <span className="text-slate-900">Built for </span>
                <span className="gradient-text-hero">Speed.</span>
                <br />
                <span className="text-slate-900">Made for </span>
                <span className="gradient-text">India.</span>
                <br />
                <span className="text-slate-400 text-[0.6em]">for </span>
                <div className="inline-flex overflow-hidden align-bottom" style={{ minWidth: "clamp(8ch, 14vw, 12ch)" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: 38, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -38, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE_EXPO }}
                      className="gradient-text font-extrabold block"
                      style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
                    >
                      {HERO_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p variants={item}
              className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              From corner shops to supermarket chains — Kassapos handles every bill,
              every product, every report.{" "}
              <span className="text-brand-600 font-semibold">Cloud-ready. GST compliant. Offline-first.</span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-12">
              <Link href="/register">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={17} />}
                  className="px-8 h-14 text-[15px] rounded-2xl"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/demo">
                <button
                  className="flex items-center gap-2.5 px-6 h-14 rounded-2xl text-[15px] font-semibold transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid #E2E8F0",
                    color: "#1E293B",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(37,99,235,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E8F0";
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Play size={14} className="text-brand-500 ml-0.5" />
                  </div>
                  Watch Demo
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg"
            >
              {STATS.map((stat) => (
                <div key={stat.label}
                  className="flex flex-col gap-1 p-3.5 rounded-2xl"
                  style={{
                    background: "#F8FAFF",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div className="flex items-center gap-1.5 text-brand-500 mb-0.5">
                    {stat.icon}
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-xl font-extrabold font-display text-slate-900 leading-none">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                      duration={2200}
                    />
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating POS preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_EXPO }}
            className="hidden lg:block relative"
          >
            {/* Glow behind preview */}
            <div
              className="absolute inset-0 -m-10 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Main preview — mouse parallax */}
            <motion.div style={{ x: sPrevX, y: sPrevY }} className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero.png"
                alt="KassaPOS — POS System Dashboard"
                className="w-full h-auto block"
                style={{ maxWidth: "100%", objectFit: "contain" }}
              />
            </motion.div>

            {/* Floating badge: Bills Today */}
            <motion.div
              style={{ x: sB1X, y: sB1Y }}
              className="absolute -top-10 -left-6 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE_EXPO }}
            >
              <div
                className="rounded-2xl px-4 py-3 min-w-[130px]"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(37,99,235,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "1rem",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <ReceiptText size={12} className="text-brand-500" />
                  <p className="text-[10px] text-slate-400 font-medium">Bills Today</p>
                </div>
                <p className="text-xl font-extrabold text-slate-900">1,247</p>
                <p className="text-[10px] text-emerald-600 mt-0.5">↑ 18 vs yesterday</p>
              </div>
            </motion.div>

            {/* Floating badge: Offline Ready */}
            <motion.div
              style={{ x: sB2X, y: sB2Y }}
              className="absolute -bottom-8 -right-4 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, ease: EASE_EXPO }}
            >
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(37,99,235,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "1rem",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Wifi size={14} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Offline Mode</p>
                    <p className="text-[10px] text-emerald-500">Always works</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge: 4.9 ★ */}
            <motion.div
              style={{ x: sB3X, y: sB3Y }}
              className="absolute top-1/2 -right-6 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5, ease: EASE_EXPO }}
            >
              <div
                className="rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(37,99,235,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "1rem",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-900">4.9 / 5.0</p>
                <p className="text-[10px] text-slate-400">Google Rating</p>
              </div>
            </motion.div>

            {/* Floating badge: Inventory */}
            <motion.div
              style={{ x: sB1X, y: sB2Y }}
              className="absolute -top-6 right-10 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5, ease: EASE_EXPO }}
            >
              <div
                className="rounded-2xl px-3 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(37,99,235,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "1rem",
                }}
              >
                <div className="flex items-center gap-2">
                  <Package size={12} className="text-cyan-500" />
                  <p className="text-[11px] font-semibold text-slate-900">Stock Alert</p>
                </div>
                <p className="text-[10px] text-amber-500 mt-0.5">2 items critically low</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-slate-300" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ─────────────────────────── */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #FFFFFF)" }}
      />
    </section>
  );
}
