"use client";
import { useState } from "react";
import NewTask from "@/app/_components/NewTask/NewTask";
import Tasks from "@/app/_components/Tasks/Tasks";

export type tasksType = {
  taskName: string;
  deadline: Date;
  priority: string;
}[];

export default function Home() {
  const [tasks, setTasks] = useState<tasksType>([]);

  return (
    <div>
      <NewTask tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
