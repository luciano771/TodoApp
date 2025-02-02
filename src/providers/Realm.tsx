import { RealmProvider } from "@realm/react";
import React, { PropsWithChildren } from "react";
import { Task } from "../models/Task";
import Realm from "realm"; 

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <RealmProvider
      schema={[Task]} // Añade tus esquemas aquí
      schemaVersion={3} // Usa la misma o una versión superior 
    >
      {children}
    </RealmProvider>
  );
}