
import Logo from '../../components/Layout/Logo'
import '../../Css/Styles.css'
import '../feed/feed.css'
import Question from '../../components/events/question/question'
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