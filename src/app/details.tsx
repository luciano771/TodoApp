import { Link, Slot, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
 
export default function details() {
  return ( 
     <View>
        <Stack.Screen options={{title: 'Task Details'}}></Stack.Screen>
     <Text>
        Details
     </Text>
     </View>
  
  );
}