import React , { Component } from "react";
import './FormLogin.css';

class FormLogin extends Component {

    constructor(props) {

        super(props)

        this.state = {

            email: '',
            senha: ''

        }

    }
    render () {

        // const {email} = this.state;
        // const {senha} = this.state

        const handleSubmit = () =>{

            //e.preventDefault();

        };


        return(
            <section>
                <h1>SCAR</h1>
                <form onSubmit={handleSubmit}>
                        <label>
                            <p>email:</p>
                            <input name="email" type='text' placeholder="email@escolar.ifrn.edu.br"/>
                        </label>
                        <label>
                            <p>senha:</p>
                            <input name="senha" type='text' placeholder="***********"/>
                        </label>
                    <button type="submit">Logar</button>   
                </form>
            </section>
        )
    }
}

export default FormLogin