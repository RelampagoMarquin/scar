import { FormEvent } from "react";
import Logo from '../components/Layout/logo/Logo'
import {
    BrowserRouter as router,
    Link,
    useNavigate,
} from 'react-router-dom'
import api from "../services/api";

interface User {
    name: string;
    password: string;
    email: string;
    class: string;
    registration: string;
}

export function handleCadastro() {
    const navigate = useNavigate();
    async function Cadastro(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        if (!data.name) {
            return
        }
        try {
            api.post(`/users`, {
                "name": data.name,
                "registration": data.registration,
                "email": data.email,
                "class": data.class,
                "password": data.password
            })
                .then(function (response) {
                    console.log(response);
                    navigate('/Login');
                    alert('Cadastrado com sucesso')
                })
                .catch(function (error) {
                    if (error.response) {
                        // Request made and server responded
                        if (error.response.message == 409) {
                            alert('Usuario com email ou matricula já cadastrado')
                        } else {
                            alert('Erro ao cadastrar' + error.response.data + error.response.headers)
                        }
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }

                });
        } catch (error) {
            console.log(error)
        };
    }

    return (
        <div className="bg-form">
            <div>
                <Logo />
                <h2>Cadastre-se</h2>
            </div>

            <form onSubmit={Cadastro}>
                <label>
                    <p>Nome completo:</p>
                    <input name="name" type="text" placeholder="Nome completo" required />
                </label>
                <label>
                    <p>Email:</p>
                    <input name="email" type='email' placeholder="email@escolar.ifrn.edu.br" required />
                </label>
                <label>
                    <p>Senha:</p>
                    <input name="password" type='password' placeholder="***********" required />
                </label>
                <label>
                    <p>Curso:</p>
                    <input name="class" type="text" placeholder="Insira seu curso" required />
                </label>
                <label>
                    <p>Matricula:</p>
                    <input name="registration" type="text" placeholder="Número de Matrícula" required />
                </label>
                <label>
                    <button type="submit" className='bg-green' >Cadastrar</button>
                </label>
                
            </form>
            <Link to='/Login'>Já possui uma conta? Logue já!</Link>
        </div>
    )
}

export default handleCadastro