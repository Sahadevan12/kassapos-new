"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, Phone } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EASE_EXPO } from "@/lib/animations";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4 bg-slate-50">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-400/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-indigo-400/8 blur-[80px] pointer-events-none" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-glow-sm">
              <span className="text-white font-black text-sm">K</span>
            </div>
            <span className="font-display font-bold text-slate-900 text-xl tracking-tight">
              Kassa<span className="gradient-text">POS</span>
            </span>
          </Link>

          <h1 className="text-2xl font-bold font-display text-slate-900 mb-1">Welcome back</h1>
          <p className="text-sm text-slate-500 mb-8">Sign in to your Kassapos account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email or Mobile Number"
              type="text"
              placeholder="email@example.com or +91..."
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300" />
                <span className="text-xs text-slate-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-xs text-brand-600 hover:text-slate-900 transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              rightIcon={<ArrowRight size={16} />}
              className="w-full mt-2"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">or</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* OTP Login */}
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:border-brand-400/30 transition-all font-medium">
            <Phone size={16} />
            Login with OTP
          </button>

          <p className="text-center text-sm text-slate-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-brand-600 hover:text-slate-900 transition-colors font-medium">
              Start free trial
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          Protected by enterprise-grade security
        </p>
      </motion.div>
    </div>
  );
}
