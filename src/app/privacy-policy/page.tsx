import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Kassapos",
  description: "How Kassapos collects, uses, and protects your personal and business data.",
};

const LAST_UPDATED = "May 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container-xl max-w-3xl">
          <ScrollReveal className="mb-10">
            <p className="text-xs text-slate-400 mb-2">Last updated: {LAST_UPDATED}</p>
            <h1 className="text-display-lg font-extrabold font-display text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">
              Kassapos Software Solutions Pvt Ltd (&quot;Kassapos&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </ScrollReveal>

          <div className="prose prose-slate max-w-none space-y-8">
            {[
              {
                title: "1. Information We Collect",
                content: `We collect information you provide directly when registering, purchasing, or contacting us. This includes:

• **Business Information**: Business name, GSTIN, address, industry type.
• **Contact Details**: Name, phone number, email address.
• **Billing Data**: Transaction records, invoice data, payment method metadata (we do not store card numbers).
• **Usage Data**: How you use the Kassapos application, feature usage patterns, error logs.
• **Device Information**: IP address, browser type, device model for support and security purposes.`,
              },
              {
                title: "2. How We Use Your Information",
                content: `We use collected information to:

• Provide, operate, and improve the Kassapos platform.
• Process billing and send receipts.
• Send WhatsApp or SMS alerts you've opted into (low stock, daily reports, etc.).
• Provide customer support and respond to inquiries.
• Send product updates, security notices, and compliance information.
• Comply with legal obligations including GST and Indian tax law.

We do **not** sell your personal information to third parties.`,
              },
              {
                title: "3. Data Storage and Security",
                content: `Your data is stored on AWS (Amazon Web Services) servers located in India (Mumbai region). We implement industry-standard security including:

• TLS 1.3 encryption in transit.
• AES-256 encryption at rest.
• Role-based access controls.
• Automated nightly backups to encrypted Google Drive.
• Regular security audits and penetration testing.`,
              },
              {
                title: "4. Data Sharing",
                content: `We share your data only in the following limited circumstances:

• **Service Providers**: AWS (hosting), WhatsApp Business API (messaging), Razorpay/PhonePe (payments). All are contractually bound to protect your data.
• **Legal Compliance**: When required by Indian law, court order, or government request.
• **Business Transfer**: In case of merger, acquisition, or asset sale, with advance notice to you.`,
              },
              {
                title: "5. Your Rights",
                content: `You have the right to:

• Access the personal data we hold about you.
• Correct inaccurate data.
• Request deletion of your account and associated data (subject to legal retention requirements).
• Opt out of marketing communications at any time.
• Data portability — export your business data in CSV/Excel format at any time from Settings.

To exercise these rights, contact us at info@kassapos.in.`,
              },
              {
                title: "6. Cookies",
                content: `Our website uses essential cookies for authentication and security. We use analytics cookies (Google Analytics) to understand how visitors use our site. You can disable analytics cookies in your browser settings. We do not use advertising cookies.`,
              },
              {
                title: "7. Data Retention",
                content: `We retain your business data as long as your account is active. After account closure, data is retained for 7 years as required by Indian tax law (GST records). You may request deletion of non-financial personal data at any time.`,
              },
              {
                title: "8. Children's Privacy",
                content: `Kassapos is a business software platform. We do not knowingly collect information from individuals under 18. If you believe a minor has provided us data, contact us immediately.`,
              },
              {
                title: "9. Changes to This Policy",
                content: `We may update this privacy policy periodically. We will notify you of significant changes via email or in-app notification at least 30 days before they take effect.`,
              },
              {
                title: "10. Contact Us",
                content: `For privacy-related concerns:

**Kassapos Software Solutions Pvt Ltd**
No.1/181, 1st Floor Elumalai Salai, Nanmangalam, Chennai – 600 117
Email: info@kassapos.in
Phone: +91 87540 31480`,
              },
            ].map((section) => (
              <ScrollReveal key={section.title}>
                <div className="pb-8 border-b border-surface-border last:border-0">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">{section.title}</h2>
                  <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
