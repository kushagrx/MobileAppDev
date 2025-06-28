import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function ProjectsScreen() {
  const { tasks, toggleTaskCompletion } = useTasks();

  const projectTasks = tasks.filter(task => task.type === 'project');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Projects</Text>
      {projectTasks.length === 0 ? (
        <Text style={styles.empty}>No project tasks available.</Text>
      ) : (
        <FlatList
          data={projectTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard task={item} onToggleComplete={toggleTaskCompletion} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  empty: { fontSize: 16, color: '#777' },
});
