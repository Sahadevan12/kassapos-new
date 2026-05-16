import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — POS & Billing Insights",
  description:
    "Tips, guides, and insights for retailers, restaurant owners, and small businesses in India. Learn GST, billing best practices, and more.",
};

const FEATURED_POST = {
  slug: "how-to-reduce-billing-time",
  category: "Billing Tips",
  title: "How to cut your billing time from 30 seconds to 3 seconds",
  excerpt:
    "Most small retailers waste 20–30 seconds on every bill because of outdated POS workflows. Here's exactly how to fix that with barcode automation and product shortcuts.",
  readTime: "5 min",
  date: "May 12, 2026",
  author: "Kassapos Team",
  color: "#2563EB",
  emoji: "⚡",
};

const POSTS = [
  {
    slug: "gst-e-invoice-guide-2024",
    category: "GST & Compliance",
    title: "GST E-Invoice: Complete Guide for Retailers in 2026",
    excerpt: "Everything you need to know about e-invoice mandatory thresholds, IRN generation, and how to automate it with your POS.",
    readTime: "8 min",
    date: "May 8, 2026",
    color: "#0D9488",
    emoji: "📋",
  },
  {
    slug: "whatsapp-billing-benefits",
    category: "Customer Experience",
    title: "Why 7,500+ shops switched to WhatsApp digital receipts",
    excerpt: "Paper receipts cost ₹2–5 per bill. WhatsApp receipts cost nothing. But the real benefit is customer retention.",
    readTime: "4 min",
    date: "Apr 29, 2026",
    color: "#16A34A",
    emoji: "💬",
  },
  {
    slug: "supermarket-inventory-management",
    category: "Inventory",
    title: "Stop losing money to expired stock: A supermarket owner's guide",
    excerpt: "Expired products are a silent profit killer. Here's how to set up batch tracking, expiry alerts, and FIFO billing in Kassapos.",
    readTime: "6 min",
    date: "Apr 22, 2026",
    color: "#D97706",
    emoji: "📦",
  },
  {
    slug: "restaurant-kot-management",
    category: "Restaurant",
    title: "Digital KOT vs Paper Slips: The real cost comparison",
    excerpt: "A typical restaurant loses ₹15,000–₹30,000 per month in missed orders and rework from paper KOT. Here's the math.",
    readTime: "5 min",
    date: "Apr 15, 2026",
    color: "#7C3AED",
    emoji: "🍽️",
  },
  {
    slug: "multi-branch-management-tips",
    category: "Growth",
    title: "Expanding to a second branch? Read this first.",
    excerpt: "Opening branch #2 is exciting — but most retailers get inventory sync, pricing, and reporting completely wrong. Don't.",
    readTime: "7 min",
    date: "Apr 5, 2026",
    color: "#DB2777",
    emoji: "🏪",
  },
  {
    slug: "loyalty-program-guide",
    category: "CRM",
    title: "How to build a loyalty program that actually brings customers back",
    excerpt: "Loyalty points alone don't work. The winning formula is points + WhatsApp re-engagement + exclusive offers. Here's how to set it up.",
    readTime: "6 min",
    date: "Mar 28, 2026",
    color: "#0891B2",
    emoji: "⭐",
  },
];

const CATEGORIES = ["All", "GST & Compliance", "Billing Tips", "Inventory", "Restaurant", "Customer Experience", "Growth", "CRM"];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel className="mx-auto mb-5">Blog</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              Insights for
              <br />
              <span className="gradient-text">Indian business owners</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Practical tips on GST, billing, inventory, and growing your retail or restaurant business.
            </p>
          </ScrollReveal>

          {/* Category pills */}
          <ScrollReveal className="flex items-center gap-2 flex-wrap justify-center mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  cat === "All"
                    ? "bg-brand-400 border-brand-400 text-white"
                    : "border-slate-200 text-slate-500 hover:text-slate-900 hover:border-brand-400/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Featured post */}
          <ScrollReveal className="mb-10">
            <Link href={`/blog/${FEATURED_POST.slug}`}>
              <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-surface-2 p-8 lg:p-10 group cursor-pointer hover:border-brand-400/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-400/20 text-brand-600 border border-brand-400/20">
                        Featured
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Tag size={10} />
                        {FEATURED_POST.category}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold font-display text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                      {FEATURED_POST.title}
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed">{FEATURED_POST.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={10} />
                        {FEATURED_POST.readTime} read
                      </span>
                      <span className="text-xs text-slate-400">{FEATURED_POST.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end">
                    <div
                      className="w-32 h-32 rounded-3xl flex items-center justify-center text-7xl border"
                      style={{ background: `${FEATURED_POST.color}15`, borderColor: `${FEATURED_POST.color}30` }}
                    >
                      {FEATURED_POST.emoji}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                  <ArrowRight size={20} className="text-brand-600" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Post grid */}
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {POSTS.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-card rounded-2xl p-5 h-full flex flex-col group cursor-pointer hover:border-brand-400/20 transition-all">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border mb-4 shrink-0"
                      style={{ background: `${post.color}15`, borderColor: `${post.color}30` }}
                    >
                      {post.emoji}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${post.color}20`, color: post.color }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-border">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Clock size={9} />
                          {post.readTime}
                        </span>
                        <span className="text-[10px] text-slate-400">{post.date}</span>
                      </div>
                      <ArrowRight size={12} className="text-slate-300 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerReveal>

          {/* Load more */}
          <ScrollReveal className="text-center mt-10">
            <button className="px-8 py-3 rounded-xl border border-slate-200 text-sm text-slate-500 hover:text-slate-900 hover:border-brand-400/30 transition-all">
              Load more articles
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-surface-1/30">
        <div className="container-xl max-w-2xl text-center">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10">
              <p className="text-3xl mb-4">📬</p>
              <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
                Get billing tips in your WhatsApp
              </h2>
              <p className="text-slate-500 mb-8">
                We send 1–2 practical tips per week. No spam, unsubscribe any time.
              </p>
              <a
                href="https://wa.me/918754031480?text=Subscribe%20to%20tips"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                Subscribe via WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
