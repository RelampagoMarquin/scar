
import Logo from '../../components/Layout/Logo'
import '../../Css/Styles.css'
import '../feed/feed.css'
import Question from '../../components/events/question/question'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import QuestionField from '../../components/Layout/questionField/QuestionField'
import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom'

export interface Question{
    id: number;
    user: string;
    question: string;
    resolved: boolean;
    creatAt: Date;
    typeName: string;
}

export function Feed() {
    const [questions, setQuestions] = useState<Question[]>([])
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/questions').then(response => {
            const data = response.data 
            setQuestions(data);
        }).catch(error => {
            alert('ERRO AO CADADATRAR')
        });
    }, [])
    function handleLogout() {
        logout()
        navigate('/login');
    }
    return (
        <div id='containerFeed'>
            <header id='InicioHeader'>
                <Logo />
                {
                    //isso não faz pequisa ainda
                }
                <div>
                    <div id='inicio'>
                        <input className='search' name="search" type='search' placeholder="Pesquise já!" id='search' />
                    </div>
                    <button className='button-seach'><img id='botaopesquisa' /></button>
                </div>
                <a onClick={handleLogout} id='logout'>Sair</a>
            </header>
            <main id='MainInicioContainer'>
                <QuestionField />
                <div>

                    {questions.map(question => {

                        return ( 
                            <Question
                                key={question.id}
                                user={question.user}
                                question={question.question}
                                materia={question.typeName}
                                resolved={question.resolved}
                                id={question.id} 
                            />
                        )
                    })}
                </div>
            </main >
        </div >
    )
}

export default Feed;