import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for a specific user
export async function getItems(userId) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsCollectionRef);
        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("Fetched items:", items); // Debug log
        return items;
    } catch (error) {
        console.error("Error fetching items: ", error);
        return [];
    }
}

// Add a new item for a specific user
export async function addItem(userId, item) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollectionRef, item); 
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
    }
}