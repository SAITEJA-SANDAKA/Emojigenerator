import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function ExploreButton() {
  return (
    <Link to="/categories">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-[2px]"
      >
        <motion.div
          className="relative flex items-center space-x-2 rounded-lg bg-white px-6 py-3 text-purple-600 transition-colors dark:bg-gray-900 dark:text-purple-400"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="font-semibold">Explore Categories</span>
          <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}