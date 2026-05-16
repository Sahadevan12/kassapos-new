"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Zap, Package, BarChart3, Users, Settings,
  Bell, Search, ChevronDown, Menu, X, LogOut, HelpCircle,
  Store, ChevronRight, Moon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/animations";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Billing", href: "/dashboard/billing", icon: <Zap size={18} /> },
  { label: "Inventory", href: "/dashboard/inventory", icon: <Package size={18} /> },
  { label: "Reports", href: "/dashboard/reports", icon: <BarChart3 size={18} /> },
  { label: "Customers", href: "/dashboard/customers", icon: <Users size={18} /> },
  { label: "Settings", href: "/dashboard/settings", icon: <Settings size={18} /> },
];

function Sidebar({ collapsed, onCollapse }: { collapsed: boolean; onCollapse: () => void }) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: EASE_EXPO }}
      className="fixed left-0 top-0 bottom-0 z-30 flex flex-col bg-surface-1 border-r border-surface-border overflow-hidden"
    >
      {/* Logo */}
      <div className={cn(
        "flex items-center gap-3 border-b border-surface-border shrink-0",
        collapsed ? "px-4 py-5 justify-center" : "px-5 py-4"
      )}>
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-glow-sm shrink-0">
          <span className="text-white font-black text-sm">K</span>
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display font-bold text-white text-base tracking-tight whitespace-nowrap"
          >
            Kassa<span className="gradient-text">POS</span>
          </motion.span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl transition-all duration-200 group relative",
                collapsed ? "px-2.5 py-2.5 justify-center" : "px-3 py-2.5",
                isActive
                  ? "bg-brand-400/15 text-white"
                  : "text-brand-100/50 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-brand-400 rounded-r"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className={cn("shrink-0 transition-colors", isActive ? "text-brand-300" : "text-brand-100/40 group-hover:text-brand-300")}>
                {item.icon}
              </span>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className={cn("border-t border-surface-border p-3 space-y-1", collapsed ? "items-center" : "")}>
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-brand-100/40 hover:text-white hover:bg-white/5 transition-all",
            collapsed && "justify-center px-2.5"
          )}
        >
          <HelpCircle size={18} />
          {!collapsed && <span className="text-sm">Help & Support</span>}
        </Link>
        <Link
          href="/login"
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-brand-100/40 hover:text-red-400 hover:bg-red-500/5 transition-all",
            collapsed && "justify-center px-2.5"
          )}
        >
          <LogOut size={18} />
          {!collapsed && <span className="text-sm">Sign Out</span>}
        </Link>

        {/* Collapse toggle */}
        <button
          onClick={onCollapse}
          className={cn(
            "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-brand-100/30 hover:text-white hover:bg-white/5 transition-all mt-2",
            collapsed && "justify-center px-2.5"
          )}
        >
          <ChevronRight size={16} className={cn("transition-transform", collapsed ? "rotate-180" : "")} />
          {!collapsed && <span className="text-xs">Collapse sidebar</span>}
        </button>
      </div>
    </motion.aside>
  );
}

function TopBar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
  const pathname = usePathname();
  const currentPage = NAV_ITEMS.find((n) => n.href === pathname)?.label ?? "Dashboard";

  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-1/80 backdrop-blur-xl border-b border-surface-border transition-all",
        sidebarCollapsed ? "left-[72px]" : "left-[240px]"
      )}
    >
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold text-white">{currentPage}</h1>
        <span className="text-brand-100/30 text-xs hidden sm:block">
          {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-surface-border text-brand-100/40 hover:text-white transition-all text-sm w-44">
          <Search size={14} />
          <span>Search...</span>
          <span className="ml-auto text-[10px] bg-surface-border px-1.5 py-0.5 rounded">⌘K</span>
        </button>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-xl bg-surface-2 border border-surface-border flex items-center justify-center text-brand-100/50 hover:text-white transition-all">
          <Bell size={16} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-400" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface-2 border border-surface-border hover:border-brand-400/30 transition-all">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-white text-xs font-bold">
            S
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-medium text-white">Saravana Kumar</p>
            <p className="text-[10px] text-brand-100/40">Admin</p>
          </div>
          <ChevronDown size={12} className="text-brand-100/40 hidden sm:block" />
        </button>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          collapsed={sidebarCollapsed}
          onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: EASE_EXPO }}
              className="fixed left-0 top-0 bottom-0 z-50 w-64 lg:hidden"
            >
              <Sidebar collapsed={false} onCollapse={() => setMobileSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-surface-1/90 backdrop-blur-xl border-b border-surface-border">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-100/60 hover:text-white"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center">
            <span className="text-white font-black text-xs">K</span>
          </div>
          <span className="font-display font-bold text-white text-sm">KassaPOS</span>
        </div>
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-100/60 hover:text-white relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-400" />
        </button>
      </div>

      {/* Desktop Topbar */}
      <div className="hidden lg:block">
        <TopBar sidebarCollapsed={sidebarCollapsed} />
      </div>

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300 pt-16 lg:pt-[73px] min-h-screen",
          sidebarCollapsed ? "lg:pl-[72px]" : "lg:pl-[240px]"
        )}
      >
        <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-surface-1/95 backdrop-blur-xl border-t border-surface-border flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.slice(0, 5).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all",
                isActive ? "text-brand-300" : "text-brand-100/40"
              )}
            >
              {item.icon}
              <span className="text-[9px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
