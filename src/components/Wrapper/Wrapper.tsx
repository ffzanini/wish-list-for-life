'use client'
import { motion, AnimatePresence } from 'framer-motion'

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <motion.section
        className="container min-h-[calc(100vh-14.28rem)] items-center justify-center pt-24 md:pt-36 overflow-hidden"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
