"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE_EXPO } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{ duration, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.08,
  delay = 0,
}: StaggerRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const directionMap = {
    up: { y: 30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...directionMap[direction] },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
      }}
    >
      {children}
    </motion.div>
  );
}
