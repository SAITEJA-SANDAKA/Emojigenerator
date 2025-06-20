import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../constants/categories';
import { ArrowLeft } from 'lucide-react';

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/"
        className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800 dark:text-purple-400">
        Emoji Categories
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link key={category.name} to={`/category/${category.name.toLowerCase()}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${category.color} text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:shadow-xl`}
              >
                <Icon className="w-8 h-8" />
                <span className="font-medium text-center">{category.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}