// components/TaskForm.js
"use client";
import { useState } from "react";
import { createTask } from "../actions/taskActions";
import { FaPlus } from "react-icons/fa";

export default function TaskForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSubmit = async (formData) => {
    await createTask(formData);
    setIsExpanded(false); // Collapse the form after submission
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="mb-8">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <FaPlus className="mr-2" />
          Add Task
        </button>
      ) : (
        <form
          action={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="dueDate"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
}