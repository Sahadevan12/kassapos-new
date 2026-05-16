"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus, X, Printer, MessageCircle, CreditCard, Banknote, Smartphone, CheckCircle, Trash2 } from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const PRODUCTS_DB = [
  { id: 1, name: "Tata Salt 1kg", price: 22, barcode: "8901030861917", category: "Grocery", stock: 45 },
  { id: 2, name: "Horlicks 500g", price: 199, barcode: "8901030869852", category: "Beverage", stock: 18 },
  { id: 3, name: "Maggi Noodles 70g", price: 14, barcode: "8901058851424", category: "Instant Food", stock: 120 },
  { id: 4, name: "Aashirvaad Atta 5kg", price: 279, barcode: "8901719111671", category: "Staples", stock: 32 },
  { id: 5, name: "Fortune Sunflower Oil 1L", price: 145, barcode: "8906009730521", category: "Oil", stock: 28 },
  { id: 6, name: "Surf Excel 500g", price: 89, barcode: "8901030727903", category: "Household", stock: 56 },
  { id: 7, name: "Bournvita 500g", price: 249, barcode: "7622210958281", category: "Beverage", stock: 14 },
  { id: 8, name: "Parle-G 200g", price: 20, barcode: "8901719116430", category: "Biscuit", stock: 200 },
];

const PAYMENT_METHODS = [
  { id: "cash", label: "Cash", icon: <Banknote size={18} /> },
  { id: "card", label: "Card", icon: <CreditCard size={18} /> },
  { id: "upi", label: "UPI", icon: <Smartphone size={18} /> },
];

type BillItem = { product: typeof PRODUCTS_DB[0]; qty: number };

