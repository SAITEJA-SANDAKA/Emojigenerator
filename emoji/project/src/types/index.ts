export interface EmojiOption {
  id: number;
  preview: string;
  style: string;
  category: string;
  intensity?: number;
}

export interface EmotionAnalysis {
  category: string;
  confidence: number;
  suggestedEmojis: number[];
  intensity: number;
  matchedWords: string[];
  relatedCategories?: string[];
}

export interface EmotionMatch {
  category: string;
  score: number;
  matchedWords: string[];
}

export interface SynonymMap {
  [key: string]: string[];
}