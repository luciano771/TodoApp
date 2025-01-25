import { Stack } from 'expo-router';
import TaskBoard from '../components/TaskBoard';
import React from 'react';
export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Project Board' }} />
      <TaskBoard />
    </>
  );
}