import React from 'react'
import Todo from '../todo'
import "./todolist.css"
const TodoList = ({todos,setTodos,status,search}) => {
  return (
    <ul className='todoList'>
    {todos.filter((item)=>{
      switch(status){
        case 'active':{
          return item.isActive && !item.isDeleted
        }
        case 'done':{
          return !item.isActive && !item.isDeleted
        }
        case 'recent':{
          return item.isDeleted
        }
        default:
          return item && !item.isDeleted
      }
    }).filter((item)=>{
      return item.todoName.includes(search)

    }).map((item)=>{
        return <Todo status={status} todoObject={item} isActive={item.isActive} todos={todos} setTodos={setTodos} id={item.id} key={item.id} name={item.todoName} />
    })}
    </ul>
  )
}

export default TodoList