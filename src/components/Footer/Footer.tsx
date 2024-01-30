'use client'
import { motion } from 'framer-motion'

import { useTranslation } from '@/context'

export function Footer() {
  const { translations } = useTranslation()
  const yearNow = new Date().getFullYear()

  return (
    <motion.footer
      className="flex flex-col md:flex-row bg-gray-0 dark:bg-gray-900 justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <p>helo</p>
    </motion.footer>
  )
}
