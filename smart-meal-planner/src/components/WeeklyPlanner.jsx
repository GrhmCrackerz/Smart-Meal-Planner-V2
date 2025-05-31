// src/components/WeeklyPlanner.jsx

import React, { useState } from "react";
import Modal from './Modal';
import MealSearch from './MealSearch';
import './WeeklyPlanner.css';
import GroceryList from "./GroceryList";

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const meals = ['Breakfast', 'Lunch', 'Dinner'];

const WeeklyPlanner = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState(null); // { day, meal}
    const [plannedMeals, setPlannedMeals] = useState({}); // Key: 'Mon-Breakfast', value: meal object
    const [showGroceryList, setShowGroceryList] = useState(false);

    //Eventually store meals here!
    const handleMealSelect = (meal) => {
        const key = `${selectedCell.day}-${selectedCell.meal}`;

        // Update the planned meal
        setPlannedMeals((prev) => ({
          ...prev,
          [key]: meal,
        }));

        setModalOpen(false);
    }

    return (
    <div className="weekly-planner">
      <h2>Weekly Meal Planner</h2>
      <table className="planner-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal}>
              <td><strong>{meal}</strong></td>
              {days.map((day) => {
                const key = `${day}-${meal}`;
                const plannedMeal = plannedMeals[key];

                return (
                  <td key={key}>
                    {plannedMeal ? (
                      <div>
                        <strong>{plannedMeal.name}</strong>
                        <br />
                        <small>{plannedMeal.servings} servings</small>
                        <br />
                        <button
                          className="add-meal-btn"
                          onClick={() => {
                            setSelectedCell({ day, meal });
                            setModalOpen(true);
                          }}
                        >
                          Change
                        </button>{' '}
                        <button
                          className="remove-meal-btn"
                          onClick={() => {
                            const key = `${day}-${meal}`;
                            setPlannedMeals((prev) => {
                              const newPlan = { ...prev };
                              delete newPlan[key];
                              return newPlan;
                            });
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <button
                        className="add-meal-btn"
                        onClick={() => {
                          setSelectedCell({ day, meal });
                          setModalOpen(true);
                        }}
                      >
                        + Add Meal
                      </button>
                    )}

                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="add-meal-btn"
        style={{ marginTop: '1rem' }}
        onClick={() => setShowGroceryList((prev) => !prev)}
      >
        {showGroceryList ? 'Hide Grocery List' : 'View Grocery List'}
      </button>
      {showGroceryList && <GroceryList plannedMeals={plannedMeals} />}

      {/* Modal with MealSearch inside */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <MealSearch onSelect={handleMealSelect} />
      </Modal>
    </div>
  );
};



export default WeeklyPlanner;