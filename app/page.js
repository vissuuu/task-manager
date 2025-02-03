import Image from "next/image";
import { getTasks } from "./actions/taskActions";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Manager</h1>
        <TaskForm />
        <TaskList initialTasks={tasks} />
      </div>
    </div>
  );
}
