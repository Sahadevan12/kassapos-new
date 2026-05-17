"use client";

import { motion } from "framer-motion";

const SPRING = [0.22, 1, 0.36, 1] as const;

const MILESTONES = [
  {
    year: "2008",
    title: "Founded in Chennai",
    desc: "Started with a single goal — digitise India's retail stores.",
  },
  {
    year: "2012",
    title: "500+ Businesses",
    desc: "Reached our first major milestone of 500 active retailers.",
  },
  {
    year: "2016",
    title: "Cloud Platform Launch",
    desc: "Rolled out cloud billing & real-time inventory management.",
  },
  {
    year: "2020",
    title: "5,000+ Stores",
    desc: "Expanded across Tamil Nadu and major cities pan-India.",
  },
  {
    year: "2024",
    title: "7,500+ Businesses Trust Us",
    desc: "Every single day, thousands of businesses run on KassaPOS.",
  },
];

export function OurJourneySection() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #F1F5F9",
      }}
    >
      <div
        className="container-xl"
        style={{ padding: "72px 24px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT — Our Journey ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: SPRING }}
          >
            {/* section badge */}
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
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2563EB",
                  display: "inline-block",
                }}
              />
              Our Story
            </span>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: 40,
              }}
            >
              Our Journey{" "}
              <span style={{ color: "#2563EB" }}>So Far</span>
            </h2>

            {/* timeline */}
            <div style={{ position: "relative", paddingLeft: 28 }}>
              {/* vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: 7,
                  top: 6,
                  bottom: 6,
                  width: 2,
                  background:
                    "linear-gradient(to bottom, #2563EB 0%, #06B6D4 100%)",
                  borderRadius: 2,
                }}
              />

              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.48,
                    ease: SPRING,
                  }}
                  style={{
                    position: "relative",
                    paddingBottom: i < MILESTONES.length - 1 ? 28 : 0,
                  }}
                >
                  {/* dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -28,
                      top: 4,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                      border: "2.5px solid #FFFFFF",
                      boxShadow: "0 0 0 2px #BFDBFE",
                    }}
                  />

                  {/* year + content */}
                  <div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "#2563EB",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.year}
                    </span>
                    <p
                      style={{
                        fontSize: "0.97rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginTop: 2,
                        marginBottom: 3,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {m.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.84rem",
                        color: "#64748B",
                        lineHeight: 1.6,
                      }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Team Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: SPRING, delay: 0.1 }}
            style={{ position: "relative" }}
          >
            {/* decorative blob behind image */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-16px -16px -16px -16px",
                background:
                  "linear-gradient(135deg, #EFF6FF 0%, #E0F2FE 100%)",
                borderRadius: 28,
                zIndex: 0,
              }}
            />

            {/* team photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/our%20team.png"
              alt="KassaPOS Team"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "auto",
                borderRadius: 20,
                display: "block",
                boxShadow:
                  "0 20px 60px rgba(37,99,235,0.14), 0 4px 16px rgba(0,0,0,0.08)",
                objectFit: "cover",
              }}
            />

            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 24,
                left: -20,
                zIndex: 2,
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "10px 18px",
                boxShadow: "0 8px 28px rgba(37,99,235,0.18)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg, #1D4ED8 0%, #06B6D4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                🏆
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.2,
                  }}
                >
                  15+ Years
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#64748B",
                    lineHeight: 1.2,
                  }}
                >
                  Serving Indian Retail
                </p>
              </div>
            </motion.div>

            {/* top-right badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              style={{
                position: "absolute",
                top: 20,
                right: -18,
                zIndex: 2,
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "10px 18px",
                boxShadow: "0 8px 28px rgba(37,99,235,0.18)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                🏪
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.2,
                  }}
                >
                  7,500+ Businesses
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#64748B",
                    lineHeight: 1.2,
                  }}
                >
                  Trust KassaPOS Daily
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
