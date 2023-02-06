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