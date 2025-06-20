export const EMOTION_SYNONYMS: Record<string, string[]> = {
  // Happy synonyms
  'happy': ['joyful', 'cheerful', 'delighted', 'content', 'pleased', 'blissful', 'upbeat', 'merry', 'jolly', 'gleeful'],
  'excited': ['thrilled', 'enthusiastic', 'eager', 'animated', 'energetic', 'lively', 'pumped', 'stoked', 'psyched'],
  'peaceful': ['calm', 'relaxed', 'tranquil', 'serene', 'composed', 'zen', 'mellow', 'placid'],
  
  // Sad synonyms
  'sad': ['unhappy', 'sorrowful', 'depressed', 'downhearted', 'miserable', 'gloomy', 'melancholy', 'woeful'],
  'disappointed': ['letdown', 'disheartened', 'discouraged', 'frustrated', 'dismayed', 'crestfallen'],
  'lonely': ['alone', 'isolated', 'solitary', 'abandoned', 'forsaken', 'desolate'],
  
  // Angry synonyms
  'angry': ['mad', 'furious', 'enraged', 'irate', 'outraged', 'livid', 'incensed', 'irritated', 'annoyed'],
  'frustrated': ['exasperated', 'agitated', 'irritated', 'vexed', 'annoyed', 'bothered'],
  'hostile': ['antagonistic', 'aggressive', 'confrontational', 'belligerent', 'combative'],
  
  // Fear synonyms
  'afraid': ['scared', 'frightened', 'fearful', 'terrified', 'panicked', 'anxious', 'nervous', 'worried'],
  'anxious': ['worried', 'uneasy', 'apprehensive', 'concerned', 'troubled', 'distressed'],
  'nervous': ['jittery', 'edgy', 'tense', 'agitated', 'restless', 'fidgety'],
  
  // Love synonyms
  'love': ['adore', 'cherish', 'treasure', 'devoted', 'fond', 'affectionate', 'caring', 'passionate'],
  'romantic': ['amorous','sexy','hottie','hot', 'loving', 'tender', 'intimate', 'warm', 'affectionate'],
  'caring': ['compassionate', 'kind', 'nurturing', 'protective', 'supportive'],
  
  // Surprise synonyms
  'surprised': ['amazed', 'astonished', 'stunned', 'shocked', 'startled', 'dumbfounded', 'bewildered'],
  'confused': ['puzzled', 'perplexed', 'baffled', 'mystified', 'disoriented', 'uncertain'],
  
  // Study/Work related
  'focused': ['concentrated', 'attentive', 'absorbed', 'engrossed', 'immersed', 'dedicated'],
  'productive': ['efficient', 'effective', 'industrious', 'busy', 'active', 'accomplished'],
  
  // Play/Fun related
  'playful': ['fun-loving', 'mischievous', 'silly', 'jovial', 'lighthearted', 'carefree'],
  'energetic': ['active', 'dynamic', 'vigorous', 'spirited', 'vibrant', 'lively'],

    // Nature synonyms
  'nature': ['earthly', 'natural', 'wild', 'organic', 'rustic', 'outdoors', 'scenic', 'breathtaking'],
  'forest': ['woods', 'jungle', 'rainforest', 'grove', 'timberland'],
  'mountain': ['peak', 'summit', 'ridge', 'hill', 'alp', 'range'],
  
  // Animals synonyms
  'animals': ['creatures', 'beasts', 'fauna', 'wildlife', 'critters', 'pets', 'livestock'],
  'dog': ['puppy', 'pup', 'canine', 'hound', 'man’s best friend'],
  'cat': ['kitten', 'kitty', 'feline', 'pussycat'],
  
  // Travel synonyms
  'travel': ['journey', 'trip', 'tour', 'expedition', 'voyage', 'sightseeing'],
  'vacation': ['holiday', 'getaway', 'respite', 'break', 'retreat'],
  'adventure': ['quest', 'excursion', 'odyssey', 'exploration', 'journey'],
  
  // Food synonyms
  'food': ['meal', 'dish', 'cuisine', 'snack', 'treat', 'delicacy'],
  'fruit': ['produce', 'berry', 'citrus', 'melon', 'tropical fruit'],
  'vegetables': ['greens', 'produce', 'plant-based food', 'salad', 'roots'],
  
  // Party synonyms
  'party': ['celebration', 'gathering', 'bash', 'shindig', 'festivity', 'soirée', 'get-together'],
  'celebration': ['festivity', 'party', 'gala', 'reception', 'fete'],
  'dance': ['boogie', 'groove', 'sway', 'shimmy'],
  
  // Symbols synonyms
  'symbol': ['emblem', 'sign', 'mark', 'logo', 'icon', 'insignia'],
  'heart': ['love', 'affection', 'passion', 'devotion'],
  'star': ['asterisk', 'shining', 'celestial', 'asteroid'],
  
  // People synonyms
  'people': ['humans', 'individuals', 'persons', 'beings', 'crowd', 'community'],
  'person': ['individual', 'human', 'somebody', 'someone', 'man', 'woman', 'child'],
  
  // Hands synonyms
  'hands': ['palms', 'fingers', 'mitts', 'grip', 'claws'],
  'high five': ['hand slap', 'cheer', 'celebration gesture'],
  'wave': ['salute', 'hello', 'goodbye', 'gesture'],
  
  // Feet synonyms
  'feet': ['toes', 'soles', 'foot', 'kicks', 'podiatry'],
  'walk': ['stroll', 'amble', 'wander', 'march', 'tread'],
  'run': ['sprint', 'jog', 'dash', 'race'],
  
  // Disgust synonyms
  'disgust': ['revulsion', 'nausea', 'distaste', 'repulsion', 'loathing'],
  'grossed out': ['disgusted', 'appalled', 'sickened'],
  'nauseous': ['queasy', 'sick', 'ill', 'unsettled'],
  
  // Pride synonyms
  'pride': ['dignity', 'self-respect', 'honor', 'self-worth', 'self-esteem'],
  'accomplishment': ['achievement', 'success', 'victory', 'triumph', 'attainment'],
  'confidence': ['self-assurance', 'self-confidence', 'poise', 'assurance'],
  
  // Boredom synonyms
  'bored': ['uninterested', 'disengaged', 'weary', 'apathetic', 'tired', 'dull', 'listless'],
  'uninterested': ['bored', 'disengaged', 'apathetic'],
  'apathetic': ['indifferent', 'unconcerned', 'disinterested'],
  
  // Curiosity synonyms
  'curious': ['inquisitive', 'interested', 'questioning', 'nosy', 'searching'],
  'inquisitive': ['curious', 'eager', 'interested', 'probing'],
  'questioning': ['inquiring', 'searching', 'investigative'],
  
  // Playful synonyms
  'playful': ['fun-loving', 'mischievous', 'silly', 'jovial', 'lighthearted', 'carefree'],
  'energetic': ['active', 'dynamic', 'vigorous', 'spirited', 'vibrant', 'lively'],
  
  // Sarcasm synonyms
  'sarcasm': ['irony', 'mockery', 'ridicule', 'satire', 'wit', 'sardonicism'],
  'sarcastic': ['ironic', 'mocking', 'scornful', 'satirical', 'wry', 'sardonic']
};

export function findRelatedCategories(words: string[]): string[] {
  const relatedCategories = new Set<string>();
  
  words.forEach(word => {
    for (const [category, synonyms] of Object.entries(EMOTION_SYNONYMS)) {
      if (synonyms.includes(word.toLowerCase()) || word.toLowerCase() === category) {
        relatedCategories.add(category);
      }
    }
  });
  
  return Array.from(relatedCategories);
}

export function expandEmotionWords(text: string): string[] {
  const words = text.toLowerCase().split(/\s+/);
  const expanded = new Set<string>(words);
  
  words.forEach(word => {
    for (const [category, synonyms] of Object.entries(EMOTION_SYNONYMS)) {
      if (synonyms.includes(word) || word === category) {
        expanded.add(category);
        synonyms.forEach(synonym => expanded.add(synonym));
      }
    }
  });
  
  return Array.from(expanded);
}