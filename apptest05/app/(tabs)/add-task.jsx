import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useTasks } from '../context/TaskContext';

export default function AddTaskScreen() {
  const { addTask } = useTasks();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [context, setContext] = useState('');
  const [type, setType] = useState('inbox');

  const handleCreate = () => {
    if (!title) return; // skip if no title
    addTask(title, desc, context, '', type);
    router.push('/tabs/index');
  };

  const renderButton = (value, selected, setSelected) => (
    <TouchableOpacity
      onPress={() => setSelected(value)}
      style={[
        styles.chip,
        selected === value && styles.selected,
      ]}
    >
      <Text style={[
        styles.chipText,
        selected === value && styles.selectedText,
      ]}>
        {value}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Add Task</Text>

      <TextInput
        placeholder="Title"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        placeholderTextColor="#aaa"
        value={desc}
        onChangeText={setDesc}
        style={[styles.input, { height: 60 }]}
        multiline
      />

      <Text style={styles.label}>Context</Text>
      <View style={styles.row}>
        {['@home', '@computer', '@errands'].map(c =>
          renderButton(c, context, setContext)
        )}
      </View>

      <Text style={styles.label}>Type</Text>
      <View style={styles.row}>
        {['inbox', 'next', 'project'].map(t =>
          renderButton(t, type, setType)
        )}
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleCreate}>
        <Text style={styles.submitText}>Create Task</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a0ca3',
    padding: 20,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  chipText: {
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
  submitBtn: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#3a0ca3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
