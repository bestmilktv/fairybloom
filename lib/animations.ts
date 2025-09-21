/* UI: shared motion variants used selectively */
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  }
};

export const pop: Variants = {
  initial: { 
    scale: 0.95, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  exit: { 
    scale: 0.95, 
    opacity: 0,
    transition: { 
      duration: 0.15, 
      ease: "easeOut" 
    }
  }
};

export const slideFromRight: Variants = {
  initial: { 
    x: '100%' 
  },
  animate: { 
    x: 0,
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 200 
    }
  },
  exit: { 
    x: '100%',
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};
