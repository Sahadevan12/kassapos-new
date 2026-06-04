"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  { src: "/clients/brown.png",        alt: "Brown" },
  { src: "/clients/green_mantra.jpg", alt: "Green Mantra" },
  { src: "/clients/knt.png",          alt: "KNT" },
  { src: "/clients/vaer.png",         alt: "Vaer" },
];

// duplicate enough times to fill a wide scroll
const DOUBLED = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

export function ClientsSection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #EEF4FF 0%, #F0F9FF 50%, #E8F0FE 100%)", borderTop: "1px solid #DBEAFE", borderBottom: "1px solid #DBEAFE", overflow: "hidden", padding: "52px 0 56px" }}>
      <div>

        {/* header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 40, padding: "0 24px" }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#94A3B8",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Trusted by leading businesses
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.03em",
            }}
          >
            Our Clients &amp; Partners
          </h2>
        </motion.div>

        {/* scrolling logo strip */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* left fade */}
          <div
            aria-hidden
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: 100,
              background: "linear-gradient(to right, #FFFFFF, transparent)",
              zIndex: 1, pointerEvents: "none",
            }}
          />
          {/* right fade */}
          <div
            aria-hidden
            style={{
              position: "absolute", right: 0, top: 0, bottom: 0,
              width: 100,
              background: "linear-gradient(to left, #FFFFFF, transparent)",
              zIndex: 1, pointerEvents: "none",
            }}
          />

          <motion.div
            style={{ display: "flex", width: "max-content", alignItems: "center", gap: 48 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {DOUBLED.map((client, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 36px",
                  background: "#FFFFFF",
                  borderRadius: 18,
                  border: "1px solid rgba(37,99,235,0.1)",
                  boxShadow: "0 2px 12px rgba(37,99,235,0.07)",
                  minWidth: 180,
                  height: 96,
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.src}
                  alt={client.alt}
                  style={{
                    maxHeight: 62,
                    maxWidth: 148,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    filter: "grayscale(20%)",
                    opacity: 0.9,
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
