"use client";

import { motion } from "framer-motion";
import { EASE_EXPO } from "@/lib/animations";

const REASONS = [
  { label: "Local Chennai Support",      icon: "📍" },
  { label: "Quick Installation",         icon: "⚡" },
  { label: "Affordable Pricing",         icon: "💰" },
  { label: "Tamil Training Provided",    icon: "🎓" },
  { label: "Free Demo & Consultation",   icon: "🎯" },
  { label: "User Friendly Interface",    icon: "🖥️" },
  { label: "Regular Updates",            icon: "🔄" },
  { label: "Dedicated Support Team",     icon: "🤝" },
];

export function WhyKassapos() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EEF4FF 0%, #F8FAFF 60%, #EEF4FF 100%)",
        padding: "52px 0 56px",
        overflow: "hidden",
      }}
    >
      {/* ══════════ MOBILE ══════════ */}
      <div className="block lg:hidden px-4">
        <motion.h2
          className="font-display font-extrabold text-slate-900 text-center mb-5"
          style={{ fontSize: "1.6rem", letterSpacing: "-0.01em" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE_EXPO }}
        >
          Why Choose <span style={{ color: "#1E3A8A" }}>Kassapos?</span>
        </motion.h2>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_EXPO }}
          className="mb-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/why kassapos.png"
            alt="Kassapos Support Team"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 16 }}
          />
        </motion.div>

        {/* Checklist — 2 columns */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: i * 0.05, ease: EASE_EXPO }}
            >
              <div
                style={{
                  width: 22, height: 22,
                  borderRadius: "50%",
                  background: "#1E3A8A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="8" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-semibold text-slate-700" style={{ fontSize: "0.78rem", lineHeight: 1.4 }}>
                {r.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════ DESKTOP ══════════ */}
      <div className="hidden lg:block container-xl" style={{ paddingLeft: 40, paddingRight: 0 }}>
        <div
          className="grid items-center"
          style={{ gridTemplateColumns: "1fr 2fr", gap: "40px" }}
        >
          {/* LEFT: checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
          >
            <h2
              className="font-display font-extrabold text-slate-900 mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
            >
              Why Choose Kassapos?
            </h2>
            <div className="flex flex-col gap-3.5">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_EXPO }}
                >
                  <div
                    style={{
                      width: 26, height: 26,
                      borderRadius: "50%",
                      background: "#1E3A8A",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-700" style={{ fontSize: "0.95rem" }}>
                    {r.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE_EXPO }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/why kassapos.png"
              alt="Kassapos Support Team"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
