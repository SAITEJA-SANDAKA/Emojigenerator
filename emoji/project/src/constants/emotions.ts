export const EMOTION_KEYWORDS = {
  'happy': [
    'happy', 'joy', 'excited', 'cheerful', 'delighted', 'glad', 'pleased',
    'content', 'blessed', 'wonderful', 'fantastic', 'great', 'ecstatic',
    'joyful', 'merry', 'jubilant', 'thrilled', 'overjoyed'
  ],
  'love': [
    'love', 'heart', 'adore', 'affection', 'romantic', 'caring', 'cherish',
    'crush', 'passion', 'devoted', 'fond', 'warmth', 'tender', 'beloved',
    'darling', 'precious', 'sweetheart'
  ],
  'sad': [
    'sad', 'unhappy', 'crying', 'depressed', 'down', 'blue', 'gloomy',
    'heartbroken', 'miserable', 'lonely', 'hurt', 'disappointed', 'sorrow',
    'grief', 'melancholy'
  ],
  'cry': [
    'cry', 'tears', 'sobbing', 'weeping', 'bawling', 'wailing',
    'tearful', 'heartache', 'devastated', 'mourning'
  ],
  'angry': [
    'angry', 'mad', 'furious', 'rage', 'upset', 'frustrated', 'annoyed',
    'irritated', 'outraged', 'hostile', 'bitter', 'enraged', 'irate',
    'livid', 'fuming'
  ],
  'fear': [
    'fear', 'scared', 'afraid', 'terrified', 'frightened', 'horror',
    'panic', 'terror', 'dread', 'anxious', 'worried', 'nervous'
  ],
  'confused': [
    'confused', 'puzzled', 'perplexed', 'unsure', 'uncertain', 'lost',
    'baffled', 'mystified', 'disoriented', 'unclear', 'bewildered'
  ],
  'excited': [
    'excited', 'thrilled', 'enthusiastic', 'eager', 'energetic', 'pumped',
    'stoked', 'psyched', 'animated', 'spirited', 'elated'
  ],
  'relaxed': [
    'relaxed', 'calm', 'peaceful', 'serene', 'tranquil', 'zen', 'chill',
    'composed', 'comfortable', 'at ease', 'mellow', 'content'
  ],
  'surprised': [
    'surprised', 'shocked', 'amazed', 'astonished', 'stunned', 'startled',
    'speechless', 'unexpected', 'bewildered', 'dumbfounded'
  ],
  'studying': [
    'studying', 'learning', 'reading', 'focused', 'concentrating',
    'academic', 'scholarly', 'educational', 'intellectual'
  ],
  'playing': [
    'playing', 'gaming', 'sports', 'fun', 'game', 'competition',
    'entertainment', 'recreation', 'leisure', 'playful'
  ],
  'working': [
    'working', 'busy', 'professional', 'productive', 'focused',
    'determined', 'efficient', 'dedicated', 'committed'
  ],
  'disgust': [
    'disgust', 'gross', 'nauseated', 'repulsed', 'revolted', 'sickened',
    'appalled', 'horrified', 'offended', 'repelled'
  ],
  'pride': [
    'proud', 'confident', 'accomplished', 'successful', 'achieved',
    'triumphant', 'victorious', 'satisfied', 'fulfilled'
  ],
  'boredom': [
    'bored', 'tired', 'uninterested', 'dull', 'monotonous', 'tedious',
    'listless', 'uninspired', 'weary', 'lethargic'
  ],
  'curiosity': [
    'curious', 'interested', 'intrigued', 'fascinated', 'inquisitive',
    'eager', 'wondering', 'exploring', 'discovering'
  ],
  'sarcasm': [
    'sarcastic', 'ironic', 'witty', 'mocking', 'satirical', 'sardonic',
    'cynical', 'wry', 'facetious', 'teasing'
  ]
} as const;

export type EmotionCategory = keyof typeof EMOTION_KEYWORDS;

export const EMOTION_INTENSIFIERS = [
  'very', 'really', 'extremely', 'incredibly', 'super',
  'absolutely', 'totally', 'completely', 'utterly', 'deeply',
  'intensely', 'thoroughly', 'entirely', 'purely', 'strongly',
  'highly', 'especially', 'particularly', 'notably', 'remarkably',
  'exceptionally', 'extraordinarily', 'immensely', 'tremendously'
];