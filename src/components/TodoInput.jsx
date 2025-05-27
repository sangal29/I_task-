import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function TodoInput({ setTodos }) {
    const [todoInput, setTodoInput] = useState("");

    function addTodo(e) {
        e.preventDefault(); // prevent page reload if used in a form

        const trimmedInput = todoInput.trim();
        if (!trimmedInput) return;

        const todo = {
            id: (Math.random() * 100000000000000).toFixed(),
            task: trimmedInput,
            isCompleted: false
        };

        setTodos((state) => [...state, todo]);
        setTodoInput("");
    }

    return (
        <section className="flex w-full min-[600px]:w-[600px] gap-x-3 mt-3">
            <input
                type="text"
                placeholder="Enter your Todo"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                className="w-full py-2 px-4 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
                onClick={addTodo}
                className="bg-white p-2 rounded-full border border-slate-300 hover:bg-sky-100 transition"
                aria-label="Add Todo"
            >
                <FontAwesomeIcon icon={faPlusCircle} className="text-3xl text-sky-700" />
            </button>
        </section>
    );
}

export default TodoInput;
