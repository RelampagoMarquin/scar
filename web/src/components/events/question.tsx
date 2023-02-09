import { Link } from "react-router-dom"

interface QuestionProps {
    question: string,
    resolved: boolean,
    user: string,
    materia: string,
    id: number,
} 

function Question(props: QuestionProps) {
    return (
        <div className="bg-primary f-padding">
            <div className="bg-secondary foreground f-padding">
                <div>
                   <div className="question-header">
                    <p className="userName"><span>👤</span>{props.user}</p>
                    <span id='tag' className="materiaName">{props.materia}</span>
                </div>
                <div className="bg-terciary text-question infield f-padding">
                    <p>{props.question}</p>
                </div> 
                </div>
                <div className="underQuestion">
                    <span>Ver Mais...</span><span><Link to={`/question/${props.id}`}  className="bg-green">Responder</Link></span>
                </div>
                
            </div> 
        </div>
    )
} 

export default Question