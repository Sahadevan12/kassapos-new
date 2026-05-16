"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRICING_PLANS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

const MotionDiv = motion.div as any;

export function PricingTeaser() {
  const [annual, setAnnual] = useState(false);
  const displayedPlans = PRICING_PLANS.filter((p) => p.id !== "enterprise");

  return (
    <section className="section-padding relative" style={{ background: "#FFFFFF" }}>
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.4,
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 70%, rgba(6,182,212,0.04) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(27,58,143,0.05) 0%, transparent 60%)",
          }}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 grid-lines opacity-50" />
      </div>

      <div className="container-xl relative z-10">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-5" variant="amber">Simple Pricing</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.9rem)", lineHeight: 1.15 }}
          >
            Transparent pricing.{" "}
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="text-base text-slate-500 mb-8">
            Start free. Upgrade as you grow. Cancel anytime.
          </p>

          {/* Monthly / Annual toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-full border"
            style={{ background: "#F8FAFF", borderColor: "#E2E8F0" }}
          >
            {[
              { label: "Monthly", val: false },
              { label: "Annual", val: true },
            ].map(({ label, val }) => (
              <button
                key={label}
                onClick={() => setAnnual(val)}
                className="relative px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5"
                style={{ color: annual === val ? "#fff" : "#64748B" }}
              >
                {annual === val && (
                  <motion.div
                    layoutId="pricingToggle"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, #1B3A8F 0%, #2563EB 55%, #06B6D4 100%)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
                {val && (
                  <span
                    className="relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: "rgba(16,185,129,0.15)", color: "#059669" }}
                  >
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto pt-5">
          {displayedPlans.map((plan, i) => (
            <MotionDiv
              key={plan.id}
              className="relative rounded-2xl p-6 flex flex-col gap-5"
              style={
                plan.popular
                  ? {
                      background: "linear-gradient(160deg, #0F1E45 0%, #0A1228 100%)",
                      border: "1px solid rgba(37,99,235,0.5)",
                      boxShadow: "0 0 60px rgba(37,99,235,0.2), 0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                    }
                  : {
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                    }
              }
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: EASE_EXPO }}
            >
              {/* Top accent line for popular */}
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)" }}
                />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #1B3A8F, #2563EB, #06B6D4)",
                      boxShadow: "0 0 16px rgba(37,99,235,0.4)",
                    }}
                  >
                    <Sparkles size={10} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-1">
                  {plan.popular && <Zap size={14} className="text-brand-300" />}
                  <h3
                    className="font-display font-bold text-lg"
                    style={{ color: plan.popular ? "#FFFFFF" : "#0F172A" }}
                  >
                    {plan.name}
                  </h3>
                </div>
                <p style={{ fontSize: "0.75rem", color: plan.popular ? "rgba(255,255,255,0.6)" : "#94A3B8" }}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-end gap-1.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-extrabold font-display"
                      style={{ color: plan.popular ? "#FFFFFF" : "#0F172A" }}
                    >
                      ₹{annual
                        ? plan.annualPrice.toLocaleString("en-IN")
                        : plan.monthlyPrice.toLocaleString("en-IN")}
                    </motion.span>
                  </AnimatePresence>
                  <span
                    className="text-sm pb-1.5"
                    style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "#94A3B8" }}
                  >
                    /month
                  </span>
                </div>
                {annual && (
                  <p className="text-xs text-emerald-500 mt-1">
                    Save ₹{((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString("en-IN")}/year
                  </p>
                )}
              </div>

              {/* Divider */}
              <div
                className="h-px"
                style={{ background: plan.popular ? "rgba(255,255,255,0.1)" : "#F1F5F9" }}
              />

              {/* Features */}
              <div className="flex flex-col gap-2 flex-1">
                {plan.features.slice(0, 5).map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: plan.popular ? "rgba(255,255,255,0.75)" : "#475569" }}
                  >
                    <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
                {plan.features.length > 5 && (
                  <p
                    className="text-xs pl-6"
                    style={{ color: plan.popular ? "rgba(255,255,255,0.4)" : "#94A3B8" }}
                  >
                    +{plan.features.length - 5} more features included
                  </p>
                )}
              </div>

              {/* CTA */}
              <Link href="/register" className="block">
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular ? "btn-gradient text-white" : "border text-slate-700 hover:border-brand-400/40"
                  }`}
                  style={
                    !plan.popular
                      ? { borderColor: "#E2E8F0" }
                      : undefined
                  }
                >
                  Get Started Free
                  <ArrowRight size={14} />
                </button>
              </Link>
            </MotionDiv>
          ))}
        </div>

        {/* Footer note */}
        <ScrollReveal className="text-center mt-10" delay={0.2}>
          <p className="text-sm text-slate-400 mb-3">
            All plans include 14-day free trial · No credit card required · 24/7 Tamil &amp; English support
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm text-brand-500 hover:text-brand-600 transition-colors"
          >
            See full pricing &amp; feature comparison
            <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
