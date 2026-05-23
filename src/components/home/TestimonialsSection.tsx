"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

/* Duplicate array for seamless infinite loop */
const LOOPED = [...TESTIMONIALS, ...TESTIMONIALS];

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="flex flex-row rounded-2xl overflow-hidden shrink-0"
      style={{
        width: 340,
        minHeight: 210,
        background: "#FFFFFF",
        border: "1px solid #EBEBEB",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        marginRight: 20,
      }}
    >
      {/* Photo */}
      <div style={{ width: 120, flexShrink: 0, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={(item as any).photo || "/review/1.webp"}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 flex-1 min-w-0">
        <div>
          <p className="font-bold text-slate-900 leading-tight mb-0.5" style={{ fontSize: "0.95rem" }}>
            {item.name}
          </p>
          <p className="text-xs text-slate-400">{item.industry}, {item.city}</p>

          {/* Stars */}
          <div className="flex gap-0.5 mt-2">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} size={13} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-2">
          <span className="block font-extrabold leading-none mb-1" style={{ fontSize: "1.8rem", color: "#F59E0B", lineHeight: 0.9 }}>
            &ldquo;
          </span>
          <p className="text-slate-600 line-clamp-3" style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>
            {item.quote}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ background: "#FFFFFF" }}>
      {/* Keyframes injected inline */}
      <style>{`
        @keyframes kassaScrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .kassa-scroll-track {
          animation: kassaScrollLeft 30s linear infinite;
          will-change: transform;
        }
        .kassa-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container-xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-12">
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", lineHeight: 1.15, color: "#0F1A2E" }}
          >
            What Our Customers Say
          </h2>

          {/* Orange divider */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <div style={{ width: 32, height: 2.5, borderRadius: 99, background: "#F59E0B" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
            <div style={{ width: 32, height: 2.5, borderRadius: 99, background: "#F59E0B" }} />
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scroll strip — full width, no container-xl clipping */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="kassa-scroll-track"
          style={{ display: "flex", width: "max-content" }}
        >
          {LOOPED.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Google rating */}
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_EXPO }}
          className="text-center mt-10"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
            style={{ background: "rgba(245,158,11,0.06)", borderColor: "rgba(245,158,11,0.18)" }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-sm text-slate-500">on Google · 500+ verified reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
