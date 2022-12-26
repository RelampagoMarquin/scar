
import Logo from '../../components/Layout/Logo'
import '../../Css/Styles.css'
import '../feed/feed.css'
import Question from '../../components/events/question/question'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import QuestionField from '../../components/Layout/QuestionField'
import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom'

interface Question {
    id: number,
    question: string,
    resolved: boolean,
    user: User,
    questiontags: Questiontags,
}

interface User{
    name: string
}

interface type{
    name: string
}

interface tag{
    id: number
    name: string
    type: type
}

interface Questiontags{
    id: number
    questionid: number
    tag: tag
}



export function Feed() {
    const [questions, setQuestions] = useState<Question[]>([])
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/questions').then(response => {
            setQuestions(response.data)
        })
    }, [])

    function handleLogout(){
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
                <a onClick={handleLogout}>logout</a>
            </header>
            <main id='MainInicioContainer'>
            <QuestionField />
                <div>
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                user={question.user.name}
                                question={question.question}
                                //materia={question.questiontags.tag.type.name}
                                resolved={question.resolved}
                            />
                        )
                    })}                       
                </div>
            </main>
        </div>
    )
}

export default Feed;