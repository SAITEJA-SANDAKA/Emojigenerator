import React from 'react';
import { Sparkles } from 'lucide-react';
import { EmojiOption } from '../types';
import { EmojiCard } from './EmojiCard';

interface EmojiGridProps {
  options: EmojiOption[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export function EmojiGrid({ options, selectedId, onSelect }: EmojiGridProps) {
  const groupedEmojis = options.reduce((acc, emoji) => {
    if (!acc[emoji.category]) {
      acc[emoji.category] = [];
    }
    acc[emoji.category].push(emoji);
    return acc;
  }, {} as Record<string, EmojiOption[]>);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Choose Your Design</h2>
        <Sparkles className="text-purple-600" />
      </div>
      
      {Object.entries(groupedEmojis).map(([category, emojis]) => (
        <div key={category} className="mb-8 last:mb-0">
          <h3 className="text-lg font-medium text-gray-700 capitalize mb-4">
            {category} Emojis
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {emojis.map((emoji) => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                isSelected={selectedId === emoji.id}
                onSelect={() => onSelect(emoji.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}