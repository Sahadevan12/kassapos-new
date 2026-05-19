"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Play, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_EXPO } from "@/lib/animations";

const HIGHLIGHTS = [
  "Live Dashboard Walkthrough",
  "Real Billing Process",
  "Inventory & Reports Overview",
  "WhatsApp Billing Demo",
];

export function SeeInActionSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #F0F4FF 0%, #F8FAFF 50%, #EEF4FF 100%)",
        borderTop: "1px solid #DBEAFE",
        borderBottom: "1px solid #DBEAFE",
      }}
    >
      <div className="container-xl py-16">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_EXPO }}
        >
          <SectionLabel className="mx-auto mb-4">Live Demo</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            See Kassapos in{" "}
            <span className="gradient-text">Action</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Video embed */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(37,99,235,0.14), 0 4px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(37,99,235,0.12)",
              position: "relative",
            }}
          >
            {/* 16:9 aspect ratio wrapper */}
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/NrlQ7Z1sK-0?rel=0&modestbranding=1&color=white"
                title="Kassapos POS Software Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_EXPO }}
            className="flex flex-col"
          >
            {/* Content card */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "32px 36px",
                border: "1px solid rgba(37,99,235,0.1)",
                boxShadow: "0 6px 28px rgba(37,99,235,0.07)",
              }}
            >
              <p
                className="text-slate-700 font-semibold mb-7"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", lineHeight: 1.6 }}
              >
                Watch how our POS software simplifies your entire business management.
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                {HIGHLIGHTS.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, ease: EASE_EXPO }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(37,99,235,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: "#2563EB" }} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/demo"
                className="inline-flex items-center gap-2 btn-gradient px-6 py-3 rounded-xl text-white font-semibold text-sm"
                style={{ boxShadow: "0 6px 20px rgba(37,99,235,0.28)" }}
              >
                <Play size={14} fill="white" />
                Book Live Demo
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
