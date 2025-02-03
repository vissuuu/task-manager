// components/TaskList.js
"use client";
import { useState } from "react";
import { updateTask, deleteTask } from "../actions/taskActions";
import { format } from "date-fns";
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";
export default function TaskList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id)); // Update local state
  };

  const handleToggleComplete = async (id, isCompleted) => {
    await updateTask(id, !isCompleted);
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, isCompleted: !isCompleted } : task
      )
    );
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">{task.title}</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleToggleComplete(task._id, task.isCompleted)}
                className={`p-2 rounded-full ${
                  task.isCompleted
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400"
                } transition duration-300`}
              >
                <FaCheck className="text-white" />
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition duration-300"
              >
                <FaTrash className="text-white" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{task.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Due: {format(new Date(task.dueDate), "MM/dd/yyyy")}
          </p>
        </div>
      ))}
    </div>
  );
}