import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom'
import Logo from '../components/Layout/Logo'
import Rodape from '../components/Layout/Footer'
import '../Css/Styles.css'
import Pesquisa from '../Img/searchicon.svg'
import Perfil from '../Img/perfil.svg'
import CampoPesquisa from '../components/Layout/NavbarSearch'


export function TelaInicial() {

    return (
        <div>
            <header id='InicioHeader'>
                <Logo />
                <div>
                    <div id='inicio'>
                        <input className='search' name="search" type='search' placeholder="Pesquise já!" />
                    </div>
                    <button className='button-seach'><img src={Pesquisa} id='botaopesquisa' /></button>
                </div>

            </header>
            <main id='MainInicioContainer'>
                <div className="caixaperguntas">

                    <textarea className='pergunta' name="pergunta" placeholder="Faça sua pergunta aqui" />

                    <div className='botoes'>
                        <button id='categorias'>Categorias</button>
                        <button id='enviar' type='submit'>Enviar</button>
                    </div>

                </div>
                <div className="pergunta">

                    <div className='box'>
                        <img src={Perfil} id="perfil"></img>
                        <h5>jurema</h5>
                        <button id='categorias'>Matematica</button>
                    </div>

                </div>
            </main>


        </div>
    )
}

export default TelaInicial;