import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface EmotionInputProps {
  emotion: string;
  setEmotion: (emotion: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function EmotionInput({ emotion, setEmotion, onGenerate, isGenerating }: EmotionInputProps) {
  return (
    <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-300">How are you feeling?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tell me about your mood, and I'll create the perfect emoji for you!
          </p>
        </div>

        <div className="relative">
          <textarea
            className="w-full p-4 border-2 border-purple-200 dark:border-purple-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px] transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Describe your emotions... Are you feeling excited? Maybe peaceful? Or perhaps a mix of emotions?"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            style={{ resize: 'none' }}
          />
          <MessageCircle className="absolute right-3 top-3 text-purple-400 dark:text-purple-500" />
        </div>

        <button
          onClick={onGenerate}
          disabled={isGenerating || !emotion.trim()}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
            isGenerating || !emotion.trim()
              ? 'bg-purple-300 dark:bg-purple-800 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-[1.02]'
          }`}
        >
          <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
          <span>{isGenerating ? 'Creating your emoji...' : 'Generate Emoji'}</span>
        </button>
      </div>
    </div>
  );
}