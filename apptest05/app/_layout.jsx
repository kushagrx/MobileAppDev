import { Stack } from 'expo-router';
import { TaskProvider } from '../context/TaskContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </TaskProvider>
    </SafeAreaProvider>
  );
}