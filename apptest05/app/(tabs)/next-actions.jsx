import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTasks } from '../../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function NextActionsScreen() {
  const { tasks, toggleTaskComplete } = useTasks();
  const nextTasks = tasks.filter((task) => task.type === 'next');

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LinearGradient colors={['#1a0033', '#4b0082']} style={styles.gradient}>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <Text style={styles.heading}>Next Actions</Text>
          {nextTasks.length === 0 ? (
            <Text style={styles.empty}>No Next Actions yet.</Text>
          ) : (
            <FlatList
              data={nextTasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TaskCard task={item} onToggleComplete={toggleTaskComplete} />
              )}
              contentContainerStyle={{ paddingBottom: 80 }}
            />
          )}
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  heading: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Satoshi-Bold',
  },
  empty: {
    color: '#aaa',
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    marginTop: 20,
  },
});