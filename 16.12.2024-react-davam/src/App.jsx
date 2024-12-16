import { useState } from 'react'
import './App.css'
import Header from './Components/Header';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("AZMP202")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible((prev) => !prev);
  }
  function HINCREMENT() {
    setCount((count) => count + 1)
  }
  function HDECREMENT() {
    if (!count == 0) {
      setCount((count) => count - 1)
    } else {
      setCount(0)
    }
  }
  function RESET() {
    setCount(0)
  }
  function ChangeName(c) {
    if (text === "AZMP202") {
      setText("Hello World")
    } else if (text === "Hello World") {
      setText("bye World")
    } else {
      setText("Hello World")
    }
  }
  return (
    <>
      <button onClick={HINCREMENT}>
        increment
      </button>
      <h2>{count}</h2>
      <button onClick={HDECREMENT}>
        dencrement
      </button>
      <hr />
      <button onClick={RESET}>
        reset
      </button>
      <hr />
      <h2>{text}</h2>
      <button onClick={ChangeName}>
        Send
      </button>
      <div>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h2>Salam Sunal Muəllim</h2>
        </Modal>
      </div>
      <div>
        <button onClick={toggleText}>
          {isTextVisible ? "Close text" : "Open text"}
        </button>
        {isTextVisible && (
          <div style={{ padding: "10px" }}>
            Salam Sunal Muəllim
          </div>
        )}
      </div>
    </>
  )
}

export default App
