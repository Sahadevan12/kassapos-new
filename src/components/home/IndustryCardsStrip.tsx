"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart, Utensils, Pill, Smartphone,
  Scissors, Cookie, Wrench, Sparkles,
  Footprints, Wine, Leaf, Gem, Car, Warehouse, ShoppingBag,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const CARDS = [
  {
    id: "supermarket",
    label: "Supermarket",
    color: "#2563EB",
    desc: "Complete POS & Billing Solution",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    color: "#EF4444",
    desc: "Table Billing, Kitchen & Accounts",
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    color: "#10B981",
    desc: "Medicine Stock & Expiry Management",
  },
  {
    id: "mobile",
    label: "Mobile Shop",
    color: "#6366F1",
    desc: "IMEI & Accessories Stock Management",
  },
  {
    id: "textile",
    label: "Garments",
    color: "#F59E0B",
    desc: "Size, Color & Stock Tracking",
  },
  {
    id: "bakery",
    label: "Bakery",
    color: "#F97316",
    desc: "Fresh Billing for Bakery Items",
  },
  {
    id: "hardware",
    label: "Hardware",
    color: "#8B5CF6",
    desc: "Stock, Sales & Purchase",
  },
  {
    id: "spa",
    label: "Spa & Salon",
    color: "#EC4899",
    desc: "Appointment & Billing Management",
  },
];

function CardIcon({ id, color }: { id: string; color: string }) {
  const p = { size: 36, strokeWidth: 1.6 };
  const icons: Record<string, React.ReactNode> = {
    supermarket: <ShoppingCart {...p} />,
    restaurant:  <Utensils {...p} />,
    pharmacy:    <Pill {...p} />,
    mobile:      <Smartphone {...p} />,
    textile:     <Scissors {...p} />,
    bakery:      <Cookie {...p} />,
    hardware:    <Wrench {...p} />,
    spa:         <Sparkles {...p} />,
    footwear:    <Footprints {...p} />,
    "restaurant-bar": <Wine {...p} />,
    vegetables:  <Leaf {...p} />,
    jewellery:   <Gem {...p} />,
    automobile:  <Car {...p} />,
    warehouse:   <Warehouse {...p} />,
    retail:      <ShoppingBag {...p} />,
  };
  return (
    <div
      style={{
        width: 72, height: 72,
        borderRadius: 20,
        background: `${color}14`,
        border: `1.5px solid ${color}28`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color,
        flexShrink: 0,
        boxShadow: `0 4px 16px ${color}18`,
      }}
    >
      {icons[id] ?? <ShoppingCart {...p} />}
    </div>
  );
}

export function IndustryCardsStrip() {
  return (
    <section style={{ background: "#F4F7FF", padding: "52px 0 56px" }}>
      <div className="container-xl" style={{ paddingLeft: 20, paddingRight: 20 }}>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-display font-bold text-slate-900"
            style={{ fontSize: "clamp(1.45rem, 3vw, 2.1rem)", letterSpacing: "-0.01em" }}
          >
            Perfect Billing Solution For Every Business
          </h2>
          {/* Orange dot divider */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div style={{ height: 2, width: 44, background: "#E2E8F0", borderRadius: 99 }} />
            <div style={{ width: 9, height: 9, borderRadius: 99, background: "#F59E0B" }} />
            <div style={{ height: 2, width: 44, background: "#E2E8F0", borderRadius: 99 }} />
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.055, ease: EASE_EXPO }}
              className="flex flex-col items-center text-center rounded-2xl bg-white border"
              style={{
                padding: "32px 18px 28px",
                borderColor: "#E8EEFB",
                boxShadow: "0 2px 20px rgba(37,99,235,0.07)",
              }}
            >
              {/* Icon */}
              <CardIcon id={card.id} color={card.color} />

              {/* Label */}
              <p
                className="font-bold text-slate-900 mt-4 mb-2"
                style={{ fontSize: "0.95rem" }}
              >
                {card.label}
              </p>

              {/* Description */}
              <p
                className="text-slate-500 mb-6 flex-1"
                style={{ fontSize: "0.76rem", lineHeight: 1.6 }}
              >
                {card.desc}
              </p>

              {/* Learn More button */}
              <Link
                href={`/products/${card.id}`}
                className="inline-flex items-center justify-center rounded-lg text-white font-semibold transition-all hover:opacity-90"
                style={{
                  background: "#0F1E4A",
                  padding: "9px 22px",
                  fontSize: "0.76rem",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
