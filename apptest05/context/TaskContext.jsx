// CONTEXT FOR TASK MANAGEMENT (ADD, TOGGLE COMPLETE)

import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();    // Global bucket for tasks

export const TaskProvider = ({ children }) => {   //This is wrapping the app with this provider in _layout.jsx
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description, context, dueDate, type) => {
    const newTask = {
      id: Date.now().toString(),  // Unique ID based on timestamp
      title,
      description,
      context,
      dueDate,
      type,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);   // Creates a new array and add new task to existing tasks
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

export const useTasks = () => useContext(TaskContext);    // Custom hook to use the TaskContext throughtout the app