import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { NAV_PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products — POS & Billing Software for Every Industry",
  description:
    "Kassapos offers 20+ industry-specific billing and POS solutions for supermarkets, restaurants, retail shops, textile, cloud billing, and more.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container-xl">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel className="mx-auto mb-5">All Products</SectionLabel>
            <h1 className="text-display-xl font-extrabold font-display text-slate-900 mb-5">
              Built for your
              <br />
              <span className="gradient-text">specific industry</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">
              20+ industry-specific billing and POS solutions. Not generic — built for how your business actually works.
            </p>
          </ScrollReveal>

          {NAV_PRODUCTS.map((category, ci) => (
            <div key={category.category} className="mb-14">
              <ScrollReveal>
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-3">
                  {category.category}
                  <div className="flex-1 h-px bg-surface-border" />
                </h2>
              </ScrollReveal>
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
                {category.items.map((item) => (
                  <StaggerItem key={item.href}>
                    <Link href={item.href}>
                      <div className="glass-card rounded-2xl p-5 flex items-start gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-brand-400/10 border border-brand-400/10 flex items-center justify-center text-2xl group-hover:bg-brand-400/20 transition-colors shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                            {item.label}
                          </h3>
                          <p className="text-xs text-slate-400">
                            GST ready · Cloud sync · WhatsApp bills
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all mt-0.5 shrink-0" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
