import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTasks } from '../../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProjectsScreen() {
  const { tasks, toggleTaskComplete } = useTasks();
  const projectTasks = tasks.filter((task) => task.type === 'project');

  return (
    <LinearGradient colors={['#1a0033', '#4b0082']} style={styles.container}>
      <Text style={styles.heading}>Projects</Text>
      {projectTasks.length === 0 ? (
        <Text style={styles.empty}>No projects added yet.</Text>
      ) : (
        <FlatList
          data={projectTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard task={item} onToggleComplete={toggleTaskComplete} />
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Satoshi-Bold',
  },
  empty: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Satoshi-Bold',
  },
});