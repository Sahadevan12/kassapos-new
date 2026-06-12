"use client";

import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { DemoModal } from "@/components/ui/DemoModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      {children}
      <DemoModal />
    </SmoothScrollProvider>
  );
}
