"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CHALLENGE_LEFT = [
  { emoji: "🖨️", title: "Billing Delays",   desc: "Manual billing and print issues lead to long queues and unhappy customers." },
  { emoji: "📷", title: "Scanning Errors",  desc: "Barcode not scanning or mismatches cause billing mistakes and loss."        },
  { emoji: "📦", title: "Inventory Issues", desc: "Stock mismatches and unavailable items lead to missed sales."               },
];

const CHALLENGE_RIGHT = [
  { emoji: "📑", title: "GST & Compliance", desc: "Incorrect GST reports and compliance errors risk penalties."             },
  { emoji: "☁️",  title: "Data Not Syncing", desc: "Data not syncing across devices or branches causes confusion."           },
  { emoji: "🎧", title: "No Support",        desc: "Lack of timely support affects operations and customer satisfaction."    },
];

const SOLUTIONS = [
  { emoji: "🖨️", title: "Fast Billing",      desc: "Quick billing with thermal printing for a seamless checkout experience."  },
  { emoji: "📷", title: "Accurate Scanning", desc: "Reliable barcode scanning ensures accurate billing every time."           },
  { emoji: "📦", title: "Smart Inventory",   desc: "Real-time stock tracking prevents shortages and overstocking."            },
  { emoji: "📑", title: "GST & Reports",     desc: "Accurate GST reports and compliance, always audit-ready."                 },
  { emoji: "☁️",  title: "Cloud Sync",        desc: "Real-time cloud sync across devices and branches."                       },
  { emoji: "🎧", title: "24/7 Support",      desc: "Dedicated support whenever you need us, always."                         },
];

const BENEFITS = [
  { emoji: "🛡️", bg: "#EFF6FF", title: "Secure & Reliable",  desc: "Bank-level security to keep your data safe and protected."     },
  { emoji: "☁️",  bg: "#F0F9FF", title: "Access Anywhere",     desc: "Access your business anytime, anywhere with cloud technology." },
  { emoji: "📈", bg: "#ECFDF5", title: "Grow Your Business",  desc: "Powerful insights and reports help you grow faster."           },
  { emoji: "👥", bg: "#EFF6FF", title: "All-in-One Platform", desc: "Everything you need to run your retail business in one place."  },
];

const SIDEBAR_ITEMS = ["Dashboard","Billing","Inventory","Purchase","Customer","Supplier","Reports","GST","Settings"];
const STATS = [
  { label: "Total Sales",     value: "₹6,54,750", sub: "+12.3%", bg: "#3B82F6" },
  { label: "Total Orders",    value: "1,265",      sub: "+8.2%",  bg: "#22C55E" },
  { label: "Total Profit",    value: "₹1,54,230",  sub: "+6.5%",  bg: "#8B5CF6" },
  { label: "Low Stock Items", value: "23",          sub: "Alert",  bg: "#EF4444" },
];
const DONUT = [
  { color: "#3B82F6", d: "70 106", o: "0",    label: "Electronics" },
  { color: "#8B5CF6", d: "40 136", o: "-70",  label: "Fashion"     },
  { color: "#22C55E", d: "30 146", o: "-110", label: "Grocery"     },
  { color: "#F59E0B", d: "36 140", o: "-140", label: "Others"      },
];

