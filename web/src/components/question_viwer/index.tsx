import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Question from "../events/question/question";
import '../events/question/question.css'


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

export function AnswerViwer() {

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
        <div className="background">

            <div id='container_question_viwer ' className="infield">
                <p>Feito por: <span>{question?.user.name}</span></p>
                <div id='infield_question_viewer' className='question'>
                    <p>{question?.question}</p>
                </div>

            </div>

        </div>
    )
}
export default AnswerViwer