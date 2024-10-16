"use client"
import { useState } from "react";
import NewItem from "./new-item";


export default function Interactivity() {
    
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        let currentQuantity = quantity;
        if (quantity <=19){
            setQuantity(currentQuantity + 1);
        }
    }

    const decrementQuantity = () => {
        let currentQuantity = quantity;
        if (quantity >= 2){
            setQuantity(currentQuantity - 1);
        }
    }

        // Function to reset the quantity to 1
        const resetQuantity = () => {
            setQuantity(1);
        };
    
    return (
        //className = "flex justify-center"             Delete Later
        <main>
            <NewItem currentQuantity={quantity} incrementCountQuantity={incrementQuantity} decrementCountQuantity={decrementQuantity} resetQuantity={resetQuantity}/>
        </main>
    );
}
