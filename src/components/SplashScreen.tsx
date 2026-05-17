"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE_EXPO = [0.22, 1, 0.36, 1];

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(160deg, #0A1020 0%, #050810 100%)",
          }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(37,99,235,0.14) 0%, transparent 70%)",
            }}
          />

          {/* Faint grid */}
          <div className="absolute inset-0 grid-lines opacity-[0.07]" />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-7">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
            >
              <Image
                src="/logo.svg"
                alt="KassaPOS"
                width={140}
                height={56}
                priority
                className="brightness-[2] invert-0"
              />
            </motion.div>

            {/* Tamil tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55, ease: EASE_EXPO }}
              lang="ta"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1.05rem",
                fontWeight: 500,
                letterSpacing: "0.015em",
                textAlign: "center",
              }}
            >
              இது நம்ம ஊரு Software வாணிகனின் நண்பன்
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="w-44 h-[2px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #1B3A8F 0%, #2563EB 55%, #06B6D4 100%)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.55, duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
