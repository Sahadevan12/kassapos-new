import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const SvgWhatsApp = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import { SITE, OFFICES } from "@/lib/constants";

const GOLD = "#F59E0B";
const GOLD_DIM = "rgba(245,158,11,0.75)";

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
  { icon: <SvgYoutube />,   href: "https://youtube.com",          label: "YouTube",   bg: "#FF0000"  },
  { icon: <SvgFacebook />,  href: "https://facebook.com",         label: "Facebook",  bg: "#1877F2"  },
  { icon: <SvgInstagram />, href: "https://instagram.com",        label: "Instagram", bg: "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" },
  { icon: <SvgWhatsApp />,  href: "https://wa.me/918754031480",   label: "WhatsApp",  bg: "#25D366"  },
  { icon: <SvgLinkedin />,  href: "https://linkedin.com",         label: "LinkedIn",  bg: "#0A66C2"  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0B1830" }}>
      {/* Gold top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />

      {/* CTA Band */}
      <div style={{ borderBottom: "1px solid rgba(245,158,11,0.15)", background: "#091526" }}>
        <div className="container-xl py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Ready to modernise your{" "}
                <span style={{ color: GOLD }}>billing?</span>
              </h3>
              <p className="text-lg" style={{ color: "rgba(148,163,184,0.8)" }}>
                Join <span style={{ color: GOLD, fontWeight: 700 }}>7,500+</span> businesses across South India. Start free, upgrade anytime.
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
                <SvgWhatsApp />
                WhatsApp Us
              </a>
              <Link
                href="/register"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold transition-all"
                style={{ background: `linear-gradient(135deg, ${GOLD} 0%, #D97706 100%)`, color: "#0B1830", boxShadow: `0 6px 24px rgba(245,158,11,0.35)` }}
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
                  border: `1.5px solid rgba(245,158,11,0.35)`,
                  boxShadow: `0 4px 18px rgba(245,158,11,0.18)`,
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
            <p className="text-base leading-loose mb-7 max-w-xs text-white" style={{ lineHeight: 1.8 }}>
              India&apos;s most trusted POS &amp; billing software. Serving 7,500+ retail businesses across Tamil Nadu since 2008.
            </p>

            {/* Offices */}
            <div className="space-y-5">
              {OFFICES.slice(0, 2).map((office) => (
                <div key={office.city} className="flex gap-3.5">
                  <MapPin size={16} className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-base font-semibold mb-1" style={{ color: GOLD }}>
                      {office.city} {office.label !== "Headquarters" ? "" : "HQ"}
                    </p>
                    <p className="text-sm leading-relaxed text-white" style={{ lineHeight: 1.7 }}>
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
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: s.bg, color: "#FFFFFF" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-4" style={{ color: GOLD, borderBottom: "1px solid rgba(255,255,255,0.09)", letterSpacing: "-0.01em" }}>
              Products
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 group"
                    style={{ fontSize: "1rem", lineHeight: 1.5 }}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 bg-blue-400 group-hover:bg-yellow-400 transition-colors" />
                    <span className="text-white/80 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-4" style={{ color: GOLD, borderBottom: "1px solid rgba(255,255,255,0.09)", letterSpacing: "-0.01em" }}>
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 group"
                    style={{ fontSize: "1rem", lineHeight: 1.5 }}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 bg-blue-400 group-hover:bg-yellow-400 transition-colors" />
                    <span className="text-white/80 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 pb-4" style={{ color: GOLD, borderBottom: "1px solid rgba(255,255,255,0.09)", letterSpacing: "-0.01em" }}>
              Get in Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3.5 group"
                style={{ fontSize: "1rem" }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110" style={{ background: "#2563EB", color: "#FFFFFF" }}>
                  <Phone size={17} />
                </div>
                <span className="text-white/80 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3.5 group"
                style={{ fontSize: "1rem" }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110" style={{ background: "#0EA5E9", color: "#FFFFFF" }}>
                  <Mail size={17} />
                </div>
                <span className="text-white/80 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">{SITE.email}</span>
              </a>
              <a
                href="https://wa.me/918754031480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group"
                style={{ fontSize: "1rem" }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all hover:scale-110" style={{ background: "#25D366", color: "#FFFFFF" }}>
                  <SvgWhatsApp />
                </div>
                <span className="text-white/80 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">WhatsApp Support</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "4.9★", label: "Google Rating", accent: "#F59E0B" },
                { value: "2008",  label: "Est. Year",     accent: "#60A5FA" },
                { value: "7,500+",label: "Customers",     accent: "#34D399" },
                { value: "24/7",  label: "Support",       accent: "#A78BFA" },
              ].map((badge) => (
                <div key={badge.label} className="rounded-xl text-center" style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `3px solid ${badge.accent}`,
                  padding: "16px 10px",
                  boxShadow: `0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)`,
                }}>
                  <p className="text-xl font-extrabold mb-1" style={{ color: badge.accent, letterSpacing: "-0.02em" }}>{badge.value}</p>
                  <p className="text-xs font-medium" style={{ color: "rgba(148,163,184,0.6)", letterSpacing: "0.04em" }}>{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid rgba(245,158,11,0.18)`, background: "#060F1C" }}>
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
