"use client"

import { useEffect, useState }from 'react';

export default function MealIdeas({ingredient}) {
    
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try
        {
            const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) 
        {
            console.error('Error fetching meal ideas: ', error);
            return [];
        }
    };

     // Function to load meal ideas into state
    const loadMealIdeas = async () => {
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        }
    };

    // Use useEffect to load meals when the ingredient prop changes
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div>
            <h2>Meal Ideas for "{ingredient}"</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', marginRight: '10px' }} />
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}