import {
    View,
    Text,
    FlatList,
    TextInput,
    Button,
    StyleSheet,
  } from 'react-native';
  import TaskListItem from './TaskListItem';
   import { useState } from 'react';
  export default function TaskList() {
     
    const [tasks, setTasks] = useState([
        { _id: 1, description: "Remember Jira 434" },
        { _id: 2, description: "Review PR #123" },
        { _id: 3, description: "Update documentation" },
        { _id: 4, description: "Fix bug in login page" },
        { _id: 5, description: "Prepare presentation for meeting" },
    ]);

    const [newTask,setNewTask] = useState('');

    const createTask = () =>{
        setTasks([...tasks,{_id: tasks.length + 1 ,description: newTask}])
        setNewTask('')
    }

    
 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo</Text>
  
        {/* The list of tasks */}
        <FlatList 
          data={tasks}
          renderItem={({ item }) => (
            <TaskListItem task={item}  />
          )} 
        /> 
        {/* New task input */}
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="New task"
          placeholderTextColor="gray"
          style={styles.input}
        />
        <Button title="Add task" onPress={createTask} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 10,
    borderRadius: 5,
    gap: 5, 
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: 'white',
    padding: 10,
    backgroundColor: '#1D2125',
    borderRadius: 5,
    margin:5,
    marginTop:3
  },
});