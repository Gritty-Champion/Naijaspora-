import { Variants } from "framer-motion";
type Direction = "left" | "right" | "top" | "bottom";


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
      duration: 0.1,
      type: "tween",
    },
  },
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      type: "tween",
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

export const fadeIn = (
  direction: Direction = "bottom",
  delay: number = 0,
  duration: number = 0.6
): Variants => {
  let x = 0;
  let y = 0;

  if (direction === "left") x = -50;
  if (direction === "right") x = 50;
  if (direction === "top") y = -50;
  if (direction === "bottom") y = 50;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};