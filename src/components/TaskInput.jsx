import React from "react";

function TaskInput({ onAddTask }) {
  let taskInput = "";

  const handleInputChange = (e) => {
    taskInput = e.target.value;
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      taskInput = ""; // Clear the input
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
