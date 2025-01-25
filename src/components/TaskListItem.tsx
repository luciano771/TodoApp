import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router'; 

type Task =
{
    _id: number,
    description:string
}

export default function TaskListItems({ task }: { task: Task })
{
  return (
       <Link href={`/${task._id}`} asChild>
        <Pressable
          style={styles.container}
         >
          <Text style={styles.text}>
            {task.description}
          </Text>

          <AntDesign   name="close" size={16} color="gray" />
        </Pressable>
      </Link> 
  );
}

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#1D2125',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    margin:5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});