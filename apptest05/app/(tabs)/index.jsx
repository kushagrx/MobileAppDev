import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function InboxScreen() {
  const { tasks } = useTasks();
  const router = useRouter();

  // Filter only 'inbox' tasks
  const inboxTasks = tasks.filter((task) => task.type === 'inbox');

  return (
    <LinearGradient colors={['#1a0033', '#4b0082']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.greeting}>Hello, Kushagra</Text>
        <Text style={styles.heading}>Inbox</Text>
        <Text style={styles.subtext}>Your mind is clear! Your task updates will appear here!</Text>

        {inboxTasks.length === 0 ? (
          <View style={styles.center}>
            <Text style={styles.emptyText}>Inbox is empty!</Text>
            <Text style={styles.helperText}>Add a task to get started</Text>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/add-task')}>
              <MaterialIcons name="add" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={inboxTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TaskCard task={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 24,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  subtext: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 40,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '600',
  },
  helperText: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 20,
  },
  iconButton: {
    backgroundColor: '#5a00cc',
    padding: 16,
    borderRadius: 50,
    elevation: 5,
  },
});
