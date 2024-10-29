"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [itemList, setItemList] = useState(
        itemData.map((item) => ({...item}) )
    );

    const handleAddItem = (newItem) => {
        setItemList( [...itemList, newItem] )
    }

    return(
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 flex justify-center">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={itemList} />
        </main>
        
    );
};