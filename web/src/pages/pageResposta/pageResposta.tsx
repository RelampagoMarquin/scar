
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Answers from "../../components/events/answer/answer"
import AnswerField from "../../components/Layout/answerField/answersField"
import api from "../../services/api"
import { Question } from "../feed/Feed";

interface Answer {
    id: number;
    user: string;
    answer: string;
    best: boolean;
    avaliation: number
    creatAt: Date;
}

interface QuestionA extends Question{
    answer: Answer[] 
}

export function RespostaCampo() {
    const [answers, setAnswers] = useState<Answer[]>([])
    const [question, setQuestion] = useState<QuestionA>()
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
            <h1>QUESTION de id: {id}</h1>
            <p>{question?.question}</p>
            <AnswerField id={idt}/>
            <hr />
            <div>
                {question?.answer?.map(answer => {
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
                <hr />
            </div>
        </section>

    )
}

export default RespostaCampo