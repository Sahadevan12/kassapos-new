"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3, Package, Users, TrendingUp, Bell, Search,
  ArrowUpRight, ArrowDownRight, Zap, Wifi, ChevronRight,
  LayoutDashboard, Settings, HelpCircle,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

const TABS = [
  { id: "overview", label: "Overview", icon: <BarChart3 size={13} /> },
  { id: "billing", label: "Billing", icon: <Zap size={13} /> },
  { id: "inventory", label: "Inventory", icon: <Package size={13} /> },
  { id: "reports", label: "Reports", icon: <TrendingUp size={13} /> },
];

const BAR_DATA = [45, 72, 58, 89, 76, 95, 82];
const BAR_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function OverviewTab() {
  const [count, setCount] = useState(124350);
  useEffect(() => {
    const t = setInterval(() => setCount((c) => c + Math.floor(Math.random() * 220 + 60)), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {[
        { label: "Revenue Today", value: `₹${count.toLocaleString("en-IN")}`, change: "+18.3%", up: true, color: "#10B981" },
        { label: "Bills Generated", value: "287", change: "+8.1%", up: true, color: "#3B82F6" },
        { label: "Items Sold", value: "1,453", change: "+5.2%", up: true, color: "#8B5CF6" },
        { label: "Avg Bill Value", value: "₹432", change: "-2.1%", up: false, color: "#F59E0B" },
      ].map((kpi) => (
        <div
          key={kpi.label}
          className="p-3 rounded-xl border"
          style={{ background: "#F8FAFF", borderColor: "#F1F5F9" }}
        >
          <p className="text-[10px] text-slate-400 mb-1">{kpi.label}</p>
          <p className="text-sm font-bold text-slate-900 font-display leading-tight">{kpi.value}</p>
          <div className={`flex items-center gap-0.5 text-[10px] mt-0.5`} style={{ color: kpi.up ? "#059669" : "#DC2626" }}>
            {kpi.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
            {kpi.change}
          </div>
        </div>
      ))}

      {/* Bar Chart */}
      <div className="col-span-2 p-3 rounded-xl border" style={{ background: "#F8FAFF", borderColor: "#F1F5F9" }}>
        <p className="text-[10px] text-slate-400 mb-2.5">Weekly Sales (₹ thousands)</p>
        <div className="flex items-end gap-1.5 h-14">
          {BAR_DATA.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                className="w-full rounded-sm"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: EASE_EXPO }}
                style={{
                  height: `${val}%`,
                  transformOrigin: "bottom",
                  background: i === 6
                    ? "linear-gradient(180deg, #3B82F6, #1D4ED8)"
                    : "rgba(37,99,235,0.15)",
                  boxShadow: i === 6 ? "0 0 6px rgba(37,99,235,0.3)" : "none",
                }}
              />
              <span className="text-[9px] text-slate-400">{BAR_LABELS[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BillingTab() {
  const items = [
    { name: "Tata Salt 1kg", qty: 2, price: 44 },
    { name: "Horlicks 500g", qty: 1, price: 199 },
    { name: "Maggi Noodles ×2pkt", qty: 3, price: 42 },
  ];
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const gst = Math.round(subtotal * 0.05);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl border"
        style={{ background: "#F8FAFF", borderColor: "rgba(37,99,235,0.15)" }}
      >
        <Search size={11} className="text-slate-400" />
        <span className="text-xs text-slate-400 flex-1">Search products or scan barcode...</span>
        <motion.span
          className="w-0.5 h-3 bg-brand-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-3 py-2 rounded-lg border text-xs"
            style={{ background: "#FAFBFF", borderColor: "#F1F5F9" }}
          >
            <span className="text-slate-700 flex-1 truncate">{item.name}</span>
            <span className="text-slate-400 mx-3">×{item.qty}</span>
            <span className="text-slate-800 font-medium">₹{(item.qty * item.price)}</span>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-xl border space-y-1.5 text-xs"
        style={{ background: "#F8FAFF", borderColor: "#F1F5F9" }}
      >
        <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>₹{subtotal}</span></div>
        <div className="flex justify-between text-slate-500"><span>GST 5%</span><span>₹{gst}</span></div>
        <div className="flex justify-between font-bold text-slate-900 text-sm pt-1 border-t border-slate-100">
          <span>Total</span><span>₹{subtotal + gst}</span>
        </div>
      </div>
      <button
        className="w-full py-2.5 rounded-xl btn-gradient text-white text-xs font-bold tracking-wide"
      >
        Complete Bill →
      </button>
    </div>
  );
}

function InventoryTab() {
  const items = [
    { name: "Tata Salt 1kg", stock: 5, min: 20, color: "#EF4444" },
    { name: "Sugar 5kg", stock: 12, min: 25, color: "#F59E0B" },
    { name: "Sunflower Oil 1L", stock: 8, min: 15, color: "#EF4444" },
  ];
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Low Stock Alerts</p>
      {items.map((item, i) => (
        <div
          key={i}
          className="p-3 rounded-xl border"
          style={{ background: "#F8FAFF", borderColor: "#F1F5F9" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-700">{item.name}</span>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${item.color}10`, color: item.color }}
            >
              {item.stock} left
            </span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ background: "#E2E8F0" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: item.color }}
              initial={{ width: 0 }}
              animate={{ width: `${(item.stock / item.min) * 100}%` }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: EASE_EXPO }}
            />
          </div>
          <p className="text-[9px] text-slate-400 mt-1">Minimum stock: {item.min} units</p>
        </div>
      ))}
    </div>
  );
}

function ReportsTab() {
  const items = [
    { name: "Cooking Oil", rev: 12450, pct: 92 },
    { name: "Rice 5kg", rev: 9870, pct: 73 },
    { name: "Sugar", rev: 7230, pct: 53 },
    { name: "Tata Salt", rev: 6150, pct: 45 },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Top Products Today</p>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-[10px] text-slate-400 w-3.5 font-mono">{i + 1}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-700">{item.name}</span>
              <span className="text-xs font-semibold text-brand-500">₹{item.rev.toLocaleString("en-IN")}</span>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "#E2E8F0" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #1D4ED8, #2563EB, #06B6D4)" }}
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: EASE_EXPO }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const TAB_CONTENT: Record<string, React.ReactNode> = {
  overview: <OverviewTab />,
  billing: <BillingTab />,
  inventory: <InventoryTab />,
  reports: <ReportsTab />,
};

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="section-padding" style={{ background: "#F8FAFF", padding: "52px 0 56px" }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal direction="left">
            <SectionLabel className="mb-5">Live Product Demo</SectionLabel>
            <h2
              className="font-display font-bold text-slate-900 mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.13 }}
            >
              See it before you{" "}
              <span className="gradient-text">sign up.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8" style={{ fontSize: "1.1rem" }}>
              This is the actual Kassapos dashboard — not a demo video or screenshot.
              Explore billing, inventory, and real-time reports live.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { icon: <Zap size={18} className="text-amber-500" />, text: "Switch tabs to explore billing, inventory, and reports" },
                { icon: <BarChart3 size={18} className="text-brand-500" />, text: "Revenue counter updates every 3 seconds — live simulation" },
                { icon: <Wifi size={18} className="text-emerald-500" />, text: "Works fully offline — never lose a sale" },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.1)" }}
                  >
                    {point.icon}
                  </div>
                  <p className="text-slate-500 pt-1.5" style={{ fontSize: "0.97rem" }}>{point.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="/register"
                className="inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-xl"
                style={{ padding: "14px 32px", fontSize: "1rem", boxShadow: "0 6px 20px rgba(37,99,235,0.3)" }}
              >
                Try it free <ChevronRight size={18} />
              </a>
              <a href="/demo" className="font-semibold text-brand-500 hover:text-brand-600 transition-colors" style={{ fontSize: "0.95rem" }}>
                Book a live demo →
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Dashboard mockup */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              {/* Floating glow badges */}
              <motion.div
                className="absolute top-2 right-2 md:-top-4 md:-right-4 z-20 px-3 py-1.5 rounded-full border text-xs font-semibold"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  borderColor: "rgba(16,185,129,0.2)",
                  color: "#059669",
                  backdropFilter: "blur(12px)",
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="live-dot" style={{ width: 5, height: 5 }} />
                  Live · Real-time sync
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-2 left-2 md:-bottom-4 md:-left-4 z-20 px-3 py-1.5 rounded-full border text-xs font-semibold"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  borderColor: "rgba(245,158,11,0.2)",
                  color: "#B45309",
                  backdropFilter: "blur(12px)",
                }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                ⚡ 3-second billing
              </motion.div>

              {/* Main window */}
              <motion.div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                }}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE_EXPO }}
              >
                {/* macOS-style title bar */}
                <div
                  className="flex items-center gap-3 px-4 py-3 border-b"
                  style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div
                    className="flex-1 mx-4 flex items-center justify-center gap-2 px-3 py-1 rounded-lg text-[11px]"
                    style={{ background: "#F1F5F9", color: "#94A3B8" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    kassapos.com/dashboard
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] text-emerald-600">
                      <span className="live-dot" style={{ width: 6, height: 6 }} />
                      Live
                    </div>
                    <Bell size={11} className="text-slate-400" />
                  </div>
                </div>

                {/* App chrome: sidebar hint + content */}
                <div className="flex" style={{ minHeight: 340 }}>
                  {/* Mini sidebar */}
                  <div
                    className="hidden sm:flex flex-col gap-1 p-2 border-r"
                    style={{ width: 44, borderColor: "#F1F5F9", background: "#F8FAFF" }}
                  >
                    {[LayoutDashboard, Zap, Package, TrendingUp, Users, Settings].map((Icon, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: i === 0 ? "rgba(37,99,235,0.1)" : "transparent",
                          color: i === 0 ? "#2563EB" : "#94A3B8",
                        }}
                      >
                        <Icon size={14} />
                      </div>
                    ))}
                    <div className="mt-auto">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ color: "#94A3B8" }}>
                        <HelpCircle size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col">
                    {/* Tab bar */}
                    <div
                      className="flex gap-0.5 px-3 py-2 border-b"
                      style={{ background: "#FFFFFF", borderColor: "#F1F5F9" }}
                    >
                      {TABS.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all"
                          style={{
                            background: activeTab === tab.id ? "rgba(37,99,235,0.08)" : "transparent",
                            color: activeTab === tab.id ? "#2563EB" : "#94A3B8",
                          }}
                        >
                          {tab.icon}
                          <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Tab content */}
                    <div className="flex-1 p-4" style={{ background: "#FFFFFF" }}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.22, ease: EASE_EXPO }}
                        >
                          {TAB_CONTENT[activeTab]}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
