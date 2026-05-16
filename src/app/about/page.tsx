import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, Users, Calendar, Award, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { OFFICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Kassapos — India's Most Trusted POS Software Since 2008",
  description:
    "Learn about Kassapos Software Solutions — 15+ years of serving Indian retailers with world-class billing and POS software. 7,500+ customers, 4.9★ Google rating.",
};

const TIMELINE = [
  { year: 2008, event: "Kassapos founded in Chennai by T. Saravana Kumar", icon: "🚀" },
  { year: 2012, event: "Expanded to Pondicherry — first branch outside Chennai", icon: "📍" },
  { year: 2015, event: "Launched cloud billing — ahead of market curve", icon: "☁️" },
  { year: 2018, event: "Crossed 2,000 customers. Opened Madurai and Sivakasi offices", icon: "🏆" },
  { year: 2020, event: "WhatsApp billing integration — industry first in Tamil Nadu", icon: "💬" },
  { year: 2022, event: "GST e-invoice integration. 5,000+ supermarket customers", icon: "📋" },
  { year: 2024, event: "Launched web-based & cloud POS. Now serving 7,500+ businesses", icon: "⚡" },
  { year: 2026, event: "Continuing to build the future of Indian retail technology", icon: "🔮" },
];

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

      {/* Story */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <SectionLabel className="mb-5">Our Story</SectionLabel>
              <h2 className="text-display-md font-bold font-display text-slate-900 mb-5">
                From a single shop in Chennai to South India&apos;s most trusted POS
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In 2008, our founder T. Saravana Kumar noticed that small retailers in Chennai were
                  struggling with paper-based billing — slow, error-prone, and impossible to scale.
                </p>
                <p>
                  He built the first version of Kassapos for a local supermarket. Within a year, word
                  spread to other shops. By 2012, we had opened our first branch in Pondicherry.
                </p>
                <p>
                  Today, Kassapos is the most trusted billing software across Tamil Nadu — not because
                  of marketing, but because our software genuinely helps businesses grow.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                  Managing Director
                </p>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white font-extrabold text-2xl shrink-0">
                    S
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">T. Saravana Kumar</h3>
                    <p className="text-sm text-slate-500">Managing Director & Founder</p>
                    <p className="text-sm text-slate-400">Kassapos Software Solutions Pvt Ltd</p>
                  </div>
                </div>
                <blockquote className="text-sm text-slate-600 italic leading-relaxed border-l-2 border-brand-400/30 pl-4">
                  &ldquo;Our mission is simple: help every Indian retailer — from a corner store to a supermarket chain — run their business with the confidence that comes from having the right tools.&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding pt-0">
        <div className="container-xl max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel className="mx-auto mb-5">Our Journey</SectionLabel>
            <h2 className="text-display-md font-bold font-display text-slate-900">
              15 years of milestones
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/50 via-brand-600/30 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.07} direction="left">
                  <div className="flex gap-6 items-start">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-surface-2 border border-surface-border flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 pt-1 pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-brand-600 font-mono">{item.year}</span>
                        <div className="h-px flex-1 bg-surface-border" />
                      </div>
                      <p className="text-sm text-slate-600">{item.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

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
