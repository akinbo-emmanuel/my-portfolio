"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <>
      <motion.div
        key={`curtain-${pathname}`}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 grid place-items-center bg-[#232329]"
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{
          delay: 0.22,
          duration: 0.78,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.span
          className="text-4xl font-semibold text-white"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -6] }}
          transition={{ duration: 0.78, times: [0, 0.18, 0.7, 1] }}
        >
          Emmanuel<span className="text-accent">.</span>
        </motion.span>
      </motion.div>

      <AnimatePresence mode="sync" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ delay: 0.35, duration: 0.42, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
