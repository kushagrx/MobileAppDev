import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useTasks } from '../../context/TaskContext';

export default function AddTaskScreen() {
  const { addTask } = useTasks();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');   
  const [context, setContext] = useState('');   
  const [type, setType] = useState('inbox');   // Default type is 'inbox'

  const handleCreate = () => {
    if (!title.trim()) {              // Form validation for title
      Alert.alert('Missing Title', 'Please enter a task title.');
      return;
    }

    addTask(title.trim(), description.trim(), context, '', type);
    router.push('/'); // Go back to Inbox
  };

  const renderChip = (label, selected, setSelected) => (    //Resuable component for context and type selection
    <TouchableOpacity
      key={label}
      onPress={() => setSelected(label)}
      style={[styles.chip, selected === label && styles.selected]}
    >
      <Text style={[styles.chipText, selected === label && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#1a0033', '#4b0082']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          value={description}
          onChangeText={setDescription}
          style={[styles.input, { height: 80 }]}
          multiline
        />

        <Text style={styles.label}>Context:</Text>
        <View style={styles.row}>
          {['@home', '@college', '@errands', '@work'].map((item) =>
            renderChip(item, context, setContext)
          )}
        </View>

        <Text style={styles.label}>Type:</Text>
        <View style={styles.row}>
          {['inbox', 'next', 'project'].map((item) =>
            renderChip(item, type, setType)
          )}
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleCreate}>
          <Text style={styles.submitText}>Create Task</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 20,
  paddingBottom: 40,
  },
  heading: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Satoshi-Bold',
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
    fontFamily: 'Satoshi-Bold',
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
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#3a0ca3',
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
  },
});