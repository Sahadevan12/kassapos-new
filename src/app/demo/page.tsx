"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Calendar, Clock, ArrowRight, Star, Play } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EASE_EXPO } from "@/lib/animations";

const TIME_SLOTS = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const DEMO_BENEFITS = [
  { icon: "🎯", title: "Personalized walkthrough", desc: "We demo only what's relevant to your business type" },
  { icon: "⏱️", title: "30-minute session", desc: "Fast-paced and focused — no time wasted" },
  { icon: "💬", title: "Live Q&A", desc: "Ask anything directly to our product expert" },
  { icon: "🆓", title: "No obligations", desc: "No sales pressure — just a genuine product demo" },
];

const INDUSTRIES = [
  "Supermarket / Hypermarket", "Restaurant / QSR", "Retail Shop", "Textiles & Garments",
  "Mobile / Electronics", "Medical Pharmacy", "Hotel / Lodging", "Cloud Billing",
  "Bakery / Sweets", "Hardware Store", "Jewellery", "Other",
];

export default function DemoPage() {
  const [form, setForm] = useState({
    name: "", business: "", phone: "", email: "", industry: "", timeSlot: "", date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero */}
      <section className="section-padding pb-10">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel className="mx-auto mb-5">Live Demo</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              See Kassapos in action
              <br />
              <span className="gradient-text">in 30 minutes</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              Book a free personalized demo with our product specialist. We&apos;ll show you exactly how Kassapos works for your specific business.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Left — benefits + instant options */}
            <div className="lg:col-span-2 space-y-6">
              <StaggerReveal className="space-y-3" staggerDelay={0.08}>
                {DEMO_BENEFITS.map((b) => (
                  <StaggerItem key={b.title}>
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface-1/50 border border-surface-border">
                      <span className="text-2xl">{b.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>

              <div className="rounded-2xl bg-surface-2 border border-surface-border p-5 space-y-3">
                <p className="text-sm font-semibold text-slate-900 mb-3">Or connect instantly</p>
                <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors group">
                  <MessageCircle size={18} className="text-green-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">WhatsApp Demo</p>
                    <p className="text-xs text-slate-400">Instant reply</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </a>
                <a href="tel:+918754031480" className="flex items-center gap-3 p-3 rounded-xl bg-brand-400/10 border border-brand-400/20 hover:bg-brand-400/20 transition-colors group">
                  <Phone size={18} className="text-brand-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">Call us now</p>
                    <p className="text-xs text-slate-400">+91 87540 31480</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-amber-600 font-medium">4.9 / 5.0 from 500+ reviews</p>
              </div>
            </div>

            {/* Right — booking form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                    className="glass-card rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
                    >
                      <CheckCircle size={40} className="text-emerald-600" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Demo Booked!</h2>
                      <p className="text-slate-500">We&apos;ll call you at the scheduled time. You&apos;ll also receive a confirmation on WhatsApp.</p>
                    </div>
                    <div className="px-5 py-4 rounded-2xl bg-surface-2 border border-surface-border text-left w-full">
                      <p className="text-xs text-slate-400 mb-1">Booked for</p>
                      <p className="text-sm font-semibold text-slate-900">{form.date} at {form.timeSlot}</p>
                    </div>
                    <p className="text-xs text-slate-400">Questions before the demo? Call +91 87540 31480</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                    className="glass-card rounded-3xl p-8"
                  >
                    <h2 className="text-lg font-semibold text-slate-900 mb-6">Book your free demo</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Your Name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <Input
                          label="Business Name"
                          required
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                        />
                        <Input
                          label="WhatsApp Number"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                        <Input
                          label="Email (optional)"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <Select
                        label="Business Type"
                        required
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      >
                        <option value="">Select industry</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </Select>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Preferred Date"
                          type="date"
                          required
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                        />
                        <Select
                          label="Preferred Time"
                          required
                          value={form.timeSlot}
                          onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                        >
                          <option value="">Select time</option>
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </Select>
                      </div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full mt-2"
                        disabled={loading}
                        rightIcon={loading ? undefined : <ArrowRight size={16} />}
                      >
                        {loading ? "Booking your demo..." : "Book Free Demo"}
                      </Button>
                      <p className="text-xs text-slate-400 text-center">
                        No spam. We&apos;ll only contact you for the demo.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Video preview placeholder */}
      <section className="section-padding bg-surface-1/30">
        <div className="container-xl max-w-4xl">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              Can&apos;t wait? Watch a quick preview
            </h2>
            <p className="text-slate-500">3-minute overview of Kassapos in action</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden border border-surface-border bg-surface-2 aspect-video flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-brand-950/60" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center"
              >
                <Play size={32} className="text-white fill-white ml-1" />
              </motion.div>
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-sm font-semibold text-white">Kassapos Demo Video</p>
                <p className="text-xs text-brand-100/40">3 min · Supermarket walkthrough</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
