import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //state for CategoryFilter
  const [selectedCategory, setSelectedCategory] = useState('');
  // state for NewTaskForm&&TaskList
  const [tasks, setTasks] = useState(TASKS)

  function handleCategoryChange(e){
    setSelectedCategory(e.target.innerText)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const newText = e.target[0].value
    const newCategory = e.target[1].value
    setTasks([
      ...tasks,
      {text:newText,
      category:newCategory}
    ])
    e.target.reset()
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={handleFormSubmit}/>
      <TaskList TASKS={tasks} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
