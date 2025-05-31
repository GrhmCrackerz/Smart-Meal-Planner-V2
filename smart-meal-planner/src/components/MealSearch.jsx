// src/components/MealSearch.jsx
import React from "react";

const mockMeals = [
    { id: 1, name: 'Chicken Tacos', servings: 4},
    { id: 2, name: 'Thai Fried Rice', servings: 3},
    { id: 3, name: 'Veggie Stir Fry', servings: 2}
];

const MealSearch = ({ onSelect }) => {
    return (
        <div>
            <h3>Select a Meal</h3>
            <ul style={{ listStyle: 'none', padding: 0}}>
                {mockMeals.map((meal) =>(
                    <li key={meal.id} style={{ marginBottom: '1rem'}}>
                        <strong>{meal.name}</strong> - {meal.servings} servings
                        <br />
                        <button onClick={() => onSelect(meal)}>Select</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealSearch;