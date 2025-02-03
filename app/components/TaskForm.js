// components/TaskForm.js
"use client";
import { createTask } from "../actions/taskActions";

export default function TaskForm() {
  return (
    <form action={createTask} className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        className="border p-2 mr-2"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        required
        className="border p-2 mr-2"
      />
      <input
        type="date"
        name="dueDate"
        required
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
}