import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";

function TodoItem({ todo, toggleCompletion, deleteTodo }) {
    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
 <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
          />
            <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>
            <div className="todo-buttons">
                <button className="edit-btn" onClick={() => alert("Edit Todo")}>
                    <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    <MdDelete />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
