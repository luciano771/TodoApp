import { BSON, Realm } from 'realm';

export class Task extends Realm.Object<Task> {
    _id!: BSON.ObjectId; // Usa BSON.ObjectId
    description!: string;

    static schema: Realm.ObjectSchema = {
        name: 'Task',
        properties: {
            _id: 'objectId', // Usa 'objectId' (en minúsculas)
            description: { type: 'string', indexed: 'full-text' },
        },
        primaryKey: '_id', // Define _id como clave primaria
    };
}