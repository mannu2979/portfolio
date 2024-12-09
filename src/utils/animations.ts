import { Variants } from 'framer-motion';

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.6 }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.6 }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.6 }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.4 }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

export const slideInOut: Variants = {
  hidden: { x: '-100%' },
  visible: { 
    x: 0,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
  exit: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};