"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";

const SPRING = [0.22, 1, 0.36, 1] as const;

/* ── animated counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increments = Math.ceil(duration / step);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      const progress = i / increments;
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setVal(Math.floor(ease * to));
      if (i >= increments) { setVal(to); clearInterval(timer); }
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { value: 15,   suffix: "+", label: "Years of Excellence",   icon: "🏆" },
  { value: 7500, suffix: "+", label: "Businesses Trust Us",   icon: "🏪" },
  { value: 50,   suffix: "+", label: "Cities Pan-India",      icon: "📍" },
  { value: 4,    suffix: ".9★", label: "Google Rating",       icon: "⭐" },
];

const MILESTONES = [
  {
    year: "2008",
    title: "Founded in Chennai",
    desc: "Started with a single vision — make every Indian retail store faster, smarter, and paperless.",
    color: "#2563EB",
  },
  {
    year: "2012",
    title: "500+ Businesses Onboard",
    desc: "Word spread quickly. 500+ retailers across Tamil Nadu trusted KassaPOS for their daily billing.",
    color: "#0891B2",
  },
  {
    year: "2016",
    title: "Cloud Platform Launched",
    desc: "Introduced real-time cloud sync, multi-device access, and automated GST reports.",
    color: "#7C3AED",
  },
  {
    year: "2020",
    title: "5,000+ Stores Nationwide",
    desc: "Scaled across India — supermarkets, pharmacies, textiles, restaurants, and more.",
    color: "#059669",
  },
  {
    year: "2024",
    title: "7,500+ Businesses Daily",
    desc: "Every morning, over 7,500 businesses start their day with KassaPOS. We're just getting started.",
    color: "#DC2626",
  },
];

export function OurJourneySection() {
  return (
    <section style={{ background: "#F8FAFF", overflow: "hidden" }}>
      <div className="container-xl" style={{ padding: "80px 24px" }}>

        {/* ── header ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: SPRING }}
          style={{ marginBottom: 64 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#EFF6FF",
              color: "#2563EB",
              borderRadius: 999,
              padding: "5px 14px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", display: "inline-block" }} />
            Our Story
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 900,
              color: "#0F172A",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Our Journey{" "}
            <span style={{ color: "#2563EB" }}>So Far</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", marginTop: 12, lineHeight: 1.65 }}>
            15 years of building, growing, and serving India&apos;s retail backbone.
          </p>
        </motion.div>

        {/* ── stat counters ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ marginBottom: 80 }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: SPRING }}
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "28px 20px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                border: "1px solid #EFF6FF",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{s.icon}</div>
              <div
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "0.82rem", color: "#64748B", marginTop: 6, fontWeight: 500 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── timeline ── */}
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          {/* centre vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0, bottom: 0,
              width: 3,
              background: "linear-gradient(to bottom, #2563EB, #06B6D4, #7C3AED)",
              borderRadius: 2,
              transformOrigin: "top",
            }}
            className="hidden md:block"
          />

          {MILESTONES.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: isLeft ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: SPRING }}
                className="relative flex md:items-center mb-10 last:mb-0"
                style={{
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  paddingLeft: isLeft ? 0 : "50%",
                  paddingRight: isLeft ? "50%" : 0,
                }}
              >
                {/* card */}
                <div
                  className="relative w-full md:w-[90%]"
                  style={{
                    marginLeft: isLeft ? 0 : "auto",
                    marginRight: isLeft ? "auto" : 0,
                    paddingLeft: isLeft ? 0 : 28,
                    paddingRight: isLeft ? 28 : 0,
                  }}
                >
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 18,
                      padding: "24px 26px",
                      boxShadow: "0 4px 24px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                      border: `1px solid ${m.color}20`,
                      position: "relative",
                    }}
                  >
                    {/* year badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: `${m.color}15`,
                        color: m.color,
                        borderRadius: 999,
                        padding: "3px 12px",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        marginBottom: 10,
                      }}
                    >
                      {m.year}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 800,
                        color: "#0F172A",
                        letterSpacing: "-0.02em",
                        marginBottom: 6,
                      }}
                    >
                      {m.title}
                    </h3>
                    <p style={{ fontSize: "0.87rem", color: "#64748B", lineHeight: 1.65 }}>
                      {m.desc}
                    </p>
                  </div>

                  {/* connector dot */}
                  <div
                    className="hidden md:block absolute top-1/2"
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: m.color,
                      border: "3px solid #FFFFFF",
                      boxShadow: `0 0 0 3px ${m.color}40`,
                      transform: "translateY(-50%)",
                      right: isLeft ? -7 : "auto",
                      left: isLeft ? "auto" : -7,
                      zIndex: 2,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
