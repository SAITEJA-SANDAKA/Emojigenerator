import React, { useState } from 'react';
import { EmotionInput } from './EmotionInput';
import { EmojiDisplay } from './EmojiDisplay';
import { ExploreButton } from './ExploreButton';
import { analyzeEmotion } from '../utils/emotionAnalyzer';
import { EmotionAnalysis } from '../types';

export function Home() {
  const [emotion, setEmotion] = useState('');
  const [analysis, setAnalysis] = useState<EmotionAnalysis | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

  const handleGenerate = () => {
    if (emotion.trim()) {
      setIsGenerating(true);
      setShowEmojis(false);
      
      setTimeout(() => {
        const result = analyzeEmotion(emotion);
        setAnalysis(result);
        setIsGenerating(false);
        setShowEmojis(true);
      }, 1000);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
        <EmotionInput
          emotion={emotion}
          setEmotion={setEmotion}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />
        
        {showEmojis && analysis && (
          <EmojiDisplay
            analysis={analysis}
            emotion={emotion}
            isGenerating={isGenerating}
          />
        )}
        
        <ExploreButton />
      </div>
    </main>
  );
}