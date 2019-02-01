import React from 'react';

const Todos = ({ allTodo, deleteTodo }) => {

    const todoList = allTodo.length ?
        (allTodo.map((todo) => {
            return (
            <div className="collection-item"
                key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id) }}>
                    {todo.content}
                </span>
            </div>
            )
        })) :
        (<p className="center">
            Sorry you do not have any more todos left!
        </p>);

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;