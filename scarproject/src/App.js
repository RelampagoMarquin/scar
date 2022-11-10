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

function App() {
  return (
    <Router>

      <div>
          <Link to ="/">Home</Link>
          <Link to ="/cadastro">Cadastrar</Link>
          <Link to ="/login">Login</Link>
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
