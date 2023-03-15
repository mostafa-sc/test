import React, { useState,useEffect } from 'react'
import AddTodo from '../addTodo'
import Header from '../header'
import Search from '../search'
import TodoList from '../todoList'
import "bootswatch/dist/sketchy/bootstrap.min.css"

import "./app.css"




const app = () => {
  const [todos,setTodos] = useState([]);
  const [inputText,setInputText] = useState('');
  const [status,setStatus] = useState("all");
  const [search,setSearch] = useState("");


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, []);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

  return (
    <div className='app'>
       <div className='app-container'>
            <Header todos={todos} />
            <Search  status={status} setStatus={setStatus} setSearch={setSearch}/>
            {
              status === "all" && todos.filter((item)=>{
                return !item.isDeleted
              }).length === 0
              ?<p>No Product</p>
              
              : status === "active"  && todos.filter((item)=>{
                return item.isActive && !item.isDeleted
              }).length === 0 
              ?<p>No Product active</p>
              :status === "done" &&todos.filter((item)=>{
                return !item.isActive && !item.isDeleted
              }).length === 0
              ?
              <p>No Product done</p>
              :status === "recent" && todos.filter((item)=>{
                return item.isDeleted
              }).length === 0
              ?
              <p>No Product recent</p>
              :
              <TodoList search={search} status={status} setTodos={setTodos} todos={todos} />

            }
            <AddTodo status={status} setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
       </div>
    </div>
  )
}

export default app