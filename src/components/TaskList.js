import React from "react";
import Task from './Task'

function TaskList({TASKS, selectedCategory}) {

  const filteredTasks = TASKS.filter(taskObj => selectedCategory==='All' || selectedCategory==='' ? true : selectedCategory===taskObj.category)
  return (
    <div className="tasks">
      {filteredTasks.map(taskObj => <Task key={taskObj.text} text={taskObj.text} category={taskObj.category}/>)}
    </div>
  );
}

export default TaskList;
