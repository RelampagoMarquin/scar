import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './pages/FormCadastro'
import Login from './pages/FormLogin'
import './index.css'
import './pages/Form.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
)
