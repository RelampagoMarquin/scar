import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom'
import Logo from '../components/Layout/Logo'
import Navbar from '../components/Navbar'
import Rodape from '../components/Layout/Footer'
import '../Css/Styles.css'
import Estudantes from '../Img/Students-pana1.svg'


export function Home() {

    return (
        <div>
            <header id='HomeHeader'>
                <Logo />
                <Navbar />
            </header>
            <main id='MainHomeContainer'>
                <div>
                    <p>Instituto Federal de Ciências e Técnologia</p>
                    <h3 id='Title-h3'>Seja muito bem - vindo!</h3>
                    <h2 id='TitleWeb'>Faça já o seu cadastro ou o seu login para acessar nosso site!</h2>
                </div>
                <img src={Estudantes} id='HomeIMG' />
                <h2 id='TitleMobile'>Faça já o seu cadastro ou o seu login para acessar nosso site!</h2>

            </main>
            <footer id="FooterContainer">
                <Rodape />
            </footer>

        </div>
    )
}

export default Home;