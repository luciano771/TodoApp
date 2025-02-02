import { BSON, Realm } from 'realm';
 
// Definir la clase Task
export class Task extends Realm.Object<Task> {
  [x: string]: any; // constructor
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;
  user_id!: string;

  // Definir el esquema estático: V SCHEMA 1 
  // static schema: Realm.ObjectSchema = {
  //   name: 'Task', // Nombre de la colección
  //   primaryKey: '_id', // Clave primaria
  //   properties: {
  //     _id: 'objectId', // Tipo de dato para el ID
  //     description: 'string', // Tipo de dato para la descripción
  //     isComplete: { type: 'bool', default: false }, // Tipo de dato para el estado de completado
  //     createdAt: 'date', // Tipo de dato para la fecha de creación
  //     user_id: 'string', // Tipo de dato para el ID del usuario
  //   },
  // };

    // Definir el esquema estático: V SCHEMA 2  
  // static schema: Realm.ObjectSchema = {
  //   name: 'Task', // Nombre de la colección
  //   primaryKey: '_id', // Clave primaria
  //   properties: {
  //     _id: { type: 'objectId', default: () => new BSON.ObjectId() }, // Se asegura un valor por defecto
  //     description: 'string', // Tipo de dato para la descripción
  //     isComplete: { type: 'bool', default: false }, // Tipo de dato para el estado de completado
  //     createdAt: 'date', // Tipo de dato para la fecha de creación
  //     user_id: 'string', // Tipo de dato para el ID del usuario
  //   },
  // };

  // Definir el esquema estático: V SCHEMA 3
  // static schema: Realm.ObjectSchema = {
  //   name: 'Task', // Nombre de la colección
  //   primaryKey: '_id', // Clave primaria
  //   properties: {
  //     _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() }, // Se asegura un valor por defecto
  //     description: 'string', // Tipo de dato para la descripción
  //     isComplete: { type: 'bool', default: false }, // Tipo de dato para el estado de completado
  //     createdAt: 'date', // Tipo de dato para la fecha de creación
  //     user_id: 'string', // Tipo de dato para el ID del usuario
  //   },
  // };

    // Definir el esquema estático: V SCHEMA 3
    static schema: Realm.ObjectSchema = {
      name: 'Task', // Nombre de la colección
      primaryKey: '_id', // Clave primaria
      properties: {
        _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() }, // Se asegura un valor por defecto
        description: 'string', // Tipo de dato para la descripción
        isComplete: { type: 'bool', default: false }, // Tipo de dato para el estado de completado
        createdAt: { type: 'date', default: () => new Date() }, // Valor predeterminado
        user_id: 'string', // Tipo de dato para el ID del usuario
      },
    };
  



}