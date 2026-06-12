"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const INDUSTRIES = [
  "Supermarket / Hypermarket", "Restaurant / QSR", "Retail Shop",
  "Textiles & Garments", "Mobile / Electronics", "Medical Pharmacy",
  "Hotel / Lodging", "Bakery / Sweets", "Hardware Store",
  "Jewellery", "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: 10,
  border: "1.5px solid #E2E8F0",
  fontSize: "0.83rem",
  color: "#0F172A",
  outline: "none",
  background: "#F8FAFF",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export function openDemoModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("kassapos:open-demo"));
  }
}

export function DemoModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", business: "", industry: "" });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("kassapos:open-demo", handler);
    return () => window.removeEventListener("kassapos:open-demo", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", business: "", industry: "" });
    }, 350);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10,18,40,0.65)",
              backdropFilter: "blur(5px)",
              zIndex: 9998,
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 28 }}
            transition={{ duration: 0.32, ease: EASE_EXPO }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 390,
                background: "#FFFFFF",
                borderRadius: 20,
                boxShadow: "0 24px 60px rgba(15,30,74,0.26), 0 4px 16px rgba(0,0,0,0.1)",
                overflow: "hidden",
                pointerEvents: "all",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {/* ── Header gradient ── */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0F1E4A 0%, #1E3A8A 55%, #2563EB 100%)",
                  padding: "16px 20px 14px",
                  position: "relative",
                }}
              >
                {/* Close */}
                <button
                  onClick={close}
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#FFFFFF",
                  }}
                >
                  <X size={15} />
                </button>

                {/* Icon + label */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 38, height: 38,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.14)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Calendar size={18} color="#FFFFFF" />
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Free Live Demo
                  </span>
                </div>

                <h2
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  Book Your Free Demo
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", lineHeight: 1.5 }}>
                  Our expert will call &amp; show Kassapos live — customised for your business.
                </p>

                {/* Trust pills */}
                <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                  {["30-min session", "No credit card", "Tamil support"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: "rgba(255,255,255,0.85)",
                        borderRadius: 99,
                        padding: "3px 10px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Body ── */}
              <div style={{ padding: "16px 20px 20px" }}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: EASE_EXPO }}
                      style={{ textAlign: "center", padding: "16px 0" }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                        style={{
                          width: 64, height: 64,
                          borderRadius: "50%",
                          background: "#ECFDF5",
                          border: "2px solid #6EE7B7",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          margin: "0 auto 16px",
                        }}
                      >
                        <CheckCircle size={30} color="#10B981" />
                      </motion.div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
                        Demo Request Sent!
                      </h3>
                      <p style={{ fontSize: "0.84rem", color: "#64748B", lineHeight: 1.6 }}>
                        Our team will call you shortly. A confirmation will be sent on WhatsApp too.
                      </p>
                      <button
                        onClick={close}
                        style={{
                          marginTop: 20,
                          padding: "10px 32px",
                          borderRadius: 12,
                          background: "linear-gradient(135deg, #1E3A8A, #2563EB)",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "inherit",
                        }}
                      >
                        Done
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "flex", flexDirection: "column", gap: 10 }}
                    >
                      {/* Name */}
                      <div>
                        <label style={{ fontSize: "0.76rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>
                          Your Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          style={inputStyle}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label style={{ fontSize: "0.76rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>
                          WhatsApp Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 87540 31480"
                          style={inputStyle}
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label style={{ fontSize: "0.76rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>
                          Business Name *
                        </label>
                        <input
                          required
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          placeholder="e.g. Sri Maruthi Supermarket"
                          style={inputStyle}
                        />
                      </div>

                      {/* Industry */}
                      <div>
                        <label style={{ fontSize: "0.76rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>
                          Business Type *
                        </label>
                        <select
                          required
                          value={form.industry}
                          onChange={(e) => setForm({ ...form, industry: e.target.value })}
                          style={inputStyle}
                        >
                          <option value="">Select your business type</option>
                          {INDUSTRIES.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          marginTop: 2,
                          width: "100%",
                          padding: "11px",
                          borderRadius: 12,
                          background: loading
                            ? "#94A3B8"
                            : "linear-gradient(135deg, #0F1E4A 0%, #2563EB 100%)",
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          border: "none",
                          cursor: loading ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          boxShadow: loading ? "none" : "0 4px 18px rgba(37,99,235,0.32)",
                          fontFamily: "inherit",
                        }}
                      >
                        {loading ? "Sending..." : "Book Free Demo"}
                        {!loading && <ArrowRight size={16} />}
                      </button>

                      {/* Divider */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
                        <span style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 600, letterSpacing: "0.06em" }}>
                          OR CONTACT INSTANTLY
                        </span>
                        <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
                      </div>

                      {/* Quick contact */}
                      <div style={{ display: "flex", gap: 10 }}>
                        <a
                          href="https://wa.me/918754031480"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 7,
                            padding: "10px",
                            borderRadius: 12,
                            background: "#F0FDF4",
                            border: "1.5px solid #BBF7D0",
                            color: "#16A34A",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                        >
                          <MessageCircle size={15} />
                          WhatsApp
                        </a>
                        <a
                          href="tel:+918754031480"
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 7,
                            padding: "10px",
                            borderRadius: 12,
                            background: "#EFF6FF",
                            border: "1.5px solid #BFDBFE",
                            color: "#2563EB",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                        >
                          <Phone size={15} />
                          Call Us
                        </a>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
