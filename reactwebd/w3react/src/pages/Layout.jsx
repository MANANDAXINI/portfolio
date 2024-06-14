import React from 'react'
import {Outlet,Link} from "react-router-dom"

function Layout() {
  return (
    <div>
        <nav>
      <ul>
        <li>
    <Link to="/">Home</Link>
        </li>
        <Link to="Blogs">Blog</Link>
        <li>
<Link to="/Contact">Contact</Link>
        </li>
        
        
      </ul>
      </nav>
    </div>
  )
}

export default Layout
