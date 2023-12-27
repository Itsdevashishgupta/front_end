import React, { useState } from 'react';
import Side from '../Home/side';
import Onsite from './Onsite';

const Quotation = () => {
  const categories = ['All Items', 'Onsite & Civil works', 'Furniture, Decor & Wardrobe', 'Kitchen & Accessories'];
  const [selectedCategory, setSelectedCategory] = useState('Onsite & Civil works');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='flex'>
    
    <div className='flex-1 ml-4 '>
    <h1 className=" text-3xl font-bold mt-16">Quotation</h1>   
      {/* Render category buttons */}
      <div className="flex mt-4 bg-white">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-2 mx-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render content based on selected category */}
      <div className="mt-4">
        {selectedCategory === 'All Items' && (
          <div>
            {/* Display furniture names */}
            <h2>Furniture Names</h2>
            {/* Add code to display furniture names here */}
          </div>
        )}
        {selectedCategory === 'Onsite & Civil works' && (
          <div>
            {/* Display quotation and details for Onsite & Civil works */}
           <Onsite/>
            {/* Add code to display quotation and details here */}
          </div>
        )}
        {selectedCategory === 'Furniture, Decor & Wardrobe' && (
          <div>
            {/* Display pictures and details for Furniture, Decor & Wardrobe */}
            <h2>Furniture, Decor & Wardrobe Pictures and Details</h2>
            {/* Add code to display pictures and details here */}
          </div>
        )}
        {selectedCategory === 'Kitchen & Accessories' && (
          <div>
            {/* Display kitchen accessories */}
            <h2>Kitchen Accessories</h2>
            {/* Add code to display kitchen accessories here */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Quotation;
