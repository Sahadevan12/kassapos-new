"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, WifiOff, BarChart3, MessageCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

const HIGHLIGHTS = [
  {
    icon: <Zap size={18} />,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    title: "3-Second Billing",
    desc: "Scan → GST → Print receipt instantly",
  },
  {
    icon: <WifiOff size={18} />,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
    title: "100% Offline Ready",
    desc: "No internet? Keep billing — syncs later",
  },
  {
    icon: <BarChart3 size={18} />,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
    title: "Live Reports",
    desc: "Real-time profit & stock alerts on mobile",
  },
  {
    icon: <MessageCircle size={18} />,
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    title: "WhatsApp Receipts",
    desc: "Auto-send digital bills to customers",
  },
];

export function GifShowcaseSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 100%)",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div className="container-xl py-16">
        {/* Heading */}
        <ScrollReveal className="text-center mb-10">
          <SectionLabel className="mx-auto mb-4">Live Demo</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
          >
            Experience the{" "}
            <span className="gradient-text">fastest POS</span>
            <br />
            software in India
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Watch Kassapos in real action — from scanning a product to printing a GST receipt in under 3 seconds. Built for speed, built for India.
          </p>
        </ScrollReveal>

        {/* GIF Frame */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
          className="relative mx-auto mb-12"
          style={{ maxWidth: 880 }}
        >
          {/* Glow backdrop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 24,
              background: "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(37,99,235,0.18) 0%, transparent 70%)",
              filter: "blur(24px)",
              transform: "translateY(16px)",
            }}
          />

          {/* GIF card */}
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(37,99,235,0.14)",
              boxShadow: "0 24px 64px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            {/* Top bar (fake browser chrome) */}
            <div
              style={{
                background: "#1E293B",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  marginLeft: 12,
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 6,
                  padding: "3px 12px",
                  fontSize: "0.72rem",
                  color: "rgba(148,163,184,0.7)",
                  maxWidth: 260,
                }}
              >
                kassapos.in — POS Dashboard
              </div>
            </div>

            {/* The actual GIF */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gif/kassapos.gif"
              alt="Kassapos POS software demo"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </motion.div>

        {/* Feature highlights row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: EASE_EXPO }}
              className="flex flex-col gap-2.5 rounded-2xl p-4"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8EDF5",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: h.bg, color: h.color }}
              >
                {h.icon}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm mb-0.5">{h.title}</p>
                <p className="text-xs text-slate-500" style={{ lineHeight: 1.55 }}>{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 btn-gradient px-8 py-3.5 rounded-2xl text-white font-semibold text-sm"
            style={{ boxShadow: "0 6px 24px rgba(37,99,235,0.28)" }}
          >
            Book a Free Live Demo
            <ArrowRight size={16} />
          </Link>
          <p className="text-xs text-slate-400 mt-3">No credit card · Free installation · 14-day trial</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
