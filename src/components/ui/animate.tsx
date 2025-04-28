
import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export function Animate({ children, className, variants, ...props }: AnimateProps) {
  // Standardize animation variants to use either initial/animate or hidden/visible
  const standardizedVariants = {
    ...variants,
    // If using hidden/visible pattern, map to initial/animate
    ...(variants?.hidden && {
      initial: variants.hidden,
      animate: variants.visible
    })
  };

  return (
    <motion.div
      initial={standardizedVariants?.initial || "hidden"}
      animate={standardizedVariants?.animate || "visible"}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
      variants={standardizedVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
