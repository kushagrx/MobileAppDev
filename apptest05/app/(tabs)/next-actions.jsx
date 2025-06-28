import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function NextActionsScreen() {
  const { tasks, toggleTaskCompletion } = useTasks();

  const nextTasks = tasks.filter(task => task.type === 'next');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Next Actions</Text>
      {nextTasks.length === 0 ? (
        <Text style={styles.empty}>No next actions available.</Text>
      ) : (
        <FlatList
          data={nextTasks}
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