"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EASE_EXPO } from "@/lib/animations";

const FAQS = [
  {
    question: "What is Kassapos and who is it for?",
    answer:
      "Kassapos is India's most trusted POS & billing software built for retail and hospitality businesses. It's designed for supermarkets, restaurants, textile shops, pharmacies, mobile stores, and 16+ other industries across Tamil Nadu and South India.",
  },
  {
    question: "Does Kassapos work without internet?",
    answer:
      "Yes! Kassapos works fully offline. You can continue billing, managing inventory, and generating reports even without an internet connection. Once you're back online, all data auto-syncs to the cloud instantly.",
  },
  {
    question: "Is Kassapos GST compliant?",
    answer:
      "Absolutely. Kassapos is fully GST compliant with automatic tax calculation, e-invoice generation (IRN & QR code), GSTR reports, and one-click filing support. It handles all GST slabs including 0%, 5%, 12%, 18%, and 28%.",
  },
  {
    question: "Can I manage multiple branches from one account?",
    answer:
      "Yes! With Kassapos Growth and Pro plans, you can manage unlimited branches from a single dashboard. Get real-time stock transfers, consolidated sales reports, and live revenue data across all your locations.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features — no credit card required. You can get started in under 10 minutes. Our team also provides free installation and training.",
  },
  {
    question: "What kind of support does Kassapos provide?",
    answer:
      "We offer 24/7 support in both Tamil and English via phone, WhatsApp, and email. Our dedicated support team is based in Chennai and responds quickly. Pro and Enterprise plans include a dedicated account manager.",
  },
  {
    question: "Can I migrate my existing data to Kassapos?",
    answer:
      "Yes! Our team will help you import your existing products, customers, and supplier data from Excel, CSV, or your previous billing software. Data migration is free for all new customers.",
  },
  {
    question: "Does Kassapos integrate with Swiggy and Zomato?",
    answer:
      "Yes, Kassapos Pro plan includes direct integration with Swiggy and Zomato. Orders automatically sync to your POS, eliminating manual entry and reducing errors during peak hours.",
  },
  {
    question: "What hardware is compatible with Kassapos?",
    answer:
      "Kassapos works with all standard POS hardware — barcode scanners, receipt printers, thermal printers, weighing scales, cash drawers, and touchscreen monitors. It also runs on Windows PCs, laptops, and tablets.",
  },
  {
    question: "How is Kassapos priced?",
    answer:
      "Kassapos has transparent pricing starting at ₹799/month (annual plan). We offer Starter, Growth, Pro, and Enterprise plans to fit businesses of all sizes. There are no hidden charges — free installation and free training are included.",
  },
];

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.04, duration: 0.4, ease: EASE_EXPO }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: isOpen ? "1px solid rgba(37,99,235,0.25)" : "1px solid #E2E8F0",
        background: isOpen ? "#FFFFFF" : "#FAFBFF",
        boxShadow: isOpen ? "0 4px 20px rgba(37,99,235,0.07)" : "none",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
        style={{ padding: "1.1rem 1.4rem" }}
      >
        <span
          className="font-semibold text-slate-800"
          style={{ fontSize: "1rem", lineHeight: 1.5 }}
        >
          {faq.question}
        </span>
        <div
          className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all"
          style={{
            background: isOpen ? "rgba(37,99,235,0.1)" : "#EEF2FF",
            color: isOpen ? "#2563EB" : "#64748B",
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE_EXPO }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="text-slate-500"
              style={{
                padding: "0 1.4rem 1.2rem",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                borderTop: "1px solid #F1F5F9",
                paddingTop: "0.85rem",
              }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const half = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, half);
  const rightFaqs = FAQS.slice(half);

  return (
    <section className="section-padding" style={{ background: "#F8FAFF" }}>
      <div className="container-xl">
        <ScrollReveal className="text-center mb-12">
          <SectionLabel className="mx-auto mb-4">FAQ</SectionLabel>
          <h2
            className="font-display font-bold text-slate-900 mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
          >
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto">
            Everything you need to know about Kassapos. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact" className="text-blue-500 hover:text-blue-600 underline underline-offset-2">
              Talk to our team.
            </a>
          </p>
        </ScrollReveal>

        {/* Two-column accordion layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightFaqs.map((faq, i) => (
              <AccordionItem
                key={i + half}
                faq={faq}
                index={i + half}
                isOpen={openIndex === i + half}
                onToggle={() => toggle(i + half)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
