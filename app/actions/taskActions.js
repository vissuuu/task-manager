// app/actions/taskActions.js
"use server";
import { revalidatePath } from "next/cache";
import connectDB from "../lib/db";
import Task from "../models/task";

// Create Task
export const createTask = async (formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const dueDate = formData.get("dueDate");

  await connectDB();
  const newTask = new Task({ title, description, dueDate });
  await newTask.save();
  revalidatePath("/");
};

// Read Tasks
export const getTasks = async () => {
  await connectDB();
  const tasks = await Task.find().sort({ dueDate: 1 });
  return JSON.parse(JSON.stringify(tasks));
};

// Update Task
export const updateTask = async (id, isCompleted) => {
  await connectDB();
  await Task.findByIdAndUpdate(id, { isCompleted });
};

// Delete Task
export const deleteTask = async (id) => {
  await connectDB();
  await Task.findByIdAndDelete(id);
  revalidatePath("/")
};