import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

function TodoItem({ todo, toggleCompletion, deleteTodo, updateTodo }) {

    const handleEdit = () => {
        Swal.fire({
            title: "Edit Todo",
            input: "text",
            inputLabel: "Task",
            inputValue: todo.text,
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                if (result.value !== todo.text) {
                    updateTodo(todo.id)
                    Swal.fire({
                        title: "Updated!",
                        text: "Your task has been updated.",
                        icon: "success",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#3085d6",
                    });
                }
            }
        });
    };

    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>

            <Form.Check
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
            />

            <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>

            <div className="todo-buttons">

                <button className="edit-btn" onClick={handleEdit}>
                    <FaEdit />
                </button>

                <button
                    className="delete-btn"
                    onClick={() =>
                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                            if (result.isConfirmed) {

                                deleteTodo(todo.id);
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your task has been deleted.",
                                    icon: "success",
                                    confirmButtonText: "OK",
                                    confirmButtonColor: "#3085d6",
                                });
                            }
                        })
                    }
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;



