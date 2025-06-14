import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const availableContexts = ['@home', '@laptop', '@errands'];
const availableProjects = ['College', 'Portfolio', 'Fitness'];

export default function InboxScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [inboxTasks, setInboxTasks] = useState([]);
  const [selectedContext, setSelectedContext] = useState(availableContexts[0]);
  const [selectedProject, setSelectedProject] = useState(availableProjects[0]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    const newTask = {
      id: Date.now().toString(),
      title: task,
      context: selectedContext,
      project: selectedProject,
      completed: false,
    };
    setInboxTasks([...inboxTasks, newTask]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📥 Inbox</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        placeholderTextColor="#aaa"
        value={task}
        onChangeText={setTask}
      />

      <View style={styles.pickerRow}>
        <Text style={styles.label}>Context:</Text>
        {availableContexts.map((ctx) => (
          <TouchableOpacity
            key={ctx}
            style={[
              styles.option,
              selectedContext === ctx && styles.selected,
            ]}
            onPress={() => setSelectedContext(ctx)}
          >
            <Text style={styles.optionText}>{ctx}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.pickerRow}>
        <Text style={styles.label}>Project:</Text>
        {availableProjects.map((proj) => (
          <TouchableOpacity
            key={proj}
            style={[
              styles.option,
              selectedProject === proj && styles.selected,
            ]}
            onPress={() => setSelectedProject(proj)}
          >
            <Text style={styles.optionText}>{proj}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Add Task" onPress={handleAddTask} />

      <FlatList
        data={inboxTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>• {item.title}</Text>
            <Text style={styles.meta}>
              {item.context} | {item.project}
            </Text>
          </View>
        )}
        style={{ marginTop: 20 }}
      />

      <View style={styles.navButtons}>
        <Button title="Go to Projects" onPress={() => navigation.navigate('Projects')} />
        <Button title="Go to Contexts" onPress={() => navigation.navigate('Contexts')} />
        <Button title="Go to Next Actions" onPress={() => navigation.navigate('Next Actions')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  pickerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    alignItems: 'center',
    gap: 6,
  },
  label: {
    color: '#fff',
    marginRight: 8,
  },
  option: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  selected: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    color: '#fff',
  },
  taskItem: {
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  taskText: {
    color: '#eee',
    fontSize: 16,
  },
  meta: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  navButtons: {
    marginTop: 30,
    gap: 10,
  },
});
