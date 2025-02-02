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
import { useQuery, useRealm } from '@realm/react'; // Usa useRealm en lugar de crear una instancia manual
import { Task } from '../models/Task'; 

export default function TaskList() {
  const realm = useRealm(); // Obtiene la instancia de Realm correcta
  const tasks = useQuery(Task); // Obtiene las tareas correctamente
  const [newTask, setNewTask] = useState('');

  // Función para agregar tareas
  const createTask = () => {
    if (!newTask.trim()) return; // Evita agregar tareas vacías

    realm.write(() => {
      realm.create('Task', { 
        description: newTask,
        user_id: '123'
      });
    });

    setNewTask(''); // Limpia el input después de agregar la tarea
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>

      {/* Lista de tareas */}
      <FlatList 
        data={tasks}
        renderItem={({ item }) => (
          <TaskListItem task={item} />
        )} 
      /> 

      {/* Input para nueva tarea */}
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
