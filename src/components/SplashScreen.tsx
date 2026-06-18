"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BarChart3, Package, Users, FileText } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  { icon: <BarChart3 size={20} />,  label: "விற்பனை\nமேலாண்மை",       color: "#2563EB", bg: "#DBEAFE" },
  { icon: <Package size={20} />,    label: "இன்வென்டரி\nகட்டுப்பாடு",  color: "#16A34A", bg: "#DCFCE7" },
  { icon: <Users size={20} />,      label: "வாடிக்கையாளர்\nமேலாண்மை", color: "#D97706", bg: "#FEF3C7" },
  { icon: <FileText size={20} />,   label: "நிதி &\nஅறிக்கைகள்",       color: "#7C3AED", bg: "#EDE9FE" },
];

export function SplashScreen() {
  const [visible, setVisible]   = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip splash on repeat visits within same browser session
    if (sessionStorage.getItem("splashShown")) {
      setVisible(false);
      return;
    }

    const start    = Date.now();
    const duration = 500;

    const tick = setInterval(() => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / duration) * 100));
      setProgress(pct);
      if (pct >= 100) clearInterval(tick);
    }, 20);

    const hide = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splashShown", "1");
    }, 700);
    return () => { clearInterval(tick); clearTimeout(hide); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="fixed inset-0 z-[9999] overflow-hidden"
          style={{ background: "#E4EFFC" }}
        >
          {/* Background */}
          <Image src="/images/loading_page.png" alt="" fill className="object-cover" />

          {/* Full-height flex column */}
          <div className="relative z-10 h-full flex flex-col items-center justify-between pt-6 pb-14 px-4">

            {/* ── TOP: logo + taglines + progress ── */}
            <div className="flex-1 flex flex-col items-center justify-center gap-0">

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="mb-1"
              >
                <Image
                  src="/images/logo.jpg"
                  alt="KassaPOS"
                  width={340}
                  height={136}
                  priority
                  style={{ maxWidth: "min(340px, 80vw)", height: "auto" }}
                />
              </motion.div>

              {/* Tamil tagline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.45, ease: EASE }}
                lang="ta"
                className="font-bold text-center"
                style={{ color: "#1740A8", fontSize: "clamp(1.1rem, 3vw, 1.6rem)" }}
              >
                வாணிகணின் நண்பன்
              </motion.p>

              {/* Handshake divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.3 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.4, ease: EASE }}
                className="flex items-center gap-2 my-2"
                style={{ width: "clamp(160px, 28vw, 260px)" }}
              >
                <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg, transparent, #2563EB)" }} />
                <span style={{ fontSize: "1.3rem" }}>🤝</span>
                <div style={{ flex: 1, height: 2, background: "linear-gradient(90deg, #2563EB, transparent)" }} />
              </motion.div>

              {/* Sub-tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                lang="ta"
                className="text-center mb-4"
                style={{ color: "#374151", fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
              >
                உங்கள் வணிகத்தை எளிதாக்குகிறோம்...
              </motion.p>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.38 }}
                className="flex flex-col items-center gap-1.5"
                style={{ width: "clamp(220px, 46vw, 500px)" }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{
                      height: 22,
                      background: "#C7D9EF",
                      border: "1px solid rgba(37,99,235,0.18)",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)",
                    }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #1E40AF 0%, #2563EB 60%, #60A5FA 100%)",
                        boxShadow: "0 0 8px rgba(37,99,235,0.35)",
                      }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.08 }}
                    />
                  </div>
                  <span style={{ color: "#1E40AF", fontWeight: 700, fontSize: "1rem", minWidth: 44, textAlign: "right" }}>
                    {progress}%
                  </span>
                </div>
                <p style={{ color: "#2563EB", fontWeight: 600, fontSize: "0.9rem" }}>Loading...</p>
              </motion.div>
            </div>

            {/* ── BOTTOM: feature icons + copyright ── */}
            <div className="flex flex-col items-center gap-3 w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.45, ease: EASE }}
                className="flex items-start justify-center gap-5 flex-wrap"
              >
                {FEATURES.map((f, i) => (
                  <div key={i} className="flex flex-col items-center gap-1" style={{ width: 72 }}>
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 46,
                        height: 46,
                        background: f.bg,
                        color: f.color,
                        border: `1.5px solid ${f.color}40`,
                        boxShadow: `0 2px 6px ${f.color}20`,
                      }}
                    >
                      {f.icon}
                    </div>
                    <p
                      lang="ta"
                      style={{
                        color: "#374151",
                        fontSize: "0.65rem",
                        textAlign: "center",
                        lineHeight: 1.35,
                        fontWeight: 600,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {f.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <p style={{ color: "#6B7280", fontSize: "0.62rem", textAlign: "center" }}>
                © 2024 Kassapos Software Solutions Pvt Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
