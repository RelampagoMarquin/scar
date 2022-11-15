import React, { Component, FormEvent, useEffect, useReducer, useState, useSyncExternalStore } from "react";

import './Form.css';

import axios from "axios";

interface User{

    password: string;
    email: string;

}

export function handleLogin() {

    const [user, setuser] = useState<User>()

    async function Login(event:FormEvent) {
        event.preventDefault()
        const formData = new FormData (event.target as HTMLFormElement) 
        const data = Object.fromEntries(formData)
        if (!data.name){
            return 
        }
        try {
            console.log(data)
            axios.post ('http://localhost:3030/users', {

                "email": data.email,
                "password": data.password

            })
        } catch (error) {
            console.log(error)
            alert('Erro')
        }
    }

    return (

        <main>
                <div>
                    <h1>SCAR</h1>
                    <p>Faça seu login</p>
                </div>
                <form onSubmit={Login}>
                    <label>
                        <p>Email:</p>
                        <input name="email" type='text' placeholder="email@escolar.ifrn.edu.br"/>
                    </label>
                    <label>
                        <p>Senha:</p>
                        <input name="password" type='text' placeholder="***********"/>
                    </label>
                    <button type="submit">Logar</button>   
                </form>
                <a>Ainda não possui uma conta? Crie uma!</a>
            </main>
    )
}

export default handleLogin