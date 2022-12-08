import Cadastro from './pages/FormCadastro'
import Login from './pages/FormLogin'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './Css/Styles.css'
<<<<<<< HEAD
import TelaInicial from './pages/TelaInicial'
=======

>>>>>>> 2278e36ea072c844a9f29c823534c0ee18e50e02
export function App() {

  return (
    <div>
      {/*Rotas*/}
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cadastro' element={<Cadastro/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Inicio' element={<TelaInicial/>}/>
          
        </Routes>
      </Router>
=======
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cadastro' element={<Cadastro />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </Router>
>>>>>>> 2278e36ea072c844a9f29c823534c0ee18e50e02
    </div>
  )
}

export default App