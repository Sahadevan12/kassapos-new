"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, TrendingDown, Zap, Package, Users,
  ArrowUpRight, ArrowDownRight, MoreHorizontal, RefreshCw,
  AlertCircle, CheckCircle2, Clock, ShoppingBag
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from "recharts";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { EASE_EXPO } from "@/lib/animations";

const WEEKLY_DATA = [
  { day: "Mon", sales: 45230, bills: 124 },
  { day: "Tue", sales: 72180, bills: 198 },
  { day: "Wed", sales: 58940, bills: 156 },
  { day: "Thu", sales: 89420, bills: 245 },
  { day: "Fri", sales: 76550, bills: 210 },
  { day: "Sat", sales: 112340, bills: 312 },
  { day: "Sun", sales: 98760, bills: 278 },
];

const TOP_PRODUCTS = [
  { name: "Cooking Oil 1L", sales: 14230, units: 87, change: 12.3 },
  { name: "Rice 5kg", sales: 11870, units: 64, change: -3.2 },
  { name: "Sugar 1kg", sales: 9240, units: 124, change: 8.7 },
  { name: "Tata Salt", sales: 7650, units: 198, change: 4.1 },
  { name: "Horlicks 500g", sales: 6120, units: 43, change: 22.5 },
];

const RECENT_BILLS = [
  { id: "B-2847", customer: "Rajesh Kumar", amount: 1247, items: 8, time: "2 min ago", status: "paid" },
  { id: "B-2846", customer: "Priya S.", amount: 456, items: 3, time: "8 min ago", status: "paid" },
  { id: "B-2845", customer: "Walk-in", amount: 2340, items: 15, time: "12 min ago", status: "paid" },
  { id: "B-2844", customer: "Murugan", amount: 890, items: 6, time: "18 min ago", status: "paid" },
  { id: "B-2843", customer: "Kavitha", amount: 3450, items: 22, time: "25 min ago", status: "refunded" },
];

const ALERTS = [
  { type: "warning", message: "Tata Salt 1kg — only 5 units left", action: "Reorder" },
  { type: "warning", message: "Sunflower Oil — below reorder level", action: "Reorder" },
  { type: "info", message: "Monthly GST report due in 3 days", action: "Generate" },
  { type: "success", message: "Daily backup completed — Google Drive", action: null },
];

