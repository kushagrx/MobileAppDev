import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useTasks } from '../../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function InboxScreen() {
  const { tasks, toggleTaskComplete } = useTasks(); 
  const router = useRouter();

  const inboxTasks = tasks.filter((task) => task.type === 'inbox');

  return (
    <LinearGradient colors={['#1a0033', '#4b0082']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.greeting}>Hello, Kushagra</Text>
        <Text style={styles.heading}>Inbox</Text>

        {inboxTasks.length === 0 ? (
          <>
          <Text style={styles.subtext}>Hmm, It seems like your mind is clear. Your task updates will appear here!</Text>
          <View style={styles.center}>
            <Text style={styles.emptyText}>Inbox is empty!</Text>
            <Text style={styles.helperText}>Add a task to get started</Text>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/add-task')}>
              <MaterialIcons name="add" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
          </>
        ) : (
          <FlatList
            data={inboxTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskCard task={item} onToggleComplete={toggleTaskComplete} />
            )}
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
    marginLeft:12,
  },
  greeting: {
    fontFamily: 'Satoshi-Bold',
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 38,
    marginTop:25,
  },
  heading: {
    fontSize: 40,
    fontFamily: 'Satoshi-Bold',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  subtext: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 40,
    fontFamily: 'Satoshi-Bold',
    maxWidth:370
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
    padding: 13,
    borderRadius: 60,
  },
});