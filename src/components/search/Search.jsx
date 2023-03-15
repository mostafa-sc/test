import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import "./search.css"
const Search = ({status,setStatus,setSearch}) => {
    const statusHandler = (e) =>{
      setStatus(e.target.value)
    };
    const searchHandler = (e) => {
      setSearch(e.target.value)

    }

  return (
    <div className='search'>
        <input type="text" onChange={searchHandler} placeholder='search todo' className='search__input' />
        <div className='search__btns'>
            <button className='search__btn btn btn-success' value='all' type='button' onClick={statusHandler}>All</button>
            <button className='search__btn btn btn-info' value='active' type='button' onClick={statusHandler}>Active</button>
            <button className='search__btn btn btn-primary' value='done' type='button' onClick={statusHandler}>Done</button>
            <button className={`btn btn-outline-primary ${status === "recent" ? "active":""}`}value='recent' type='button'  onClick={statusHandler}>recent</button>

        </div>
    </div>
  )
}

export default Search