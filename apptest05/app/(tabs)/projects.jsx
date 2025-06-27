// app/tabs/projects.jsx
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Projects</Text>
      <Text style={styles.subtext}>Organize related tasks into projects.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3a0ca3',
  },
  subtext: {
    fontSize: 16,
    color: '#666',
  },
});
