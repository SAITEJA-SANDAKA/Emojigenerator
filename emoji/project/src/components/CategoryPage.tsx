import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EMOJI_OPTIONS } from '../data/emojis';
import { EmojiCard } from './EmojiCard';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../constants/categories';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const normalizedCategory = category?.toLowerCase().replace(/-/g, ' ');
  
  const categoryEmojis = EMOJI_OPTIONS.filter(
    emoji => emoji.category.toLowerCase() === normalizedCategory
  );

  const currentCategory = categories.find(
    cat => cat.name.toLowerCase() === normalizedCategory
  );

  const Icon = currentCategory?.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/categories"
          className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" />
          <span>Back to Categories</span>
        </Link>

        <div className="flex items-center space-x-3 mb-8">
          {Icon && <Icon className={`w-8 h-8 ${currentCategory?.color} text-white p-1 rounded`} />}
          <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 capitalize">
            {category?.replace(/-/g, ' ')} Emojis
          </h1>
        </div>

        {categoryEmojis.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryEmojis.map((emoji) => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                isSelected={false}
                onSelect={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No emojis found for this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}