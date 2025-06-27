import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [context, setContext] = useState('');

  const handleCreate = () => {
    if (title === '') {
      Alert.alert('Please enter a title');
      return;
    }

    const task = {
      title,
      description,
      context,
      status: 'inbox',
    };

    console.log('Task created:', task);
    Alert.alert('Task added!');

    setTitle('');
    setDescription('');
    setContext('');
  };

  return (
  <View style={styles.container}>
    <Text style={styles.heading}>Add a Task</Text>

    <TextInput
      placeholder="Title"
      style={styles.input}
      value={title}
      onChangeText={setTitle}
      placeholderTextColor="#999"
    />

    <TextInput
      placeholder="Description"
      style={[styles.input, { height: 60 }]}
      value={description}
      onChangeText={setDescription}
      placeholderTextColor="#999"
      multiline
    />

    <Text style={styles.label}>Context</Text>
    <View style={styles.contextRow}>
      <TouchableOpacity
        onPress={() => setContext('@home')}
        style={[styles.contextBtn, context === '@home' && styles.selected]}
      >
        <Text style={[styles.contextText, context === '@home' && styles.selectedText]}>
          @home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setContext('@computer')}
        style={[styles.contextBtn, context === '@computer' && styles.selected]}>
        <Text style={[styles.contextText, context === '@computer' && styles.selectedText]}>
          @computer
        </Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.submitBtn} onPress={handleCreate}>
      <Text style={styles.submitText}>Create Task</Text>
    </TouchableOpacity>

  </View>
);
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3a0ca3', padding: 20 },
  heading: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 20 },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: { color: '#fff', fontSize: 16, marginBottom: 8 },
  contextRow: { flexDirection: 'row', marginBottom: 20 },
  contextBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  selected: { backgroundColor: '#fff' },
  selectedText: {
  color: '#3a0ca3',
},
  contextText: { color: '#fff' },
  submitBtn: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#3a0ca3',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
