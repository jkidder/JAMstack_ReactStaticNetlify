import React from 'react'
import {Link} from'components/Router'
 
function Navigation () {
	return (
	<nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
	)
	}
export default Navigation
