import React from 'react'
import {BsCheckAll} from 'react-icons/bs'
import {MdNotificationImportant} from 'react-icons/md'
import {BiEraser} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'

import "./todo.css"

const Todo = ({todoObject,setTodos,todos,status}) => {
const  {isTime,todoName,isActive,id,isImportant,isDeleted,isChange} = todoObject;
  const deleteTodo =()=>{
    setTodos(todos.map((item)=>{
      return item.id === id ? {...item, isDeleted: !isDeleted }: item
    }))
  }
  const delete2Todo =()=>{
    setTodos(todos.filter((item)=>{
      return item.id !== id 
    }))
  }
  const ReStoreTodo =()=>{
    setTodos(todos.map((item)=>{
      return item.id === id ? {...item, isDeleted: !isDeleted }: item
    }))

  }
  const doneTodo =()=>{
    setTodos(todos.map((item)=>{
      return  item.id === id ? {...item, isActive: !item.isActive}: item
    }))
  }
  const importantTodo =()=>{
    setTodos(todos.map((item)=>{
      return  item.id === id ? {...item, isImportant: !item.isImportant}: item
    }))
  }
  const changeTodo = ()=>{
    setTodos(todos.map((item)=>{
      return  item.id === id ? {...item, isChange: !item.isChange}: item
    }))
  }
 
  const textAreaHandler = (e) => {
    return todoObject.todoName = e.target.value 
  }

  return (
    <li  className='todoList__task'>
       {isChange 
        ?
        <textarea  defaultValue={todoName} className='todoList__input' onChange={textAreaHandler} />
        : 
        <p  className={
          `todoList__name 
          ${isActive ? "active" : "done"} 
          ${isImportant? 'important':''}
          `}
          > {todoName} </p>

       }
       {status === "recent" ? 
       <div className='todoList__btns'>
         <button className='todoList__btn btn btn-outline-danger' type='button' onClick={delete2Todo}>
         <i><BiEraser /></i> 
         </button>
        <button type='button' onClick={ReStoreTodo}>ReStore</button>
       </div>
       
       :
       <div className='todoList__btns'>
       <button className= {`btn btn-outline-secondary ${!isChange ?'':'active'}`}  type='button' onClick={changeTodo}>
       <i><FiEdit /></i> 
       </button>
       <button className= {`btn btn-outline-success ${isActive ?'':'active'}`}  type='button' onClick={doneTodo}>
          <i><BsCheckAll /></i> 
       </button>
       <button className={`btn btn-outline-warning ${isImportant ? 'active': ''}`} type='button' onClick={importantTodo}>
          <i><MdNotificationImportant /></i> 
       </button>
       <button className='todoList__btn btn btn-outline-danger' type='button' onClick={deleteTodo}>
          <i><BiEraser /></i> 
       </button>
       
       </div>
      }

    </li>
  )
}

export default Todo