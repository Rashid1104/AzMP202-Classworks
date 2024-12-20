import React, { useState, useCallback } from "react";
import TodoItem from "./assets/components/TodoItem";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput(""); 
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

 
  const filterTodos = (type) => {
    setFilter(type);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  };
  
  const clearAllTodos = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear all!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos([]); 
        Swal.fire({
          title: "Cleared!",
          text: "All tasks have been cleared.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3085d6",
        });
      }
    });
  }, [todos]); 

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <Container className="App">
      <h1 className="my-4 text-center">Todo App</h1>
      <Row className="mb-4">
        <Col sm={8} md={9}>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
        </Col>
        <Col sm={4} md={3}>
          <Button className="w-100" variant="primary" onClick={addTodo}>
            Add Todo
          </Button>
        </Col>
      </Row>

      <Row className="mb-2 d-flex justify-content-end">
        <Col sm="auto">
          <Button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            variant="primary"
            onClick={() => filterTodos("all")}
          >
            All Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            variant="success"
            onClick={() => filterTodos("completed")}
          >
            Completed Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            className={`filter-btn ${filter === "pending" ? "active" : ""}`}
            variant="warning"
            onClick={() => filterTodos("pending")}
          >
            Pending Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button className="filter-btn" variant="danger" onClick={clearAllTodos}>
            Clear All
          </Button>
        </Col>
      </Row>

      <div id="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>

      <Row className="mt-4">
        <Col className="text-right">
          <span>
            You have{" "}
            <span className="count">
              {filteredTodos.filter((todo) => !todo.completed).length}
            </span>{" "}
            pending todos
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default App;


