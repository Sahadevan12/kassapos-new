"use client";

import { motion } from "framer-motion";
import { EASE_EXPO } from "@/lib/animations";

const REASONS = [
  "Local Chennai Support",
  "Quick Installation",
  "Affordable Pricing",
  "Tamil Training Provided",
  "Free Demo & Consultation",
  "User Friendly Interface",
  "Regular Updates",
  "Dedicated Support Team",
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
      <div className="container-xl" style={{ paddingLeft: 40, paddingRight: 0 }}>
        <div
          className="grid grid-cols-1 items-center"
          style={{ gridTemplateColumns: "1fr 2fr", gap: "40px" }}
        >

          {/* ── LEFT: Why Choose checklist ── */}
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
              {REASONS.map((reason, i) => (
                <motion.div
                  key={reason}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_EXPO }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "#1E3A8A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-700" style={{ fontSize: "0.95rem" }}>
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Full image ── */}
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
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
