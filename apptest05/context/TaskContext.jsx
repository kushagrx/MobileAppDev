import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description, context, dueDate, type) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      context,
      dueDate,
      type,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);