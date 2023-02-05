
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import QuestionViwer from "../../components/question_viwer";
import Answers from "../../components/events/answer/answer"
import Question from "../../components/events/question/question";
import AnswerField from "../../components/Layout/answerField/answersField"
import api from "../../services/api"
import '../../Css/Styles.css'
import Logo from "../../components/Layout/Logo";
import { useAuth } from "../../hooks";

interface Answer {
    id: number;
    userId: number;
    user: { id:number, name: string };
    answer: string;
    best: boolean;
    avaliation: number
    creatAt: Date;
}

interface Question {
    Answer: Answer[];
    id: number;
    user: { id:number, name: string };
    userId: number;
    question: string;
    resolved: boolean;
    creatAt: Date;
    typeName: string;
}


export function RespostaCampo() {
    const [question, setQuestion] = useState<Question>()
    const { id } = useParams()
    const idt = Number(id)
    const auth = useAuth()
    const logado = auth.user?.id


    useEffect(() => {
        api.get(`/questions/${id}`).then(response => {
            setQuestion(response.data)
        })
    }, [])

    return (
        <section>
            <header id='HomeHeader'>
                <Logo />
            </header>

            <QuestionViwer 
            id={question?.id}
            question={question?.question}
            creatAt={question?.creatAt}
            user={question?.user}
            resolved={question?.resolved}
            logado={logado}
            />
            
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
                            userQuestionID={question.user.id}
                            logado={logado}
                            id={answer.id}
                        />
                    )
                })}

            </div>
        </section>

    )
}

export default RespostaCampo