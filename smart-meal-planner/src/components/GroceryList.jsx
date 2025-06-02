import React, { useState } from "react";

const GroceryList = ({ plannedMeals }) => {
    // Flatten all ingredients from all meals 
    const allIngredients = Object.values(plannedMeals)
        .flatMap((meal) => meal.ingredients);

    // Remove duplicates using a Set
    const uniqueIngredients = [...new Set(allIngredients)];

    const [checkedItems, setCheckedItems] = useState(new Set());

    const toggleChecked = (item) => {
        setCheckedItems((prev) => {
            const updated = new Set(prev);
            if(updated.has(item)){
                updated.delete(item);
            } else {
                updated.add(item);
            }
            return updated;
        });
    };

    return (
        <div className="grocery-list" style={styles.container}>
            <h3>Grocery List</h3>
            <ul style={styles.list}>
                {uniqueIngredients.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            ...styles.listItem,
                            ...(checkedItems.has(item) ? styles.checked : {})
                        }}
                    >
                        <label>
                            <input
                                type="checkbox"
                                checked={checkedItems.has(item)}
                                onChange={() => toggleChecked(item)}
                                style={{ marginRight: '0.5rem' }}
                            />
                            {item}
                        </label>
                    </li>
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
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    listItem: {
        marginBottom: '8px',
        fontSize: '1rem'
    },
    checked: {
        textDecoration: 'line-through',
        color: '#999'
    }
};

export default GroceryList;