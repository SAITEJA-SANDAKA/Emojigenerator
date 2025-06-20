import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '../constants/categories';

export function CategoryButton() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <motion.button
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(category.name)}
            className={`${category.color} text-white p-4 rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-xl`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium text-sm md:text-base">{category.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
}