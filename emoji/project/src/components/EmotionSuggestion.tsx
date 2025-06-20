import React from 'react';
import { EmojiOption } from '../types';
import { AlertTriangle, ThumbsUp } from 'lucide-react';

interface EmotionSuggestionProps {
  emoji: EmojiOption;
  confidence: number;
  intensity: number;
}

export function EmotionSuggestion({ emoji, confidence, intensity }: EmotionSuggestionProps) {
  const getConfidenceColor = (conf: number) => {
    if (conf >= 0.8) return 'bg-green-600';
    if (conf >= 0.6) return 'bg-blue-600';
    if (conf >= 0.4) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">Suggested Emoji Style</p>
          <p className="font-medium text-gray-800">{emoji.style}</p>
          
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Match Confidence</span>
              <span>{Math.round(confidence * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${getConfidenceColor(confidence)} h-2 rounded-full transition-all`}
                style={{ width: `${confidence * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Emotion Intensity</span>
              <span>{Math.round(intensity * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{ width: `${intensity * 100}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className="ml-4 text-5xl">{emoji.preview}</div>
      </div>

      {confidence < 0.4 && (
        <div className="flex items-center space-x-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
          <AlertTriangle className="w-5 h-5" />
          <p className="text-sm">Low confidence match. Try describing your emotion in more detail.</p>
        </div>
      )}

      {confidence >= 0.8 && (
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
          <ThumbsUp className="w-5 h-5" />
          <p className="text-sm">Strong emotion match! This emoji perfectly captures your feeling.</p>
        </div>
      )}
    </div>
  );
}