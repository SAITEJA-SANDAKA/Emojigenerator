import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EMOTION_KEYWORDS } from '../constants/emotions';

interface AutoSuggestionsProps {
  inputValue: string;
  onSelect: (suggestion: string) => void;
}

export function AutoSuggestions({ inputValue, onSelect }: AutoSuggestionsProps) {
  if (!inputValue.trim()) return null;

  const suggestions = new Set<string>();
  const input = inputValue.toLowerCase();

  Object.entries(EMOTION_KEYWORDS).forEach(([category, keywords]) => {
    keywords.forEach(keyword => {
      if (keyword.includes(input) && keyword !== input) {
        suggestions.add(keyword);
      }
    });
  });

  if (suggestions.size === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10"
      >
        <div className="max-h-48 overflow-y-auto">
          {Array.from(suggestions).slice(0, 5).map((suggestion) => (
            <motion.button
              key={suggestion}
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              onClick={() => onSelect(suggestion)}
              className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}