"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from "recharts";
import { Download, Calendar, TrendingUp, Filter } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const MONTHLY_DATA = [
  { month: "Jan", revenue: 342000, bills: 1240 },
  { month: "Feb", revenue: 289000, bills: 1050 },
  { month: "Mar", revenue: 415000, bills: 1520 },
  { month: "Apr", revenue: 380000, bills: 1380 },
  { month: "May", revenue: 520000, bills: 1890 },
  { month: "Jun", revenue: 467000, bills: 1700 },
];

const CATEGORY_DATA = [
  { name: "Grocery", value: 38, color: "#2563EB" },
  { name: "Beverages", value: 22, color: "#06B6D4" },
  { name: "Household", value: 18, color: "#8B5CF6" },
  { name: "Snacks", value: 14, color: "#F59E0B" },
  { name: "Other", value: 8, color: "#6B7280" },
];

const HOURLY_DATA = [
  { hour: "8:00", bills: 18 }, { hour: "9:00", bills: 32 }, { hour: "10:00", bills: 45 },
  { hour: "11:00", bills: 71 }, { hour: "12:00", bills: 89 }, { hour: "13:00", bills: 95 },
  { hour: "14:00", bills: 78 }, { hour: "15:00", bills: 52 }, { hour: "16:00", bills: 44 },
  { hour: "17:00", bills: 38 }, { hour: "18:00", bills: 29 }, { hour: "19:00", bills: 21 },
  { hour: "20:00", bills: 15 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-surface-2 border border-surface-border rounded-xl p-3 shadow-premium text-xs">
        <p className="font-semibold text-white mb-1">{label}</p>
        {payload.map((e: any) => (
          <p key={e.name} style={{ color: e.color }}>
            {e.name === "revenue" ? `₹${e.value.toLocaleString("en-IN")}` : `${e.value} bills`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ReportsPage() {
  const [period, setPeriod] = useState("monthly");

  return (
    <div className="space-y-5 pb-20 lg:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Reports & Analytics</h2>
          <p className="text-sm text-brand-100/40">Performance insights for your business</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-2 border border-surface-border">
            {["daily", "weekly", "monthly"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                  period === p ? "bg-brand-400 text-white" : "text-brand-100/50 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-2 border border-surface-border text-xs text-brand-100/60 hover:text-white transition-all">
            <Download size={13} />
            Export
          </button>
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue (YTD)", value: "₹24,13,000", change: "+22%", up: true },
          { label: "Total Bills (YTD)", value: "8,780", change: "+18%", up: true },
          { label: "Avg Bill Value", value: "₹274", change: "+4.5%", up: true },
          { label: "Return Rate", value: "1.2%", change: "-0.3%", up: true },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, ease: EASE_EXPO }}
            className="bg-surface-2 border border-surface-border rounded-2xl p-4"
          >
            <p className="text-xs text-brand-100/50 mb-2">{kpi.label}</p>
            <p className="text-xl font-bold text-white">{kpi.value}</p>
            <p className={`text-xs mt-1 ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>{kpi.change} vs last year</p>
          </motion.div>
        ))}
      </div>

      {/* Monthly Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: EASE_EXPO }}
        className="bg-surface-2 border border-surface-border rounded-2xl p-5"
      >
        <h3 className="text-sm font-semibold text-white mb-4">Monthly Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={MONTHLY_DATA} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: "rgba(147,197,253,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(147,197,253,0.4)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="revenue" fill="#2563EB" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Hourly Bills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ease: EASE_EXPO }}
          className="bg-surface-2 border border-surface-border rounded-2xl p-5"
        >
          <h3 className="text-sm font-semibold text-white mb-4">Hourly Bill Distribution</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={HOURLY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="hour" tick={{ fill: "rgba(147,197,253,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "rgba(147,197,253,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="bills" stroke="#06B6D4" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, ease: EASE_EXPO }}
          className="bg-surface-2 border border-surface-border rounded-2xl p-5"
        >
          <h3 className="text-sm font-semibold text-white mb-4">Sales by Category</h3>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={CATEGORY_DATA} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3}>
                  {CATEGORY_DATA.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-2">
              {CATEGORY_DATA.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: cat.color }} />
                  <span className="text-xs text-brand-100/60">{cat.name}</span>
                  <span className="text-xs font-semibold text-white ml-auto">{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
