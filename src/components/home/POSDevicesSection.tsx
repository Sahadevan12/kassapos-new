"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Phone } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const DEVICES = [
  {
    id: "postouch",
    image: "/printers/postouch.webp",
    name: "POS Touch Screen",
    desc: "15\" All-in-One Touch Monitor",
    price: "₹8,999",
    tag: "Best Seller",
    tagColor: "#2563EB",
  },
  {
    id: "tvs3200plus",
    image: "/printers/tvs3200plus.webp",
    name: "TVS MSP 3200 Plus",
    desc: "Dot Matrix Receipt Printer",
    price: "₹5,499",
    tag: null,
    tagColor: "",
  },
  {
    id: "tvsbarcode",
    image: "/printers/tvsbarcode.webp",
    name: "TVS Barcode Printer",
    desc: "Thermal Barcode Label Printer",
    price: "₹6,999",
    tag: "Popular",
    tagColor: "#F59E0B",
  },
  {
    id: "tvsscanner",
    image: "/printers/tvsscanner.webp",
    name: "TVS Barcode Scanner",
    desc: "USB Handheld Barcode Reader",
    price: "₹2,499",
    tag: null,
    tagColor: "",
  },
  {
    id: "weightscale",
    image: "/printers/weightscale.webp",
    name: "Weighing Scale",
    desc: "Digital POS Weighing Machine",
    price: "₹3,999",
    tag: null,
    tagColor: "",
  },
  {
    id: "printer1",
    image: "/printers/1.webp",
    name: "Thermal Printer",
    desc: "80mm Thermal Receipt Printer",
    price: "₹4,999",
    tag: "New",
    tagColor: "#10B981",
  },
  {
    id: "paperroll",
    image: "/printers/paperroll.webp",
    name: "Thermal Paper Roll",
    desc: "80mm × 80m — Pack of 10",
    price: "₹299",
    tag: null,
    tagColor: "",
  },
  {
    id: "ribbon",
    image: "/printers/ribbon.webp",
    name: "Printer Ribbon",
    desc: "Compatible Ink Ribbon Cartridge",
    price: "₹199",
    tag: null,
    tagColor: "",
  },
];

export function POSDevicesSection() {
  return (
    <section style={{ background: "#F8FAFF", padding: "64px 0 72px" }}>
      <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>

        {/* Heading */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "rgba(37,99,235,0.08)",
              color: "#2563EB",
              border: "1px solid rgba(37,99,235,0.15)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            POS Hardware Store
          </div>
          <h2
            className="font-display font-bold text-slate-900 mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)", letterSpacing: "-0.01em" }}
          >
            We Are Selling{" "}
            <span style={{ color: "#2563EB" }}>POS Devices</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Original hardware. Tested & compatible with Kassapos software. Direct from manufacturer.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {DEVICES.map((device, i) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.05, ease: EASE_EXPO }}
              className="relative flex flex-col bg-white rounded-2xl border overflow-hidden"
              style={{
                borderColor: "#E8EEFB",
                boxShadow: "0 2px 20px rgba(37,99,235,0.06)",
              }}
            >
              {/* Tag badge */}
              {device.tag && (
                <div
                  className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-white font-semibold"
                  style={{ background: device.tagColor, fontSize: "0.65rem" }}
                >
                  {device.tag}
                </div>
              )}

              {/* Image */}
              <div
                className="flex items-center justify-center"
                style={{
                  background: "#F4F7FF",
                  padding: "28px 20px",
                  minHeight: 180,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={device.image}
                  alt={device.name}
                  style={{
                    maxHeight: 130,
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-4">
                <p className="font-bold text-slate-900 mb-1" style={{ fontSize: "0.9rem" }}>
                  {device.name}
                </p>
                <p className="text-slate-400 mb-3" style={{ fontSize: "0.72rem", lineHeight: 1.5 }}>
                  {device.desc}
                </p>

                {/* Price */}
                <p
                  className="font-extrabold mt-auto mb-3"
                  style={{ fontSize: "1.2rem", color: "#0F1E4A" }}
                >
                  {device.price}
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/918754031480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #0F1E4A 0%, #1B2B5E 100%)",
                    padding: "9px 14px",
                    fontSize: "0.75rem",
                  }}
                >
                  <Phone size={13} />
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <ShoppingCart size={16} style={{ color: "#94A3B8" }} />
          <p className="text-slate-400 text-xs">
            Free installation support with every hardware purchase · Chennai delivery available
          </p>
        </div>

      </div>
    </section>
  );
}
