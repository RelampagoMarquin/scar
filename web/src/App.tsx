import Cadastro from './pages/FormCadastro'
import Login from './pages/FormLogin'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
export function App() {

  return (
    <div>
      {/* Links */}
        
      {/*Rotas*/}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Cadastro' element={<Cadastro/>} />
        </Routes>
      </Router>
    </div>



    /* <Router>
      <Route>
        <Link to='/Home'>Home</Link>
        <Link to='/FormLogin'>Login</Link>
        <Link to='/FormCadastro'>Cadastro</Link>
      </Route>

      <Routes>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/FormCadastro'>
          <Cadastro />
        </Route>
        <Route path='/FormLogin'>
          <Login />
        </Route>
      </Routes>
    </Router> */
  )
}

export default App