import React from 'react';

const ContentSection = ({ selectedCategory }) => {
 const content = [
    { category: 'All Items', text: 'This is the all content' },
    { category: 'Onsite & Civil works', text: 'This is the Onsite & Civil works content' },
    { category: 'Furniture, Decor & Wardrobe', text: 'This is the Furniture, Decor & Wardrobe content' },
    { category: 'Kitchen & Accessories', text: 'This is the Kitchen & Accessories content' },
 ];

 return (
    <div>
      {content.map((item) =>
        item.category === selectedCategory || selectedCategory === 'all' ? (
          <p key={item.category}>{item.text}</p>
        ) : null
      )}
    </div>
 );
};

export default ContentSection;