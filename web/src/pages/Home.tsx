import Logo from '../components/Layout/logo/Logo'
import Navbar from '../components/Layout/navbar'
import Rodape from '../components/Layout/Footer'
import Estudantes from '../Img/Students-pana1.svg'
import { useAuth } from '../hooks'
import NewOpt from '../components/estateHome/estateHome'


export function Home() {
    const logado = useAuth();

    const style = {
        maxWidth: '600px',
        minWidth: '320px',
        width: '80%'
    }

    return (
        <div className='bg-home home'> 
            <header className='bg-primary f-padding'>
                <Logo />
                <>
                {!logado.token && <Navbar />}
                {logado.token && <NewOpt />}
                </>
            </header>
            <main id='MainHomeContainer'>
                <div>
                    <p>Instituto Federal de Ciências e Técnologia</p>
                    <h3 id='Title-h3'>Seja muito bem - vindo!</h3>
                    <h2 id='TitleWeb'>Faça já o seu cadastro ou o seu login para acessar nosso site!</h2>
                </div>
                <img src={Estudantes} id='HomeIMG' style={style} />
                <h2 id='TitleMobile'>Faça já o seu cadastro ou o seu login para acessar nosso site!</h2>

            </main>
            <footer className='bg-green'>
                <Rodape />
            </footer>

        </div>
    )
}

export default Home;