import { FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Layout/logo/Logo'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'
import { useAuth } from "../hooks";

export function handleLogin() {
    const navigate = useNavigate();
    const { authenticate } = useAuth();

    const Login = async (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        // para facilitar na criação de label para exibir o erro
        const registration = String(data.registration)
        const password = String(data.password)
        if (!registration || !password) {
            alert('Preencha todos os campos')
            return;
        }
        try {
            await authenticate(registration, password);
            alert('Login feito com sucesso')
            navigate('/feed');
        } catch (erro) {
            console.log(erro)
            alert("Matricula ou senha incorretos")
        }
    }

    return (
        <div className="bg-form">
                <div>
                    <Logo/>
                    <h2>Entre agora mesmo!</h2>
                </div>
                <form onSubmit={Login}>
                    <label>
                        <p>Matricula:</p>
                        <input name="registration" type='text' placeholder="exemplo: 202010610800" required />
                    </label>
                    <label>
                        <p>Senha:</p>
                        <input name="password" type='password' placeholder="***********" required />
                    </label>
                    <label>
                        <button type="submit" className="bg-green">Logar</button>
                    </label>
                    
                </form>
                <Link to='/Cadastro'>Ainda não possui uma conta? Crie uma!</Link>
        </div>
    )
}

export default handleLogin