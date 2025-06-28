import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, desc, context, project, type = 'inbox') => {
    const newTask = {
      id: Date.now().toString(),
      title,
      desc,
      context,
      project,
      type, // inbox | next | project
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const markTaskComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, markTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);