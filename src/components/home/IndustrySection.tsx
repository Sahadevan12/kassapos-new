"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { INDUSTRIES } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

const INDUSTRY_FEATURES: Record<string, string[]> = {
  supermarket:    ["Barcode billing", "Weighing scale integration", "Multi-MRP products", "Expiry date tracking", "Scheme management"],
  retail:         ["Fast touch billing", "Low stock alerts", "Loyalty points", "Customer credit ledger", "Profit reports"],
  restaurant:     ["KOT management", "Table billing", "Swiggy/Zomato sync", "Food cost tracking", "Steward tracking"],
  cloud:          ["Full offline mode", "Multi-branch control", "Live revenue reports", "WhatsApp billing", "AWS-powered sync"],
  textile:        ["Size/colour/batch", "Salesman tracking", "PCS × meter calc", "Auto barcode print", "Tailoring module"],
  mobile:         ["IMEI tracking", "Repair job module", "Accessories billing", "Warranty management", "GST compliant"],
  bakery:         ["Recipe costing", "Production planning", "Wastage tracking", "Daily batch reports", "Delivery orders"],
  spa:            ["Appointment booking", "Service billing", "Staff commission", "Loyalty packages", "Gift vouchers"],
  hardware:       ["Weight-based billing", "Batch tracking", "Credit limits", "Supplier ledger", "Stock alerts"],
  footwear:       ["Size/colour matrix", "Brand-wise stock", "Fast billing", "Return handling", "Customer loyalty"],
  "restaurant-bar": ["Bar stock control", "Daily settlement", "Party billing", "MRP tracking", "Steward billing"],
  vegetables:     ["Weight billing", "Daily rate updates", "Fresh stock tracking", "Wastage tracking", "GST billing"],
  pharmacy:       ["Drug name search", "Expiry date alerts", "Doctor-wise sales", "Batch tracking", "Reorder levels"],
  jewellery:      ["Weight-based billing", "Live gold rate", "Making charges", "Scheme tracking", "Design catalog"],
  automobile:     ["Part number search", "Labour billing", "Job card creation", "Vehicle service history", "Warranty tracking"],
  warehouse:      ["Stock transfer", "Purchase orders", "Reorder alerts", "Multi-location stock", "Barcode scanning"],
};

const INDUSTRY_STATS: Record<string, { label: string; value: string }[]> = {
  supermarket:    [{ label: "Billing speed", value: "3 sec" }, { label: "Stock items", value: "50k+" }],
  retail:         [{ label: "Bill per hour", value: "120+" }, { label: "Loyalty users", value: "500+" }],
  restaurant:     [{ label: "Tables", value: "Unlimited" }, { label: "KOT speed", value: "2 sec" }],
  cloud:          [{ label: "Branches", value: "100+" }, { label: "Uptime", value: "99.9%" }],
  textile:        [{ label: "SKU variants", value: "Unlimited" }, { label: "Salesman", value: "50+" }],
  mobile:         [{ label: "IMEI track", value: "Yes" }, { label: "Repair jobs", value: "500/mo" }],
  bakery:         [{ label: "Recipes", value: "Unlimited" }, { label: "Delivery", value: "Yes" }],
  spa:            [{ label: "Appointments", value: "200/day" }, { label: "Staff", value: "50+" }],
  hardware:       [{ label: "Weight billing", value: "Yes" }, { label: "Credit", value: "Unlimited" }],
  footwear:       [{ label: "Size matrix", value: "Yes" }, { label: "Brands", value: "500+" }],
  "restaurant-bar": [{ label: "Bar stock", value: "Real-time" }, { label: "Settlement", value: "Daily" }],
  vegetables:     [{ label: "Weight scale", value: "Integrated" }, { label: "Daily rates", value: "Yes" }],
  pharmacy:       [{ label: "Drug DB", value: "50k+" }, { label: "Expiry alert", value: "Auto" }],
  jewellery:      [{ label: "Gold rate", value: "Live" }, { label: "Weight", value: "0.001g" }],
  automobile:     [{ label: "Parts", value: "100k+" }, { label: "Job cards", value: "Unlimited" }],
  warehouse:      [{ label: "Locations", value: "Unlimited" }, { label: "PO tracking", value: "Yes" }],
};

const MotionButton = motion.button as any;

export function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0].id);
  const active = INDUSTRIES.find((i) => i.id === activeIndustry) || INDUSTRIES[0];
  const features = INDUSTRY_FEATURES[activeIndustry] || [];
  const stats = INDUSTRY_STATS[activeIndustry] || [];

  return (
    <section className="section-padding relative" style={{ background: "#FFFFFF" }}>
      {/* Subtle background mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-xl relative">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-5">20+ Industries</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.9rem)", lineHeight: 1.15 }}
          >
            Tailored for your{" "}
            <span className="gradient-text">specific business</span>
          </h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto">
            Not a generic POS. Every Kassapos module is purpose-built for each industry&apos;s real workflow.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Industry selector grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-1.5">
              {INDUSTRIES.map((industry, i) => {
                const isActive = activeIndustry === industry.id;
                return (
                  <MotionButton
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left border"
                    style={{
                      background: isActive ? `${industry.color}10` : "#F8FAFF",
                      borderColor: isActive ? `${industry.color}40` : "#E2E8F0",
                      color: isActive ? industry.color : "#64748B",
                      boxShadow: isActive ? `0 0 12px ${industry.color}10` : "none",
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.035, ease: EASE_EXPO }}
                  >
                    <span className="text-base leading-none shrink-0">{industry.icon}</span>
                    <span className="truncate text-xs">{industry.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndustryDot"
                        className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: industry.color }}
                      />
                    )}
                  </MotionButton>
                );
              })}
            </div>
          </div>

          {/* Feature panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.32, ease: EASE_EXPO }}
                className="rounded-2xl p-7 border relative"
                style={{
                  background: "#FFFFFF",
                  borderColor: "#E2E8F0",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${active.color}50, transparent)` }}
                />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{
                      background: `${active.color}10`,
                      boxShadow: `0 0 16px ${active.color}12`,
                      border: `1px solid ${active.color}20`,
                    }}
                  >
                    {active.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{active.label} POS Software</h3>
                    <p className="text-sm text-slate-400 mt-0.5">Specialized billing &amp; inventory management</p>

                    {/* Stats pills */}
                    <div className="flex gap-2 mt-2.5">
                      {stats.map((s) => (
                        <div
                          key={s.label}
                          className="px-2.5 py-1 rounded-lg text-[10px] border"
                          style={{ background: `${active.color}08`, borderColor: `${active.color}18`, color: active.color }}
                        >
                          <span className="font-bold">{s.value}</span>
                          <span className="ml-1 opacity-70">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl border"
                      style={{
                        background: "#F8FAFF",
                        borderColor: "#F1F5F9",
                      }}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, ease: EASE_EXPO }}
                    >
                      <CheckCircle2 size={14} style={{ color: active.color, flexShrink: 0 }} />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400">+{Math.max(0, 8 - features.length)} more features in full version</p>
                  <Link
                    href={`/products/${activeIndustry}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
                    style={{ color: active.color }}
                  >
                    Explore {active.label} module
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
