import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service — Kassapos",
  description: "Terms and conditions for using the Kassapos billing and POS platform.",
};

const LAST_UPDATED = "May 1, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container-xl max-w-3xl">
          <ScrollReveal className="mb-10">
            <p className="text-xs text-slate-400 mb-2">Last updated: {LAST_UPDATED}</p>
            <h1 className="text-display-lg font-extrabold font-display text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-500">
              By accessing or using the Kassapos platform, you agree to be bound by these Terms of Service. Please read them carefully before using the service.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: `By registering for or using Kassapos, you agree to these terms on behalf of yourself and your business entity. If you do not agree, do not use the service. These terms form a legally binding agreement between you and Kassapos Software Solutions Pvt Ltd.`,
              },
              {
                title: "2. Service Description",
                content: `Kassapos provides cloud-based point-of-sale (POS) and billing software for retail, restaurant, and service businesses. Features include billing, inventory management, reporting, CRM, GST compliance, and related tools. We reserve the right to modify, suspend, or discontinue any part of the service with notice.`,
              },
              {
                title: "3. Account Registration",
                content: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials. You must notify us immediately of any unauthorized access. One account per business entity unless a multi-branch plan is purchased. Users must be 18 years or older.`,
              },
              {
                title: "4. Subscription and Payment",
                content: `Kassapos is offered on a subscription basis. Subscriptions are billed annually or as per the plan selected. Prices are in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise. Subscriptions auto-renew unless cancelled before the renewal date. No refunds are provided for partial subscription periods except as stated in our Refund Policy.`,
              },
              {
                title: "5. Acceptable Use",
                content: `You agree not to:

• Use the platform for any illegal purpose or in violation of Indian law.
• Reverse engineer, decompile, or disassemble the software.
• Resell or sublicense access to the platform.
• Upload malicious code, viruses, or disruptive content.
• Attempt to gain unauthorized access to other users' accounts or our systems.
• Use the platform to store or process data of individuals without proper consent under applicable privacy law.`,
              },
              {
                title: "6. Data Ownership",
                content: `You retain full ownership of your business data entered into Kassapos. By using the service, you grant us a limited license to process and store your data solely for providing the service. We will never sell or use your business data for purposes other than delivering and improving the Kassapos service.`,
              },
              {
                title: "7. Uptime and Support",
                content: `We target 99.9% platform uptime, excluding scheduled maintenance windows. Maintenance is announced at least 24 hours in advance and scheduled outside peak business hours (10 PM – 6 AM IST). Support is available Mon–Sat 9 AM – 7 PM IST via phone, WhatsApp, and email. Critical issues are prioritized.`,
              },
              {
                title: "8. Intellectual Property",
                content: `All intellectual property in the Kassapos platform — including software, design, trademarks, and documentation — is owned by Kassapos Software Solutions Pvt Ltd. You may not reproduce, distribute, or create derivative works without explicit written permission.`,
              },
              {
                title: "9. Limitation of Liability",
                content: `To the maximum extent permitted by law, Kassapos shall not be liable for indirect, incidental, special, or consequential damages arising from use of the platform, including data loss, loss of revenue, or business interruption. Our total liability for any claim shall not exceed the amount you paid to us in the 12 months preceding the claim.`,
              },
              {
                title: "10. Termination",
                content: `Either party may terminate the subscription at any time. We may suspend or terminate your account immediately if you violate these terms. Upon termination, your access to the platform ends. Your data is retained for 30 days after termination, during which you may export it. After 30 days, data may be permanently deleted.`,
              },
              {
                title: "11. Governing Law",
                content: `These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.`,
              },
              {
                title: "12. Contact",
                content: `For questions about these terms:

Kassapos Software Solutions Pvt Ltd
No.1/181, 1st Floor Elumalai Salai, Nanmangalam, Chennai – 600 117
Email: info@kassapos.in | Phone: +91 87540 31480`,
              },
            ].map((section) => (
              <ScrollReveal key={section.title}>
                <div className="pb-8 border-b border-surface-border last:border-0">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">{section.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