/* ─── Challenge card — Left (icon left | text | dot→line on right) ─── */
function CardLeft({ emoji, title, desc, delay }: { emoji: string; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.44, ease: EASE }}
      className="flex items-center"
    >
      <div
        className="flex-1 min-w-0 flex items-start gap-3 bg-white rounded-2xl p-4"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #F0F4F8", transition: "box-shadow 0.2s" }}
      >
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl" style={{ background: "#FEE2E2" }}>
            {emoji}
          </div>
          {/* Pulsing badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: delay * 1.5 }}
            className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full border-2 border-white bg-red-500 flex items-center justify-center"
          >
            <span className="text-white font-black leading-none" style={{ fontSize: 9 }}>!</span>
          </motion.div>
        </div>
        <div className="min-w-0">
          <p className="font-bold text-slate-900 text-sm mb-1">{title}</p>
          <p className="text-slate-500 leading-relaxed" style={{ fontSize: "0.75rem" }}>{desc}</p>
        </div>
      </div>

      {/* Connector: pulsing dot → animated draw-in dashed line → monitor */}
      <div className="shrink-0 flex items-center" style={{ width: 56 }}>
        <div className="relative shrink-0" style={{ width: 12, height: 12 }}>
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#FCA5A5" }}
          />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F87171", position: "relative", zIndex: 1 }} />
        </div>
        {/* Draw-in line */}
        <motion.div
          className="flex-1"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.35, duration: 0.4, ease: EASE }}
          style={{ borderTop: "2px dashed #FCA5A5", opacity: 0.8, transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Challenge card — Right (line→dot on left | icon left | text) ─── */
function CardRight({ emoji, title, desc, delay }: { emoji: string; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.44, ease: EASE }}
      className="flex items-center"
    >
      {/* Connector: monitor → animated draw-in dashed line → pulsing dot */}
      <div className="shrink-0 flex items-center" style={{ width: 56 }}>
        {/* Draw-in line */}
        <motion.div
          className="flex-1"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.35, duration: 0.4, ease: EASE }}
          style={{ borderTop: "2px dashed #FCA5A5", opacity: 0.8, transformOrigin: "right" }}
        />
        <div className="relative shrink-0" style={{ width: 12, height: 12 }}>
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#FCA5A5" }}
          />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F87171", position: "relative", zIndex: 1 }} />
        </div>
      </div>

      <div
        className="flex-1 min-w-0 flex items-start gap-3 bg-white rounded-2xl p-4"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #F0F4F8", transition: "box-shadow 0.2s" }}
      >
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl" style={{ background: "#FEE2E2" }}>
            {emoji}
          </div>
          {/* Pulsing badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: delay * 1.5 }}
            className="absolute -bottom-0.5 -left-0.5 w-5 h-5 rounded-full border-2 border-white bg-red-500 flex items-center justify-center"
          >
            <span className="text-white font-black leading-none" style={{ fontSize: 9 }}>!</span>
          </motion.div>
        </div>
        <div className="min-w-0">
          <p className="font-bold text-slate-900 text-sm mb-1">{title}</p>
          <p className="text-slate-500 leading-relaxed" style={{ fontSize: "0.75rem" }}>{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Monitor mockup ─── */
function MonitorMockup() {
  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden" style={{
        background: "#1a1b2e",
        padding: "10px 10px 22px",
        boxShadow: "0 28px 72px rgba(0,0,0,0.3), 0 6px 20px rgba(0,0,0,0.14)",
      }}>
        <div className="rounded-xl overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2.5 px-3 py-2" style={{ background: "#1E3A8A" }}>
            <span className="font-extrabold text-white" style={{ fontSize: 11 }}>K KassaPOS</span>
            <div style={{ width: 1, height: 10, background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.65)" }}>Dashboard</span>
            <div style={{ width: 1, height: 10, background: "rgba(255,255,255,0.15)" }} />
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.07em" }}>BESTSELLERS</span>
            <div className="ml-auto flex gap-1.5">
              {["#EF4444","#F59E0B","#22C55E"].map((c) => (
                <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>
          {/* Body */}
          <div className="flex" style={{ height: 270 }}>
            {/* Sidebar */}
            <div className="shrink-0 py-1.5" style={{ width: 70, background: "#2d3a8c" }}>
              {SIDEBAR_ITEMS.map((item, idx) => (
                <div key={item} style={{
                  padding: "5px 7px", fontSize: 8,
                  color: idx === 0 ? "#fff" : "rgba(255,255,255,0.48)",
                  fontWeight: idx === 0 ? 700 : 400,
                  background: idx === 0 ? "rgba(255,255,255,0.18)" : "transparent",
                  borderLeft: idx === 0 ? "2px solid #60A5FA" : "2px solid transparent",
                }}>{item}</div>
              ))}
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 overflow-hidden" style={{ padding: "10px 10px 8px", background: "#F8FAFC" }}>
              <p style={{ fontSize: 8, color: "#94A3B8", marginBottom: 8, fontWeight: 700, letterSpacing: "0.06em" }}>BESTSELLERS</p>
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-lg p-2" style={{ background: s.bg }}>
                    <p style={{ fontSize: 6.5, color: "rgba(255,255,255,0.72)", marginBottom: 3 }}>{s.label}</p>
                    <p style={{ fontSize: 10, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{s.value}</p>
                    <p style={{ fontSize: 6.5, color: "rgba(255,255,255,0.68)", marginTop: 2 }}>{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {/* Line chart */}
                <div className="bg-white rounded-lg" style={{ padding: "6px 8px" }}>
                  <p style={{ fontSize: 7.5, fontWeight: 600, color: "#64748B", marginBottom: 4 }}>Sales Overview</p>
                  <svg viewBox="0 0 180 60" width="100%" height={60}>
                    {[10,25,40,55].map((y) => <line key={y} x1="0" y1={y} x2="180" y2={y} stroke="#E2E8F0" strokeWidth="0.5" />)}
                    <defs>
                      <linearGradient id="fcG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,52 C22,44 42,20 65,28 C88,36 108,10 130,14 C152,18 165,32 180,24 L180,60 L0,60 Z" fill="url(#fcG)" />
                    <path d="M0,52 C22,44 42,20 65,28 C88,36 108,10 130,14 C152,18 165,32 180,24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Donut chart */}
                <div className="bg-white rounded-lg" style={{ padding: "6px 8px" }}>
                  <p style={{ fontSize: 7.5, fontWeight: 600, color: "#64748B", marginBottom: 4 }}>Top Categories</p>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 80 80" width={58} height={58} className="shrink-0">
                      {DONUT.map((s) => (
                        <circle key={s.label} cx="40" cy="40" r="28" fill="none" stroke={s.color}
                          strokeWidth="14" strokeDasharray={s.d} strokeDashoffset={s.o} transform="rotate(-90 40 40)" />
                      ))}
                    </svg>
                    <div>
                      {DONUT.map((s) => (
                        <div key={s.label} className="flex items-center gap-1 mb-1">
                          <div className="w-1.5 h-1.5 rounded-sm" style={{ background: s.color }} />
                          <span style={{ fontSize: 6.5, color: "#64748B" }}>{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stand */}
      <div className="flex flex-col items-center">
        <div style={{ width: 70, height: 4, background: "#1a1b2e", borderRadius: "0 0 4px 4px" }} />
        <div style={{ width: 120, height: 3, background: "#2d2d3e", borderRadius: 4, marginTop: 1 }} />
      </div>
      {/* Printer + Scanner */}
      <div className="flex justify-between items-end mt-3 px-8">
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <div className="text-4xl">🖨️</div>
          <p className="text-xs text-slate-400 mt-1 font-medium">Receipt Printer</p>
        </motion.div>
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.12, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <div className="text-4xl">📷</div>
          <p className="text-xs text-slate-400 mt-1 font-medium">Barcode Scanner</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function FeaturesCloud() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ══ CHALLENGE ══ */}
      <div className="py-16">
        <div className="max-w-[1240px] mx-auto px-5">

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            className="text-center mb-12"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-xs font-bold uppercase mb-3"
              style={{ color: "#EF4444" }}
            >
              THE CHALLENGE
            </motion.p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Managing a retail business is complex
            </h2>
            <p className="text-slate-500 text-base max-w-lg mx-auto">
              Disconnected systems, manual processes, and data mismatches slow you down.
            </p>
          </motion.div>

          {/* Desktop 3-col */}
          <div className="hidden lg:grid items-stretch" style={{ gridTemplateColumns: "1fr 480px 1fr", gap: 0 }}>

            <div className="flex flex-col justify-between py-4">
              {CHALLENGE_LEFT.map((c, i) => (
                <CardLeft key={c.title} {...c} delay={i * 0.09} />
              ))}
            </div>

            {/* Monitor: entrance scale + continuous float */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <MonitorMockup />
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-between py-4">
              {CHALLENGE_RIGHT.map((c, i) => (
                <CardRight key={c.title} {...c} delay={i * 0.09} />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="block lg:hidden">
            <MonitorMockup />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[...CHALLENGE_LEFT, ...CHALLENGE_RIGHT].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.36, ease: EASE }}
                  className="flex items-start gap-3 bg-white rounded-2xl p-4"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #F0F4F8" }}
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "#FEE2E2" }}>
                      {c.emoji}
                    </div>
                    <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 rounded-full border-2 border-white bg-red-500 flex items-center justify-center">
                      <span className="text-white font-black leading-none" style={{ fontSize: 8 }}>!</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1">{c.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#E8EDF5" }} />

      {/* ══ SOLUTION ══ */}
      <div className="py-16" style={{ background: "#FAFAFA" }}>
        <div className="max-w-[1240px] mx-auto px-5">

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
            className="text-center mb-10"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-xs font-bold uppercase mb-3"
              style={{ color: "#14B8A6" }}
            >
              THE SOLUTION
            </motion.p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              One Platform.{" "}
              <span style={{ color: "#14B8A6" }}>Every Solution.</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              KassaPOS brings everything together in one smart, connected system
              to help you run your business smoothly.
            </p>
          </motion.div>

          {/* Timeline (desktop) — staggered dot pop-in */}
          <div className="relative hidden lg:grid grid-cols-6 mb-1">
            <div style={{
              position: "absolute", top: "50%", transform: "translateY(-50%)",
              left: "8.33%", right: "8.33%", height: 2, background: "#E2E8F0",
            }} />
            {SOLUTIONS.map((_, i) => (
              <div key={i} className="flex justify-center" style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.35, type: "spring", stiffness: 320, damping: 16 }}
                  style={{
                    width: 10, height: 10, borderRadius: "50%", background: "#14B8A6",
                    border: "2px solid white", boxShadow: "0 0 0 2px #99F6E4",
                  }}
                />
              </div>
            ))}
          </div>

          {/* 6 Solution items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.04 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.42, ease: EASE }}
                className="flex flex-col items-center text-center cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3"
                  style={{ background: "#F0FDFA", border: "2px solid #99F6E4" }}
                >
                  {s.emoji}
                </motion.div>
                <p className="font-bold text-slate-900 text-sm mb-1.5">{s.title}</p>
                <p className="text-slate-500 leading-relaxed" style={{ fontSize: "0.73rem" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 4 Benefit cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: EASE }}
                className="flex items-start gap-3 rounded-2xl p-4 cursor-default"
                style={{ background: "#F8FAFC", border: "1px solid #E8EDF5" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: b.bg }}
                >
                  {b.emoji}
                </motion.div>
                <div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{b.title}</p>
                  <p className="text-slate-500 leading-relaxed" style={{ fontSize: "0.73rem" }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
