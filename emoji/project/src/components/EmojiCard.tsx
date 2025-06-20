import React from 'react';
import { motion } from 'framer-motion';
import { EmojiOption } from '../types';
import { useClipboard } from '../hooks/useClipboard';

interface EmojiCardProps {
  emoji: EmojiOption;
  isSelected: boolean;
  onSelect: () => void;
}

export function EmojiCard({ emoji, isSelected, onSelect }: EmojiCardProps) {
  const { copied, copyToClipboard } = useClipboard();

  const handleClick = () => {
    copyToClipboard(emoji.preview);
    onSelect();
  };

  const emojiAnimation = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.3,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={emojiAnimation}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={`p-4 rounded-lg border-2 transition-all relative group ${
        isSelected
          ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
          : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
      }`}
    >
      <motion.div 
        className="text-4xl mb-2"
        animate={copied ? {
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 10, 0],
        } : {}}
      >
        {emoji.preview}
      </motion.div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{emoji.style}</p>
    </motion.button>
  );
}