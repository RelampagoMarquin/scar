import Logo from '../components/Layout/logo/Logo'
import Question from '../components/events/question'
import { useEffect, useState } from 'react'
import api from '../services/api'
import QuestionField from '../components/Layout/questionField/QuestionField'
import { useAuth } from '../hooks'
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
    const auth = useAuth();
    const token = auth.token

    useEffect(() => {
        api.get('/questions', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(response => {
            const data = response.data 
            setQuestions(data);
        }).catch(error => {
            alert('ERRO AO ENCONTRAR RESPOSTAS')
        });
    }, [])
    function handleLogout() {
        logout()
        navigate('/login');
    }
    return (
        <div>
            <header className='bg-primary f-padding'>
                <Logo />
                {
                    //isso não faz pequisa ainda
                }
                {/* <div id='lbl-search'>
                    <div>
                        <input id='search' name="search" type='search' placeholder="Pesquise já!" />
                    </div>
                    <button className='bg-green'>Pesquisar</button>
                </div> */}
                <nav>
                    <ul>
                        <li><a onClick={handleLogout} id='logout'>Sair</a></li>
                    </ul>
                </nav>
            </header>
            <main id='MainInicioContainer'>
                <QuestionField />
                <h2 id='titleFeed'>Perguntas</h2>
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