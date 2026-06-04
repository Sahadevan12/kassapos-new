"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ── tokens ── */
const BLUE        = "#2563EB";
const TICKER_BG   = "#0D1B6E";     // deep navy
const SECTION_BG  =
  "radial-gradient(ellipse 80% 55% at 50% 38%, #E8EEFF 0%, #F3F6FF 55%, #FAFBFF 100%)";
const SPRING      = [0.22, 1, 0.36, 1] as const;

/* ── pill positions — orbital layout around the center ── */
type Tag = { label: string; angle: number; pos: CSSProperties };

const TAGS: Tag[] = [
  /* top arc */
  { label: "Thermal Printing", angle: -8,  pos: { top: "7%",    left: "26%"  } },
  { label: "Barcode Scanner",  angle:  5,  pos: { top: "8%",    right: "17%" } },
  /* left orbit */
  { label: "Smart Billing",    angle: -12, pos: { top: "22%",   left: "3%"   } },
  { label: "Inventory",        angle:   7, pos: { top: "41%",   left: "10%"  } },
  { label: "GST Reports",      angle:  -6, pos: { top: "58%",   left: "3%"   } },
  { label: "Expense Tracking", angle:  -9, pos: { top: "72%",   left: "7%"   } },
  /* right orbit */
  { label: "Customer Loyalty", angle:   9, pos: { top: "21%",   right: "3%"  } },
  { label: "Multi Store",      angle:  -7, pos: { top: "44%",   right: "7%"  } },
  { label: "Purchase Orders",  angle:   6, pos: { top: "63%",   right: "3%"  } },
  /* bottom arc */
  { label: "Daily Reports",    angle:   5, pos: { bottom: "6%", left: "21%"  } },
  { label: "Online Sync",      angle:  -4, pos: { bottom: "6%", left: "44%"  } },
  { label: "Staff Management", angle:   7, pos: { bottom: "6%", right: "18%" } },
];

const MARQUEE_ITEMS = [
  "Smart Billing", "Inventory", "GST Reports", "Multi-Store",
  "Barcode", "Customer CRM", "Staff Payroll", "Purchase Orders",
  "Expense Tracking", "Payment Gateway", "Daily Reports", "Online Sync",
];

/* ─────────────────────────────────────────
   Blue pill tag
───────────────────────────────────────── */
function Pill({ label, angle }: { label: string; angle: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        transform: `rotate(${angle}deg)`,
        background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 55%, #3B82F6 100%)",
        color: "#FFFFFF",
        borderRadius: 999,
        padding: "9px 22px",
        fontSize: "0.87rem",
        fontWeight: 700,
        whiteSpace: "nowrap",
        letterSpacing: "-0.01em",
        boxShadow:
          "0 4px 16px rgba(37,99,235,0.32), inset 0 1px 0 rgba(255,255,255,0.15)",
        userSelect: "none",
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────
   Glassmorphism CTA button
───────────────────────────────────────── */
function GlassButton() {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      style={{ display: "inline-block" }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 16px 48px rgba(37,99,235,0.45)",
        }}
        transition={{ duration: 0.22 }}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,0.38)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255,255,255,0.72)",
          borderRadius: 999,
          padding: "15px 46px",
          fontWeight: 700,
          fontSize: "1rem",
          color: BLUE,
          letterSpacing: "-0.015em",
          boxShadow:
            "0 8px 32px rgba(37,99,235,0.22), inset 0 1.5px 0 rgba(255,255,255,0.62)",
          cursor: "pointer",
          overflow: "hidden",
          textDecoration: "none",
        }}
      >
        {/* top-left gloss highlight */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0) 52%)",
            borderRadius: 999,
            pointerEvents: "none",
          }}
        />
        {/* animated shimmer sweep */}
        <motion.span
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "-80%",
            width: "55%",
            height: "100%",
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
            borderRadius: 999,
            pointerEvents: "none",
          }}
          animate={{ left: ["−80%", "130%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
        />
        <Link
          href="/contact"
          style={{
            color: BLUE,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "-0.015em",
            position: "relative",
            zIndex: 1,
          }}
        >
          Book a Free Demo →
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Dark navy ticker strip
───────────────────────────────────────── */
function Ticker() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ background: TICKER_BG, overflow: "hidden", padding: "17px 0" }}>
      <motion.div
        style={{ display: "flex", width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1.05rem",
                padding: "0 28px",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1.35rem",
                lineHeight: 1,
              }}
            >
              ✳
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export function FeaturesCloud() {
  return (
    <section style={{ background: SECTION_BG, overflow: "hidden", padding: "52px 0 56px" }}>

      {/* ══════════ DESKTOP ══════════ */}
      <div className="hidden md:block">
        {/* orbital tag cloud + centre content */}
        <div
          className="relative w-full"
          style={{ minHeight: 680, overflow: "visible" }}
        >
          {/* floating pills */}
          {TAGS.map((tag, i) => (
            <motion.div
              key={tag.label}
              className="absolute"
              style={{ ...tag.pos, zIndex: 1 }}
              initial={{ opacity: 0, scale: 0.55, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: SPRING }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{
                  y: {
                    duration: 2.4 + (i % 5) * 0.46,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.18,
                  },
                  scale: { duration: 0.18 },
                }}
                style={{ display: "inline-block" }}
              >
                <Pill label={tag.label} angle={tag.angle} />
              </motion.div>
            </motion.div>
          ))}

          {/* ── centre content ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
            style={{ padding: "0 26%", pointerEvents: "none", zIndex: 2 }}
          >
            {/* headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: SPRING }}
              style={{
                fontSize: "clamp(2.8rem, 4.6vw, 4.4rem)",
                fontWeight: 900,
                color: "#0D0D0D",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              Let&apos;s Build Your Business{" "}
              <span style={{ color: BLUE }}>Smarter!</span>
            </motion.h2>

            {/* subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: SPRING }}
              style={{
                color: "#64748B",
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                lineHeight: 1.7,
                marginTop: 18,
                maxWidth: 480,
              }}
            >
              KassaPOS helps manage billing, inventory, reports, staff, GST, and
              customer management — all in one platform.
            </motion.p>

            {/* glass button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: 0.22, ease: SPRING }}
              style={{ marginTop: 32, pointerEvents: "auto" }}
            >
              <GlassButton />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════ MOBILE ══════════ */}
      <div
        className="md:hidden flex flex-col items-center text-center gap-5"
        style={{ padding: "48px 20px 36px" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            color: "#0D0D0D",
            lineHeight: 1.18,
            letterSpacing: "-0.035em",
          }}
        >
          Let&apos;s Build Your Business{" "}
          <span style={{ color: BLUE }}>Smarter!</span>
        </h2>
        <p
          style={{
            color: "#64748B",
            fontSize: "0.92rem",
            lineHeight: 1.65,
            maxWidth: 320,
          }}
        >
          KassaPOS helps manage billing, inventory, reports, staff, GST, and
          customer management — all in one platform.
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {TAGS.map((t) => (
            <Pill key={t.label} label={t.label} angle={0} />
          ))}
        </div>
        <GlassButton />
      </div>

      {/* ══════════ TICKER ══════════ */}
      <Ticker />
    </section>
  );
}
