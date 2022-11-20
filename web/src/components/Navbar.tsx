import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom'

export function Navbar(){

    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/Cadastro'>Cadastro</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar