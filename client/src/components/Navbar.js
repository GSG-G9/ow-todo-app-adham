import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

function Navbar() {
 const handleSearch = (e) => {
   console.log(e.target.value);
 }
  return (
    <nav>
      <h1>Todo App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <input type="search" placeholder="Search for todo" onKeyPress={handleSearch}/>
    </nav>
  )
}

export default Navbar
