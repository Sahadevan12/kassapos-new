import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { SITE, OFFICES } from "@/lib/constants";

const SvgYoutube = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
  </svg>
);
const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/>
  </svg>
);
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8 0-3.2 0-3.5.1-4.8.1-3.2 1.6-4.8 4.9-4.9 1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1 3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
  </svg>
);
const SvgX = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.9 1h3.7l-8 9.2L24 23h-7.4l-5.8-7.6L4.3 23H.6l8.6-9.8L0 1h7.6l5.2 6.8L18.9 1zm-1.3 19.8h2L6.5 3.2H4.3L17.6 20.8z"/>
  </svg>
);
const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.4v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7 20.4H3.6V9H7v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.7C24 .8 23.2 0 22.2 0z"/>
  </svg>
);

const FOOTER_PRODUCTS = [
  { label: "Supermarket POS", href: "/products/supermarket" },
  { label: "Retail Billing", href: "/products/retail" },
  { label: "Restaurant POS", href: "/products/restaurant" },
  { label: "Cloud Billing", href: "/products/cloud" },
  { label: "Textiles Software", href: "/products/textile" },
  { label: "Warehouse Management", href: "/products/warehouse" },
  { label: "GST Billing", href: "/products/gst-billing" },
  { label: "All Products →", href: "/products" },
];

const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Demo", href: "/demo" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const SOCIAL_LINKS = [
  { icon: <SvgYoutube />, href: "https://youtube.com", label: "YouTube" },
  { icon: <SvgFacebook />, href: "https://facebook.com", label: "Facebook" },
  { icon: <SvgInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <SvgX />, href: "https://twitter.com", label: "Twitter/X" },
  { icon: <SvgLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0D1B2E" }}>
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)" }} />

      {/* CTA Band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-xl py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Ready to modernise your billing?
              </h3>
              <p className="text-lg" style={{ color: "rgba(148,163,184,0.8)" }}>
                Join 7,500+ businesses across South India. Start free, upgrade anytime.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={`https://wa.me/918754031480`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.06)" }}
              >
                <MessageCircle size={18} className="text-green-400" />
                WhatsApp Us
              </a>
              <Link
                href="/register"
                className="btn-gradient flex items-center gap-2 px-7 py-3.5 rounded-xl text-white text-base font-semibold"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 16,
                  padding: "8px 18px",
                  display: "inline-flex",
                  border: "1.5px solid rgba(37,99,235,0.35)",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.25), 0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Kassapos"
                  width={220}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-base leading-loose mb-7 max-w-xs" style={{ color: "rgba(148,163,184,0.8)", lineHeight: 1.8 }}>
              India&apos;s most trusted POS &amp; billing software. Serving 7,500+ retail businesses across Tamil Nadu since 2008.
            </p>

            {/* Offices */}
            <div className="space-y-5">
              {OFFICES.slice(0, 2).map((office) => (
                <div key={office.city} className="flex gap-3.5">
                  <MapPin size={16} className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-base font-semibold text-white mb-1">
                      {office.city} {office.label !== "Headquarters" ? "" : "HQ"}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.6)", lineHeight: 1.7 }}>
                      {office.address}
                    </p>
                    <a href={`tel:${office.phone}`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors mt-1.5 flex items-center gap-1.5">
                      <Phone size={13} /> {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5 mt-8">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.11)", color: "rgba(148,163,184,0.75)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.09)", letterSpacing: "-0.01em" }}>
              Products
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 transition-colors group"
                    style={{ color: "rgba(148,163,184,0.75)", fontSize: "1rem", lineHeight: 1.5 }}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 transition-colors group-hover:bg-blue-300" style={{ background: "rgba(59,130,246,0.7)" }} />
                    <span className="group-hover:text-white transition-colors">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.09)", letterSpacing: "-0.01em" }}>
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 transition-colors group"
                    style={{ color: "rgba(148,163,184,0.75)", fontSize: "1rem", lineHeight: 1.5 }}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 transition-colors group-hover:bg-blue-300" style={{ background: "rgba(59,130,246,0.7)" }} />
                    <span className="group-hover:text-white transition-colors">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.09)", letterSpacing: "-0.01em" }}>
              Get in Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3.5 transition-colors group"
                style={{ color: "rgba(148,163,184,0.75)", fontSize: "1rem" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(37,99,235,0.22)" }}>
                  <Phone size={17} className="text-blue-400" />
                </div>
                <span className="group-hover:text-white transition-colors">{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3.5 transition-colors group"
                style={{ color: "rgba(148,163,184,0.75)", fontSize: "1rem" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(37,99,235,0.22)" }}>
                  <Mail size={17} className="text-blue-400" />
                </div>
                <span className="group-hover:text-white transition-colors">{SITE.email}</span>
              </a>
              <a
                href="https://wa.me/918754031480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 transition-colors group"
                style={{ color: "rgba(148,163,184,0.75)", fontSize: "1rem" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(34,197,94,0.18)" }}>
                  <MessageCircle size={17} className="text-green-400" />
                </div>
                <span className="group-hover:text-green-400 transition-colors">WhatsApp Support</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "4.9★", label: "Google Rating" },
                { value: "2008", label: "Est. Year" },
                { value: "7,500+", label: "Customers" },
                { value: "24/7", label: "Support" },
              ].map((badge) => (
                <div key={badge.label} className="rounded-xl text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", padding: "14px 10px" }}>
                  <p className="text-lg font-bold text-white">{badge.value}</p>
                  <p className="text-sm mt-1 font-medium" style={{ color: "rgba(148,163,184,0.55)" }}>{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm" style={{ color: "rgba(148,163,184,0.45)" }}>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LEGAL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(148,163,184,0.45)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
