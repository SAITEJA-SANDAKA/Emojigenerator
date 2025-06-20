import { EmotionAnalysis, EmotionMatch } from '../types';
import { EMOTION_KEYWORDS, EMOTION_INTENSIFIERS } from '../constants/emotions';
import { EMOJI_OPTIONS } from '../data/emojis';
import { expandEmotionWords, findRelatedCategories } from './synonyms';

function calculateIntensity(text: string): number {
  const words = text.toLowerCase().split(/\s+/);
  const intensifierCount = words.filter(word => 
    EMOTION_INTENSIFIERS.includes(word)
  ).length;
  
  return Math.min(0.6 + (intensifierCount * 0.1), 1.0);
}

function findEmotionMatches(text: string): EmotionMatch[] {
  const lowercaseText = text.toLowerCase();
  const words = lowercaseText.split(/\s+/);
  const expandedWords = expandEmotionWords(text);
  const matches: EmotionMatch[] = [];

  Object.entries(EMOTION_KEYWORDS).forEach(([category, keywords]) => {
    let score = 0;
    const matchedWords = new Set<string>();

    // Check exact matches
    expandedWords.forEach(word => {
      if (keywords.includes(word)) {
        const position = words.indexOf(word);
        const positionWeight = position === -1 ? 1 : (words.length - position) / words.length;
        score += positionWeight;
        matchedWords.add(word);
      }
    });

    // Check partial matches
    words.forEach(word => {
      if (word.length > 3) {
        keywords.forEach(keyword => {
          if (keyword.includes(word)) {
            score += 0.5;
            matchedWords.add(word);
          }
        });
      }
    });

    if (score > 0) {
      matches.push({
        category,
        score,
        matchedWords: Array.from(matchedWords)
      });
    }
  });

  return matches.sort((a, b) => b.score - a.score);
}

export function analyzeEmotion(text: string): EmotionAnalysis {
  const matches = findEmotionMatches(text);
  const intensity = calculateIntensity(text);
  const words = text.toLowerCase().split(/\s+/);
  
  if (matches.length === 0) {
    const relatedCategories = findRelatedCategories(words);
    if (relatedCategories.length > 0) {
      const primaryCategory = relatedCategories[0];
      const categoryEmojis = EMOJI_OPTIONS
        .filter(emoji => emoji.category.toLowerCase() === primaryCategory.toLowerCase())
        .slice(0, 3);

      return {
        category: primaryCategory,
        confidence: 0.6,
        suggestedEmojis: categoryEmojis.map(emoji => emoji.id),
        intensity,
        matchedWords: words,
        relatedCategories
      };
    }

    return {
      category: 'neutral',
      confidence: 0.5,
      suggestedEmojis: EMOJI_OPTIONS
        .filter(emoji => emoji.category === 'neutral')
        .slice(0, 3)
        .map(emoji => emoji.id),
      intensity,
      matchedWords: [],
      relatedCategories: []
    };
  }

  const bestMatch = matches[0];
  const totalScore = matches.reduce((sum, match) => sum + match.score, 0);
  const confidence = bestMatch.score / totalScore;
  const relatedCategories = findRelatedCategories(words);

  const categoryEmojis = EMOJI_OPTIONS
    .filter(emoji => {
      const category = emoji.category.toLowerCase();
      return category === bestMatch.category.toLowerCase() ||
             relatedCategories.some(rc => category === rc.toLowerCase());
    })
    .sort((a, b) => {
      const aDiff = Math.abs((a.intensity || 0.5) - intensity);
      const bDiff = Math.abs((b.intensity || 0.5) - intensity);
      return aDiff - bDiff;
    })
    .slice(0, 3);

  return {
    category: bestMatch.category,
    confidence,
    suggestedEmojis: categoryEmojis.map(emoji => emoji.id),
    intensity,
    matchedWords: bestMatch.matchedWords,
    relatedCategories
  };
}