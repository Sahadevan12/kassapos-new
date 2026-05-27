"use client";

import { motion } from "framer-motion";
import { Users, Headphones, ShieldCheck, Zap } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const ITEMS = [
  {
    icon: <Users size={28} />,
    value: "7,500+",
    label: "Happy Businesses",
  },
  {
    icon: <Headphones size={28} />,
    value: "Chennai Based",
    label: "Local Support",
  },
  {
    icon: <ShieldCheck size={28} />,
    value: "GST",
    label: "Compliant",
  },
  {
    icon: <Zap size={28} />,
    value: "Fast",
    label: "Installation",
  },
];

export function SocialProofBar() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0F1E4A 0%, #162454 50%, #1B2B5E 100%)",
        padding: "0",
      }}
    >
      <div className="container-xl">
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ position: "relative" }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_EXPO }}
              className="flex items-center justify-center gap-3"
              style={{
                padding: "20px 16px",
                borderRight: i < ITEMS.length - 1
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "none",
                borderBottom: "none",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  color: "#FBBF24",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  className="font-extrabold leading-tight"
                  style={{ color: "#FBBF24", fontSize: "1rem" }}
                >
                  {item.value}
                </p>
                <p
                  className="font-medium"
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.78rem" }}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
