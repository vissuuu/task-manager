// components/TaskList.js
"use client";
import { updateTask, deleteTask } from "../actions/taskActions";
import { format } from "date-fns";
export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} className="border p-4 mb-2">
          <h2 className="font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <p>Due: {format(new Date(task.dueDate), "MM/dd/yyyy")}</p>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => updateTask(task._id, !task.isCompleted)}
          />
          <button
            onClick={() => deleteTask(task._id)}
            className="bg-red-500 text-white p-1 ml-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}