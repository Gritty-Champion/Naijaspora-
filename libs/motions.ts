import { Variants } from "framer-motion";

export const headerMotion: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      type: "tween"
    },
  },
};

export const buttonMotion: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
