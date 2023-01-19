import React, { FormEvent, useState } from 'react';
import { useAuth } from '../../../hooks';
import api from '../../../services/api';

export function AnswerField() {
  const [userId, setUserId] = useState<number>()
  const auth = useAuth().user?.id

  async function handleAnswer(event: FormEvent) {
    const ansData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(ansData)

    if (!data.answer) {
      return
    }
    try {
      api.post('/answers', {
        "answer": data.question,
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
    <div className='background'>
      <form onSubmit={handleAnswer}>
        <label>
          <textarea className='campoResposta' name="answer" required />
          <button type="submit">Enviar</button>
        </label>
      </form>
    </div>
  );
}

export default AnswerField;