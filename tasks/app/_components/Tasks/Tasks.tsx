import type { tasksType } from "@/app/page";
import styles from "./task.module.css";

const Tasks = (props: {
  tasks: tasksType;
  setTasks: React.Dispatch<React.SetStateAction<tasksType>>;
}) => {
  const deleteTask = (n: number) => {
    const latestTasks = [...props.tasks];
    latestTasks.splice(n, 1);
    props.setTasks(latestTasks);
  };

  return (
    <div>
      {props.tasks.map((item, n) => {
        return (
          <div key={`task-${n}`} className="taskBorder">
            <div className={styles.doneButton}>
              <button onClick={() => deleteTask(n)}>Done</button>
            </div>
            <div>{item.taskName}</div>
            <div>{item.deadline.toLocaleDateString()}</div>
            <div>{item.priority}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
