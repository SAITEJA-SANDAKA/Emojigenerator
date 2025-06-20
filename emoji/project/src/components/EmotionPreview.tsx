import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { analyzeEmotion } from '../utils/emotionAnalyzer';
import { EMOJI_OPTIONS } from '../data/emojis';
import { EmotionSuggestion } from './EmotionSuggestion';

interface EmotionPreviewProps {
  emotion: string;
}

export function EmotionPreview({ emotion }: EmotionPreviewProps) {
  if (!emotion.trim()) return null;

  const analysis = analyzeEmotion(emotion);
  const suggestedEmoji = EMOJI_OPTIONS.find(
    emoji => emoji.id === analysis.suggestedEmojis[0]
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Quote className="text-purple-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Your Emotion</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="text-purple-600" />
          <span className="text-purple-600 font-medium capitalize">
            {analysis.category}
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-gray-700 italic">"{emotion}"</p>
        </div>
        
        {suggestedEmoji && (
          <EmotionSuggestion emoji={suggestedEmoji} confidence={analysis.confidence} />
        )}
      </div>
    </div>
  );
}