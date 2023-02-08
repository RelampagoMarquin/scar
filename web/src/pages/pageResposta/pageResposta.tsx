
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import QuestionViwer from "../../components/question_viwer/questionViwer";
import Answers from "../../components/events/answer"
import Question from "../../components/events/question";
import api from "../../services/api"
import Logo from "../../components/Layout/logo/Logo";
import { useAuth } from "../../hooks";

interface Answer {
    id: number;
    userId: number;
    user: { id: number, name: string };
    answer: string;
    best: boolean;
    avaliation: number
    creatAt: Date;
}

interface Question {
    Answer: Answer[];
    id: number;
    user: { id: number, name: string };
    userId: number;
    question: string;
    resolved: boolean;
    creatAt: Date;
    typeName: string;
}


export function RespostaCampo() {
    const [question, setQuestion] = useState<Question>()
    const { id } = useParams()
    const { logout } = useAuth();
    const navigate = useNavigate();
    const auth = useAuth()
    const token = auth.token
    const logado = auth.user?.id


    useEffect(() => {
        api.get(`/questions/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(response => {
            setQuestion(response.data)
        })
    }, [])

    function handleLogout() {
        logout()
        navigate('/login');
    }

    return (
        <section>
            <header className='bg-primary f-padding'>
                <Logo />
                <nav>
                    <ul>
                        <li><a onClick={handleLogout} id='logout'>Sair</a></li>
                    </ul>
                </nav>
            </header>
            <div id='info'> 
            <h2>Pergunta</h2>
                <QuestionViwer
                    id={question?.id}
                    question={question?.question}
                    creatAt={question?.creatAt}
                    user={question?.user}
                    resolved={question?.resolved}
                    logado={logado}
                    token={token}
                />
            </div>
        <h2>Respostas</h2>
            <div>
                {question?.Answer?.map(answer => {
                    return (
                        <Answers
                            key={answer.id}
                            user={answer.user}
                            answer={answer.answer}
                            best={answer.best}
                            avaliation={answer.avaliation}
                            userQuestionID={question.user.id}
                            logado={logado}
                            token={token}
                            id={answer.id}
                        />
                    )
                })}
            </div>
        </section>

    )
}

export default RespostaCampo