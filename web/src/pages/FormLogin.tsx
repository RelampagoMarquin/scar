import React, { Component, FormEvent, useContext, useEffect, useReducer, useState, useSyncExternalStore } from "react";
import '../Css/Forms.css';
import axios from "axios";
import Logo from '../components/Layout/Logo'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'

interface User {

    Authorization: string;
    password: string;
    registration: string;

}

export function handleLogin() {

    const [user, setuser] = useState<User>()
    //Para retornar dados da API
    const api = axios.create({
        baseURL: 'http://localhost:3030',
    })
    //useEffect para salvar os dados 
    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');

        if (storagedToken && storagedUser) {
            setuser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    }, [])

    async function Login(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        
        const response = await api.post('/login', {
            registratin: '2222',
            password: '123',
        });
        console.log(response)
  

        setuser(response.data.user);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`

        
        ////////////////////////////////////////////////////////////////////
        if (!data.registration) {
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
            })
        } catch (error) {
            console.log(error)
            alert('Erro')
        };
    }

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
                        <input  className='campoformulario' name="registration" type='text' placeholder="exemplo: 202010610800" required/>
                    </label>
                    <label>
                        <p>Senha:</p>
                        <input className='campoformulario' name="password" type='password' placeholder="***********" required/>
                    </label>
                    <button type="submit" className="submitformbutton">Logar</button>
                </form>
                <Link to='/Cadastro'>Ainda não possui uma conta? Crie uma!</Link>
            </main>
        </div>
    )
}

export default handleLogin