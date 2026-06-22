"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const TRUST_ITEMS = [
  "Free Installation",
  "Free Training",
  "No Hidden Charges",
];

const WA_SVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function FooterCTA() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 480,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "52px 0 56px",
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Footer.webp"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Lighter overlay so background image stays visible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,18,50,0.38) 0%, rgba(10,18,50,0.28) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 10, width: "100%", padding: "72px 24px" }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
        >
          {/* Heading */}
          <h2
            className="font-display font-extrabold text-white mb-5"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Ready to simplify your{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              business?
            </span>
          </h2>

          {/* Sub text */}
          <p
            className="mb-9"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
              color: "rgba(219,234,254,0.8)",
              lineHeight: 1.65,
            }}
          >
            Join{" "}
            <span style={{ color: "#93C5FD", fontWeight: 700 }}>5,000+ businesses</span>{" "}
            using KASSAPOS and take your business to the next level.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-9">
            {/* Book Free Demo */}
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 font-semibold rounded-2xl px-8 py-3.5 text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                boxShadow: "0 8px 28px rgba(37,99,235,0.45)",
                fontSize: "0.97rem",
                minWidth: 200,
                justifyContent: "center",
              }}
            >
              <Play size={15} fill="white" />
              Book Free Demo
            </Link>

            {/* Chat on WhatsApp */}
            <a
              href="https://wa.me/918754031480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold rounded-2xl px-8 py-3.5 transition-all"
              style={{
                background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                border: "1.5px solid rgba(34,197,94,0.4)",
                boxShadow: "0 6px 20px rgba(34,197,94,0.35)",
                color: "#FFFFFF",
                fontSize: "0.97rem",
                minWidth: 200,
                justifyContent: "center",
              }}
            >
              <WA_SVG />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, ease: EASE_EXPO }}
              >
                <CheckCircle2 size={15} style={{ color: "#60A5FA" }} />
                <span
                  style={{
                    color: "rgba(219,234,254,0.75)",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
