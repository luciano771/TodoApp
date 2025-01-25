 import { RealmProvider } from "@realm/react";
import React, { PropsWithChildren } from "react";
import { Task } from "../models/Task"
export default function RealmCustomProvider({children}:PropsWithChildren)
{
return(
    <>
    <RealmProvider
    schema={[Task]}  
    >
    {children} 
    </RealmProvider>
    </>
)
}