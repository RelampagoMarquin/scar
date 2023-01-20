
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Answers from "../../components/events/answer/answer"
import AnswerField from "../../components/Layout/answerField/answersField"
import api from "../../services/api"
import { QuestionProps } from "../../components/events/question/question";
import Questions from "../../components/events/question/question";

interface Answer {
    id: number;
    user: string;
    answer: string;
    best: boolean;
    avaliation: number
    creatAt: Date;
}

interface Question extends QuestionProps {
    answer: Answer[];
    user: string;
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
            <div id='campo-res'>
                <h1>QUESTION de id: {id}</h1>

                <p>{question?.question}</p>
            </div>
            <hr />
            <AnswerField id={idt} />

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

            </div>
        </section>

    )
}

export default RespostaCampo