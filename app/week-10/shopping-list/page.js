"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ProtectedPage() {
    const { user } = useUserAuth();

    const [itemList, setItemList] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(''); // New state variable for the selected item

    // Load items for the current user
    const loadItems = async () => {
        try {
            if (user && user.uid) {
                const items = await getItems(user.uid);
                setItemList(items);
            }
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    // Fetch items when component mounts or user changes
    useEffect(() => {
        loadItems();
    }, [user]);

    // Add a new item to the shopping list
    const handleAddItem = async (newItem) => {
        try {
            if (user && user.uid) {
                console.log("Adding item for user:", user.uid, newItem); // Debug Delete later
                const newItemId = await addItem(user.uid, newItem);
                const itemWithId = { ...newItem, id: newItemId };
                setItemList([...itemList, itemWithId]);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Handle item selection
    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(',')[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '')
            .trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="container mx-auto p-8">
            {user ? (
                <div>
                    <header>
                        <h1 className="text-3xl font-bold mb-4 flex justify-center">Shopping List</h1>
                    </header>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/2 pr-4">
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList items={itemList} onItemSelect={handleItemSelect} />
                        </div>
                        <div className="w-full md:w-1/2 pl-4">
                            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>You must be signed in to view the content on this page</p>
                    <Link href="/week-9/">Click here to return to the sign in page.</Link>
                </div>
            )}
        </main>
    );
}
