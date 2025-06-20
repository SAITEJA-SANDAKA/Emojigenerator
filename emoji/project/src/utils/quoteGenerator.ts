export function getEmotionQuote(category: string): string {
  const quotes: Record<string, string[]> = {
    'happiness & joy': [
      "Let your joy shine as bright as the sun",
      "Happiness is the best makeup one can wear",
      "When you're happy, life dances with you"
    ],
    'love & affection': [
      "Love is the language of the heart",
      "Where there is love, there is life",
      "Let love light up your world"
    ],
    'sadness': [
      "Every storm runs out of rain",
      "Even the darkest night will end",
      "Tomorrow is a new beginning"
    ],
    'anger': [
      "Take a deep breath, find your peace",
      "Channel your energy wisely",
      "Stay calm and think clearly"
    ],
    'fear & anxiety': [
      "You are stronger than you know",
      "Take it one step at a time",
      "Courage is fear that has said its prayers"
    ],
    'surprise': [
      "Life is full of wonderful surprises",
      "Embrace the unexpected",
      "Sometimes the best things are unplanned"
    ],
    'confusion': [
      "Clarity comes one step at a time",
      "Every question has an answer",
      "Take your time to understand"
    ],
    'disgust': [
      "This too shall pass",
      "Focus on what brings you joy",
      "Choose what feels right for you"
    ],
    'relaxation': [
      "Breathe in peace, breathe out stress",
      "Find your inner calm",
      "Let tranquility be your guide"
    ],
    'pride': [
      "You've earned this moment",
      "Stand tall and shine bright",
      "Your achievements speak volumes"
    ],
    'boredom': [
      "Adventure awaits around the corner",
      "Time to explore something new",
      "Create your own excitement"
    ],
    'curiosity': [
      "Wonder is the beginning of wisdom",
      "Keep exploring, keep discovering",
      "Let your curiosity lead the way"
    ],
    'hungry': [
      "Good food is good mood",
      "Time to treat yourself",
      "Listen to your appetite"
    ],
    'gaming': [
      "Game on, level up!",
      "Play hard, have fun",
      "Ready player one!"
    ],
    'sarcasm': [
      "Wit is the spice of life",
      "Sometimes humor says it best",
      "A little sass goes a long way"
    ],
    'neutral': [
      "Balance is the key",
      "Find your center",
      "Stay grounded, stay focused"
    ]
  };

  const defaultQuotes = [
    "Express yourself freely",
    "Be true to your feelings",
    "Every emotion has its purpose"
  ];

  const categoryQuotes = quotes[category.toLowerCase()] || defaultQuotes;
  return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
}