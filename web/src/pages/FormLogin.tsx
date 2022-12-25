import React, { Component, FormEvent, useContext, useEffect, useReducer, useState, useSyncExternalStore } from "react";
import { useNavigate } from 'react-router-dom';
import '../Css/Forms.css';
import axios from "axios";
import Logo from '../components/Layout/Logo'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'
import api from "../services/api";
import { useAuth } from "../hooks";


export function handleLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const { authenticate } = useAuth();

    const Login = async (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        // para facilitar na criação de label para exibir o erro
        const registration = String(data.registration)
        const password = String(data.password)
        console.log(registration)
        if (!registration || !password) {
            alert('Preencha todos os campos')
            return;
        }
        try {
            const a = await authenticate(registration, password);
            console.log(a)
            alert('Login feito com sucesso')
            //navigate('/feed');
        } catch (erro) {
            console.log(erro)
            alert("Matricula ou senha incorretos")
        }
    }
    //useEffect para salvar os dados 
    /* useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');

        if (storagedToken && storagedUser) {
            setuser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    }, []) */

    /* async function Login(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        const navigate = useNavigate();
        const { authenticate } = useAuth();
        // para facilitar na criação de label para exibir o erro
        const registration = data.registration
        const [error, setError] = useState('');
        if (!data.registration || !data.password) {
            setError('Preencha todos os campos');
            alert(error)
            return;
          }
          try {
            await authenticate(registration, data.password);
            alert('Login feito com sucesso')
            navigate('/home');
          } catch {
            setError('Matricula ou senha incorretos');
            alert(error)
          }
        ////////////////////////////////////////////////////////////////////
        /* if (!data.registration) {
            return
        }
        try {
            axios.post('http://localhost:3030/login', {

                "registration": data.registration,
                "password": data.password

            }).then(response => {
                console.log(response.data.Authorization)
                setuser(response.data.Authorization)
                //Para salvar os dados
                localStorage.setItem("@App:user", JSON.stringify(response.data.user))
                localStorage.setItem("@App:token", response.data.token)
                navigate('/home');
            }).catch(function (error) {
                if (error.response) {
                    alert('Matricula ou senha errada')
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
            alert('Erro')
        }; 
    } */

    return (
        <div>
            <main>
                <div>
                    <Logo />
                    <p>Faça seu login</p>
                </div>
                <form onSubmit={Login}>
                    <label>
                        <p>Matricula:</p>
                        <input className='campoformulario' name="registration" type='text' placeholder="exemplo: 202010610800" required />
                    </label>
                    <label>
                        <p>Senha:</p>
                        <input className='campoformulario' name="password" type='password' placeholder="***********" required />
                    </label>
                    <button type="submit" className="submitformbutton">Logar</button>
                </form>
                <Link to='/Cadastro'>Ainda não possui uma conta? Crie uma!</Link>
            </main>
        </div>
    )
}

export default handleLogin