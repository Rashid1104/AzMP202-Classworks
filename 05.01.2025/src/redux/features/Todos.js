import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todo",
  initialState: {
    items: [] 
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        completed: false,  
        text: action.payload,
      };
      state.items.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    clearAllTodos: (state) => {
      state.items = []; 
    },
    editTodo: (state, action) => {
        const { id, newText } = action.payload;
        const todo = state.items.find((todo) => todo.id === id);
        if (todo) {
          todo.text = newText; 
        }
      }
  }
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearAllTodos,
  editTodo
} = todo.actions;

export default todo.reducer;

