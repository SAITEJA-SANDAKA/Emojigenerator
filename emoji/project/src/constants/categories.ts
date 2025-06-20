import { 
  Smile, Heart, Cloud, Frown, Angry, Ghost, 
  HelpCircle, Zap, Coffee, Star, Book, Gamepad,
  Briefcase, Leaf, Dog, Plane, Pizza, PartyPopper,
  Hash, User, Hand, Footprints, Sun, HeartCrack,
  AlertCircle, Sparkles, Brain, Scale, Laugh,
  MessageCircleQuestion, ThumbsDown
} from 'lucide-react';

export const categories = [
  // Basic Emotions
  { name: 'Happy', icon: Sun, color: 'bg-yellow-500' },
  { name: 'Love', icon: Heart, color: 'bg-pink-500' },
  { name: 'Sad', icon: Cloud, color: 'bg-blue-500' },
  { name: 'Cry', icon: HeartCrack, color: 'bg-blue-400' },
  { name: 'Angry', icon: Angry, color: 'bg-red-500' },
  { name: 'Fear', icon: Ghost, color: 'bg-purple-500' },
  { name: 'Confused', icon: HelpCircle, color: 'bg-orange-500' },
  { name: 'Excited', icon: Zap, color: 'bg-yellow-600' },
  { name: 'Relaxed', icon: Coffee, color: 'bg-green-500' },
  { name: 'Surprised', icon: Sparkles, color: 'bg-purple-600' },
  
  // Activities
  { name: 'Studying', icon: Book, color: 'bg-indigo-500' },
  { name: 'Playing', icon: Gamepad, color: 'bg-blue-600' },
  { name: 'Working', icon: Briefcase, color: 'bg-gray-600' },
  
  // Nature & Objects
  { name: 'Nature', icon: Leaf, color: 'bg-green-600' },
  { name: 'Animals', icon: Dog, color: 'bg-amber-500' },
  { name: 'Travel', icon: Plane, color: 'bg-sky-500' },
  { name: 'Food', icon: Pizza, color: 'bg-orange-500' },
  { name: 'Party', icon: PartyPopper, color: 'bg-pink-600' },
  { name: 'Symbols', icon: Hash, color: 'bg-gray-500' },
  
  // People & Body
  { name: 'People', icon: User, color: 'bg-teal-500' },
  { name: 'Hands', icon: Hand, color: 'bg-amber-400' },
  { name: 'Feet', icon: Footprints, color: 'bg-rose-500' },
  
  // Complex Emotions
  { name: 'Disgust', icon: ThumbsDown, color: 'bg-green-600' },
  { name: 'Pride', icon: Star, color: 'bg-amber-500' },
  { name: 'Boredom', icon: Scale, color: 'bg-gray-500' },
  { name: 'Curiosity', icon: Brain, color: 'bg-violet-500' },
  { name: 'Playful', icon: Laugh, color: 'bg-pink-400' },
  { name: 'Sarcasm', icon: MessageCircleQuestion, color: 'bg-purple-600' }
];