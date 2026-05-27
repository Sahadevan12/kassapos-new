import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Star, Users, Calendar, Award, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FounderStrip } from "@/components/home/FounderStrip";
import { OurJourneySection } from "@/components/home/OurJourneySection";
import { OFFICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Kassapos — India's Most Trusted POS Software Since 2008",
  description:
    "Learn about Kassapos Software Solutions — 15+ years of serving Indian retailers with world-class billing and POS software. 7,500+ customers, 4.9★ Google rating.",
};


const VALUES = [
  {
    icon: "🎯",
    title: "Customer First",
    description:
      "Every feature we build starts with a real customer problem. We listen, then we build. Always.",
  },
  {
    icon: "⚡",
    title: "Speed & Reliability",
    description:
      "Billing software must be fast and reliable. Downtime costs you money. Our 99.9% uptime ensures you never miss a sale.",
  },
  {
    icon: "🇮🇳",
    title: "Built for India",
    description:
      "GST, WhatsApp, Tamil language, offline mode — we understand Indian retail challenges because we live them.",
  },
];

const STATS = [
  { value: 7500, suffix: "+", label: "Businesses Served", icon: <Users size={20} /> },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1, icon: <Star size={20} /> },
  { value: 15, suffix: "+ Years", label: "In Business", icon: <Calendar size={20} /> },
  { value: 20, suffix: "+", label: "Industry Verticals", icon: <Award size={20} /> },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28">
      {/* Hero */}
      <section className="pt-8 pb-12">
        <div className="container-xl">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <SectionLabel className="mx-auto mb-6">About Kassapos</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              15 years of powering
              <br />
              <span className="gradient-text">Indian retail</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We started in 2008 with one goal: make billing fast, simple, and reliable for every Indian retailer.
              Today, 7,500+ businesses across South India trust Kassapos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-surface-border bg-surface-1/30">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center text-brand-600 mx-auto mb-3">
                  {stat.icon}
                </div>
                <p className="text-4xl font-extrabold font-display text-slate-900 mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    duration={2000}
                  />
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <FounderStrip />

      {/* Journey */}
      <OurJourneySection />

      {/* Values */}
      <section className="section-padding bg-surface-1/30">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-display-md font-bold font-display text-slate-900">What we stand for</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel className="mx-auto mb-5">Our Offices</SectionLabel>
            <h2 className="text-display-md font-bold font-display text-slate-900">
              Serving South India from 4 locations
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-brand-400" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{office.city}</p>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">{office.label}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{office.address}</p>
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-1.5 text-xs text-brand-600 hover:text-slate-900 transition-colors"
                  >
                    <Phone size={12} />
                    {office.phone}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-xl max-w-3xl text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10">
            <h2 className="text-display-md font-bold font-display text-slate-900 mb-3">
              Ready to join the family?
            </h2>
            <p className="text-slate-500 mb-8">Start your free 14-day trial today. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl btn-gradient text-white font-semibold">
                  Start Free Trial
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-brand-400/30 font-semibold transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