export default function BillingPage() {
  const [search, setSearch] = useState("");
  const [billItems, setBillItems] = useState<BillItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [billComplete, setBillComplete] = useState(false);
  const [billNumber, setBillNumber] = useState(2848);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredProducts = PRODUCTS_DB.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.barcode.includes(search)
  );

  const addToCart = (product: typeof PRODUCTS_DB[0]) => {
    setBillItems((items) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) return items.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...items, { product, qty: 1 }];
    });
    setSearch("");
    searchRef.current?.focus();
  };

  const updateQty = (productId: number, delta: number) => {
    setBillItems((items) =>
      items
        .map((i) => i.product.id === productId ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );
  };

  const subtotal = billItems.reduce((s, i) => s + i.qty * i.product.price, 0);
  const gstRate = 0.05;
  const gst = Math.round(subtotal * gstRate);
  const total = subtotal + gst;

  const completeBill = () => {
    setBillComplete(true);
    setTimeout(() => {
      setBillComplete(false);
      setBillItems([]);
      setBillNumber((n) => n + 1);
      searchRef.current?.focus();
    }, 2500);
  };

  return (
    <div className="h-[calc(100vh-140px)] lg:h-[calc(100vh-73px-2rem)] flex flex-col lg:flex-row gap-4 pb-20 lg:pb-0">
      {/* Product Lookup Panel */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-100/40" />
          <input
            ref={searchRef}
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product name or scan barcode..."
            className="w-full h-12 pl-10 pr-4 rounded-xl bg-surface-2 border border-surface-border text-white placeholder:text-brand-100/30 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 outline-none transition-all text-sm"
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {filteredProducts.map((product) => (
              <motion.button
                key={product.id}
                onClick={() => addToCart(product)}
                className="text-left p-4 rounded-xl bg-surface-2 border border-surface-border hover:border-brand-400/30 hover:bg-surface-3 transition-all group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{product.name}</p>
                    <p className="text-[11px] text-brand-100/40 mt-0.5">{product.category}</p>
                  </div>
                  <div className="shrink-0">
                    <p className="text-base font-bold text-brand-300">₹{product.price}</p>
                    <p className="text-[10px] text-brand-100/30 text-right">{product.stock} left</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-brand-100/20 font-mono">{product.barcode}</span>
                  <Plus size={14} className="text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bill Panel */}
      <div className="w-full lg:w-80 xl:w-96 flex flex-col gap-3 shrink-0">
        {/* Bill Header */}
        <div className="bg-surface-2 border border-surface-border rounded-xl px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-brand-100/40 uppercase tracking-wider">Bill #</p>
            <p className="text-sm font-bold font-mono text-white">B-{billNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-brand-100/40">{new Date().toLocaleDateString("en-IN")}</p>
            <p className="text-[10px] text-brand-100/40">{new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</p>
          </div>
        </div>

        {/* Bill Items */}
        <div className="flex-1 bg-surface-2 border border-surface-border rounded-xl overflow-hidden flex flex-col">
          <div className="px-4 py-3 border-b border-surface-border">
            <p className="text-xs font-semibold text-brand-100/50 uppercase tracking-wider">
              Items ({billItems.length})
            </p>
          </div>

          {billItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-brand-100/20 text-sm py-8">
              Add products to bill
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto divide-y divide-surface-border/50">
              {billItems.map((item) => (
                <div key={item.product.id} className="flex items-center gap-2 px-4 py-2.5">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{item.product.name}</p>
                    <p className="text-[11px] text-brand-100/40">₹{item.product.price} each</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button onClick={() => updateQty(item.product.id, -1)} className="w-6 h-6 rounded-lg bg-surface-3 flex items-center justify-center text-brand-100/60 hover:text-white transition-colors">
                      <Minus size={10} />
                    </button>
                    <span className="text-sm font-bold text-white w-5 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.product.id, 1)} className="w-6 h-6 rounded-lg bg-surface-3 flex items-center justify-center text-brand-100/60 hover:text-white transition-colors">
                      <Plus size={10} />
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-white w-14 text-right">₹{(item.qty * item.product.price).toLocaleString("en-IN")}</p>
                  <button onClick={() => setBillItems((items) => items.filter((i) => i.product.id !== item.product.id))} className="text-brand-100/20 hover:text-red-400 transition-colors ml-1">
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Totals */}
          <div className="border-t border-surface-border px-4 py-3 space-y-1.5">
            <div className="flex justify-between text-xs text-brand-100/50">
              <span>Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-xs text-brand-100/50">
              <span>GST (5%)</span><span>₹{gst.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-white border-t border-surface-border pt-2">
              <span>Total</span><span>₹{total.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-3 gap-2">
          {PAYMENT_METHODS.map((pm) => (
            <button
              key={pm.id}
              onClick={() => setPaymentMethod(pm.id)}
              className={`flex flex-col items-center gap-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                paymentMethod === pm.id
                  ? "border-brand-400/60 bg-brand-400/15 text-white"
                  : "border-surface-border bg-surface-2 text-brand-100/50 hover:text-white"
              }`}
            >
              {pm.icon}
              {pm.label}
            </button>
          ))}
        </div>

        {/* Complete Bill Button */}
        <AnimatePresence mode="wait">
          {billComplete ? (
            <motion.div
              key="success"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ ease: EASE_EXPO }}
              className="flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold"
            >
              <CheckCircle size={20} />
              Bill #B-{billNumber} Complete!
            </motion.div>
          ) : (
            <motion.div key="bill-btns" className="grid grid-cols-3 gap-2">
              <button
                onClick={completeBill}
                disabled={billItems.length === 0}
                className="col-span-2 py-3 rounded-xl btn-gradient text-white font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Complete Bill
              </button>
              <div className="grid grid-rows-2 gap-1.5">
                <button className="rounded-lg bg-surface-2 border border-surface-border text-brand-100/60 hover:text-white transition-all flex items-center justify-center">
                  <Printer size={14} />
                </button>
                <button className="rounded-lg bg-surface-2 border border-surface-border text-brand-100/60 hover:text-green-400 transition-all flex items-center justify-center">
                  <MessageCircle size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
