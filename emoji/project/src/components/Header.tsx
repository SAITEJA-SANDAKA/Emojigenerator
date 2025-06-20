import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const logoAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1.1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: [0, -15, 15, -15, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={logoAnimation}
            >
              <Smile className="w-10 h-10" />
            </motion.div>
            <h1 className="text-3xl font-bold">Emoji Designer</h1>
          </Link>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
        <p className="text-center mt-2 text-purple-100">
          Express yourself like never before with custom emojis!
        </p>
      </div>
    </header>
  );
}