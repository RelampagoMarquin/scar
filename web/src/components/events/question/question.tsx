import { Link } from "react-router-dom"
import "./question.css"

interface QuestionProps {
    question: string,
    resolved: boolean,
    user: string,
    materia: string,
    id: number,
}

function Question(props: QuestionProps) {
    return (
        <div className="background">
            <div className="infield">
                <div className="header_question">
                    <p>{props.user}</p>
                    <span id='tag'>{props.materia}
                    </span>
                </div>
                <div className="question">
                    <p>{props.question}</p>
                </div>
                <div className="footer_question">
                    <p>Ver mais...</p>
                    <Link to={`/question/${props.id}`}>Responder</Link>
                </div>
                
            </div> 
        </div>
    )
} 

export default Question