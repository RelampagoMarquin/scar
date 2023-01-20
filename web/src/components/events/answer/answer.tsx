import { useEffect } from "react"
import Question from "../question/question"

interface AnswerProps{
    "answer": string;
    "best": boolean;
    "avaliation": number;
    "user": {name: string};
  }
 
function Answers(props: AnswerProps) {
    return (

        //<Question/>

        <div className="background">
            <div className="infield">
                <div className="header_answer">
                    <p>{props.user.name}</p>
                </div>
 
                <div className="answer">
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Answers