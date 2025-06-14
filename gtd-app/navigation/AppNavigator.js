// navigation/AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import screens
import InboxScreen from '../screens/InboxScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContextsScreen from '../screens/ContextsScreen';
import NextActionsScreen from '../screens/NextActionsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inbox">
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Contexts" component={ContextsScreen} />
        <Stack.Screen name="Next Actions" component={NextActionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
