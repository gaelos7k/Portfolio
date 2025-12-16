"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = () => {
    console.log("Button clicked, current theme:", theme)
    toggleTheme()
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </motion.button>
  )
}
