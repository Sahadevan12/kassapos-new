"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart, Utensils, Pill, Smartphone,
  Scissors, Cookie, Wrench, Sparkles,
  Footprints, Wine, Leaf, Gem, Car, Warehouse, ShoppingBag,
  Cloud, ChevronLeft, ChevronRight,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const CARDS = [
  { id: "supermarket",     label: "Supermarket",        color: "#2563EB", desc: "Complete POS & Billing Solution" },
  { id: "restaurant",      label: "Restaurant",         color: "#EF4444", desc: "Table Billing, Kitchen & Accounts" },
  { id: "textile",         label: "Textiles",           color: "#F43F5E", desc: "Size, Color & Stock Tracking" },
  { id: "bakery",          label: "Bakery",             color: "#10B981", desc: "Fresh Billing for Bakery Items" },
  { id: "hardware",        label: "Hardware",           color: "#F97316", desc: "Stock, Sales & Purchase" },
  { id: "restaurant-bar",  label: "Bar & Restaurant",   color: "#DC2626", desc: "Bar Stock & Daily Settlement" },
  { id: "pharmacy",        label: "Pharmacy",           color: "#06B6D4", desc: "Medicine Stock & Expiry Management" },
  { id: "automobile",      label: "Automobile",         color: "#6B7280", desc: "Parts, Labour & Job Card Billing" },
  { id: "retail",          label: "Retail Shop",        color: "#3B82F6", desc: "Fast Touch Billing & Loyalty" },
  { id: "cloud",           label: "Cloud Billing",      color: "#14B8A6", desc: "Multi-Branch & Offline Sync" },
  { id: "mobile",          label: "Mobile Shop",        color: "#6366F1", desc: "IMEI & Accessories Stock Management" },
  { id: "spa",             label: "Spa & Salon",        color: "#EC4899", desc: "Appointment & Billing Management" },
  { id: "footwear",        label: "Footwear",           color: "#0EA5E9", desc: "Size, Color & Brand Stock" },
  { id: "vegetables",      label: "Vegetables & Fruits",color: "#22C55E", desc: "Weight Billing & Daily Rates" },
  { id: "jewellery",       label: "Jewellery",          color: "#F59E0B", desc: "Live Gold Rate & Weight Billing" },
  { id: "warehouse",       label: "Warehouse",          color: "#8B5CF6", desc: "Stock Transfer & Purchase Orders" },
];

function CardIcon({ id, color }: { id: string; color: string }) {
  const p = { size: 36, strokeWidth: 1.6 };
  const icons: Record<string, React.ReactNode> = {
    supermarket:      <ShoppingCart {...p} />,
    restaurant:       <Utensils {...p} />,
    pharmacy:         <Pill {...p} />,
    mobile:           <Smartphone {...p} />,
    textile:          <Scissors {...p} />,
    bakery:           <Cookie {...p} />,
    hardware:         <Wrench {...p} />,
    spa:              <Sparkles {...p} />,
    footwear:         <Footprints {...p} />,
    "restaurant-bar": <Wine {...p} />,
    vegetables:       <Leaf {...p} />,
    jewellery:        <Gem {...p} />,
    automobile:       <Car {...p} />,
    warehouse:        <Warehouse {...p} />,
    retail:           <ShoppingBag {...p} />,
    cloud:            <Cloud {...p} />,
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const pausedRef = useRef(false);

  const updateArrows = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
  }, [updateArrows]);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    pausedRef.current = true;
    setTimeout(() => { pausedRef.current = false; }, 5000);
    const card = trackRef.current.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : 260;
    trackRef.current.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  /* Auto-scroll every 2.5 s, loops back to start */
  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current || !trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 4) {
        trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = trackRef.current.querySelector("[data-card]") as HTMLElement | null;
        const step = card ? card.offsetWidth + 16 : 260;
        trackRef.current.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
          <div className="flex items-center justify-center gap-2 mt-3">
            <div style={{ height: 2, width: 44, background: "#E2E8F0", borderRadius: 99 }} />
            <div style={{ width: 9, height: 9, borderRadius: 99, background: "#F59E0B" }} />
            <div style={{ height: 2, width: 44, background: "#E2E8F0", borderRadius: 99 }} />
          </div>
        </div>

        {/* Slider */}
        <div className="flex items-center gap-3">

          {/* Prev button */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            style={{
              flexShrink: 0,
              width: 44, height: 44,
              borderRadius: "50%",
              border: "1.5px solid",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: canPrev ? "pointer" : "not-allowed",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              background: canPrev ? "#0F1E4A" : "#FFFFFF",
              borderColor: canPrev ? "#0F1E4A" : "#CBD5E1",
              color: canPrev ? "#FFFFFF" : "#CBD5E1",
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          {/* Track wrapper — clips scrollbar */}
          <div
            style={{ flex: 1, overflow: "hidden" }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            <div
              ref={trackRef}
              onScroll={updateArrows}
              data-track
              className="flex gap-4"
              style={{
                overflowX: "scroll",
                scrollSnapType: "x mandatory",
                paddingBottom: 24,
                marginBottom: -24,
              }}
            >
              {CARDS.map((card, i) => (
                <motion.div
                  key={card.id}
                  data-card
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.055, ease: EASE_EXPO }}
                  className="flex-none flex flex-col items-center text-center rounded-2xl bg-white border w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                  style={{
                    padding: "32px 18px 28px",
                    borderColor: "#E8EEFB",
                    boxShadow: "0 2px 20px rgba(37,99,235,0.07)",
                    scrollSnapAlign: "start",
                  }}
                >
                  <CardIcon id={card.id} color={card.color} />

                  <p
                    className="font-bold text-slate-900 mt-4 mb-2"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {card.label}
                  </p>

                  <p
                    className="text-slate-500 mb-6 flex-1"
                    style={{ fontSize: "0.76rem", lineHeight: 1.6 }}
                  >
                    {card.desc}
                  </p>

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

          {/* Next button */}
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            style={{
              flexShrink: 0,
              width: 44, height: 44,
              borderRadius: "50%",
              border: "1.5px solid",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: canNext ? "pointer" : "not-allowed",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              background: canNext ? "#0F1E4A" : "#FFFFFF",
              borderColor: canNext ? "#0F1E4A" : "#CBD5E1",
              color: canNext ? "#FFFFFF" : "#CBD5E1",
            }}
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <style>{`
        [data-track]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
