"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Store, Bell, Shield, Printer, MessageCircle, CreditCard, Save, ChevronRight } from "lucide-react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { EASE_EXPO } from "@/lib/animations";

const SETTING_SECTIONS = [
  { id: "business", label: "Business Details", icon: <Store size={16} /> },
  { id: "billing", label: "Billing Settings", icon: <CreditCard size={16} /> },
  { id: "notifications", label: "Notifications", icon: <Bell size={16} /> },
  { id: "printing", label: "Printing", icon: <Printer size={16} /> },
  { id: "whatsapp", label: "WhatsApp", icon: <MessageCircle size={16} /> },
  { id: "security", label: "Security", icon: <Shield size={16} /> },
];

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-all duration-300 ${enabled ? "bg-brand-400" : "bg-surface-border"}`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${enabled ? "left-6" : "left-1"}`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("business");
  const [settings, setSettings] = useState({
    businessName: "Saravana Supermarket",
    gstin: "33ABCDE1234F1Z5",
    phone: "+91 8754031480",
    address: "No.1, Main Road, Chennai – 600 001",
    gstEnabled: true,
    autoWhatsApp: true,
    printLogo: true,
    lowStockAlerts: true,
    dailyReport: false,
    soundEffects: true,
    thermalWidth: "80mm",
    footerText: "Thank you for shopping with us!",
  });

  const toggle = (key: string) =>
    setSettings((s: any) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="space-y-5 pb-20 lg:pb-0">
      <div>
        <h2 className="text-lg font-semibold text-white">Settings</h2>
        <p className="text-sm text-brand-100/40">Manage your store configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-surface-2 border border-surface-border rounded-2xl overflow-hidden">
            {SETTING_SECTIONS.map((section, i) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all ${
                  i < SETTING_SECTIONS.length - 1 ? "border-b border-surface-border" : ""
                } ${
                  activeSection === section.id
                    ? "bg-brand-400/10 text-white"
                    : "text-brand-100/60 hover:text-white hover:bg-surface-3"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={activeSection === section.id ? "text-brand-300" : "text-brand-100/30"}>
                    {section.icon}
                  </span>
                  {section.label}
                </div>
                <ChevronRight size={14} className="text-brand-100/30" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: EASE_EXPO }}
            className="bg-surface-2 border border-surface-border rounded-2xl p-6 space-y-6"
          >
            {activeSection === "business" && (
              <>
                <h3 className="text-base font-semibold text-white">Business Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Business Name" value={settings.businessName}
                    onChange={(e) => setSettings({ ...settings, businessName: e.target.value })} />
                  <Input label="GSTIN" value={settings.gstin}
                    onChange={(e) => setSettings({ ...settings, gstin: e.target.value })} />
                  <Input label="Phone Number" value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })} />
                  <Select label="State">
                    <option>Tamil Nadu</option>
                    <option>Pondicherry</option>
                    <option>Kerala</option>
                  </Select>
                </div>
                <Input label="Address" value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })} />
              </>
            )}

            {activeSection === "billing" && (
              <>
                <h3 className="text-base font-semibold text-white">Billing Settings</h3>
                <div className="space-y-4">
                  {[
                    { key: "gstEnabled", label: "GST Billing", desc: "Automatically calculate GST on all bills" },
                    { key: "autoWhatsApp", label: "Auto WhatsApp Receipt", desc: "Send digital receipt to customer via WhatsApp after every bill" },
                    { key: "soundEffects", label: "Sound Effects", desc: "Play sound on successful bill completion" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-3 border-b border-surface-border">
                      <div>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="text-xs text-brand-100/40">{item.desc}</p>
                      </div>
                      <Toggle
                        enabled={settings[item.key as keyof typeof settings] as boolean}
                        onChange={() => toggle(item.key)}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeSection === "notifications" && (
              <>
                <h3 className="text-base font-semibold text-white">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { key: "lowStockAlerts", label: "Low Stock Alerts", desc: "Get notified when products fall below minimum stock" },
                    { key: "dailyReport", label: "Daily Summary Report", desc: "Receive daily revenue summary on WhatsApp every evening" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between py-3 border-b border-surface-border">
                      <div>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="text-xs text-brand-100/40">{item.desc}</p>
                      </div>
                      <Toggle
                        enabled={settings[item.key as keyof typeof settings] as boolean}
                        onChange={() => toggle(item.key)}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeSection === "printing" && (
              <>
                <h3 className="text-base font-semibold text-white">Printing Settings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Select label="Paper Width" value={settings.thermalWidth}
                    onChange={(e) => setSettings({ ...settings, thermalWidth: e.target.value })}>
                    <option>58mm</option>
                    <option>80mm</option>
                    <option>A4</option>
                  </Select>
                  <Select label="Print Language">
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Both</option>
                  </Select>
                </div>
                <Input label="Receipt Footer Text" value={settings.footerText}
                  onChange={(e) => setSettings({ ...settings, footerText: e.target.value })} />
                <div className="flex items-center justify-between py-3 border-b border-surface-border">
                  <div>
                    <p className="text-sm font-medium text-white">Print Business Logo</p>
                    <p className="text-xs text-brand-100/40">Show your business logo at the top of every receipt</p>
                  </div>
                  <Toggle enabled={settings.printLogo} onChange={() => toggle("printLogo")} />
                </div>
              </>
            )}

            {(activeSection === "whatsapp" || activeSection === "security") && (
              <div className="text-center py-8 text-brand-100/40 text-sm">
                Configure {activeSection === "whatsapp" ? "WhatsApp integration" : "security settings"} here
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-surface-border">
              <Button variant="primary" size="md" leftIcon={<Save size={15} />}>
                Save Changes
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
