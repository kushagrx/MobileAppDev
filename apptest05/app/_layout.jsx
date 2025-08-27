// Root layout for the app, wrapping all screens with TaskProvider and SafeAreaProvider

import { Stack } from 'expo-router';
import { TaskProvider } from '../context/TaskContext';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <StatusBar style="dark"  translucent backgroundColor="transparent" />
        <Stack            // Stack navigator to manage screen transitions
          screenOptions={{
            headerShown: false,
          }}
        />
      </TaskProvider>
    </SafeAreaProvider>
  );
}