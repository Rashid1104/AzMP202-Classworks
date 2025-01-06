import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo,editTodo } from '../../redux/features/Todos'
import "./index.css"

const Todo = () => {
  const [inputVal, setInputVal] = useState("")
  const [editInput, setEditInput] = useState("") 
  const [editId, setEditId] = useState(null)
  const todos = useSelector((state) => state.todo.items || [])  
  const dispatch = useDispatch()

  const HandleAddTodo = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      dispatch(addTodo(inputVal.trim()));  
      setInputVal(""); 
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));  
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id)); 
  }

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditInput(text);
  }

  const handleSaveEdit = () => {
    if (editInput.trim()) {
      dispatch(editTodo({ id: editId, newText: editInput }));
      setEditInput("");
      setEditId(null);
    }
  }
  return (
    <>
      <div>
        <input 
          type="text" 
          onChange={(e) => setInputVal(e.target.value)} 
          value={inputVal} 
        />
        <button onClick={HandleAddTodo}>Add</button>
      </div>

      {editId && (
        <div>
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      )}
      <ul className='ul'>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span 
              onClick={() => handleToggle(todo.id)} 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo

