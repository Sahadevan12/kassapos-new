"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Star, Building2, Phone, Mail, User } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EASE_EXPO } from "@/lib/animations";

const STEPS = ["Business Info", "Contact Details", "Plan", "Done!"];

const BUSINESS_TYPES = [
  "Supermarket / Grocery", "Restaurant / Cafe", "Retail Shop", "Textiles / Garments",
  "Mobile / Electronics", "Bakery", "Pharmacy", "Automobile", "Hardware", "Other",
];

const PLAN_OPTIONS = [
  { id: "starter", name: "Starter", price: "₹999/mo", desc: "1 terminal, up to 5,000 products" },
  { id: "growth", name: "Growth", price: "₹2,499/mo", desc: "3 terminals, cloud sync, CRM", popular: true },
  { id: "pro", name: "Pro", price: "₹4,999/mo", desc: "Unlimited terminals, all features" },
];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState("growth");
  const [form, setForm] = useState({
    businessName: "", businessType: "", city: "",
    name: "", email: "", mobile: "", password: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 bg-slate-50">
      {/* Soft glow */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-400/8 blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Trust banner */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs text-slate-500">Trusted by 7,500+ businesses</span>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-glow-sm">
              <span className="text-white font-black text-sm">K</span>
            </div>
            <span className="font-display font-bold text-slate-900 text-lg">
              Kassa<span className="gradient-text">POS</span>
            </span>
          </Link>

          <h1 className="text-2xl font-bold text-slate-900 mb-1">Start your free trial</h1>
          <p className="text-sm text-slate-500 mb-6">14 days free · No credit card required</p>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                    i < step
                      ? "bg-emerald-500 text-white"
                      : i === step
                      ? "bg-brand-400 text-white"
                      : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {i < step ? <Check size={12} /> : i + 1}
                </div>
                <span className={`text-[10px] hidden sm:block transition-colors ${
                  i === step ? "text-slate-900" : "text-slate-400"
                }`}>
                  {s}
                </span>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px transition-colors ${i < step ? "bg-emerald-500/50" : "bg-slate-200"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: EASE_EXPO }}
            >
              {/* Step 0: Business Info */}
              {step === 0 && (
                <div className="space-y-4">
                  <Input
                    label="Business Name"
                    placeholder="e.g. Ravi Supermarket"
                    leftIcon={<Building2 size={14} />}
                    required
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  />
                  <Select
                    label="Business Type"
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                  >
                    <option value="">Select your business type</option>
                    {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </Select>
                  <Input
                    label="City"
                    placeholder="e.g. Chennai, Coimbatore..."
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>
              )}

              {/* Step 1: Contact */}
              {step === 1 && (
                <div className="space-y-4">
                  <Input
                    label="Your Name"
                    placeholder="Full name"
                    leftIcon={<User size={14} />}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    label="Mobile Number"
                    placeholder="+91 XXXXXXXXXX"
                    type="tel"
                    leftIcon={<Phone size={14} />}
                    required
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  />
                  <Input
                    label="Email Address"
                    placeholder="you@example.com"
                    type="email"
                    leftIcon={<Mail size={14} />}
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Create a strong password"
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    hint="At least 8 characters"
                  />
                </div>
              )}

              {/* Step 2: Plan */}
              {step === 2 && (
                <div className="space-y-3">
                  <p className="text-sm text-slate-600 mb-4">
                    Choose your plan. All plans include a 14-day free trial.
                  </p>
                  {PLAN_OPTIONS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlan(p.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                        plan === p.id
                          ? "border-brand-400/60 bg-brand-400/10"
                          : "border-slate-200 bg-slate-50 hover:border-brand-400/30"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          plan === p.id ? "border-brand-400" : "border-slate-300"
                        }`}
                      >
                        {plan === p.id && <div className="w-2 h-2 rounded-full bg-brand-400" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900">{p.name}</span>
                          {p.popular && (
                            <span className="text-[10px] bg-blue-50 text-brand-600 px-1.5 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">{p.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-900 shrink-0">{p.price}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Done */}
              {step === 3 && (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check size={36} className="text-emerald-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">You&apos;re all set!</h3>
                  <p className="text-slate-600 text-sm mb-6">
                    Your 14-day free trial has started. Our team will call you within 2 hours to set up your account.
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight size={16} />}
                    onClick={() => window.location.href = "/dashboard"}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {step < 3 && (
            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <Button
                  variant="secondary"
                  size="md"
                  leftIcon={<ArrowLeft size={16} />}
                  onClick={prev}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowRight size={16} />}
                onClick={next}
                className="flex-1"
              >
                {step === 2 ? "Start Free Trial" : "Continue"}
              </Button>
            </div>
          )}

          {step === 0 && (
            <p className="text-center text-sm text-slate-400 mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-brand-600 hover:text-slate-900 transition-colors font-medium">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
