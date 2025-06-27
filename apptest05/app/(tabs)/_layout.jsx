// app/tabs/_layout.jsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3a0ca3',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-task"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={36} color="#3a0ca3" />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
