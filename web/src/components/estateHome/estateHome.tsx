import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'
import { useAuth } from '../../hooks'


export function NewOpt() {
    const { logout } = useAuth();
    function handleLogout(){
        logout() 
    }

    return (
        <nav>
            <ul id='navList'>
                <li><Link to='/Feed'>Feed</Link></li>
                <li id='logout'><Link to='/Login' onClick={handleLogout}>Sair</Link>
                </li>              
            </ul>
        </nav>
    )
}

export default NewOpt;