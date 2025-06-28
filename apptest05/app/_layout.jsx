// app/_layout.jsx
import { Stack } from 'expo-router';
import { TaskProvider } from './context/TaskContext';

export default function RootLayout() {
  return(
    <TaskProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
    </TaskProvider>
  );
}