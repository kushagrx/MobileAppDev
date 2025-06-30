import React, { useState } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { useTasks } from '../../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NextActionsScreen() {
  const { tasks, toggleTaskComplete } = useTasks();
  const [selectedContext, setSelectedContext] = useState(null);

  const nextActions = tasks.filter(
    (task) =>
      task.type?.toLowerCase() === 'next' &&
      (!selectedContext || task.context === selectedContext)
  );

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LinearGradient colors={['#1a0033', '#4b0082']} style={styles.container}>
        <SafeAreaView edges={['top']} style={styles.safeArea}>
          <Text style={styles.heading}>Next Actions</Text>

          <View style={styles.contextRow}>
            {['@home', '@college', '@errands', '@work'].map((context) => (
              <TouchableOpacity
                key={context}
                onPress={() =>
                  setSelectedContext(
                    selectedContext === context ? null : context
                  )
                }
                style={[
                  styles.contextBtn,
                  selectedContext === context && styles.selected
                ]}
              >
                <Text
                  style={[
                    styles.contextText,
                    selectedContext === context && styles.selectedText
                  ]}
                >
                  {context}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {nextActions.length === 0 ? (
            <Text style={styles.empty}>No Next Actions yet.</Text>
          ) : (
            <FlatList
              data={nextActions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TaskCard task={item} onToggleComplete={toggleTaskComplete} />
              )}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          )}
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Satoshi-Bold'
  },
  contextRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20
  },
  contextBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10
  },
  contextText: {
    color: '#fff',
    fontSize: 14
  },
  selected: {
    backgroundColor: '#fff'
  },
  selectedText: {
    color: '#3a0ca3',
    fontWeight: 'bold'
  },
  empty: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Satoshi-Bold'
  }
});
