import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Features — Complete POS & Billing Feature Set",
  description:
    "Explore every feature in Kassapos — from barcode billing and GST e-invoice to WhatsApp receipts, multi-branch management, and offline mode.",
};

const FEATURE_CATEGORIES = [
  {
    id: "billing",
    label: "Billing & POS",
    icon: "🧾",
    color: "#2563EB",
    features: [
      { title: "3-Second Billing", desc: "Scan barcode → price auto-loads → print receipt in under 3 seconds flat." },
      { title: "Offline Billing", desc: "Full billing capability with zero internet. Syncs automatically when back online." },
      { title: "Barcode Scanning", desc: "USB, Bluetooth, and built-in camera scanner support across all devices." },
      { title: "Multi-MRP Support", desc: "Assign multiple MRPs per product for different pack sizes or locations." },
      { title: "Bill Splitting", desc: "Split a single bill across multiple customers or payment methods." },
      { title: "Free Offer Schemes", desc: "Configure Buy-1-Get-1, percentage discounts, and combo schemes." },
      { title: "GST E-Invoice", desc: "One-click GST-compliant e-invoice generation with IRN and QR code." },
      { title: "Multiple Payment Modes", desc: "Accept cash, card, UPI, wallets, and partial payment simultaneously." },
    ],
  },
  {
    id: "inventory",
    label: "Inventory & Stock",
    icon: "📦",
    color: "#0D9488",
    features: [
      { title: "Real-Time Stock Tracking", desc: "Stock decrements on every sale. Always know exactly what's available." },
      { title: "Expiry & Batch Management", desc: "Track batch numbers and expiry dates. Get alerts before products expire." },
      { title: "Low Stock Alerts", desc: "Automatic WhatsApp and in-app alerts when stock hits your minimum level." },
      { title: "Stock Transfer", desc: "Move stock between branches with full tracking and audit trail." },
      { title: "Purchase Order via Excel", desc: "Upload purchase orders in Excel format — no manual re-entry required." },
      { title: "Weighing Scale Integration", desc: "Direct integration with electronic weighing scales for produce billing." },
      { title: "Barcode Label Printing", desc: "Print price labels with barcode, MRP, and batch info instantly." },
      { title: "Vendor Management", desc: "Maintain supplier records, payment history, and outstanding amounts." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Sync",
    icon: "☁️",
    color: "#06B6D4",
    features: [
      { title: "AWS-Powered Cloud", desc: "Enterprise-grade AWS infrastructure with 99.9% uptime SLA." },
      { title: "Multi-Branch Sync", desc: "All branches sync in real-time. Open a new branch in minutes." },
      { title: "Google Drive Backup", desc: "Automatic nightly backup of all data to your Google Drive." },
      { title: "Live Mobile Reports", desc: "Check today's sales, stock alerts, and cash from your phone anywhere." },
      { title: "Seamless Offline→Online", desc: "Offline bills sync automatically the moment connectivity resumes." },
      { title: "Multi-Device Access", desc: "Run on Windows PC, Android tablet, or touchscreen POS simultaneously." },
      { title: "Role-Based Access", desc: "Set permissions per staff member. Cashiers, managers, owners — each sees only what they need." },
      { title: "Data Export", desc: "Export all data to Excel, PDF, or CSV at any time." },
    ],
  },
  {
    id: "reports",
    label: "Reports & Analytics",
    icon: "📊",
    color: "#7C3AED",
    features: [
      { title: "Live Sales Dashboard", desc: "Real-time revenue, bill count, and average bill value on the main screen." },
      { title: "Daily / Weekly / Monthly Reports", desc: "Comprehensive reports by period with comparisons to previous periods." },
      { title: "Product-wise Sales", desc: "See your best-sellers, slow movers, and profit margins per product." },
      { title: "Staff Performance", desc: "Track sales, returns, and discounts per cashier or salesperson." },
      { title: "Profit & Loss Report", desc: "Full P&L with cost price, selling price, GST, and net profit." },
      { title: "Customer Purchase History", desc: "Every customer's complete purchase history with one search." },
      { title: "Tax Summary Report", desc: "GST report by category and tax slab, ready for filing." },
      { title: "Hourly Traffic Report", desc: "Know your peak hours to schedule staff and promotions optimally." },
    ],
  },
  {
    id: "crm",
    label: "CRM & Customer",
    icon: "👥",
    color: "#DB2777",
    features: [
      { title: "Customer Database", desc: "Store customer contacts, purchase history, and loyalty points." },
      { title: "Loyalty Points System", desc: "Configurable earn and redeem rules. Customers love it." },
      { title: "WhatsApp Digital Receipt", desc: "Send invoice directly to customer WhatsApp after every bill." },
      { title: "Customer Credit Management", desc: "Extend credit to trusted customers and track outstanding amounts." },
      { title: "WhatsApp Marketing", desc: "Send bulk promotions, offers, and announcements via WhatsApp." },
      { title: "Birthday / Anniversary Offers", desc: "Automated offers sent on customer birthdays and anniversaries." },
      { title: "Feedback Collection", desc: "Collect ratings via WhatsApp after each purchase automatically." },
      { title: "Segment & Target", desc: "Segment customers by spend, frequency, or category and target offers." },
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant Specific",
    icon: "🍽️",
    color: "#D97706",
    features: [
      { title: "KOT Management", desc: "Digital Kitchen Order Tickets via mobile, tablet, or kitchen display." },
      { title: "Table Management", desc: "Visual table layout with merge, split, and transfer between tables." },
      { title: "Multi-Service Modes", desc: "Dine-in, takeaway, delivery, and room service in one system." },
      { title: "Swiggy & Zomato Integration", desc: "Online orders auto-enter your POS. No manual entry ever again." },
      { title: "Raw Material Tracking", desc: "Track ingredients used per dish. Know your actual food cost." },
      { title: "Recipe & Food Costing", desc: "Define recipes with ingredients. Auto-calculate cost and margin." },
      { title: "Steward Commission", desc: "Track and report tips and commissions per steward." },
      { title: "Token Billing", desc: "Token-based quick billing for food courts and QSRs." },
    ],
  },
];

const COMPLIANCE_FEATURES = [
  "GST e-Invoice (IRN + QR)", "GSTR-1 / GSTR-3B ready reports",
  "E-Way Bill generation", "HSN/SAC code support",
  "TDS / TCS tracking", "Audit-ready transaction log",
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-28">
      {/* Hero */}
      <section className="pt-8 pb-12">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mx-auto mb-5">All Features</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              Everything you need,
              <br />
              <span className="gradient-text">nothing you don&apos;t</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              48+ features across billing, inventory, reports, CRM, and compliance — all included in every plan. No add-on fees.
            </p>
          </ScrollReveal>

          {/* Stats bar */}
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
              {[
                { value: "48+", label: "Total Features" },
                { value: "16+", label: "Industries Supported" },
                { value: "7,500+", label: "Active Businesses" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-surface-1/40 border border-surface-border">
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Feature categories */}
          {FEATURE_CATEGORIES.map((cat, ci) => (
            <div key={cat.id} className="mb-16">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border"
                    style={{ background: `${cat.color}15`, borderColor: `${cat.color}30` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{cat.label}</h2>
                    <p className="text-sm text-slate-400">{cat.features.length} features</p>
                  </div>
                </div>
              </ScrollReveal>
              <StaggerReveal
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-start"
                staggerDelay={0.05}
              >
                {cat.features.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="p-4 rounded-2xl bg-surface-2 border border-surface-border hover:border-surface-3 transition-colors">
                      <div className="flex items-start gap-2.5 mb-2">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: `${cat.color}20` }}
                        >
                          <Check size={11} style={{ color: cat.color }} />
                        </div>
                        <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pl-7">{feature.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          ))}

          {/* Compliance section */}
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 p-8 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🇮🇳</span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">100% India GST Compliant</h2>
                  <p className="text-sm text-slate-500">Built for Indian tax law from the ground up</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {COMPLIANCE_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Check size={14} className="text-emerald-600 shrink-0" />
                    <span className="text-sm text-slate-900">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-1/30">
        <div className="container-xl max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              All 48+ features. One flat price.
            </h2>
            <p className="text-slate-500 mb-8">No hidden fees, no feature gating, no surprises. Everything from day one.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl btn-gradient text-white font-semibold">
                  Start Free Trial <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/pricing">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-brand-400/30 font-semibold transition-all">
                  View Pricing
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
