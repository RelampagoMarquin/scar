import React, { Component, FormEvent, useEffect, useReducer, useState, useSyncExternalStore } from "react";

import './Form.css';

import axios from "axios";

interface User{
    password: string;
    email: string;
}


export function handleLogin() {

    async function Login() {

        useEffect(()=> {

            axios.get("http://localhost:3030/users")
            .then(()=>{
        
                console.log('Deu Certo!')
        
            })
        
            .catch (()=>{
        
                ('Não foi')
        
            })
        
            }, [])
        
    }
    return(
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
                    <input name="senha" type='text' placeholder="***********"/>
                </label>
                <button type="submit">Logar</button>   
            </form>
            <a>Ainda não possui uma conta? Crie uma!</a>
        </main>
    )
}



export default handleLogin