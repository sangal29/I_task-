import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "../src/index.css";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <section className="bg-sky-950 min-h-screen px-3 flex flex-col items-center py-10">
            <Header />
            <TodoInput setTodos={setTodos} />
            <TodoList setTodos={setTodos} todos={todos} />
        </section>
    );
}

export default App