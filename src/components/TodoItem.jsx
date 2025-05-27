import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee, faPenToSquare, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem({ setTodos, todos, todo }) {
    const [editEnabled, setEditEnabled] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState(todo?.task);

    function checkTodoItem(e, id) {
        const updatedTodos = todos.map((todoItem) => {
            if (todoItem.id === id) {
                console.log(!todoItem.isCompleted);
                todoItem.isCompleted = !todoItem.isCompleted;
                return todoItem;
            }

            return todoItem;
        });

        setTodos(updatedTodos);
    }

    function deleteTodo(e, id) {
        setTodos(prevTodos => {
            return prevTodos?.filter(todoItem => todoItem?.id !== id);
        });
    }

    function editTodo(e, id) {
        setEditEnabled(true);
    }

    function saveTodo(e, id) {
        setTodos(prevTodos => prevTodos.map(todoItem => {
            if (todoItem.id === id) {
                todoItem.task = todoInputValue;
                return todoItem;
            }
            return todoItem;
        }));
        setEditEnabled(false);
    }

    return (
        <article className={`flex w-full rounded-sm ${todo?.isCompleted ? "opacity-50" : "opacity-100"}`}>
            <input
                readOnly={editEnabled ? false : true}
                value={todoInputValue}
                onChange={(e) => setTodoInputValue(e.target.value)}
                className={`w-full outline-none py-1 ps-2 pe-3 bg-slate-300 rounded-sm ${todo?.isCompleted ? "bg-green-400" : ""}`}
            />
            {
                !editEnabled ?
                    <button
                        onClick={(e) => editTodo(e, todo?.id)}
                        className="text-lg bg-sky-600 text-white p-2 border-2 border-white"
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    :
                    <button
                        onClick={(e) => saveTodo(e, todo?.id)}
                        className="text-lg bg-sky-600 text-white p-2 border-2 border-white"
                    >
                        <FontAwesomeIcon icon={faSave} />
                    </button>
            }
            <button
                onClick={(e) => deleteTodo(e, todo?.id)}
                className="text-lg text-white bg-sky-600 p-2 border-e-2 border-y-2 border-white"
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
                onClick={(e) => checkTodoItem(e, todo?.id)}
                className="text-lg text-white bg-sky-600 p-2 border-y-2 border-e-2 border-white"
            >
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </article>
    );
}

export default TodoItem;