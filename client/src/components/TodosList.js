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
      {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )
};

export default TodosList;
