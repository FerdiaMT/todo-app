
//component is a function which returns jsx

import { useState , useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

//jsx is just html that can have js written inside it
// react fragment is <> </> , it is empty, and is used for returning something without wanting a div to disorganise it
function App() {
  
  // const todos = [
  //   {input: 'A' , complete: true},
  //   {input: 'B' , complete: false},
  //   {input: 'C' , complete: true},
  //   {input: 'D' , complete: false},
  // ]


  // first variable, normal, second is setterFunction
  const [todos, setTodos] = useState([
    {input: 'A' , complete: true},
    {input: 'B' , complete: false},
    {input: 'C' , complete: true},
    {input: 'D' , complete: false},
  ])

  const [selectedTab , setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos ,{input:newTodo, complete:false}]// add the new todo at the end of the curent todo list
    setTodos(newTodoList) //use the setter function with the new list, does all the work for us
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index){
    let newTodoList = [...todos] // duplicate array
    let completedTodo = todos[index] //acess the one were completing
    completedTodo['complete'] = true; // change status
    newTodoList[index] = completedTodo; // update the entry in the list
    setTodos(newTodoList) // update the list with the changed entry
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return (valIndex !== index) // if its equal to index, dont include it 
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem('todo-app' , JSON.stringify({todos:currTodos}))
  }

  // arrow function and dependency array
  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')){return} // guard clause , if no localstorage or cant find todo-app, return null
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  } , [])
  
  return (
    <>
    <Header todos={todos}/>
    <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos={todos}/>
    <TodoList handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo= {handleCompleteTodo} selectedTab = {selectedTab} todos={todos}/>
    <TodoInput handleAddTodo= {handleAddTodo} />
    </>
  )
}

export default App
