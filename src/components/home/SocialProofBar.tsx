"use client";

import { motion } from "framer-motion";
import { Star, Users, Calendar, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { EASE_EXPO } from "@/lib/animations";

const PROOF_ITEMS = [
  {
    icon: <Star size={20} className="text-amber-400 fill-amber-400/30" />,
    value: 4.9, suffix: "★", decimals: 1,
    label: "Google Rating", sub: "Based on 500+ reviews",
    color: "#F59E0B",
  },
  {
    icon: <Users size={20} className="text-brand-400" />,
    value: 7500, suffix: "+", decimals: 0,
    label: "Active Businesses", sub: "Across South India",
    color: "#3B82F6",
  },
  {
    icon: <Calendar size={20} className="text-accent-500" />,
    value: 15, suffix: "+ yrs", decimals: 0,
    label: "Industry Experience", sub: "Est. 2008, Chennai",
    color: "#06B6D4",
  },
  {
    icon: <Award size={20} className="text-emerald-500" />,
    value: 20, suffix: "+", decimals: 0,
    label: "Industry Verticals", sub: "Built for every business type",
    color: "#10B981",
  },
];

export function SocialProofBar() {
  return (
    <section className="relative py-8" style={{ background: "#EFF6FF" }}>
      {/* Top gradient border */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.2) 30%, rgba(6,182,212,0.15) 60%, transparent 100%)" }}
      />
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.15) 40%, rgba(6,182,212,0.1) 70%, transparent 100%)" }}
      />
      {/* Background overlay */}
      <div className="absolute inset-0"
        style={{ background: "rgba(239,246,255,0.8)" }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {PROOF_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: EASE_EXPO }}
              className="flex items-center gap-3.5 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${item.color}12`,
                  border: `1px solid ${item.color}30`,
                  boxShadow: `0 0 12px ${item.color}08`,
                }}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-xl font-extrabold font-display text-slate-900 leading-none mb-0.5">
                  <AnimatedCounter
                    end={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    duration={1800}
                  />
                </p>
                <p className="text-[11px] font-semibold text-slate-500">{item.label}</p>
                <p className="text-[10px] text-slate-400">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
