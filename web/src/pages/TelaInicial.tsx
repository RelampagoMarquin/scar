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


export function TelaInicial() {

    return (
        <div>
            <header id='InicioHeader'>
                <Logo />
                <label id='inicio'>
                    <input className='search' name="search" type='search' placeholder="Pesquise já!" />
                </label>
                <button className='button-seach'><img src={Pesquisa} id='botaopesquisa' /></button>
            </header>
            <main id='MainInicioContainer'>
                <div className="caixaperguntas">

                    <input className='pergunta' name="pergunta" type='pergunta' placeholder="Faça sua pergunta aqui" />

                    <div className='botoes'>
                    <button id = 'categorias'>Categorias</button>
                    <button id='enviar' type='submit'>Enviar</button>
                    </div>
                    
                </div>
                <div className="pergunta">

                    
                    
                </div>
            </main>


        </div>
    )
}

export default TelaInicial;