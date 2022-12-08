import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom'
import '../../Css/Styles.css'


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