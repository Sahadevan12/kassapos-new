"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { AlertCircle, Zap, Cloud, MapPin, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_EXPO } from "@/lib/animations";

const SCENES = [
  {
    num: "01",
    icon: AlertCircle,
    iconColor: "#EF4444",
    label: "The Problem",
    title: "Your billing is\nslowing you down",
    body: "Manual entry. Paper records. Lost data. Billing errors. Queues building. Staff overwhelmed. Every slow bill costs you money.",
    accentColor: "#EF4444",
    accentBg: "rgba(239,68,68,0.08)",
    glowColor: "rgba(239,68,68,0.1)",
    visual: "chaos",
  },
  {
    num: "02",
    icon: Zap,
    iconColor: "#F59E0B",
    label: "The Speed",
    title: "What if billing\ntook 3 seconds?",
    body: "Scan barcode. Automatic price lookup. GST calculated. Bill printed. WhatsApp receipt sent. Done. Every time.",
    accentColor: "#F59E0B",
    accentBg: "rgba(245,158,11,0.08)",
    glowColor: "rgba(245,158,11,0.1)",
    visual: "fast",
  },
  {
    num: "03",
    icon: Cloud,
    iconColor: "#3B82F6",
    label: "The Control",
    title: "Your data,\neverywhere, always",
    body: "Real-time AWS cloud sync. Check today's revenue from your phone at midnight. 3 branches or 30 — full control, anytime.",
    accentColor: "#3B82F6",
    accentBg: "rgba(59,130,246,0.08)",
    glowColor: "rgba(59,130,246,0.1)",
    visual: "cloud",
  },
  {
    num: "04",
    icon: MapPin,
    iconColor: "#06B6D4",
    label: "Built for India",
    title: "Made for Indian\nretail. Truly.",
    body: "GST compliance. WhatsApp bills. Tamil & English. Barcode printing. Weighing scale. Works fully offline. Est. 2008.",
    accentColor: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    glowColor: "rgba(6,182,212,0.1)",
    visual: "india",
  },
] as const;

/* ─── Scene visuals ──────────────────────────────── */

function ChaosVisual() {
  const tags = ["Paper Records", "Billing Error", "Long Queue", "Data Lost", "Manual Entry", "Slow Checkout"];
  return (
    <div className="relative w-full h-52 flex items-center justify-center">
      {tags.map((text, i) => (
        <motion.div
          key={text}
          className="absolute px-3 py-1.5 rounded-lg text-xs font-medium border"
          style={{
            top: `${12 + i * 14}%`,
            left: `${5 + ((i * 19) % 68)}%`,
            background: "rgba(239,68,68,0.08)",
            borderColor: "rgba(239,68,68,0.2)",
            color: "#DC2626",
          }}
          animate={{ y: [0, -6, 0], rotate: [-2 + i, 2 - i * 0.5, -2 + i], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      ))}
      <motion.div
        className="w-16 h-16 rounded-full border-2 border-red-300 flex items-center justify-center"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ background: "rgba(239,68,68,0.06)" }}
      >
        <AlertCircle size={28} className="text-red-500" />
      </motion.div>
    </div>
  );
}

function FastVisual() {
  const steps = [
    { label: "Scan barcode", time: "0.0s" },
    { label: "Price auto-loaded", time: "0.4s" },
    { label: "GST calculated", time: "0.9s" },
    { label: "Bill printed", time: "2.1s" },
    { label: "WhatsApp sent ✓", time: "3.0s" },
  ];
  return (
    <div className="w-full max-w-xs space-y-2">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl border"
          style={{ background: "rgba(245,158,11,0.05)", borderColor: "rgba(245,158,11,0.15)" }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: i * 0.15, ease: EASE_EXPO }}
        >
          <motion.div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: i === 4 ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.12)" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 500, damping: 25 }}
          >
            {i === 4
              ? <CheckCircle2 size={12} className="text-emerald-500" />
              : <span className="text-[9px] font-bold text-amber-500">{i + 1}</span>
            }
          </motion.div>
          <span className="text-sm text-slate-700 flex-1">{step.label}</span>
          <span className="text-xs font-mono text-amber-500/70">{step.time}</span>
        </motion.div>
      ))}
      <p className="text-center text-xs text-slate-400 pt-1">Average billing time: 3 seconds</p>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <div
        className="p-4 rounded-2xl border text-center"
        style={{ background: "rgba(37,99,235,0.05)", borderColor: "rgba(37,99,235,0.15)" }}
      >
        <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wider">Live Revenue Today</p>
        <p className="text-3xl font-extrabold font-display gradient-text">₹1,24,350</p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <div className="live-dot" />
          <p className="text-xs text-emerald-600">↑ 18.3% vs yesterday</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Bills Today", val: "287" },
          { label: "Products Sold", val: "1,453" },
          { label: "Top Product", val: "Milk" },
          { label: "GST Collected", val: "₹6,218" },
        ].map((item) => (
          <div
            key={item.label}
            className="p-3 rounded-xl border text-center"
            style={{ background: "rgba(255,255,255,0.9)", borderColor: "rgba(37,99,235,0.1)" }}
          >
            <p className="text-xs font-semibold text-slate-800">{item.val}</p>
            <p className="text-[10px] text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-[10px] text-slate-400">Syncing across 3 branches · AWS-powered</p>
    </div>
  );
}

