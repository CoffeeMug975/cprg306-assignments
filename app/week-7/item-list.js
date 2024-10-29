import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name'); // Initialize sortBy state

    // Sort items by the selected sortBy criteria, working on a copy to avoid mutation
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        } else {
            return 0; // Default, no sorting
        }
    });

    return (
        <div>
            <h2>Sort By:</h2>
            
            {/* Sort Buttons */}
            <div className="mb-4">
                <button
                    className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>

            {/* Render Sorted Items */}
            <ul className="w-full max-w-md mx-auto mt-4 bg-gray-500 shadow-md rounded-lg">
                {sortedItems.map(item => (
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                ))}
            </ul>
        </div>
    );
}
