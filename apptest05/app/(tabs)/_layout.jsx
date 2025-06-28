// app/tabs/_layout.jsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3a0ca3',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="inbox" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add-task"
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={26} color={color} />
          ),
          //tabBarLabel: () => null,
        }}
      />

      <Tabs.Screen
        name="next-actions"
        options={{
          title: 'Next Actions',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="pending-actions" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}