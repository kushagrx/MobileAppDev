import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';

const contexts = ['All', '@home', '@computer', '@errands'];

export default function NextActionsScreen() {
  const { tasks, toggleTaskComplete } = useTasks();
  const [selectedContext, setSelectedContext] = useState('All');

  const nextTasks = tasks.filter(task =>
    task.type === 'next' &&
    (selectedContext === 'All' || task.context === selectedContext)
  );

  return (
    <LinearGradient colors={['#1a0033', '#4b0082']} style={styles.container}>
      <Text style={styles.heading}>Next Actions</Text>

      <View style={styles.contextRow}>
        {contexts.map(context => (
          <TouchableOpacity
            key={context}
            onPress={() => setSelectedContext(context)}
            style={[
              styles.contextBtn,
              selectedContext === context && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.contextText,
                selectedContext === context && styles.selectedText,
              ]}
            >
              {context}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {nextTasks.length === 0 ? (
        <Text style={styles.empty}>No tasks found for this context.</Text>
      ) : (
        <FlatList
          data={nextTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard task={item} onToggleComplete={toggleTaskComplete} />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:'Satoshi-Bold'
  },
  contextRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  contextBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  contextText: {
    color: '#fff',
    fontSize: 14,
  },
  selected: {
    backgroundColor: '#fff',
  },
  selectedText: {
    color: '#3a0ca3',
    fontWeight: 'bold',
  },
  empty: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 20,
    fontFamily:'Satoshi-Bold'
  },
});