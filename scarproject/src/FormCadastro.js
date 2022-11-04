import React, { Component } from "react";
import './FormCadastro.css';

class FormCadastro extends Component {

    constructor(props) {

        super(props)

        this.state = {

            nome_completo: '',
            email: '',
            senha: ''

        }

    }
    render() {

        // const {email} = this.state;
        // const {senha} = this.state

        const handleSubmit = () => {

            //e.preventDefault();

        };


        return (
            <main>
                <div><h1>SCAR</h1>
                    <p>Faça seu Cadastro!</p>
                    <h2>Cadastre-se</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Nome completo:</p>
                        <input name="nome_completo" type="text" placeholder="Nome completo" />
                    </label>
                    <label>
                        <p>Email:</p>
                        <input name="email" type='text' placeholder="email@escolar.ifrn.edu.br" />
                    </label>
                    <label>
                        <p>Senha:</p>
                        <input name="senha" type='text' placeholder="***********" />
                    </label>
                    <button type="submit">Cadastrar</button>

                </form>
                <a>Já possui uma conta? Logue já!</a>
            </main>
        )
    }
}

export default FormCadastro