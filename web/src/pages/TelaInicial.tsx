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
                        <button id='categorias'><span>Categorias</span></button>
                        <button id='enviar' type='submit'><span>Enviar</span></button>
                    </div>

                </div>
                <div className="pergunta">



                </div>
            </main>


        </div>
    )
}

export default TelaInicial;