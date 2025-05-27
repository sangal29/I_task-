import TodoItem from "../components/TodoItem";
function TodoList({ setTodos, todos }) {
    return (
        <section className="h-full flex flex-col items-center gap-y-3 mt-5 w-full min-[600px]:w-[600px]">
            {!todos.length ?
                <h1 className="text-5xl font-bold text-slate-500">No Todos</h1>
                :
                todos?.map(todo => {
                    return <TodoItem key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
                })
            }
        </section>
    )
}

export default TodoList;