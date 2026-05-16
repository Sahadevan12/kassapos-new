"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, ArrowRight, Phone, MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { PRICING_PLANS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

const FAQ_ITEMS = [
  {
    q: "Can I use Kassapos offline?",
    a: "Yes. All plans support offline billing. Data syncs automatically when the internet is restored. You'll never lose a sale due to connectivity issues.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, all plans include a 14-day free trial with full features. No credit card required. You can upgrade or cancel at any time.",
  },
  {
    q: "Does Kassapos work with my existing hardware?",
    a: "Kassapos works with standard thermal printers, barcode scanners, cash drawers, and weighing scales. We also supply hardware if needed.",
  },
  {
    q: "Is Kassapos GST compliant?",
    a: "Yes. Kassapos is fully GST compliant with automatic GST calculation, e-invoice generation, and one-click GST reports.",
  },
  {
    q: "Can I manage multiple branches?",
    a: "Yes. The Growth and Pro plans support multi-branch management. See all branches on a single dashboard with real-time sync.",
  },
  {
    q: "Do you support Tamil language?",
    a: "Yes. Kassapos supports both Tamil and English — in the billing interface, receipts, and 24/7 customer support.",
  },
  {
    q: "What payment methods do customers accept?",
    a: "Kassapos supports cash, card, UPI, and custom payment modes. Digital receipts are sent via WhatsApp or SMS.",
  },
  {
    q: "Can I migrate from another billing software?",
    a: "Yes. Our team provides free data migration assistance for all new customers. We import your existing products, customers, and stock.",
  },
];

const FEATURE_COMPARISON = [
  { feature: "Billing terminals", starter: "1", growth: "3", pro: "Unlimited" },
  { feature: "Products", starter: "5,000", growth: "Unlimited", pro: "Unlimited" },
  { feature: "GST billing & e-invoice", starter: true, growth: true, pro: true },
  { feature: "WhatsApp bill sending", starter: true, growth: true, pro: true },
  { feature: "Barcode printing", starter: true, growth: true, pro: true },
  { feature: "Cloud sync (offline + online)", starter: false, growth: true, pro: true },
  { feature: "Live mobile reports", starter: false, growth: true, pro: true },
  { feature: "CRM & loyalty points", starter: false, growth: true, pro: true },
  { feature: "Multi-branch management", starter: false, growth: false, pro: true },
  { feature: "Warehouse management", starter: false, growth: false, pro: true },
  { feature: "Swiggy / Zomato integration", starter: false, growth: false, pro: true },
  { feature: "API access", starter: false, growth: false, pro: true },
  { feature: "Dedicated account manager", starter: false, growth: false, pro: true },
  { feature: "On-site training", starter: false, growth: false, pro: true },
  { feature: "Support", starter: "Email + Phone", growth: "Priority 24/7", pro: "Dedicated 24/7" },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28">
      {/* Hero */}
      <section className="pt-8 pb-0">
        <div className="container-xl text-center">
          <ScrollReveal>
            <SectionLabel className="mx-auto mb-6" variant="amber">Pricing</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              Simple, transparent
              <br />
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mx-auto mb-8">
              Start free. Scale as you grow. No hidden fees, no surprises.
            </p>

            {/* Annual toggle */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-2 border border-surface-border mb-14">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  !annual ? "bg-brand-400 text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  annual ? "bg-brand-400 text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Annual
                <span className="bg-emerald-500/20 text-emerald-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  SAVE 20%
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start pt-5">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col gap-6 text-left ${
                  plan.popular
                    ? "bg-gradient-to-b from-brand-700/90 to-brand-800/70 border-2 border-brand-400/60 shadow-glow"
                    : "bg-surface-2 border border-surface-border"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, ease: EASE_EXPO }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-400 text-white text-xs font-bold shadow-glow-sm">
                      <Sparkles size={10} />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div>
                  <h3 className={`font-display font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? "text-brand-100/50" : "text-slate-500"}`}>{plan.tagline}</p>
                </div>

                {/* Price */}
                <div>
                  {plan.custom ? (
                    <div className={`text-3xl font-extrabold font-display ${plan.popular ? "text-white" : "text-slate-900"}`}>Custom</div>
                  ) : (
                    <div className="flex items-end gap-1.5">
                      <span className={`text-4xl font-extrabold font-display ${plan.popular ? "text-white" : "text-slate-900"}`}>
                        ₹{(annual ? plan.annualPrice : plan.monthlyPrice).toLocaleString("en-IN")}
                      </span>
                      <span className={`text-sm pb-1 ${plan.popular ? "text-brand-100/50" : "text-slate-500"}`}>/month</span>
                    </div>
                  )}
                  {annual && !plan.custom && (
                    <p className="text-xs text-emerald-600 mt-1">
                      Save ₹{((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString("en-IN")}/year
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${plan.popular ? "text-brand-100/70" : "text-slate-600"}`}>
                      <Check size={14} className={`mt-0.5 shrink-0 ${plan.popular ? "text-emerald-400" : "text-emerald-600"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={plan.custom ? "/contact" : "/register"}>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "btn-gradient text-white"
                        : "border border-slate-200 text-slate-700 hover:border-brand-400/40 hover:bg-brand-400/5"
                    }`}
                  >
                    {plan.custom ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight size={15} />
                  </button>
                </Link>

                {!plan.custom && (
                  <p className={`text-[11px] text-center -mt-2 ${plan.popular ? "text-brand-100/30" : "text-slate-400"}`}>
                    14-day free trial · No credit card
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-display-md font-bold font-display text-slate-900">
              Full feature comparison
            </h2>
          </ScrollReveal>

          <div className="overflow-x-auto rounded-2xl border border-surface-border">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-surface-2 border-b border-surface-border">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-slate-600 w-1/2">Feature</th>
                  {["Starter", "Growth", "Pro"].map((plan) => (
                    <th key={plan} className="px-4 py-4 text-center text-sm font-semibold text-slate-900">
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-surface-border/50 ${
                      i % 2 === 0 ? "bg-surface-1/20" : "bg-transparent"
                    }`}
                  >
                    <td className="px-5 py-3.5 text-sm text-slate-600">{row.feature}</td>
                    {[row.starter, row.growth, row.pro].map((val, j) => (
                      <td key={j} className="px-4 py-3.5 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check size={16} className="text-emerald-600 mx-auto" />
                          ) : (
                            <X size={16} className="text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-slate-900">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <div className="container-xl max-w-3xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              Frequently asked questions
            </h2>
            <p className="text-slate-500">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="https://wa.me/918754031480" className="text-brand-600 hover:text-slate-900 transition-colors">
                Ask on WhatsApp →
              </a>
            </p>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-surface-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-surface-2 hover:bg-surface-3 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-900 pr-4">{item.q}</span>
                  <HelpCircle
                    size={16}
                    className={`shrink-0 transition-colors ${
                      openFaq === i ? "text-brand-400" : "text-slate-400"
                    }`}
                  />
                </button>
                <motion.div
                  animate={{ height: openFaq === i ? "auto" : 0 }}
                  transition={{ duration: 0.25, ease: EASE_EXPO }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 text-sm text-slate-600 bg-surface-1/50 leading-relaxed border-t border-surface-border">
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-xl">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10 text-center">
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              Still have questions?
            </h2>
            <p className="text-slate-500 mb-8">
              Talk to our team and get a personalised demo for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-white font-semibold">
                  <MessageCircle size={16} className="text-green-300" />
                  WhatsApp Us
                </button>
              </a>
              <a href="tel:+918754031480">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-brand-400/30 font-semibold transition-all">
                  <Phone size={16} />
                  Call Sales
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
