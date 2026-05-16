"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, ShieldCheck, Clock, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

const TRUST_ITEMS = [
  { icon: <Clock size={14} />, label: "14-day free trial" },
  { icon: <ShieldCheck size={14} />, label: "No credit card needed" },
  { icon: <HeadphonesIcon size={14} />, label: "24/7 Tamil & English support" },
  { icon: <ArrowRight size={14} />, label: "Setup in 10 minutes" },
];

function LiveCounter() {
  const [count, setCount] = useState(7500);

  useEffect(() => {
    // Simulate occasional new signups
    const id = setInterval(() => {
      if (Math.random() > 0.6) setCount((c) => c + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.span
      key={count}
      initial={{ opacity: 0.6, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="gradient-text"
    >
      {count.toLocaleString("en-IN")}+
    </motion.span>
  );
}

export function ClosingCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,12,27,0) 0%, rgba(3,8,24,1) 100%), radial-gradient(ellipse 100% 70% at 50% 50%, rgba(27,58,143,0.28) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6,182,212,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      {/* Animated orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[260, 400, 540, 680].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: "1px solid rgba(37,99,235,0.12)",
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 18 + i * 7, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Central glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(37,99,235,0.16) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: EASE_EXPO }}
          className="max-w-3xl mx-auto"
        >
          {/* Live counter badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-8"
            style={{
              background: "rgba(37,99,235,0.08)",
              borderColor: "rgba(37,99,235,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="live-dot" />
            <span style={{ color: "rgba(147,197,253,0.7)" }}>
              Join <LiveCounter /> businesses already using Kassapos
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-display font-extrabold mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", lineHeight: 1.08 }}
          >
            <span className="gradient-text-hero">Start billing smarter</span>
            <br />
            <span className="text-white">today.</span>
          </h2>

          {/* Sub-copy */}
          <p
            className="text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(147,197,253,0.55)" }}
          >
            Free trial. No credit card.{" "}
            <span style={{ color: "#93C5FD" }}>Setup in 10 minutes.</span>
            <br />
            South India&apos;s most-trusted POS since 2008.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="/register">
              <Button
                variant="primary"
                size="xl"
                rightIcon={<ArrowRight size={19} />}
                className="px-10 h-15 text-lg rounded-2xl shadow-glow-lg min-w-[220px]"
              >
                Start Free Trial
              </Button>
            </Link>
            <a
              href="https://wa.me/918754031480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="glass"
                size="xl"
                leftIcon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ADE80">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                }
                className="px-8 h-15 text-lg rounded-2xl min-w-[220px]"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(147,197,253,0.4)" }}>
                <span style={{ color: "rgba(59,130,246,0.6)" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

          {/* Phone */}
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            style={{ color: "rgba(147,197,253,0.35)" }}
          >
            <Phone size={13} />
            Or call us: {SITE.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
