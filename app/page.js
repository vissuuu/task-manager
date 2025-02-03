import Image from "next/image";
import { getTasks } from "./actions/taskActions";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}
