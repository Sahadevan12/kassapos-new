import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Star, Phone, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";

const PRODUCT_DATA: Record<string, {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  features: string[];
  keyBenefits: { title: string; desc: string }[];
  color: string;
}> = {
  supermarket: {
    title: "Supermarket Billing Software",
    subtitle: "The complete POS solution for supermarkets and hypermarkets",
    icon: "🏪",
    color: "#2563EB",
    description: "Kassapos supermarket billing software handles everything from barcode scanning to multi-MRP billing, weighing scale integration, and cloud-based stock management — all designed for the fast-paced supermarket environment.",
    features: [
      "Barcode billing & printing", "Multi-MRP support per product", "Weighing scale integration",
      "Expiry & batch date tracking", "Free offer & scheme management", "Offline + online billing",
      "WhatsApp digital receipts", "GST e-invoice generation", "Live sales report on mobile",
      "Google Drive auto-backup", "CRM & loyalty points", "Multi-branch management",
      "Purchase order via Excel", "Stock transfer & adjustment", "Customer credit management",
      "Supplier payment tracking",
    ],
    keyBenefits: [
      { title: "3-Second Billing", desc: "Scan barcode, auto-load price, print receipt in under 3 seconds." },
      { title: "Never Miss a Sale", desc: "Full offline mode — bills even when internet is down." },
      { title: "GST Compliant", desc: "Automatic GST calculation and e-invoice in one click." },
      { title: "Full Visibility", desc: "Check today's sales from your phone at any time, anywhere." },
    ],
  },
  restaurant: {
    title: "Restaurant POS Software",
    subtitle: "Fast, smart billing for restaurants, QSRs, and food courts",
    icon: "🍽️",
    color: "#7C3AED",
    description: "From KOT management to table billing, Swiggy/Zomato integration, and food costing — Kassapos restaurant POS handles every aspect of your food business.",
    features: [
      "KOT via mobile/tablet", "Table management (merge/split/transfer)", "Multi-service: dine-in/takeaway/delivery",
      "Swiggy & Zomato integration", "Raw material stock tracking", "Food costing analysis",
      "Steward commission reports", "Daily settlement & audit", "Token-based billing",
      "Bill splitting", "GST e-invoice", "WhatsApp order receipts",
    ],
    keyBenefits: [
      { title: "Faster Table Turns", desc: "KOT on mobile means orders reach kitchen instantly." },
      { title: "Zero Order Loss", desc: "Digital KOT eliminates paper slip errors completely." },
      { title: "Aggregator Ready", desc: "Swiggy and Zomato orders auto-enter into your POS." },
      { title: "Real Food Costing", desc: "Know your exact profit margin on every dish." },
    ],
  },
  cloud: {
    title: "Cloud Billing Software",
    subtitle: "Hybrid offline + online cloud billing for modern businesses",
    icon: "☁️",
    color: "#0D9488",
    description: "Kassapos cloud billing works both online and offline, syncing seamlessly on AWS infrastructure. Manage multiple branches, check reports from anywhere, and never lose data.",
    features: [
      "Offline + online seamless billing", "AWS-powered fast server", "Multi-branch sync",
      "Barcode label printing", "Multi-MRP support", "Customer loyalty & credit",
      "Purchase order with Excel upload", "Stock transfer & adjustment", "Live mobile reports",
      "WhatsApp & SMS integration", "Google Drive auto-backup", "GST compliance",
    ],
    keyBenefits: [
      { title: "Always Works", desc: "Offline mode ensures 100% uptime regardless of internet." },
      { title: "Scale Anywhere", desc: "Open new branches — they sync automatically to one dashboard." },
      { title: "Enterprise Speed", desc: "AWS infrastructure means sub-second response times." },
      { title: "Secure Data", desc: "Encrypted cloud backup with Google Drive every night." },
    ],
  },
};

const DEFAULT_PRODUCT = {
  title: "Billing Software",
  subtitle: "Specialized billing solution for your business",
  icon: "📊",
  color: "#2563EB",
  description: "Kassapos provides comprehensive billing and POS software with all the features your business needs.",
  features: [
    "Fast billing", "GST compliance", "Barcode scanning", "Cloud backup",
    "WhatsApp receipts", "Mobile reports", "Multi-user", "Offline mode",
  ],
  keyBenefits: [
    { title: "Fast Billing", desc: "Complete transactions in under 3 seconds." },
    { title: "GST Ready", desc: "Automatic GST calculation and e-invoice." },
    { title: "Always Reliable", desc: "Works offline, syncs when connected." },
    { title: "Full Visibility", desc: "Live reports on your phone 24/7." },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_DATA[slug] || DEFAULT_PRODUCT;
  return {
    title: `${product.title} — Kassapos`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCT_DATA[slug] || { ...DEFAULT_PRODUCT, title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Billing Software` };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionLabel className="mb-5">Product</SectionLabel>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{product.icon}</div>
                <h1 className="text-display-lg font-extrabold font-display text-slate-900">
                  {product.title}
                </h1>
              </div>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">{product.subtitle}</p>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">{product.description}</p>

              <div className="flex items-center gap-3 flex-wrap">
                <Link href="/register">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-white font-semibold">
                    Start Free Trial
                    <ArrowRight size={16} />
                  </button>
                </Link>
                <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-brand-400/30 font-medium transition-all">
                    <MessageCircle size={16} className="text-green-400" />
                    Request Demo
                  </button>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-900 font-semibold">4.9 / 5.0</span>
                  <span className="text-xs text-slate-400">Google Rating</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.keyBenefits.map((benefit) => (
                    <div key={benefit.title} className="p-3 rounded-xl bg-surface-1/50 border border-surface-border">
                      <p className="text-sm font-semibold text-slate-900 mb-1">{benefit.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface-1/30">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              All features included
            </h2>
            <p className="text-slate-500">No hidden costs. Everything in the base plan.</p>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3" staggerDelay={0.05}>
            {product.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-surface-2 border border-surface-border">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-xl max-w-3xl text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10">
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              Ready to try {product.title.split(" ")[0]}?
            </h2>
            <p className="text-slate-500 mb-8">14-day free trial. No credit card. Setup in 10 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl btn-gradient text-white font-semibold">
                  Start Free Trial <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+918754031480">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-brand-400/30 font-semibold transition-all">
                  <Phone size={16} />
                  Call +91 8754031480
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
