
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Answers from "../../components/events/answer/answer"
import Question from "../../components/events/question/question";
import AnswerField from "../../components/Layout/answerField/answersField"
import Logo from "../../components/Layout/Logo";
import api from "../../services/api"

interface Answer {
    id: number;
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

    useEffect(() => {
        api.get(`/questions/${id}`).then(response => {
            console.log(response.data)
            setQuestion(response.data)
        })
    }, [])

    return (
        <section>
            <Logo />
            <div id='campo-res'>
                <h1>QUESTION de id: {id}</h1>

                <p>{question?.question}</p>
                <small>{question?.user.name}</small>
                
            </div>
            <hr />
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