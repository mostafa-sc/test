import React from 'react'
import "./header.css";
const Header = ({todos}) => {
  const more = todos.filter((item) =>{
    return item.isActive
  }).length

  const done = todos.filter((item) =>{
    return !item.isActive
  }).length
  

  return (
    <header className='header'>
        <h1 className='header__title'>Todo List</h1>
        {todos.length === 0 
          ?
          <p className='header__count'>lol</p>
          :
          <p className='header__count'>{more} more to do, {done} done</p>
        }
    </header>
  )
}

export default Header