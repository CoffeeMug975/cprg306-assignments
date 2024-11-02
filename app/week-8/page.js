"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the new MealIdeas component
import itemData from "./items.json";

export default function Page() {
    const [itemList, setItemList] = useState(
        itemData.map((item) => ({ ...item }))
    );

    const [selectedItemName, setSelectedItemName] = useState(''); // New state variable for the selected item

    const handleAddItem = (newItem) => {
        setItemList([...itemList, newItem]);
    };

    const handleItemSelect = (item) => {
        // Clean up the item name for the API
        const cleanedName = item.name
            .split(',')[0] // Remove size/quantity info
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '') // Remove emojis
            .trim(); // Trim any extra spaces
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 flex justify-center">Shopping List</h1>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 pr-4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={itemList} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-full md:w-1/2 pl-4">
                    {selectedItemName && (
                        <MealIdeas ingredient={selectedItemName} />
                    )}
                </div>
            </div>
        </main>
    );
}
