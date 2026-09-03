"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [completedPath, setCompletedPath] = useState<string | null>(null);
  const isTransitioning = !shouldReduceMotion && completedPath !== pathname;

  if (shouldReduceMotion) return <main>{children}</main>;

  return (
    <>
      {isTransitioning && (
        <div
          key={`curtain-${pathname}`}
          aria-hidden="true"
          className="page-transition-curtain pointer-events-none fixed inset-0 z-50 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-accent will-change-transform"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              delay: 0.28,
              duration: 0.78,
              ease: [0.83, 0, 0.17, 1],
            }}
            style={{ transformOrigin: "top center" }}
            onAnimationComplete={() => setCompletedPath(pathname)}
          />

          <motion.div
            className="absolute inset-0 z-10 bg-[#232329] will-change-transform"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.78,
              ease: [0.83, 0, 0.17, 1],
            }}
            style={{ transformOrigin: "top center" }}
          />

          <motion.div
            className="absolute inset-0 z-20 grid place-items-center"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, -4] }}
            transition={{ duration: 0.62, times: [0, 0.18, 0.55, 1] }}
          >
            <span className="text-4xl font-semibold text-white">
              Emmanuel<span className="text-accent">.</span>
            </span>
          </motion.div>
        </div>
      )}

      <main>{children}</main>
    </>
  );
};

export default PageTransition;
