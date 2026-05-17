"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Smart Billing", "Inventory", "GST Reports", "Multi-Store",
  "Barcode", "Customer CRM", "Staff Payroll", "Purchase Orders",
  "Expense Tracking", "Payment Gateway", "Daily Reports", "Online Sync",
];

export function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ background: "#0D1B6E", overflow: "hidden", padding: "13px 0" }}>
      <motion.div
        style={{ display: "flex", width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0 22px",
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
              }}
            >
              {item}
            </span>
            {/* bigger star separator */}
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1.15rem",
                lineHeight: 1,
              }}
            >
              ✳
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