function IndiaVisual() {
  const items = [
    { label: "GST Ready", color: "#10B981" },
    { label: "WhatsApp Bills", color: "#22C55E" },
    { label: "Tamil / English", color: "#3B82F6" },
    { label: "Works Offline", color: "#8B5CF6" },
    { label: "Barcode Print", color: "#F59E0B" },
    { label: "Cloud Backup", color: "#06B6D4" },
    { label: "e-Invoice IRN", color: "#EC4899" },
    { label: "Weighing Scale", color: "#EF4444" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs"
          style={{ background: `${item.color}08`, borderColor: `${item.color}20`, color: item.color }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: i * 0.07, ease: EASE_EXPO }}
        >
          <CheckCircle2 size={12} style={{ color: item.color }} />
          {item.label}
        </motion.div>
      ))}
    </div>
  );
}

const VISUALS: Record<string, React.ReactNode> = {
  chaos: <ChaosVisual />,
  fast: <FastVisual />,
  cloud: <CloudVisual />,
  india: <IndiaVisual />,
};

/* ─── Per-scene animated wrappers (each is its own component = hooks-safe) ─── */

function SceneText({
  scene,
  scrollYProgress,
  start,
  end,
}: {
  scene: (typeof SCENES)[number];
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const isFirst = start === 0;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [isFirst ? 1 : 0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [isFirst ? 0 : 28, 0, 0, -18]);

  return (
    <motion.div style={{ opacity, y, position: "absolute", inset: 0 }} className="flex flex-col justify-center gap-5">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: scene.accentBg, boxShadow: `0 0 16px ${scene.glowColor}` }}
        >
          <scene.icon size={22} style={{ color: scene.iconColor }} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: scene.accentColor }}>
          {scene.label}
        </span>
      </div>
      <h2
        className="font-display font-bold text-slate-900 leading-tight"
        style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)", whiteSpace: "pre-line" }}
      >
        {scene.title}
      </h2>
      <p className="text-base text-slate-500 leading-relaxed max-w-md">{scene.body}</p>
      <div className="h-0.5 w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${scene.accentColor}, transparent)` }} />
    </motion.div>
  );
}

function SceneVisualWrapper({
  scene,
  scrollYProgress,
  start,
  end,
}: {
  scene: (typeof SCENES)[number];
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const isFirst = start === 0;
  const opacity = useTransform(scrollYProgress, [start, start + 0.06, end - 0.06, end], [isFirst ? 1 : 0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, start + 0.06], [isFirst ? 1 : 0.88, 1]);

  return (
    <motion.div style={{ opacity, scale, position: "absolute", width: "100%" }} className="flex justify-center">
      <div
        className="w-full max-w-[360px] p-6 rounded-2xl border"
        style={{
          background: "rgba(255,255,255,0.9)",
          borderColor: `${scene.accentColor}20`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.06), 0 0 20px ${scene.glowColor}`,
          backdropFilter: "blur(16px)",
        }}
      >
        {VISUALS[scene.visual]}
      </div>
    </motion.div>
  );
}

function ProgressDot({
  accentColor,
  scrollYProgress,
  start,
  end,
}: {
  accentColor: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const scaleVal = useTransform(scrollYProgress, [start, start + 0.02, end - 0.02, end], [1, 1.5, 1.5, 1]);
  const bgColor = useTransform(scrollYProgress, [start, start + 0.02], ["#E2E8F0", accentColor]);

  return <motion.div style={{ scale: scaleVal, backgroundColor: bgColor }} className="w-2 h-2 rounded-full" />;
}

function SideNum({
  scene,
  scrollYProgress,
  start,
  end,
}: {
  scene: (typeof SCENES)[number];
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, start + 0.04, end - 0.04, end], [0.2, 1, 1, 0.2]);

  return (
    <motion.div style={{ opacity }} className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full" style={{ background: scene.accentColor }} />
      <span className="text-[10px] font-mono font-bold" style={{ color: scene.accentColor }}>
        {scene.num}
      </span>
    </motion.div>
  );
}

/* ─── Main export ──────────────────────────────── */

export function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative" style={{ minHeight: `${SCENES.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ background: "#FFFFFF" }}>
        {/* Background */}
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.98) 100%)" }}
        />

        {/* Left progress rail — only on lg screens */}
        <div className="absolute left-6 top-1/4 bottom-1/4 w-px bg-slate-200 hidden lg:block">
          <motion.div
            className="absolute top-0 left-0 right-0 rounded-full"
            style={{
              height: progressHeight,
              background: "linear-gradient(180deg, #2563EB, #06B6D4)",
              boxShadow: "0 0 6px rgba(37,99,235,0.3)",
            }}
          />
        </div>

        {/* Scene number chips — lg only */}
        <div className="absolute left-1 top-1/4 bottom-1/4 hidden lg:flex flex-col justify-between pl-4">
          {SCENES.map((scene, i) => {
            const start = i / SCENES.length;
            const end = (i + 1) / SCENES.length;
            return (
              <SideNum key={scene.num} scene={scene} scrollYProgress={scrollYProgress} start={start} end={end} />
            );
          })}
        </div>

        <div className="container-xl relative z-10 lg:pl-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text side */}
            <div className="relative h-64 lg:h-72">
              <SectionLabel className="mb-0 absolute -top-10 left-0">The Kassapos Story</SectionLabel>
              {SCENES.map((scene, i) => {
                const start = i / SCENES.length;
                const end = (i + 1) / SCENES.length;
                return (
                  <SceneText
                    key={scene.num}
                    scene={scene}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>

            {/* Visual side */}
            <div className="relative flex justify-center items-center h-72 lg:h-80">
              {SCENES.map((scene, i) => {
                const start = i / SCENES.length;
                const end = (i + 1) / SCENES.length;
                return (
                  <SceneVisualWrapper
                    key={scene.num}
                    scene={scene}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6 lg:mt-8">
            {SCENES.map((scene, i) => {
              const start = i / SCENES.length;
              const end = (i + 1) / SCENES.length;
              return (
                <ProgressDot
                  key={scene.num}
                  accentColor={scene.accentColor}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
