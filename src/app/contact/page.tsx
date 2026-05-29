"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, CheckCircle2, ArrowRight,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

/* ── Social SVGs ── */
const YoutubeSvg   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const FacebookSvg  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const InstagramSvg = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;

const CONTACT_INFO = [
  {
    icon: <Phone size={22} />,
    color: "#2563EB",
    bg: "rgba(37,99,235,0.1)",
    label: "Call Us",
    value: "+91 87540 31480",
    sub: "Mon–Sat, 9AM–7PM",
    href: "tel:+918754031480",
  },
  {
    icon: <MessageCircle size={22} />,
    color: "#16A34A",
    bg: "rgba(22,163,74,0.1)",
    label: "WhatsApp",
    value: "+91 87540 31480",
    sub: "Chat with us instantly",
    href: "https://wa.me/918754031480",
  },
  {
    icon: <Mail size={22} />,
    color: "#EA4335",
    bg: "rgba(234,67,53,0.1)",
    label: "Email Us",
    value: "info@kassapos.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@kassapos.com",
  },
  {
    icon: <Clock size={22} />,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    label: "Working Hours",
    value: "Mon – Sat: 9AM – 7PM",
    sub: "Sunday: 10AM – 2PM",
    href: null,
  },
] as const;

const SOCIALS = [
  { icon: <YoutubeSvg />,   color: "#FF0000", bg: "rgba(255,0,0,0.08)",    href: "#", label: "YouTube"   },
  { icon: <FacebookSvg />,  color: "#1877F2", bg: "rgba(24,119,242,0.08)", href: "#", label: "Facebook"  },
  { icon: <InstagramSvg />, color: "#E1306C", bg: "rgba(225,48,108,0.08)", href: "#", label: "Instagram" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", business: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi Kassapos! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nBusiness: ${form.business || "Not specified"}\nMessage: ${form.message || "Requesting a demo"}`;
    window.open(`https://wa.me/918754031480?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main style={{ minHeight: "100vh", background: "#F8FAFF" }}>

      {/* ── Hero Banner ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 60%, #3B82F6 100%)",
          paddingTop: 140,
          paddingBottom: 72,
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: -80, right: -80, width: 340, height: 340, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -50, left: -50, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <div className="container-xl text-center" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 999,
                padding: "6px 18px",
                marginBottom: 20,
              }}
            >
              <MapPin size={14} style={{ color: "#93C5FD" }} />
              <span style={{ color: "#DBEAFE", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                Chennai, Tamil Nadu
              </span>
            </div>

            <h1
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, marginBottom: 16 }}
            >
              Get In Touch With Us
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", maxWidth: 500, margin: "0 auto" }}>
              Our Chennai-based support team is ready to help you with a free demo, installation & ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Info Cards (overlap hero) ── */}
      <section style={{ marginTop: -44, paddingBottom: 8, position: "relative", zIndex: 10 }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 18 }}>
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_EXPO }}
              >
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <InfoCard item={item} />
                  </a>
                ) : (
                  <InfoCard item={item} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Map ── */}
      <section style={{ padding: "48px 0 80px" }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 32, alignItems: "start" }}>

            {/* LEFT — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE_EXPO }}
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: "38px 36px",
                border: "1px solid rgba(37,99,235,0.1)",
                boxShadow: "0 8px 36px rgba(37,99,235,0.08)",
              }}
            >
              <h2
                className="font-display font-bold text-slate-900"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.55rem)", marginBottom: 8 }}
              >
                Send Us a Message
              </h2>
              <p className="text-slate-500" style={{ fontSize: "0.9rem", marginBottom: 28 }}>
                Fill in your details — we&apos;ll reach out via WhatsApp right away.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={labelSt}>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Ramesh Kumar" style={inputSt} />
                </div>
                <div>
                  <label style={labelSt}>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" style={inputSt} />
                </div>
                <div>
                  <label style={labelSt}>Business Type</label>
                  <select name="business" value={form.business} onChange={handleChange} style={inputSt}>
                    <option value="">Select your business type</option>
                    <option>Supermarket / Grocery</option>
                    <option>Restaurant / Hotel</option>
                    <option>Pharmacy / Medical</option>
                    <option>Mobile Shop / Electronics</option>
                    <option>Garments / Textiles</option>
                    <option>Bakery / Sweets</option>
                    <option>Hardware / Building Materials</option>
                    <option>Spa / Salon / Beauty</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelSt}>Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your requirements..." style={{ ...inputSt, resize: "vertical", minHeight: 96 }} />
                </div>

                <button
                  type="submit"
                  className="btn-gradient"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    padding: "14px 28px", borderRadius: 14, border: "none",
                    color: "#fff", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(37,99,235,0.28)", marginTop: 4, fontFamily: "inherit",
                  }}
                >
                  {sent ? <><CheckCircle2 size={18} /> Message Sent!</> : <><Send size={16} /> Send via WhatsApp <ArrowRight size={15} /></>}
                </button>

                {/* Divider */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
                  <span style={{ color: "#94A3B8", fontSize: "0.8rem" }}>or reach us directly</span>
                  <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <a href="tel:+918754031480" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px", borderRadius: 12, background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.15)", color: "#2563EB", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}>
                    <Phone size={16} /> Call Now
                  </a>
                  <a href="https://wa.me/918754031480" target="_blank" rel="noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px", borderRadius: 12, background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)", color: "#16A34A", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none" }}>
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>

            {/* RIGHT — Map + Address + Social */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_EXPO }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Address banner */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
                  borderRadius: 20,
                  padding: "22px 26px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: 6 }}>Our Office Location</p>
                  <p style={{ color: "#BFDBFE", fontSize: "0.88rem", lineHeight: 1.65 }}>
                    Kassapos Software Solutions Pvt Ltd<br />
                    Chennai, Tamil Nadu, India – 600 XXX
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kassapos+Software+Solutions+Chennai"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, color: "#93C5FD", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(37,99,235,0.12)",
                  boxShadow: "0 8px 32px rgba(37,99,235,0.1)",
                  lineHeight: 0,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5148930348173!2d80.1786947!3d12.9388703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e8425eaaeaf%3A0x45a560fa15f5555c!2sTop%20No.1%20Billing%20Software%20in%20Chennai%20-%20Kassapos%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1780048890584!5m2!1sen!2sin"
                  width="100%"
                  height="480"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kassapos Office – Google Maps"
                />
              </div>

              {/* Social links */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "20px 24px",
                  border: "1px solid rgba(37,99,235,0.09)",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.06)",
                }}
              >
                <p style={{ fontWeight: 700, color: "#1E293B", fontSize: "0.93rem", marginBottom: 14 }}>
                  Follow Us On Social Media
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                  {SOCIALS.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={s.label}
                      style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "9px 16px",
                        borderRadius: 12, background: s.bg, color: s.color,
                        fontWeight: 600, fontSize: "0.84rem", textDecoration: "none",
                        border: `1px solid ${s.color}28`,
                      }}
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}

/* ── Info Card ── */
function InfoCard({ item }: { item: typeof CONTACT_INFO[number] }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: "24px 22px",
        border: "1px solid rgba(37,99,235,0.09)",
        boxShadow: "0 8px 28px rgba(37,99,235,0.1), 0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        height: "100%",
        transition: "box-shadow 0.2s, transform 0.2s",
        cursor: item.href ? "pointer" : "default",
      }}
      onMouseEnter={e => {
        if (!item.href) return;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 30px rgba(37,99,235,0.13)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(37,99,235,0.07)";
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 13,
          background: item.bg,
          color: item.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        {item.icon}
      </div>
      <p style={{ color: "#94A3B8", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {item.label}
      </p>
      <p style={{ color: "#1E293B", fontWeight: 700, fontSize: "0.93rem", lineHeight: 1.4 }}>
        {item.value}
      </p>
      <p style={{ color: "#64748B", fontSize: "0.8rem" }}>{item.sub}</p>
    </div>
  );
}

/* ── Shared styles ── */
const inputSt: React.CSSProperties = {
  width: "100%",
  padding: "11px 15px",
  borderRadius: 12,
  border: "1.5px solid #E2E8F0",
  fontSize: "0.9rem",
  color: "#1E293B",
  background: "#F8FAFF",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

const labelSt: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#475569",
  marginBottom: 6,
};
