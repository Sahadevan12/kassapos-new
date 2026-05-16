import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Refund Policy — Kassapos",
  description: "Kassapos refund and cancellation policy for subscription plans.",
};

const LAST_UPDATED = "May 1, 2026";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container-xl max-w-3xl">
          <ScrollReveal className="mb-10">
            <p className="text-xs text-slate-400 mb-2">Last updated: {LAST_UPDATED}</p>
            <h1 className="text-display-lg font-extrabold font-display text-slate-900 mb-4">Refund Policy</h1>
            <p className="text-slate-500">
              We want you to be completely satisfied with Kassapos. Here is our clear and fair policy on refunds and cancellations.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              {
                title: "14-Day Free Trial",
                highlight: true,
                content: `All new Kassapos accounts include a 14-day free trial with full access to all features. No credit card is required during the trial. You can cancel anytime during the trial period — no charges apply.`,
              },
              {
                title: "Annual Subscription Refunds",
                content: `If you purchase an annual subscription and cancel within the first 30 days, you are eligible for a full refund minus any setup fees. After 30 days, no refunds are issued for the remaining subscription period. This applies to all annual plan tiers.`,
              },
              {
                title: "Monthly Subscription Cancellation",
                content: `Monthly plans can be cancelled at any time. Cancellation takes effect at the end of the current billing month. No partial-month refunds are issued for monthly plans.`,
              },
              {
                title: "Technical Issues",
                content: `If Kassapos experiences downtime or technical failures that prevent you from using the service for more than 72 consecutive hours in any billing period, you are eligible for a pro-rated credit for the affected period. Planned maintenance windows and issues outside our control (internet outages, power failures, force majeure) are excluded.`,
              },
              {
                title: "Setup and Implementation Fees",
                content: `One-time setup fees, data migration fees, and training fees are non-refundable once the service has been delivered. If we are unable to complete the setup due to our own limitations, a full refund of setup fees will be issued.`,
              },
              {
                title: "How to Request a Refund",
                content: `To request a refund:

1. Email us at info@kassapos.in with subject line "Refund Request — [Your Business Name]"
2. Include your registered phone number and reason for the refund request.
3. We will respond within 2 business days.
4. Approved refunds are processed within 7–10 business days to your original payment method.

You can also call us at +91 87540 31480 or message us on WhatsApp.`,
              },
              {
                title: "Non-Refundable Items",
                content: `The following are not eligible for refunds:

• Annual plans after the 30-day window.
• Monthly plans (pro-rated or partial months).
• Hardware purchases (thermal printers, barcode scanners, weighing scales).
• Custom development or integration work.
• SMS/WhatsApp message credits once consumed.`,
              },
              {
                title: "Dispute Resolution",
                content: `If you are unsatisfied with our refund decision, please escalate to info@kassapos.in with "Escalation" in the subject line. Our management team will review and respond within 5 business days. We genuinely want to resolve all issues fairly.`,
              },
            ].map((section) => (
              <ScrollReveal key={section.title}>
                <div className={`pb-8 border-b border-surface-border last:border-0 ${section.highlight ? "p-5 rounded-2xl bg-brand-400/5 border border-brand-400/20 mb-2" : ""}`}>
                  {section.highlight && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Risk-free
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-slate-900 mb-4">{section.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10">
            <div className="rounded-2xl bg-surface-2 border border-surface-border p-6 text-center">
              <p className="text-slate-900 font-semibold mb-2">Still have questions?</p>
              <p className="text-sm text-slate-500 mb-4">Our team is happy to help you understand your options.</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a href="tel:+918754031480" className="px-5 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 hover:border-brand-400/30 transition-all">
                  Call +91 87540 31480
                </a>
                <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-sm text-green-400 hover:bg-green-500/20 transition-all">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
