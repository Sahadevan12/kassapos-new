"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, AlertCircle, Package, ArrowUpDown, Filter, Download, Edit2 } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const INVENTORY = [
  { id: 1, name: "Tata Salt 1kg", sku: "TS001", category: "Grocery", stock: 5, minStock: 20, mrp: 22, cost: 18, status: "critical" },
  { id: 2, name: "Horlicks 500g", sku: "HL002", category: "Beverage", stock: 12, minStock: 15, mrp: 199, cost: 170, status: "low" },
  { id: 3, name: "Maggi Noodles", sku: "MG003", category: "Instant", stock: 120, minStock: 30, mrp: 14, cost: 11, status: "ok" },
  { id: 4, name: "Aashirvaad Atta 5kg", sku: "AA004", category: "Staples", stock: 32, minStock: 10, mrp: 279, cost: 240, status: "ok" },
  { id: 5, name: "Fortune Oil 1L", sku: "FO005", category: "Oil", stock: 8, minStock: 20, mrp: 145, cost: 125, status: "low" },
  { id: 6, name: "Surf Excel 500g", sku: "SE006", category: "Household", stock: 56, minStock: 15, mrp: 89, cost: 76, status: "ok" },
  { id: 7, name: "Bournvita 500g", sku: "BV007", category: "Beverage", stock: 2, minStock: 10, mrp: 249, cost: 218, status: "critical" },
  { id: 8, name: "Parle-G 200g", sku: "PG008", category: "Biscuit", stock: 200, minStock: 50, mrp: 20, cost: 16, status: "ok" },
];

const STATUS_CONFIG = {
  critical: { label: "Critical", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  low: { label: "Low", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  ok: { label: "In Stock", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
};

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = INVENTORY.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.sku.includes(search);
    const matchesFilter = filter === "all" || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  const criticalCount = INVENTORY.filter((i) => i.status === "critical").length;
  const lowCount = INVENTORY.filter((i) => i.status === "low").length;

  return (
    <div className="space-y-5 pb-20 lg:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Inventory</h2>
          <p className="text-sm text-brand-100/40">{INVENTORY.length} products · {criticalCount} critical, {lowCount} low</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-2 border border-surface-border text-xs text-brand-100/60 hover:text-white transition-all">
            <Download size={13} />
            Export
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl btn-gradient text-white text-xs font-medium">
            <Plus size={13} />
            Add Product
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      {(criticalCount > 0 || lowCount > 0) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20"
        >
          <AlertCircle size={16} className="text-amber-400 shrink-0" />
          <p className="text-sm text-amber-300">
            <span className="font-semibold">{criticalCount} products are critically low</span> and {lowCount} are below minimum stock. Consider reordering.
          </p>
        </motion.div>
      )}

      {/* Filters & Search */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-100/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products or SKU..."
            className="w-full h-10 pl-9 pr-4 rounded-xl bg-surface-2 border border-surface-border text-sm text-white placeholder:text-brand-100/30 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-2 border border-surface-border">
          {[
            { id: "all", label: "All" },
            { id: "critical", label: "Critical" },
            { id: "low", label: "Low" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === f.id ? "bg-brand-400 text-white" : "text-brand-100/50 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-surface-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-surface-2 border-b border-surface-border">
                <th className="text-left px-4 py-3 text-xs font-semibold text-brand-100/50">Product</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-brand-100/50">SKU</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-brand-100/50">Category</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-brand-100/50">Stock</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-brand-100/50">Min Stock</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-brand-100/50">MRP</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-brand-100/50">Status</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-brand-100/50">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => {
                const statusConf = STATUS_CONFIG[item.status as keyof typeof STATUS_CONFIG];
                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04, ease: EASE_EXPO }}
                    className="border-b border-surface-border/50 hover:bg-surface-2/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-surface-3 flex items-center justify-center">
                          <Package size={14} className="text-brand-300" />
                        </div>
                        <span className="text-sm text-white font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-brand-100/50">{item.sku}</td>
                    <td className="px-4 py-3 text-xs text-brand-100/60">{item.category}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-sm font-bold ${item.status === "critical" ? "text-red-400" : item.status === "low" ? "text-amber-400" : "text-white"}`}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-xs text-brand-100/50">{item.minStock}</td>
                    <td className="px-4 py-3 text-right text-sm font-medium text-white">₹{item.mrp}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${statusConf.bg} ${statusConf.color}`}>
                        {statusConf.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="w-7 h-7 rounded-lg bg-surface-3 flex items-center justify-center text-brand-100/40 hover:text-white transition-colors mx-auto">
                        <Edit2 size={12} />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-brand-100/30 text-sm">
            No products found
          </div>
        )}
      </div>
    </div>
  );
}
