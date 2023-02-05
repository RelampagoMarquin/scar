import { useEffect } from "react"
import { useAuth } from "../../../hooks";
import api from "../../../services/api";
import './answer.css'


interface AnswerProps {
  id: number;
  answer: string;
  best: boolean;
  avaliation: number;
  user: { name: string, id: number };
  userQuestionID: number;
  logado: number | undefined;
  token: string | undefined;
}

function Answers(props: AnswerProps) {
  const token = props.token
  async function handleUp() {
    const id = props.id
    api.patch(`/answers/avaliationup/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      alert('Avaliado com sucesso')
      window.location.reload()
    }).catch(response => {
      alert('Erro ao cadastrar Avaliação')
    })
  }

  async function handleDown() {
    const id = props.id
    api.patch(`/answers/avaliationdown/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      alert('Avaliado com sucesso')
      window.location.reload()
    }).catch(response => {
      alert('Erro ao cadastrar Avaliação')
    })
  }

  async function handleBest() {
    const id = props.id
    api.patch(`/answers/best/${id}`,  {},{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      alert('Avaliado com sucesso')
      window.location.reload()
    }).catch(response => {
      alert('Erro ao cadastrar Avaliação')
    })

  }

  return (

    <div className="background back-ans">
      <div className="infield">
        <h3 className='up-down'>
          <button onClick={handleUp} className='option'>ᐱ</button>
          {props.avaliation}
          <button onClick={handleDown} className='option'>ᐯ</button>
        </h3>
        <div className="inside">
          <div className="header_answer">
            <span>{props.user.name}{props.best ? <span>👑</span> : null}</span>
            <span>{props.logado == props.userQuestionID ? <button onClick={handleBest}>Amei!</button> : null}</span>
          </div>
          <div className="answer">
            <p>{props.answer}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Answers