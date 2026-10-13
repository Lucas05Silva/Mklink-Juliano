import type { Transition, Variants } from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// O delay vem pelo prop `custom` — um `transition` passado direto no
// componente seria ignorado, pois o variant já define o próprio.
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay },
  }),
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export const badgeFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", delay },
  }),
};

export const buttonStagger: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.35 + i * 0.08 },
  }),
};

export const DELAYS = {
  avatar: 0,
  card: 0,
  info: 0.15,
  badge: 0.3,
  footer: 0.75,
} as const;

export const buttonHover = { y: -2 };
export const buttonTap = { scale: 0.98 };

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};
