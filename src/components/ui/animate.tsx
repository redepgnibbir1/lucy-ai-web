
import { motion, HTMLMotionProps, Variant, VariantLabels } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export function Animate({ children, className, variants, ...props }: AnimateProps) {
  // Handle both hidden/visible and initial/animate pattern
  // We'll check if variants has hidden/visible properties and map them properly
  const hasHiddenVisible = variants && 'hidden' in variants && 'visible' in variants;
  
  return (
    <motion.div
      initial={hasHiddenVisible ? "hidden" : "initial"}
      animate={hasHiddenVisible ? "visible" : "animate"}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
