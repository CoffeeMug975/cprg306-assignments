"use client"
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [currentQuantity, setCurrentQuantity] = useState(1);

    const baseStyle = "p-2 rounded-lg w-10 text-white font-bold";
    const incrementButtonStyle = `${baseStyle} ${currentQuantity > 19 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`;
    const decrementButtonStyle = `${baseStyle} ${currentQuantity < 2 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`;

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    // Function to generate a random string for item ID
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Quantity control functions
    const incrementCountQuantity = () => {
        if (currentQuantity < 20) {
            setCurrentQuantity(currentQuantity + 1);
        }
    };

    const decrementCountQuantity = () => {
        if (currentQuantity > 1) {
            setCurrentQuantity(currentQuantity - 1);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const itemData = {
            id: generateRandomString(16),
            name: name,
            category: category,
            quantity: currentQuantity,
        };

        onAddItem(itemData);

        // Reset form fields and quantity
        setName("");
        setCategory("produce");
        setCurrentQuantity(1);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
                {/* Inline CSS to remove number input arrows */}
                <style jsx>{`
                    input[type="number"]::-webkit-outer-spin-button,
                    input[type="number"]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type="number"] {
                        -moz-appearance: textfield;
                    }
                `}</style>

                <div className="mb-4">
                    <input 
                        className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        type="text" 
                        value={name} 
                        onChange={handleNameChange} 
                        placeholder="Item Name" 
                    />
                </div>

                <div className="mb-4">
                    <select 
                        className="w-full p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        value={category} 
                        onChange={handleCategoryChange}>
                        <option className="bg-gray-300" value="">Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFood">Frozen Food</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <input 
                        className="text-black text-center w-12 p-2 bg-white rounded-md" 
                        type="number" 
                        value={currentQuantity} 
                        readOnly 
                    />
                    <button 
                        type="button" 
                        onClick={decrementCountQuantity} 
                        className={decrementButtonStyle}
                    >
                        -
                    </button>
                    <button 
                        type="button" 
                        onClick={incrementCountQuantity} 
                        className={incrementButtonStyle}
                    >
                        +
                    </button>
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
