import React, { Component, FormEvent, useEffect, useReducer, useState, useSyncExternalStore } from "react";
import '../Css/Forms.css';
import Logo from '../components/layout/Logo'
import axios from "axios";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom'

interface User {
    name: string;
    password: string;
    email: string;
    class: string;
    registration: string;
}

export function handleCadastro() {

    const [user, setuser] = useState<User>()

    async function Cadastro(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        if (!data.name) {
            return
        }
        try {
            console.log(data)
            axios.post('http://localhost:3030/users', {
                "name": data.name,
                "registration": data.registration,
                "email": data.email,
                "class": data.class,
                "password": data.password
            })
        } catch (error) {
            console.log(error)
            alert('Erro')
        }
    }

    return (
        <div>
            <main>
                <div id='container-header'>
                    <Logo />
                    <p id='P_cabecalho'>Faça seu Cadastro!</p>
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
                    <button type="submit">Cadastrar</button>

                </form>
                <Link to='/Login'>Já possui uma conta? Logue já!</Link>
            </main>
        </div>
    )
}

export default handleCadastro