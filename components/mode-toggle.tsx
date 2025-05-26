"use client"

import * as React from "react"
import { Moon, Sun, Monitor, Palette, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="rounded-full opacity-0" />
  }

  const themes = [
    {
      name: "light",
      label: "Light",
      icon: Sun,
      description: "Bright and clean",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      textColor: "text-gray-900"
    },
    {
      name: "dark",
      label: "Dark",
      icon: Moon,
      description: "Easy on the eyes",
      gradient: "from-purple-600 to-blue-800",
      bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
      textColor: "text-white"
    },
    {
      name: "system",
      label: "System",
      icon: Monitor,
      description: "Follows your device",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      textColor: "text-gray-700"
    }
  ]

  const currentTheme = themes.find(t => t.name === theme) || themes[0]

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative rounded-full overflow-hidden group hover:scale-105 transition-all duration-300"
        >
          {/* Animated background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${currentTheme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
            animate={{
              background: [
                `linear-gradient(45deg, ${currentTheme.gradient.split(' ')[1]}, ${currentTheme.gradient.split(' ')[3]})`,
                `linear-gradient(135deg, ${currentTheme.gradient.split(' ')[3]}, ${currentTheme.gradient.split(' ')[1]})`,
                `linear-gradient(45deg, ${currentTheme.gradient.split(' ')[1]}, ${currentTheme.gradient.split(' ')[3]})`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Theme icons with animations */}
          <AnimatePresence mode="wait">
            {theme === "light" && (
              <motion.div
                key="light"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-600" />
              </motion.div>
            )}
            {theme === "dark" && (
              <motion.div
                key="dark"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Moon className="h-[1.2rem] w-[1.2rem] text-purple-400" />
              </motion.div>
            )}
            {theme === "system" && (
              <motion.div
                key="system"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Monitor className="h-[1.2rem] w-[1.2rem] text-blue-500" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Sparkle effect on hover */}
          <motion.div
            className="absolute top-0 right-0"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="h-3 w-3 text-yellow-400" />
          </motion.div>
          
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-64 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-1"
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-2 py-1 mb-2">
            <Palette className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Choose Theme
            </span>
          </div>
          
          {themes.map((themeOption, index) => {
            const Icon = themeOption.icon
            const isActive = theme === themeOption.name
            
            return (
              <motion.div
                key={themeOption.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <DropdownMenuItem 
                  onClick={() => setTheme(themeOption.name)}
                  className={`relative p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-purple-700' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3 w-full">
                    {/* Theme preview circle */}
                    <motion.div
                      className={`w-8 h-8 rounded-full ${themeOption.bgColor} border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`h-4 w-4 ${
                        themeOption.name === 'light' ? 'text-yellow-600' :
                        themeOption.name === 'dark' ? 'text-purple-400' :
                        'text-blue-500'
                      }`} />
                    </motion.div>
                    
                    {/* Theme info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {themeOption.label}
                        </span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {themeOption.description}
                      </p>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                      >
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Hover effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${themeOption.gradient} opacity-0 rounded-lg`}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </DropdownMenuItem>
              </motion.div>
            )
          })}
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-xs text-center text-gray-400 dark:text-gray-500">
              Theme preference is saved automatically
            </p>
          </motion.div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

