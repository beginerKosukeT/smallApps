"use client";
import { useState } from "react";
import type { tasksType } from "@/app/page";
import styles from "./newTask.module.css";
import { defaultPriority } from "@/app/_constants";

const NewTask = (props: {
  tasks: tasksType;
  setTasks: React.Dispatch<React.SetStateAction<tasksType>>;
}) => {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [priority, setPriority] = useState(defaultPriority);

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const latestTasks = [
      ...props.tasks,
      {
        taskName: taskName,
        deadline: deadline,
        priority: priority,
      },
    ];
    props.setTasks(latestTasks);
  };

  return (
    <div className="taskBorder">
      <form onSubmit={addTask}>
        <div>タスク</div>
        <input
          type="text"
          value={taskName}
          name="task"
          required
          onChange={(e) => setTaskName(e.target.value)}
          className={styles.input}
        />
        <div>期限</div>
        <input
          type="date"
          name="deadline"
          required
          onChange={(e) => setDeadline(new Date(e.target.value))}
          className={styles.input}
        />
        <div>優先度</div>
        <select
          name="priority"
          required
          onChange={(e) => setPriority(e.target.value)}
          className={styles.input}
          defaultValue={defaultPriority}
        >
          <option>Low</option>
          <option>Middle</option>
          <option>High</option>
        </select>
        <br />
        <button>追加</button>
      </form>
    </div>
  );
};

export default NewTask;
