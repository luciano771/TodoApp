import { Stack } from 'expo-router';
import TaskBoard from '../components/TaskBoard';
import React from 'react';
import 'react-native-get-random-values'
 export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Project Board' }} />
      <TaskBoard />
    </>
  );
}