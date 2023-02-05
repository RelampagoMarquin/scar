import { useEffect } from "react"
import api from "../../../services/api";
import Best from "../best/best";


interface AnswerProps {
    "id": number;
    "answer": string;
    "best": boolean;
    "avaliation": number;
    "user": { name: string, id: number };
    "userQuestionID": number;
    "logado": number | undefined;
}

function Answers(props: AnswerProps) {
    async function handleUp(){
        const id = props.id
        api.patch(`/answers/avaliationup/${id}`, {
          }).then(response => {
            alert('Avaliado com sucesso')
          }).catch(response => {
            alert('Erro ao cadastrar Avaliação')
          })
    }

    async function handleDown(){
        const id = props.id
        api.patch(`/answers/avaliationdown/${id}`, {
        }).then(response => {
          alert('Avaliado com sucesso')
        }).catch(response => {
          alert('Erro ao cadastrar Avaliação')
        })
    }

    async function handleBest(){
        const id = props.id
        api.patch(`/answers/best/${id}`, {
        }).then(response => {
          alert('Avaliado com sucesso')
        }).catch(response => {
          alert('Erro ao cadastrar Avaliação')
        })

    }

    return (

        <div className="background">
            <aside>
                <h3><button onClick={handleDown}>Down</button>{props.avaliation} <button onClick={handleUp}>UP</button></h3>

                {// redenriza o botão
                }
                {props.logado == props.userQuestionID ? <button onClick={handleBest}>melhor</button> : null}
                {// redenriza checa se o best é true e renderiza o nome
                }
                {props.best ? <p>SOU O MELHOR</p>: null }
            </aside>

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