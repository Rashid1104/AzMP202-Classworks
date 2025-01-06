import { configureStore } from "@reduxjs/toolkit";

import counter from "../features/Counter"
import todo from "../features/Todos";


export const magazin = configureStore({
    reducer: {
        counter: counter,
        todo: todo,
    }
})