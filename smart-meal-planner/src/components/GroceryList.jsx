import React from "react";

const GroceryList = ({ plannedMeals }) => {
    // Flatten all ingredients from all meals 
    const allIngredients = Object.values(plannedMeals)
        .flatMap((meal) => meal.ingredients);

    // Remove duplicates using a Set
    const uniqueIngredients = [...new Set(allIngredients)];

    return (
        <div style={styles.container}>
            <h3>Grocery List</h3>
            <ul>
                {uniqueIngredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        marginTop: '2rem',
        backgroundColor: '#fff8f2',
        padding: '1rem',
        borderRadius: '10px',
        border: '1px solid #f2e6dc',
        maxWidth: '400px'
    }
};

export default GroceryList;