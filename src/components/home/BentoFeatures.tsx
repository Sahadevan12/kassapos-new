"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud, Zap, FileCheck, MessageCircle, WifiOff,
  BarChart3, GitBranch, Barcode, Heart,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

const FEATURES = [
  {
    icon: <Zap size={26} />,
    title: "3-Second Billing",
    description: "Scan → price → GST → receipt. Done in under 3 seconds. The fastest POS in India.",
    color: "#F59E0B",
    accentBg: "rgba(245,158,11,0.07)",
    demo: "billing",
  },
  {
    icon: <Cloud size={26} />,
    title: "Cloud Sync",
    description: "Real-time AWS sync across all devices and branches. Zero downtime.",
    color: "#2563EB",
    accentBg: "rgba(37,99,235,0.07)",
  },
  {
    icon: <FileCheck size={26} />,
    title: "GST e-Invoice",
    description: "IRN & QR code compliant. Auto-calculate, one-click generation.",
    color: "#10B981",
    accentBg: "rgba(16,185,129,0.07)",
  },
  {
    icon: <WifiOff size={26} />,
    title: "Works Offline",
    description: "Full billing & inventory with zero internet. Auto-syncs silently when back online.",
    color: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.07)",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Live Reports",
    description: "Revenue, profit & low-stock alerts on your phone. Check anywhere, 24/7.",
    color: "#06B6D4",
    accentBg: "rgba(6,182,212,0.07)",
  },
  {
    icon: <MessageCircle size={26} />,
    title: "WhatsApp Bills",
    description: "Instant digital receipts on customer WhatsApp after every sale.",
    color: "#22C55E",
    accentBg: "rgba(34,197,94,0.07)",
  },
  {
    icon: <GitBranch size={26} />,
    title: "Multi-Branch",
    description: "1 to 100 branches from one dashboard. Real-time sync.",
    color: "#F59E0B",
    accentBg: "rgba(245,158,11,0.07)",
  },
  {
    icon: <Barcode size={26} />,
    title: "Barcode Printing",
    description: "Custom price labels with MRP, batch & barcode — in seconds.",
    color: "#EC4899",
    accentBg: "rgba(236,72,153,0.07)",
  },
  {
    icon: <Heart size={26} />,
    title: "CRM & Loyalty",
    description: "Points, cashback, birthday offers & WhatsApp campaigns built-in.",
    color: "#EF4444",
    accentBg: "rgba(239,68,68,0.07)",
  },
];

function BillingDemo({ color }: { color: string }) {
  return (
    <div className="pt-2.5 border-t border-slate-100">
      <div className="space-y-0.5">
        {[
          { label: "Tata Salt 1kg × 2", amount: "₹44" },
          { label: "Maggi Noodles × 4", amount: "₹56" },
          { label: "GST (5%)", amount: "₹5", muted: true },
        ].map((line, i) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.09, duration: 0.32, ease: EASE_EXPO }}
            className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${color}18` }}>
                <svg width="6" height="5" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={`text-[14px] ${line.muted ? "text-slate-400" : "text-slate-600"}`}>{line.label}</span>
            </div>
            <span className={`text-[14px] font-semibold ${line.muted ? "text-slate-400" : "text-slate-700"}`}>{line.amount}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between pt-2.5"
      >
        <span className="text-sm font-bold text-slate-900">Total</span>
        <span className="text-base font-extrabold" style={{ color }}>₹105</span>
      </motion.div>
    </div>
  );
}

function FeatureCard({
  feature,
  index,
  colSpanClass,
  fill,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
  colSpanClass?: string;
  fill?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-2xl flex flex-col gap-3 overflow-hidden ${colSpanClass || ""}`}
      style={{
        alignSelf: fill ? "stretch" : "start",
        flex: fill ? 1 : undefined,
        padding: "1.4rem 1.5rem",
        background: "#FFFFFF",
        border: hovered ? "1px solid rgba(37,99,235,0.2)" : "1px solid #E8EDF5",
        boxShadow: hovered
          ? "0 8px 32px rgba(37,99,235,0.08), 0 2px 8px rgba(0,0,0,0.04)"
          : "0 1px 3px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.055, duration: 0.48, ease: EASE_EXPO }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 10%, ${feature.color}50 50%, transparent 90%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />

      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          background: hovered ? `${feature.color}14` : feature.accentBg,
          color: feature.color,
          transition: "background 0.25s ease",
        }}
      >
        {feature.icon}
      </div>

      <div>
        <h3 className="font-bold text-slate-900 text-[17px] leading-snug mb-1.5">
          {feature.title}
        </h3>
        <p className="text-[14px] text-slate-500" style={{ lineHeight: 1.55 }}>
          {feature.description}
        </p>
      </div>

      {feature.demo === "billing" && <BillingDemo color={feature.color} />}
    </motion.div>
  );
}

export function BentoFeatures() {
  return (
    <section className="section-padding" style={{ background: "#F8FAFF", padding: "52px 0 56px" }}>
      <div className="container-xl">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-4">Platform Features</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
          >
            Everything your business needs,
            <br />
            <span className="gradient-text">nothing it doesn&apos;t.</span>
          </h2>
          <p className="text-[15px] text-slate-500 max-w-lg mx-auto">
            70+ features built specifically for Indian retail.
            No unnecessary complexity — just what works.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4">

          {/* ── ROW 1: billing (left half) | cloud sync + GST stacked (right half) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard feature={FEATURES[0]} index={0} />
            <div className="flex flex-col gap-4" style={{ alignSelf: "stretch" }}>
              <FeatureCard feature={FEATURES[1]} index={1} fill />
              <FeatureCard feature={FEATURES[2]} index={2} fill />
            </div>
          </div>

          {/* ── ROW 2: offline + reports ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard feature={FEATURES[3]} index={3} fill />
            <FeatureCard feature={FEATURES[4]} index={4} fill />
          </div>

          {/* ── ROW 3: whatsapp + multibranch + barcode + crm ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
            <FeatureCard feature={FEATURES[5]} index={5} />
            <FeatureCard feature={FEATURES[6]} index={6} />
            <FeatureCard feature={FEATURES[7]} index={7} />
            <FeatureCard feature={FEATURES[8]} index={8} />
          </div>

        </div>

        <ScrollReveal className="text-center mt-10">
          <a
            href="/features"
            className="inline-flex items-center gap-1.5 text-[13.5px] text-brand-500 hover:text-brand-600 transition-colors group"
          >
            <span className="border-b border-brand-400/30 group-hover:border-brand-500 pb-px transition-colors">
              See all 70+ features
            </span>
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
