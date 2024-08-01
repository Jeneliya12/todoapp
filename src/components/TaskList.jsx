import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <ul className="list-disc pl-5">
        {tasks.length === 0 ? (
          <li className="text-gray-500">No tasks available</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="mb-2">
              {task}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;
