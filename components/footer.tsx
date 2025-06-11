import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Akshat Sahu
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              AI Engineer & Full Stack Developer with a passion for building scalable, LLM-powered systems and real-time applications that drive enterprise impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                About
              </a>
              <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:akshatsahu2634@gmail.com" 
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>akshatsahu2634@gmail.com</span>
              </a>
              <a 
                href="tel:+12012757594" 
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (201) 275-7594</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Hoboken, New Jersey</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com/in/akshat2634"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/akshat2634"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Akshat Sahu. All rights reserved.
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              Crafted with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" fill="currentColor" /> 
              <span className="mx-1">•</span> 
              Powered by AI <span className="text-blue-500">⚡</span> 
              <span className="mx-1">•</span> 
              Fueled by curiosity <span className="text-yellow-500">🚀</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 