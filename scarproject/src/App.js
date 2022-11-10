import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}
from "react-router-dom";
import Home from "./components/pages/Home"
import FormCadastro from "./components/pages/FormCadastro"
import FormLogin from "./components/pages/FormLogin"
import "./App.css"

function App() {
  return (
    <Router>

      <div id="menu">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/cadastro">Cadastrar</Link></li>
          <li><Link to ="/login">Login</Link></li>
        </ul>
      </div>

      <Switch>

        <Route exact path ="/">
          <Home />
        </Route>

        <Route exact path ="/login">
          <FormLogin/>
        </Route>

        <Route exact path ="/cadastro">
          <FormCadastro />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
