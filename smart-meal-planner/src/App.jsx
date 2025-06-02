import React, { useState } from 'react'
import WeeklyPlanner from './components/WeeklyPlanner'
import GroceryList from './components/GroceryList'
import './App.css'

function App() {
const [plannedMeals, setPlannedMeals] = useState({});
const [showGroceryList, setShowGroceryList] = useState(false);

  return (
    <div>
      <h1>Smart Meal Planner & Grocery List Generator</h1>
      <div className="app-layout">
        <WeeklyPlanner
          plannedMeals={plannedMeals}
          setPlannedMeals={setPlannedMeals}
          showGroceryList={showGroceryList}
          setShowGroceryList={setShowGroceryList}
        />
        {showGroceryList && <GroceryList plannedMeals={plannedMeals} />}
      </div>
    </div>
  )

}

export default App
