import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom'
import Logo from '../../components/Layout/Logo'
import Rodape from '../../components/Layout/Footer'
import '../../Css/Styles.css'
import '../feed/feed.css'
import Pesquisa from '../Img/searchicon.svg'
import Perfil from '../Img/perfil.svg'
import CampoPesquisa from '../../components/Layout/NavbarSearch'
import Question from '../../components/events/question/question'
import QuestionSender from '../../components/events/questionsender/questionsender'
export function Feed() {

    return (
        <div id='containerFeed'>
            <header id='InicioHeader'>
                <Logo />
                {/* <div>
                    <div id='inicio'>
                        <input className='search' name="search" type='search' placeholder="Pesquise já!" id='search'/>
                    </div>
                    <button className='button-seach'><img src={Pesquisa} id='botaopesquisa' /></button>
                </div> */}

            </header>
            <main id='MainInicioContainer'>
                <div>
                    <Question></Question>
                </div>
            </main>
        </div>
    )
}

export default Feed;