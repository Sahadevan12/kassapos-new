"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Plus, Phone, MessageCircle, Star, ShoppingBag,
  TrendingUp, Download, X, ChevronRight, Gift
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const CUSTOMERS = [
  { id: 1, name: "Arjun Sharma", phone: "+91 98765 43210", email: "arjun@email.com", city: "Chennai", totalOrders: 47, totalSpend: 28450, loyaltyPoints: 284, lastVisit: "2 days ago", tier: "gold" },
  { id: 2, name: "Priya Ramasamy", phone: "+91 87654 32109", email: "priya@email.com", city: "Coimbatore", totalOrders: 23, totalSpend: 14200, loyaltyPoints: 142, lastVisit: "1 week ago", tier: "silver" },
  { id: 3, name: "Karthik Murugan", phone: "+91 76543 21098", email: "karthik@email.com", city: "Madurai", totalOrders: 89, totalSpend: 67800, loyaltyPoints: 678, lastVisit: "Yesterday", tier: "platinum" },
  { id: 4, name: "Meena Sundar", phone: "+91 65432 10987", email: "meena@email.com", city: "Salem", totalOrders: 12, totalSpend: 6750, loyaltyPoints: 67, lastVisit: "3 weeks ago", tier: "bronze" },
  { id: 5, name: "Rajesh Kumar", phone: "+91 54321 09876", email: "rajesh@email.com", city: "Trichy", totalOrders: 34, totalSpend: 22100, loyaltyPoints: 221, lastVisit: "5 days ago", tier: "gold" },
  { id: 6, name: "Deepa Lakshmi", phone: "+91 43210 98765", email: "deepa@email.com", city: "Chennai", totalOrders: 61, totalSpend: 45600, loyaltyPoints: 456, lastVisit: "Today", tier: "platinum" },
  { id: 7, name: "Suresh Annamalai", phone: "+91 32109 87654", email: "suresh@email.com", city: "Erode", totalOrders: 8, totalSpend: 3200, loyaltyPoints: 32, lastVisit: "2 months ago", tier: "bronze" },
  { id: 8, name: "Kavitha Balan", phone: "+91 21098 76543", email: "kavitha@email.com", city: "Vellore", totalOrders: 19, totalSpend: 11400, loyaltyPoints: 114, lastVisit: "10 days ago", tier: "silver" },
];

