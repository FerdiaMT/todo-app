export function Header(props) {
    const { todos } = props;
    const todosLength = todos.length

    const isTaskPlural = (todosLength !=1); // boolean, true if bigger then 1, otherwise false 

    const taskOrTasks = isTaskPlural ? 'tasks' : 'task' // ternary operator, if true, plural
    return(
        <header>
            <h1>You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}