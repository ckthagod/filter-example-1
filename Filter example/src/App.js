import React from 'react'
import { Users } from './users';
import "./app.css";
import { useState } from "react";
const App = () => {
  const [query, setQuery] = useState("");
  console.log( Users.filter((user) => (user.first_name.toLowerCase().includes(query))));
  return (
    <div className='app'>
      <input
        type="text"
        placeholder='Search'
        className='search'
        onChange={(e) => setQuery(e.target.value)} />
      <ul className='list'>
        {
          Users.filter((user) => (user.first_name.toLowerCase().includes(query)))
            .map((user, index) => (
              <li className='listItem'> {user.first_name} </li>
            ))
        }
      </ul>
    </div>
  )
}

export default App