const TIER_CONFIG = {
  platinum: { label: "Platinum", color: "text-cyan-300", bg: "bg-cyan-500/10 border-cyan-500/20" },
  gold: { label: "Gold", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  silver: { label: "Silver", color: "text-slate-300", bg: "bg-slate-500/10 border-slate-500/20" },
  bronze: { label: "Bronze", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
};

const RECENT_PURCHASES = [
  { item: "Tata Salt 1kg × 2", amount: 44, date: "Today 2:30 PM" },
  { item: "Maggi Noodles × 4", amount: 56, date: "Yesterday 6:15 PM" },
  { item: "Fortune Oil 1L", amount: 145, date: "3 days ago" },
  { item: "Horlicks 500g", amount: 199, date: "5 days ago" },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("all");
  const [selected, setSelected] = useState<(typeof CUSTOMERS)[0] | null>(null);

  const filtered = CUSTOMERS.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch = c.name.toLowerCase().includes(q) || c.phone.includes(q) || c.city.toLowerCase().includes(q);
    const matchTier = tierFilter === "all" || c.tier === tierFilter;
    return matchSearch && matchTier;
  });

  const totalRevenue = CUSTOMERS.reduce((s, c) => s + c.totalSpend, 0);
  const totalOrders = CUSTOMERS.reduce((s, c) => s + c.totalOrders, 0);

  return (
    <div className="space-y-5 pb-20 lg:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Customers</h2>
          <p className="text-sm text-brand-100/40">{CUSTOMERS.length} customers · ₹{totalRevenue.toLocaleString("en-IN")} total revenue</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-2 border border-surface-border text-xs text-brand-100/60 hover:text-white transition-all">
            <Download size={13} />
            Export
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl btn-gradient text-white text-xs font-medium">
            <Plus size={13} />
            Add Customer
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Total Customers", value: CUSTOMERS.length, icon: "👥", color: "text-brand-400" },
          { label: "Total Revenue", value: `₹${(totalRevenue / 1000).toFixed(0)}K`, icon: "💰", color: "text-emerald-400" },
          { label: "Avg Spend / Customer", value: `₹${Math.round(totalRevenue / CUSTOMERS.length).toLocaleString("en-IN")}`, icon: "📊", color: "text-cyan-400" },
          { label: "Total Orders", value: totalOrders, icon: "🛍️", color: "text-amber-400" },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, ease: EASE_EXPO }}
            className="bg-surface-2 border border-surface-border rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{kpi.icon}</span>
              <p className="text-xs text-brand-100/40">{kpi.label}</p>
            </div>
            <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-100/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, city..."
            className="w-full h-10 pl-9 pr-4 rounded-xl bg-surface-2 border border-surface-border text-sm text-white placeholder:text-brand-100/30 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-2 border border-surface-border">
          {[
            { id: "all", label: "All" },
            { id: "platinum", label: "Platinum" },
            { id: "gold", label: "Gold" },
            { id: "silver", label: "Silver" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setTierFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                tierFilter === f.id ? "bg-brand-400 text-white" : "text-brand-100/50 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Customer list */}
        <div className="lg:col-span-2 space-y-2">
          {filtered.map((customer, i) => {
            const tier = TIER_CONFIG[customer.tier as keyof typeof TIER_CONFIG];
            return (
              <motion.button
                key={customer.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, ease: EASE_EXPO }}
                onClick={() => setSelected(customer)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  selected?.id === customer.id
                    ? "bg-brand-400/10 border-brand-400/30"
                    : "bg-surface-2 border-surface-border hover:bg-surface-3"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-400/20 border border-brand-400/20 flex items-center justify-center text-sm font-bold text-brand-300">
                    {customer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-semibold text-white">{customer.name}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold border ${tier.bg} ${tier.color}`}>
                        {tier.label}
                      </span>
                    </div>
                    <p className="text-xs text-brand-100/40">{customer.phone} · {customer.city}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-white">₹{customer.totalSpend.toLocaleString("en-IN")}</p>
                    <p className="text-xs text-brand-100/40">{customer.totalOrders} orders</p>
                  </div>
                  <ChevronRight size={14} className="text-brand-100/20 shrink-0" />
                </div>
              </motion.button>
            );
          })}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-brand-100/30 text-sm">No customers found</div>
          )}
        </div>

        {/* Customer detail panel */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25, ease: EASE_EXPO }}
                className="bg-surface-2 border border-surface-border rounded-2xl p-5 space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-400/20 border border-brand-400/20 flex items-center justify-center text-base font-bold text-brand-300">
                      {selected.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{selected.name}</h3>
                      <p className="text-xs text-brand-100/40">{selected.city}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-brand-100/30 hover:text-white transition-colors">
                    <X size={16} />
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Total Spend", value: `₹${selected.totalSpend.toLocaleString("en-IN")}`, icon: <TrendingUp size={12} /> },
                    { label: "Orders", value: selected.totalOrders, icon: <ShoppingBag size={12} /> },
                    { label: "Loyalty Points", value: selected.loyaltyPoints, icon: <Star size={12} /> },
                    { label: "Last Visit", value: selected.lastVisit, icon: <Gift size={12} /> },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-surface-1/50 border border-surface-border">
                      <div className="flex items-center gap-1 text-brand-100/40 mb-1">
                        {stat.icon}
                        <span className="text-[10px]">{stat.label}</span>
                      </div>
                      <p className="text-sm font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Contact actions */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${selected.phone}`}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface-3 border border-surface-border text-xs text-brand-100/60 hover:text-white transition-colors"
                  >
                    <Phone size={12} />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${selected.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-xs text-green-400 hover:bg-green-500/20 transition-colors"
                  >
                    <MessageCircle size={12} />
                    WhatsApp
                  </a>
                </div>

                {/* Recent purchases */}
                <div>
                  <p className="text-xs font-semibold text-brand-100/50 mb-2 uppercase tracking-wide">Recent Purchases</p>
                  <div className="space-y-2">
                    {RECENT_PURCHASES.map((p) => (
                      <div key={p.item} className="flex items-center justify-between py-2 border-b border-surface-border/50 last:border-0">
                        <div>
                          <p className="text-xs text-white">{p.item}</p>
                          <p className="text-[10px] text-brand-100/30">{p.date}</p>
                        </div>
                        <span className="text-xs font-semibold text-white">₹{p.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-surface-2 border border-surface-border rounded-2xl p-8 text-center text-brand-100/30"
              >
                <div className="text-4xl mb-3">👤</div>
                <p className="text-sm">Select a customer to view details</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
