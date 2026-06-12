"use client";

import { motion } from "framer-motion";
import { Users, Headphones, ShieldCheck, Zap } from "lucide-react";

import { EASE_EXPO } from "@/lib/animations";

const ITEMS = [
  {
    icon: <Users size={40} />,
    value: "10,000+",
    label: "Happy Businesses",
  },
  {
    icon: <Headphones size={40} />,
    value: "Tamil Based",
    label: "Local Support",
  },
  {
    icon: <ShieldCheck size={40} />,
    value: "GST",
    label: "Compliant",
  },
  {
    icon: <Zap size={40} />,
    value: "Fast",
    label: "Installation",
  },
];

export function SocialProofBar() {
  return (
    <section style={{ background: "#FFFFFF", padding: "10px 0 14px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: 16, paddingRight: 16 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_EXPO }}
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{
            background: "linear-gradient(135deg, #0F1E4A 0%, #162454 50%, #1B2B5E 100%)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(15,30,74,0.28)",
          }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE_EXPO }}
              className="flex items-center justify-center gap-4"
              style={{
                paddingTop: 18,
                paddingBottom: 18,
                paddingLeft:  i === 0 ? 48 : 32,
                paddingRight: i === ITEMS.length - 1 ? 48 : 32,
                borderRight: i < ITEMS.length - 1
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "none",
              }}
            >
              {/* Icon */}
              <div style={{ color: "#FBBF24", flexShrink: 0, display: "flex" }}>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  className="font-extrabold leading-tight"
                  style={{ color: "#FBBF24", fontSize: "1.35rem" }}
                >
                  {item.value}
                </p>
                <p
                  className="font-medium"
                  style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.92rem" }}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
