"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, Clock } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { OFFICES, SITE, WHATSAPP_NUMBERS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
    businessType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Hero */}
      <section className="pt-8 pb-12">
        <div className="container-xl text-center">
          <ScrollReveal>
            <SectionLabel className="mx-auto mb-6">Contact Us</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              We&apos;re here for you.
              <br />
              <span className="gradient-text">Always.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg mx-auto">
              Call, WhatsApp, or fill out the form. We respond in Tamil & English, 24/7.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-padding pt-0">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="glass-card rounded-2xl p-7">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h2>

                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ ease: EASE_EXPO }}
                      className="text-center py-12"
                    >
                      <CheckCircle size={64} className="text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-600">
                        Our team will get back to you within 2 hours. For urgent queries, WhatsApp us directly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          placeholder="Your name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <Input
                          label="Mobile Number"
                          placeholder="+91 XXXXXXXXXX"
                          type="tel"
                          required
                          value={form.mobile}
                          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        />
                      </div>
                      <Select
                        label="Business Type"
                        value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                      >
                        <option value="">Select your business type</option>
                        <option>Supermarket / Grocery</option>
                        <option>Restaurant / Food</option>
                        <option>Retail Shop</option>
                        <option>Textiles / Garments</option>
                        <option>Mobile / Electronics</option>
                        <option>Pharmacy</option>
                        <option>Other</option>
                      </Select>
                      <Input
                        label="Subject"
                        placeholder="What's this about?"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                      <Textarea
                        label="Message"
                        placeholder="Tell us about your requirements, questions, or concerns..."
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={loading}
                        rightIcon={<Send size={16} />}
                        className="w-full"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <ScrollReveal direction="right">
                {/* WhatsApp - Premium */}
                <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle size={20} className="text-green-400" />
                    <h3 className="font-semibold text-slate-900">WhatsApp Support</h3>
                    <span className="ml-auto flex items-center gap-1 text-xs text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Get instant replies in Tamil or English. Fastest way to reach us.
                  </p>
                  <div className="space-y-2">
                    {WHATSAPP_NUMBERS.map((w) => (
                      <a
                        key={w.number}
                        href={`https://wa.me/${w.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-green-500/10 hover:bg-green-500/15 transition-colors border border-green-500/20 group"
                      >
                        <div>
                          <p className="text-xs font-medium text-slate-900">{w.name}</p>
                          <p className="text-xs text-slate-500">+{w.number}</p>
                        </div>
                        <span className="text-xs text-green-400 group-hover:text-green-300 transition-colors">
                          Open Chat →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="glass-card rounded-2xl p-5 space-y-4">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-brand-400/20 transition-colors">
                      <Phone size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Phone</p>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                        {SITE.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-brand-400/20 transition-colors">
                      <Mail size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email</p>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                        {SITE.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Clock size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Support Hours</p>
                      <p className="text-sm font-medium text-slate-900">24/7 · Tamil & English</p>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div className="glass-card rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Our Offices</h3>
                  <div className="space-y-4">
                    {OFFICES.map((office) => (
                      <div key={office.city} className="flex gap-3">
                        <MapPin size={14} className="text-brand-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {office.city}
                            {office.label === "Headquarters" && (
                              <span className="ml-1.5 text-[10px] bg-blue-50 text-brand-600 px-1.5 py-0.5 rounded-full">HQ</span>
                            )}
                          </p>
                          <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{office.address}</p>
                          <a href={`tel:${office.phone}`} className="text-xs text-brand-600 hover:text-slate-900 transition-colors mt-0.5 block">
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
