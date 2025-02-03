// app/models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  isCompleted: { type: Boolean, default: false },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;