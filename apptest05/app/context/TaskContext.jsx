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
      type,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskComplete = (id) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

  return (
  <TaskContext.Provider value={{ tasks, addTask, toggleTaskComplete }}>
    {children}
  </TaskContext.Provider>
);


}

export const useTasks = () => useContext(TaskContext);