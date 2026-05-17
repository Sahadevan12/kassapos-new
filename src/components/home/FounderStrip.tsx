"use client";

import { motion } from "framer-motion";
import { EASE_EXPO } from "@/lib/animations";

export function FounderStrip() {
  return (
    <section style={{ background: "linear-gradient(135deg, #1B3A8F 0%, #2563EB 55%, #06B6D4 100%)" }}>
      <div className="container-xl py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
        >
          <div
            className="flex flex-col sm:flex-row items-center sm:items-center gap-6 px-7 py-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Founder photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/founder.png"
              alt="T. Saravana Kumar — Founder & Managing Director"
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid rgba(255,255,255,0.35)",
                flexShrink: 0,
              }}
            />

            {/* Divider (desktop) */}
            <div
              className="hidden sm:block self-stretch w-px"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />

            {/* Quote + attribution */}
            <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
              <span
                className="font-display font-extrabold select-none leading-none"
                style={{ fontSize: "2rem", color: "rgba(255,255,255,0.2)", lineHeight: 0.7 }}
              >
                &ldquo;
              </span>
              <p
                className="leading-relaxed italic"
                style={{ color: "#FFFFFF", fontSize: "clamp(0.85rem, 1.1vw, 0.97rem)", maxWidth: 620 }}
              >
                We built KassaPOS because India&apos;s retailers deserved better than paper and pen.
                15 years later, 7,500+ businesses trust us every single day —
                and we&apos;re just getting started.
              </p>

              <div className="flex items-center gap-2.5 justify-center sm:justify-start mt-1">
                <div className="w-7 h-[2px] rounded-full" style={{ background: "#60A5FA" }} />
                <span className="text-sm font-bold text-white">T. Saravana Kumar</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
                <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>Managing Director &amp; Founder</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>Kassapos Software Solutions Pvt Ltd</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
