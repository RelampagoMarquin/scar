import React , { Component } from "react";
import './Form.css';

class FormLogin extends Component {

    constructor(props) {

        super(props)

        this.state = {

            email: '',
            password: ''

        }

    }
    render () {

        // const {email} = this.state;
        // const {senha} = this.state

        const handleSubmit = () =>{

            //e.preventDefault();

        };


        return(
            <main>
                <div>
                    <h1>SCAR</h1>
                    <p>Faça seu login</p>
                </div>
                <form onSubmit={handleSubmit}>
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
}

export default FormLogin