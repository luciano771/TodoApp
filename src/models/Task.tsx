import { BSON, Realm, ObjectSchema } from 'realm';  

export class Task extends Realm.Object<Task> {
  
  _id!: BSON.ObjectId;
  description!: string;  
    
  static schema: ObjectSchema = {
        name: 'Task',
        properties: {
            _id: 'ObjectId',
            description: {type: 'string', indexed: 'full-text'},
        },
        primaryKey: '_id',
    };
}