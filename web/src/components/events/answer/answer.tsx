interface AnswerProps{
    "answer": string,
    "best": false,
    "avaliation": 0,
    "questionId": 0,
    "user": string
    "userId": 0
  }

function Answers(props: AnswerProps) {
    return (
        <div className="background">
            <div className="infield">
                <div className="header_answer">
                    <p>{props.user}</p>
                </div>
 
                <div className="answer">
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Answers