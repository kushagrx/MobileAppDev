import { Stack } from 'expo-router';
import { TaskProvider } from './context/TaskContext';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
    'Satoshi-Bold': require('../assets/fonts/Satoshi-Bold.ttf'),
  });
  return(
    <TaskProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
    </TaskProvider>
  );
}