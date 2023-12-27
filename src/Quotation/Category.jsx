import React from 'react';

const CategoryButton = ({ category, selectedCategory, handleCategoryClick }) => {
 return (
    <button
      className={`${
        selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
      } px-4 py-2 rounded`}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </button>
 );
};

export default CategoryButton;