function KPICard({
  label, value, suffix, prefix, decimals, change, icon, color, delay
}: {
  label: string; value: number; suffix?: string; prefix?: string;
  decimals?: number; change: number; icon: React.ReactNode; color: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, ease: EASE_EXPO }}
      className="bg-surface-2 border border-surface-border rounded-2xl p-5 hover:border-brand-400/20 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15`, color }}
        >
          {icon}
        </div>
        <span className={`text-xs font-medium flex items-center gap-0.5 ${change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
          {change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {Math.abs(change)}%
        </span>
      </div>
      <p className="text-2xl font-extrabold font-display text-white mb-1">
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} decimals={decimals ?? 0} duration={1500} />
      </p>
      <p className="text-xs text-brand-100/50">{label}</p>
    </motion.div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-2 border border-surface-border rounded-xl p-3 shadow-premium">
        <p className="text-xs font-semibold text-white mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} className="text-xs" style={{ color: entry.color }}>
            {entry.name === "sales"
              ? `₹${entry.value.toLocaleString("en-IN")}`
              : `${entry.value} bills`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardOverview() {
  const [liveRevenue, setLiveRevenue] = useState(124350);

  useEffect(() => {
    const t = setInterval(() => {
      setLiveRevenue((r) => r + Math.floor(Math.random() * 150 + 50));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Good morning, Saravana! 👋</h2>
          <p className="text-sm text-brand-100/50 mt-0.5">
            Here&apos;s what&apos;s happening at your store today.
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-surface-border text-xs text-brand-100/60 hover:text-white transition-all">
          <RefreshCw size={13} />
          <span className="hidden sm:block">Refresh</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Today's Revenue"
          value={liveRevenue}
          prefix="₹"
          change={18.3}
          icon={<TrendingUp size={18} />}
          color="#2563EB"
          delay={0}
        />
        <KPICard
          label="Bills Generated"
          value={287}
          change={8.1}
          icon={<Zap size={18} />}
          color="#06B6D4"
          delay={0.08}
        />
        <KPICard
          label="Items Sold"
          value={1453}
          change={5.2}
          icon={<Package size={18} />}
          color="#10B981"
          delay={0.16}
        />
        <KPICard
          label="New Customers"
          value={23}
          change={-2.1}
          icon={<Users size={18} />}
          color="#F59E0B"
          delay={0.24}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: EASE_EXPO }}
          className="lg:col-span-2 bg-surface-2 border border-surface-border rounded-2xl p-5"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-semibold text-white">Weekly Sales</h3>
              <p className="text-xs text-brand-100/40">Revenue & bill count</p>
            </div>
            <button className="w-7 h-7 rounded-lg bg-surface-3 flex items-center justify-center text-brand-100/40 hover:text-white">
              <MoreHorizontal size={14} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={WEEKLY_DATA}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "rgba(147,197,253,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "rgba(147,197,253,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}K`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="sales" stroke="#2563EB" strokeWidth={2} fill="url(#salesGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ease: EASE_EXPO }}
          className="bg-surface-2 border border-surface-border rounded-2xl p-5"
        >
          <h3 className="text-sm font-semibold text-white mb-4">Alerts & Actions</h3>
          <div className="space-y-3">
            {ALERTS.map((alert, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="mt-0.5 shrink-0">
                  {alert.type === "warning" && <AlertCircle size={14} className="text-amber-400" />}
                  {alert.type === "info" && <Clock size={14} className="text-blue-400" />}
                  {alert.type === "success" && <CheckCircle2 size={14} className="text-emerald-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-brand-100/70 leading-snug">{alert.message}</p>
                  {alert.action && (
                    <button className="text-[11px] text-brand-300 hover:text-white transition-colors mt-0.5">
                      {alert.action} →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, ease: EASE_EXPO }}
          className="lg:col-span-2 bg-surface-2 border border-surface-border rounded-2xl"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-surface-border">
            <h3 className="text-sm font-semibold text-white">Top Products Today</h3>
            <button className="text-xs text-brand-300 hover:text-white transition-colors">View all →</button>
          </div>
          <div className="divide-y divide-surface-border/50">
            {TOP_PRODUCTS.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3 px-5 py-3 hover:bg-surface-3/50 transition-colors">
                <span className="text-xs text-brand-100/30 w-4">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{p.name}</p>
                  <p className="text-xs text-brand-100/40">{p.units} units</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">₹{p.sales.toLocaleString("en-IN")}</p>
                  <p className={`text-xs flex items-center justify-end gap-0.5 ${p.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {p.change >= 0 ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                    {Math.abs(p.change)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Bills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, ease: EASE_EXPO }}
          className="bg-surface-2 border border-surface-border rounded-2xl"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-surface-border">
            <h3 className="text-sm font-semibold text-white">Recent Bills</h3>
            <button className="text-xs text-brand-300 hover:text-white">All bills →</button>
          </div>
          <div className="divide-y divide-surface-border/50">
            {RECENT_BILLS.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between px-5 py-3 hover:bg-surface-3/50 transition-colors">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-brand-100/40">{bill.id}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${bill.status === "paid" ? "bg-emerald-400" : "bg-red-400"}`} />
                  </div>
                  <p className="text-xs text-white/80">{bill.customer}</p>
                  <p className="text-[10px] text-brand-100/30">{bill.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">₹{bill.amount.toLocaleString("en-IN")}</p>
                  <p className="text-[10px] text-brand-100/40">{bill.items} items</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
