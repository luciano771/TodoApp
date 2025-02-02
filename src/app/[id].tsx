import { useObject, useRealm } from '@realm/react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TextInput } from 'react-native';  
import { Task } from '../models/Task'; 
import Realm from "realm";
import { useState } from 'react';
const TaskDetails = () => {

  const params = useLocalSearchParams(); 
 
  const id = params?.id; 
  const taskId = Array.isArray(id) ? id[0] : id?.toString(); 
  let objectId;
  try {
    objectId = new Realm.BSON.ObjectId(taskId);
  } catch (error) { 
    return <Text>Error: ID no válido</Text>;
  }
  const task = useObject(Task,objectId);
  const arrtask = task ? [task] : []; 

   

  const [updatedTask, setUpdateTask] = useState(
    task?.description
  );
  
  const realm = useRealm();

  const updateTask = ()=>{
    if(!task || !updatedTask)
    {
      return;
    } 
    realm.write(()=>{ 
      task.description = updatedTask;
    })
   }

  return (
    <View style={{ padding: 10}}>
      <Stack.Screen options={{ title: 'Task Details' }} />
      <TextInput
      style={{ color:'white'}}
      value={updatedTask} 
      onChangeText={setUpdateTask}
      onEndEditing={updateTask}  
      /> 
    </View>
  );
};

export default TaskDetails;