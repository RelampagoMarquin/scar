import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'



export function Navbar(){

    return(
        <nav>
            <ul id='navList'>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/Cadastro'>Cadastre-se</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar