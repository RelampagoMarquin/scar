import React, { FormEvent, useState } from 'react';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';
import Question from '../../events/question/question';
import './styles.css'

interface idprops {
  id: number
}
export function AnswerField(props: idprops) {
  const [userId, setUserId] = useState<number>()
  const auth = useAuth().user?.id

  async function handleAnswer(event: FormEvent) {
    const ansData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(ansData)
    console.log(props.id)
    if (!data.answer) {
      return
    }
    try {
      api.post(`/answers/question/${props.id}`, {
        "answer": data.answer,
        "userId": auth,
      }).then(response => {
        alert('Resposta cadastrada')
      }).catch(response => {
        alert('Erro ao cadastrar Resposta')
      })
    } catch (error) {
      console.log(error)
      alert('erro ao cadastrar')
    }

  }

  return (

    <form onSubmit={handleAnswer}>
      <label id='answer-textlbl'>
        <textarea className='campoResposta' name="answer" id='lbl-textarea' required/>
        <button type="submit" id='inside-btn'>Enviar</button>
      </label>
    </form>
  );
}

export default AnswerField;