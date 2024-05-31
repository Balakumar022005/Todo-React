import React from 'react'

function Todoitems({id,completed,title,check,del}) {
  return (
    <li >
    <label>
      <input type='checkbox' checked={completed} onChange={()=>{check(id,completed)}}/>{title}
      <button className='btn btn-danger' onClick={()=>{del(id)}}>Delete</button>
    </label>
  </li>
  )
}


export default Todoitems

