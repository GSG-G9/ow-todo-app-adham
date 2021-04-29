import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';


function TodosList() {
  const {todos : {todos}} = useStaticQuery(graphql`
    query MyQuery {
      todos {
        todos {
          title
          status
          id
        }
      }
    }
  
  `);
  // const {todos} = data.todos;
  console.log(todos);

  return (
    <ul>
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" id={todo.id} name={todo.title}/>
          <label htmlFor={todo.id}>{todo.title}</label>
        </div>
      ))}
    </ul>
  )
};

export default TodosList;
