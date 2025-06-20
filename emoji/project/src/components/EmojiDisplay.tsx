import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmotionAnalysis } from '../types';
import { EMOJI_OPTIONS } from '../data/emojis';

interface EmojiDisplayProps {
  analysis: EmotionAnalysis;
  emotion: string;
  isGenerating: boolean;
}

export function EmojiDisplay({ analysis, emotion, isGenerating }: EmojiDisplayProps) {
  const [copiedEmoji, setCopiedEmoji] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleCopyEmoji = (emoji: { id: number; preview: string }) => {
    navigator.clipboard.writeText(emoji.preview);
    setCopiedEmoji(emoji.id);
    setTimeout(() => setCopiedEmoji(null), 1000);
  };

  const matchingEmojis = analysis.suggestedEmojis
    .map(id => EMOJI_OPTIONS.find(e => e.id === id))
    .filter(emoji => emoji !== undefined);

  const displayEmojis = matchingEmojis.length > 0 
    ? matchingEmojis 
    : EMOJI_OPTIONS.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <motion.div variants={item} className="text-center mb-6">
          <p className="text-lg font-medium text-purple-800 dark:text-purple-300 mb-2">
            Your emotion:
          </p>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            "{emotion}"
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {displayEmojis.map((emoji) => (
            emoji && (
              <motion.div
                key={emoji.id}
                className="flex justify-center"
                animate={copiedEmoji === emoji.id ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                } : {}}
              >
                <div 
                  className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => handleCopyEmoji(emoji)}
                >
                  {emoji.preview}
                </div>
              </motion.div>
            )
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="text-center mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
        >
          <p className="text-purple-700 dark:text-purple-300">
            Click any emoji to copy it!
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}