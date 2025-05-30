// src/components/WeeklyPlanner.jsx

import React from "react";
import './WeeklyPlanner.css'; // Optional: you can style this however you like

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const meals = ['Breakfast', 'Lunch', 'Dinner'];

const WeeklyPlanner = () => {
    return (
        <div className="weekly-planner">
            <h2>Weekly Meal Planner</h2>
            <table className="planner-table">
                <thead>
                    <tr>
                        <th></th> {/* empty top-left corner */}
                        {days.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {meals.map((meal) =>(
                        <tr key={meal}>
                            <td><strong>{meal}</strong></td>
                            {days.map((day) => (
                                <td key={`${day}-${meal}`}>
                                    <button className="add-meal-btn">+ Add Meal</button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WeeklyPlanner;