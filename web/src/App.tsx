import Cadastro from './pages/FormCadastro'
import Login from './pages/FormLogin'
import Home from './pages/Home'
import TelaInicial from './pages/feed/Feed'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './Css/Styles.css'
export function App() {

  return (
    <div>
      {/*Rotas*/}
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cadastro' element={<Cadastro />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Inicio' element={<TelaInicial />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App