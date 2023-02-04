
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AnswerViwer from "../../components/question_viwer";
import Answers from "../../components/events/answer/answer"
import Question from "../../components/events/question/question";
import AnswerField from "../../components/Layout/answerField/answersField"
import api from "../../services/api"
import '../../Css/Styles.css'
import Logo from "../../components/Layout/Logo";
import { useAuth } from "../../hooks";
import best, { Best } from "../../components/events/best/best";

interface Answer {
    id: number;
    userId: number;
    user: string;
    answer: string;
    best: boolean;
    avaliation: number
    creatAt: Date;
}

interface Question {
    Answer: Answer[];
    id: number;
    user: { name: string };
    userId: number;
    question: string;
    resolved: boolean;
    creatAt: Date;
    typeName: string;
}


export function RespostaCampo() {
    const [answers, setAnswers] = useState<Answer[]>([])
    const [question, setQuestion] = useState<Question>()
    const { id } = useParams()
    const idt = Number(id)
    const auth = useAuth()
    const logado = auth.user?.id
    const criadorPergunta = question?.userId


    useEffect(() => {
        api.get(`/questions/${id}`).then(response => {
            console.log(response.data)
            setQuestion(response.data)
        })
    }, [])

    return (
        <section>
            <header id='HomeHeader'>
                <Logo />
            </header>
            {/* <div id='campo-res'>
                <h1>QUESTION de id: {id}</h1>
                <p>{question?.question}</p>
                <small>{question?.user.name}</small>
            </div> */}

            <AnswerViwer />
            <>  
            {/* Rendeziração condicional: Depois colocar isso pra aparecer na pergunta */}
            <h4>Teste</h4>
                {(logado == criadorPergunta) && <Best/>}
            </>
            <AnswerField id={idt} />
            
            <div>
                {question?.Answer?.map(answer => {

                    return (
                        <Answers
                            key={answer.id}
                            user={answer.user}
                            answer={answer.answer}
                            best={answer.best}
                            avaliation={answer.avaliation}
                        />
                    )
                })}

            </div>
        </section>

    )
}

export default RespostaCampo