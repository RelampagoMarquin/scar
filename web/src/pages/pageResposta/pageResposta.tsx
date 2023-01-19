
import { useEffect, useState } from "react"
import Answers from "../../components/events/answer/answer"
import AnswerField from "../../components/Layout/answerField/answersField"
import api from "../../services/api"

interface Answer {
    id: number;
    user: string;
    answer: string;
    creatAt: Date;
}

export function RespostaCampo() {
    const [answers, setAnswers] = useState<Answer[]>([])

    useEffect(() => {
        api.get('/answers').then(response => {
            const data = response.data
            setAnswers(data);
        }).catch(error => {
            console.log(error);
        });
    }, [])

    return (
        <div>
            <AnswerField />
            <div>
                {answers.map(answer => {

                    return (
                        <Answers
                            key={answer.id}
                            user={answer.user}
                            answer={answer.answer} 
                            /* best={false} 
                            avaliation={0} 
                            questionId={0}    */                   
                     />
                    )
                })}
            </div>
        </div>

    )
}

export default RespostaCampo