import Cadastro from './pages/FormCadastro'
import Login from './pages/FormLogin'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export function App() {

  return (
    <body>
      {/* Links */}
        
      {/*Rotas*/}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Cadastro' element={<Cadastro/>} />
        </Routes>
      </Router>
    </body>



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