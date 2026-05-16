// Reusable Framer Motion animation variants for the Kassapos design system

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.87, 0, 0.13, 1] as const;

export const spring = {
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
  smooth: { type: "spring" as const, stiffness: 200, damping: 25 },
  gentle: { type: "spring" as const, stiffness: 100, damping: 20 },
  bouncy: { type: "spring" as const, stiffness: 300, damping: 15 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_EXPO },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const slideUp = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: EASE_EXPO },
  },
};

export const hoverCard = {
  rest: { y: 0, boxShadow: "0 4px 24px rgba(0,0,0,0.4)" },
  hover: {
    y: -6,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.15)",
    transition: { duration: 0.3, ease: EASE_EXPO },
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(37,99,235,0.3)",
      "0 0 50px rgba(37,99,235,0.7)",
      "0 0 20px rgba(37,99,235,0.3)",
    ],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export const navbarVariants = {
  top: {
    background: "rgba(3, 8, 24, 0)",
    backdropFilter: "blur(0px)",
    borderColor: "rgba(255,255,255,0)",
  },
  scrolled: {
    background: "rgba(7, 12, 27, 0.85)",
    backdropFilter: "blur(20px)",
    borderColor: "rgba(255,255,255,0.06)",
  },
};

export const mobileMenuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.4, ease: EASE_EXPO },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EXPO },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: EASE_IN_OUT },
  },
};
