import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export function Animate({ children, className, ...props }: AnimateProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
} 